import { Dimensions, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { getNowPlayingMoviesList, getPopularMoviesList, getUpcomingMoviesList } from '../../api/fetchAPi';
import {styles} from './style'
import InputHeader from '../../components/InputHeader';

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




  return (
    <ScrollView
        style={styles.container}
        bounces={false}
        contentContainerStyle={styles.scrollViewContainer}>
        <StatusBar hidden />
        <View style={styles.InputHeaderContainer}>
          <InputHeader searchFunction={searchHandler} />
        </View>
        
    </ScrollView>
  )
}

export default HomeScreen
