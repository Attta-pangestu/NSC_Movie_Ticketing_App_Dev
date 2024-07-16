import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { SPACING } from '../../theme/theme';

interface CastCardProps {
  shouldMarginatedAtEnd: boolean;
  isFirst: boolean;
  isLast: boolean;
  cardWidth: number;
  imagePath: string;
  title: string;
  subtitle: string;
  onPress: () => void;
}

const ActorCastCard: React.FC<CastCardProps> = ({
  shouldMarginatedAtEnd,
  isFirst,
  isLast,
  cardWidth,
  imagePath,
  title,
  subtitle,
  onPress, // Tambahkan properti ini
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.container,
          shouldMarginatedAtEnd
            ? isFirst
              ? { marginLeft: SPACING.space_24 }
              : isLast
              ? { marginRight: SPACING.space_24 }
              : {}
            : {},
          { maxWidth: cardWidth },
        ]}>
        <Image
          source={{ uri: imagePath }}
          style={[styles.cardImage, { width: cardWidth }]}
        />
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.subtitle} numberOfLines={1}>
          {subtitle}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ActorCastCard;
