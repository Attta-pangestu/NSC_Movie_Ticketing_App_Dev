import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from './style';
import {baseImagePath} from '../../api/enpoint';

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

interface FavoritesScreenProps {
  navigation: any;
}

const FavoritesScreen: React.FC<FavoritesScreenProps> = ({navigation}) => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const likes = await AsyncStorage.getItem('likes');
        if (likes) {
          setFavorites(JSON.parse(likes));
        }
      } catch (error) {
        console.error(error);
      }
    };

    const focusListener = navigation.addListener('focus', () => {
      loadFavorites();
    });

    loadFavorites();

    return () => {
      navigation.removeListener('focus', focusListener);
    };
  }, [navigation]);

  const removeFavorite = async (movieId: number) => {
    try {
      const updatedFavorites = favorites.filter(
        (favorite) => favorite.id !== movieId,
      );
      setFavorites(updatedFavorites);
      await AsyncStorage.setItem('likes', JSON.stringify(updatedFavorites));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Movie Disukai</Text>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.push('MovieDetails', {movieid: item.id})}>
            <View style={styles.bookmarkItem} key={item.id}>
              <Image
                source={{uri: baseImagePath('w342', item.poster_path)}}
                style={styles.posterImage}
              />
              <View style={styles.bookmarkDetails}>
                <Text style={styles.movieTitle}>{item.original_title}</Text>
                <Text style={styles.movieDuration}>
                  Duration: {Math.floor(item.runtime / 60)}h {item.runtime % 60}
                  m
                </Text>
                <Text style={styles.movieGenres}>
                  Genres: {item.genres.map((genre) => genre.name).join(', ')}
                </Text>
                <TouchableOpacity onPress={() => removeFavorite(item.id)}>
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
