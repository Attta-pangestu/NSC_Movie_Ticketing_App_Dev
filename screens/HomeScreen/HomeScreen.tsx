import { ActivityIndicator, Dimensions, FlatList, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { getNowPlayingMoviesList, getPopularMoviesList, getUpcomingMoviesList } from '../../api/fetchAPi';
import {styles} from './style'
import InputHeader from '../../components/InputHeader';
import CategoryHeader from '../../components/CategoryHeader/Index';
import MovieCard from '../../components/MovieCard';
import { SPACING } from '../../theme/theme';
import { baseImagePath } from '../../api/enpoint';
import SubMovieCard from '../../components/SubMovieCard';

const {width, height} = Dimensions.get('window');


const HomeScreen = ({navigation} : any) => {
    const [nowPlayingMoviesList, setNowPlayingMoviesList] =
    useState<any>(undefined);
  const [popularMoviesList, setPopularMoviesList] = useState<any>(undefined);
  const [upcomingMoviesList, setUpcomingMoviesList] = useState<any>(undefined);

  useEffect(() => {
    (async () => {
      let tempNowPlaying = await getNowPlayingMoviesList();
      setNowPlayingMoviesList([
        ...tempNowPlaying.results,
      ]);

      let tempPopular = await getPopularMoviesList();
      setPopularMoviesList(tempPopular.results);

      let tempUpcoming = await getUpcomingMoviesList();
      setUpcomingMoviesList(tempUpcoming.results);
    
    })();
  }, []);

  const searchHandler = () => {
    navigation.navigate('Search');
  };


  if (
    nowPlayingMoviesList == undefined &&
    nowPlayingMoviesList == null &&
    popularMoviesList == undefined &&
    popularMoviesList == null &&
    upcomingMoviesList == undefined &&
    upcomingMoviesList == null
  ) {
    return (
      <ScrollView
          style={styles.container}
          bounces={false}
          contentContainerStyle={styles.scrollViewContainer}>
          <StatusBar hidden />
          <View style={styles.InputHeaderContainer}>
            <InputHeader searchHandler={searchHandler} />
          </View>
          <View style={styles.loadingContainer}>
            <ActivityIndicator size={'large'} color={'orange'} />
          </View>
          
      </ScrollView>
    )

  }

  return (
    <ScrollView style={styles.container} bounces={false}>
      <StatusBar hidden />
      <View style={styles.InputHeaderContainer}>
        <InputHeader searchHandler={searchHandler} />
      </View>
      <CategoryHeader title={'Now Playing'} />

      <FlatList
        data={nowPlayingMoviesList}
        keyExtractor={(item: any) => item.id}
        bounces={false}
        snapToInterval={width * 0.7 + SPACING.space_36}
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate={0}
        contentContainerStyle={styles.containerGap36}
        renderItem={({item, index}) => {
          if (!item.original_title) {
            return (
              <View
                style={{
                  width: (width - (width * 0.7 + SPACING.space_36 * 2)) / 2,
                }}></View>
            );
          }
          return (
            <MovieCard
              shouldMarginatedAround={true}
              cardFunction={() => {
                navigation.push('MovieDetails', {movieid: item.id});
              }}
              cardWidth={width * 0.7}
              isFirst={index == 0 ? true : false}
              isLast={index == upcomingMoviesList?.length - 1 ? true : false}
              title={item.original_title}
              imagePath={baseImagePath('w780', item.poster_path)}
              genre={item.genre_ids.slice(1, 4)}
              vote_average={item.vote_average}
              vote_count={item.vote_count}
            />
          );
        }}
      />
      <CategoryHeader title={'Popular'} />
      <FlatList
        data={popularMoviesList}
        keyExtractor={(item: any) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={styles.containerGap36}
        renderItem={({item, index}) => (
          <SubMovieCard
            shouldMarginatedAtEnd={true}
            cardFunction={() => {
              navigation.push('MovieDetails', {movieid: item.id});
            }}
            cardWidth={width / 3}
            isFirst={index == 0 ? true : false}
            isLast={index == upcomingMoviesList?.length - 1 ? true : false}
            title={item.original_title}
            imagePath={baseImagePath('w342', item.poster_path)}
          />
        )}
      />
       <CategoryHeader title={'Upcoming'} />
      <FlatList
        data={upcomingMoviesList}
        keyExtractor={(item: any) => item.id}
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.containerGap36}
        renderItem={({item, index}) => (
          <SubMovieCard
            shouldMarginatedAtEnd={true}
            cardFunction={() => {
              navigation.push('MovieDetails', {movieid: item.id});
            }}
            cardWidth={width / 3}
            isFirst={index == 0 ? true : false}
            isLast={index == upcomingMoviesList?.length - 1 ? true : false}
            title={item.original_title}
            imagePath={baseImagePath('w342', item.poster_path)}
          />
        )}
      />
    </ScrollView>
  )

}

export default HomeScreen
