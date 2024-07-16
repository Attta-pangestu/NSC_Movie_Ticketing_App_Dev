import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { COLORS, SPACING } from '../../theme/theme';
import MovieListItem from '../../components/MovieListItem';
import AppHeader from '../../components/AppHeader';
import { getMoviesByActor } from '../../api/fetchAPi';

const MovieListScreen = ({ navigation, route }: any) => {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const { actorId, title } = route.params; 

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getMoviesByActor(actorId); // Gunakan fungsi fetching
        setMovies(response.results);
        
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [actorId]);

  const handleMoviePress = (movieId: number) => {
    navigation.push('MovieDetails', { movieid: movieId });
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.Orange} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <AppHeader header={title || 'Movies'} action={() => navigation.goBack()} />
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MovieListItem movie={item} onPress={() => handleMoviePress(item.id)} />
        )}
        contentContainerStyle={styles.listContentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Black,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContentContainer: {
    padding: SPACING.space_16,
  },
});

export default MovieListScreen;
