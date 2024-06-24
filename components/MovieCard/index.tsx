import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { styles } from './style';
import { FONTSIZE, SPACING } from '../../theme/theme';
import * as  IconsSolid from 'react-native-heroicons/solid'



const genres: any = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentry',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Music',
  9648: 'Mystry',
  10749: 'Romance',
  878: 'Science Fiction',
  10770: 'TV Movie',
  53: 'Thriller',
  10752: 'War',
  37: 'Western',
};

type MovieCardProps = {
    cardFunction: () => void;
    shouldMarginatedAtEnd?: boolean;
    isFirst?: boolean;
    isLast?: boolean;
    shouldMarginatedAround?: boolean;
    cardWidth: number;
    imagePath: string;
    vote_average: number;
    vote_count: number;
    title: string;
    genre: number[];
  };

const MovieCard = ({ cardFunction, shouldMarginatedAtEnd, isFirst, isLast, shouldMarginatedAround, cardWidth, imagePath, vote_average, vote_count, title, genre } : MovieCardProps) => {
  return (
    <TouchableOpacity onPress={() => cardFunction()}>
      <View
        style={[
          styles.container,
          shouldMarginatedAtEnd
            ? isFirst
              ? {marginLeft: SPACING.space_36}
              : isLast
              ? {marginRight: SPACING.space_36}
              : {}
            : {},
          shouldMarginatedAround ? {margin: SPACING.space_12} : {},
          {maxWidth: cardWidth},
        ]}>
        <Image
          style={[styles.cardImage, {width: cardWidth}]}
          source={{uri: imagePath}}
        />

        <View>
          <View style={styles.rateContainer}>
            <IconsSolid.StarIcon  size={FONTSIZE.size_20} color={'orange'} />
            <Text style={styles.voteText}>
              {vote_average} ({vote_count})
            </Text>
          </View>

          <Text numberOfLines={1} style={styles.textTitle}>
            {title}
          </Text>

          <View style={styles.genreContainer}>
            {genre.map((item: any) => {
              return (
                <View key={item} style={styles.genreBox}>
                  <Text style={styles.genreText}>{genres[item]}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};



export default MovieCard;
