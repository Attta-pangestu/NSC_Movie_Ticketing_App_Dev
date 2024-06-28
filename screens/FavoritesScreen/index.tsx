import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import { db, auth } from '../../api/firebase';
import { styles } from './style';
import { baseImagePath } from '../../api/enpoint';

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

interface FavoritesScreenProps {
  navigation: any;
}

const FavoritesScreen: React.FC<FavoritesScreenProps> = ({ navigation }) => {
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const currentUser = auth.currentUser;

  useEffect(() => {
    if (currentUser) {
      const loadFavorites = async () => {
        try {
          const userLikesRef = db.collection('users').doc(currentUser.uid);
          const snapshot = await userLikesRef.collection('likes').get();
          const favoriteList: Movie[] = [];
          snapshot.forEach((doc) => {
            const data = doc.data();
            const favorite: Movie = {
              id: doc.id,
              original_title: data.original_title,
              poster_path: data.poster_path,
              runtime: data.runtime,
              genres: data.genres,
            };
            favoriteList.push(favorite);
          });
          setFavorites(favoriteList);
        } catch (error) {
          console.error('Error loading favorites:', error);
          Alert.alert('Error', 'Failed to load favorites. Please try again later.');
        }
      };


      const unsubscribe = navigation.addListener('focus', () => {
        loadFavorites();
      });

      loadFavorites();

      return () => {
        unsubscribe();
      };
    }
  }, [navigation, currentUser]);

  const removeFavorite = async (movieId: number) => {
    try {
      if (!currentUser) {
        throw new Error('User not authenticated');
      }

      const userLikesRef = db.collection('likes').doc(currentUser.uid);
      const userLikesDoc = await userLikesRef.get();
      if (userLikesDoc.exists) {
        const updatedFavorites = userLikesDoc.data()?.movies.filter((movie: Movie) => movie.id !== movieId);
        await userLikesRef.set({ movies: updatedFavorites }, { merge: true });
        setFavorites(updatedFavorites);
      }
    } catch (error) {
      console.error('Error removing favorite:', error);
      Alert.alert('Error', 'Failed to remove favorite. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Favorite Movies</Text>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.push('MovieDetails', { movieid: item.id })}
          >
            <View style={styles.bookmarkItem} key={item.id}>
              <Image
                source={{ uri: baseImagePath('w342', item.poster_path) }}
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
                <TouchableOpacity onPress={() => removeFavorite(item.id as number)}>
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

export default FavoritesScreen;
