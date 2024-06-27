import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './style';

interface Genre {
  id: number;
  name: string;
}

interface Movie {
  id: number;
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

  useEffect(() => {
    const loadBookmarks = async () => {
      try {
        const bookmarks = await AsyncStorage.getItem('bookmarks');
        if (bookmarks) {
          setBookmarks(JSON.parse(bookmarks));
        }
      } catch (error) {
        console.error(error);
      }
    };

    const focusListener = navigation.addListener('focus', () => {
      loadBookmarks();
    });

    loadBookmarks();

    return () => {
      navigation.removeListener('focus', focusListener);
    };
  }, [navigation]);

  const removeBookmark = async (movieId: number) => {
    try {
      const updatedBookmarks = bookmarks.filter((bookmark) => bookmark.id !== movieId);
      setBookmarks(updatedBookmarks);
      await AsyncStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Watchlist</Text>
      <FlatList
        data={bookmarks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.bookmarkItem} key={item.id}>
            <Image source={{ uri: item.poster_path }} style={styles.posterImage} />
            <View style={styles.bookmarkDetails}>
              <Text style={styles.movieTitle}>{item.original_title}</Text>
              <Text style={styles.movieDuration}>Duration: {Math.floor(item.runtime / 60)}h {item.runtime % 60}m</Text>
              <Text style={styles.movieGenres}>
                Genres: {item.genres.map((genre) => genre.name).join(', ')}
              </Text>
              <TouchableOpacity onPress={() => removeBookmark(item.id)}>
                <Text style={styles.removeText}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default BookmarkScreen;
