import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import { db, auth } from '../../api/firebase';
import { styles } from './style';

interface Genre {
  id: number | string;
  name: string;
}

interface Movie {
  id: number | string;
  original_title: string;
  poster_path: string;
  runtime: number;
  genres: Genre[];
}

interface BookmarkScreenProps {
  navigation: any;
}

const BookmarkScreen: React.FC<BookmarkScreenProps> = ({ navigation }) => {
  const [bookmarks, setBookmarks] = useState<Movie[]>([]);
  const currentUser = auth.currentUser;

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        if (currentUser) {
          const userRef = db.collection('users').doc(currentUser.uid);
          const snapshot = await userRef.collection('bookmarks').get();
          const bookmarkList: Movie[] = [];
          snapshot.forEach((doc) => {
            const data = doc.data();
            const bookmark: Movie = {
              id: doc.id,
              original_title: data.original_title,
              poster_path: data.poster_path,
              runtime: data.runtime,
              genres: data.genres,
            };
            bookmarkList.push(bookmark);
          });
          setBookmarks(bookmarkList);
        }
      } catch (error) {
        console.error('Error fetching bookmarks:', error);
        Alert.alert('Error', 'Failed to fetch bookmarks. Please try again later.');
      }
    };

    const unsubscribe = db.collection('users').doc(currentUser!.uid)
      .collection('bookmarks')
      .onSnapshot(() => {
        fetchBookmarks();
      });

    fetchBookmarks();

    return () => unsubscribe();
  }, [currentUser]);

  const removeBookmark = async (movieId: number) => {
    try {
      if (!currentUser) {
        return Alert.alert('User not authenticated', 'Please login to perform this action.');
      }

      await db.collection('users').doc(currentUser.uid)
        .collection('bookmarks')
        .doc(movieId.toString())
        .delete();
    } catch (error) {
      console.error('Error removing bookmark:', error);
      Alert.alert('Error', 'Failed to remove bookmark. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Watchlist</Text>
      <FlatList
        data={bookmarks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.push('MovieDetails', { movieid: item.id })}
          >
            <View style={styles.bookmarkItem} key={item.id}>
              <Image
                source={{ uri: item.poster_path }}
                style={styles.posterImage}
              />
              <View style={styles.bookmarkDetails}>
                <Text style={styles.movieTitle}>{item.original_title}</Text>
                <Text style={styles.movieDuration}>
                  Duration: {Math.floor(item.runtime / 60)}h {item.runtime % 60}m
                </Text>
                <Text style={styles.movieGenres}>
                  Genres: {item.genres.map((genre) => genre.name).join(', ')}
                </Text>
                <TouchableOpacity onPress={() => removeBookmark(item.id as number)}>
                  <Text style={styles.removeText}>Remove</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default BookmarkScreen;
