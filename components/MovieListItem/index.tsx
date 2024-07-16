import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { baseImagePath, genreMapping } from '../../api/enpoint';
import * as IconsSolid from 'react-native-heroicons/solid';
import { COLORS, FONTSIZE, SPACING } from '../../theme/theme';

type MovieListItemProps = {
  movie: any;
  onPress: () => void;
};

const mapGenreIdsToNames = (genreIds: number[]): string[] => {
  return genreIds.map((id : any) => genreMapping[id] || "Unknown");
};

const MovieListItem: React.FC<MovieListItemProps> = ({ movie, onPress }) => {
  const genres = mapGenreIdsToNames(movie.genre_ids);

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <IconsSolid.StarIcon
          key={i}
          size={FONTSIZE.size_14}
          color={i <= rating ? COLORS.Orange : 'gray'}
        />
      );
    }
    return stars;
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={{ uri: baseImagePath('w342', movie.poster_path) }}
        style={styles.poster}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{movie.title} ({new Date(movie.release_date).getFullYear()})</Text>
        <Text style={styles.genres}>
          {genres.join(', ')}
        </Text>
        <View style={styles.ratingContainer}>
          {renderStars(movie.vote_average / 2)}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: SPACING.space_16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.WhiteRGBA75,
  },
  poster: {
    width: 80,
    height: 120,
    borderRadius: 8,
    marginRight: SPACING.space_16,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: FONTSIZE.size_18,
    fontWeight: 'bold',
    color: COLORS.White,
  },
  genres: {
    fontSize: FONTSIZE.size_14,
    color: COLORS.WhiteRGBA75,
    marginBottom: SPACING.space_8,
  },
  ratingContainer: {
    flexDirection: 'row',
  },
});

export default MovieListItem;
