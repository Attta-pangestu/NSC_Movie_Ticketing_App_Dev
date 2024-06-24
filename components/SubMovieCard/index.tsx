import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { styles } from './style';
import { SPACING } from '../../theme/theme';

type SubMovieCardProps = {
  cardFunction: () => void;
  shouldMarginatedAtEnd?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
  shouldMarginatedAround?: boolean;
  cardWidth: number;
  imagePath: string;
  title: string;
};

const SubMovieCard: React.FC<SubMovieCardProps> = ({
  cardFunction,
  shouldMarginatedAtEnd,
  isFirst,
  isLast,
  shouldMarginatedAround,
  cardWidth,
  imagePath,
  title,
}) => {
  return (
    <TouchableOpacity onPress={() => cardFunction()}>
      <View
        style={[
          styles.container,
          shouldMarginatedAtEnd
            ? isFirst
              ? { marginLeft: SPACING.space_36 }
              : isLast
              ? { marginRight: SPACING.space_36 }
              : {}
            : {},
          shouldMarginatedAround ? { margin: SPACING.space_12 } : {},
          { maxWidth: cardWidth },
        ]}
      >
        <Image
          style={[styles.cardImage, { width: cardWidth }]}
          source={{ uri: imagePath }}
        />
        <Text numberOfLines={1} style={styles.textTitle}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SubMovieCard;