import React, {useEffect, useState, useRef} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ScrollView,
  StatusBar,
  View,
  Image,
  ViewToken,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  getNowPlayingMoviesList,
  getPopularMoviesList,
  getUpcomingMoviesList,
} from '../../api/fetchAPi';
import {styles} from './style';
import InputHeader from '../../components/InputHeader';
import CategoryHeader from '../../components/CategoryHeader/Index';
import MovieCard from '../../components/MovieCard';
import {SPACING} from '../../theme/theme';
import {baseImagePath} from '../../api/enpoint';
import SubMovieCard from '../../components/SubMovieCard';

const {width, height} = Dimensions.get('window');

interface Movie {
  id: number;
  original_title: string;
  poster_path: string;
  genre_ids: number[];
  vote_average: number;
  vote_count: number;
}

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const [nowPlayingMoviesList, setNowPlayingMoviesList] = useState<Movie[]>([]);
  const [popularMoviesList, setPopularMoviesList] = useState<Movie[]>([]);
  const [upcomingMoviesList, setUpcomingMoviesList] = useState<Movie[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    (async () => {
      const tempNowPlaying = await getNowPlayingMoviesList();
      setNowPlayingMoviesList(tempNowPlaying.results);

      const tempPopular = await getPopularMoviesList();
      setPopularMoviesList(tempPopular.results);

      const tempUpcoming = await getUpcomingMoviesList();
      setUpcomingMoviesList(tempUpcoming.results);
    })();
  }, []);

  const onViewRef = useRef((viewableItems: {changed: ViewToken[]}) => {
    if (viewableItems.changed.length > 0) {
      setCurrentIndex(viewableItems.changed[0].index ?? 0);
    }
  });
  const viewConfigRef = useRef({viewAreaCoveragePercentThreshold: 50});

  const searchHandler = () => {
    navigation.navigate('Search');
  };

  if (
    nowPlayingMoviesList.length === 0 &&
    popularMoviesList.length === 0 &&
    upcomingMoviesList.length === 0
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
    );
  }

  return (
    <ScrollView style={styles.container} bounces={false}>
      <StatusBar hidden />
      <View style={styles.InputHeaderContainer}>
        <InputHeader searchHandler={searchHandler} />
      </View>
      <FlatList
        data={popularMoviesList.slice(0, 5)}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        renderItem={({item}) => (
          <Image
            source={{uri: baseImagePath('w780', item.poster_path)}}
            style={styles.bannerImage}
          />
        )}
      />
      <View style={styles.pagination}>
        {popularMoviesList.slice(0, 5).map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              currentIndex === index && styles.paginationDotActive,
            ]}
          />
        ))}
      </View>
      <CategoryHeader title={'Now Playing'} />
      <FlatList
        data={nowPlayingMoviesList}
        keyExtractor={(item) => item.id.toString()}
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
                }}
              />
            );
          }
          return (
            <MovieCard
              shouldMarginatedAround={true}
              cardFunction={() => {
                navigation.push('MovieDetails', {movieid: item.id});
              }}
              cardWidth={width * 0.7}
              isFirst={index === 0}
              isLast={index === nowPlayingMoviesList.length - 1}
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
        keyExtractor={(item) => item.id.toString()}
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
            isFirst={index === 0}
            isLast={index === popularMoviesList.length - 1}
            title={item.original_title}
            imagePath={baseImagePath('w342', item.poster_path)}
          />
        )}
      />
      <CategoryHeader title={'Upcoming'} />
      <FlatList
        data={upcomingMoviesList}
        keyExtractor={(item) => item.id.toString()}
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
            isFirst={index === 0}
            isLast={index === upcomingMoviesList.length - 1}
            title={item.original_title}
            imagePath={baseImagePath('w342', item.poster_path)}
          />
        )}
      />
    </ScrollView>
  );
};

export default HomeScreen;
