import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  FlatList,
} from 'react-native';
import {styles} from './style';
import {baseImagePath, searchMovies} from '../../api/enpoint';
import InputHeader from '../../components/InputHeader';
import SubMovieCard from '../../components/SubMovieCard';
import {SPACING} from '../../theme/theme';

const {width} = Dimensions.get('screen');

const SearchScreen = ({navigation, route}: any) => {
  const [searchList, setSearchList] = useState([]);
  const {query} = route.params;

  useEffect(() => {
    if (query) {
      searchHandler(query);
    }
  }, [query]);

  const searchHandler = async (name: string) => {
    try {
      let response = await fetch(searchMovies(name));
      let json = await response.json();
      setSearchList(json.results);
    } catch (error) {
      console.error('Something went wrong in searchMoviesFunction ', error);
    }
  };

  return (
    <View style={[styles.container, {width: width}]}>
      <StatusBar hidden />

      <View style={{width: '100%', height: '100%'}}>
        <InputHeader searchHandler={searchHandler} />
        <FlatList
          data={searchList}
          keyExtractor={(item: any) => item.id.toString()}
          bounces={false}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.centerContainer}
          renderItem={({item, index}) => (
            <SubMovieCard
              shouldMarginatedAtEnd={false}
              shouldMarginatedAround={true}
              cardFunction={() => {
                navigation.push('MovieDetails', {movieid: item.id});
              }}
              cardWidth={width / 2 - SPACING.space_12 * 2}
              title={item.original_title}
              imagePath={baseImagePath('w342', item.poster_path)}
            />
          )}
        />
      </View>
    </View>
  );
};

export default SearchScreen;
