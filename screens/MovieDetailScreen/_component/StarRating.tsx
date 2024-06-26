import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import * as IconsSolid from 'react-native-heroicons/solid';
import { COLORS, FONTSIZE } from '../../../theme/theme';

type StarRatingProps = {
  rating: number;
  setRating: (rating: number) => void;
};

const StarRating: React.FC<StarRatingProps> = ({ rating, setRating }) => {
  const stars = [1, 2, 3, 4, 5];
  return (
    <View style={styles.starContainer}>
      {stars.map((star) => (
        <TouchableOpacity key={star} onPress={() => setRating(star)}>
          <IconsSolid.StarIcon
            size={FONTSIZE.size_20}
            color={star <= rating ? COLORS.Yellow : COLORS.WhiteRGBA50}
            fill={star <= rating ? COLORS.Yellow : undefined}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  starContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default StarRating;
