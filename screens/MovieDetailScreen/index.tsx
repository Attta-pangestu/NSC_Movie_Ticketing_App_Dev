import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import {
  getMovieCastDetails,
  getMovieDetails,
  getMovieTrailer,
} from '../../api/fetchAPi';
import { styles } from './style';
import AppHeader from '../../components/AppHeader';
import * as IconsSolid from 'react-native-heroicons/solid';
import { COLORS, FONTSIZE, SPACING } from '../../theme/theme';
import { baseImagePath } from '../../api/enpoint';
import CategoryHeader from '../../components/CategoryHeader/Index';
import ActorCastCard from '../../components/ActorCast';
import { LinearGradient } from 'expo-linear-gradient';
import StarRating from './_component/StarRating';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MovieDetailScreen = ({ navigation, route }: any) => {
  const [movieData, setMovieData] = useState<any>(undefined);
  const [movieCastData, setmovieCastData] = useState<any>(undefined);
  const [trailerUrl, setTrailerUrl] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(0);

  useEffect(() => {
    (async () => {
      const tempMovieData = await getMovieDetails(route.params.movieid);
      setMovieData(tempMovieData);
      setRating(tempMovieData.vote_average);
    })();

    (async () => {
      const tempMovieCastData = await getMovieCastDetails(route.params.movieid);
      setmovieCastData(tempMovieCastData.cast);
    })();

    (async () => {
      const trailerUrl = await getMovieTrailer(route.params.movieid);
      setTrailerUrl(trailerUrl);
    })();
  }, [route.params.movieid]);

  const saveBookmark = async (movie: any) => {
    try {
      const bookmarks = await AsyncStorage.getItem('bookmarks');
      const bookmarksArray = bookmarks ? JSON.parse(bookmarks) : [];
      const movieData = {
        ...movie,
        poster_path: baseImagePath('w342', movie.poster_path),
      };

      bookmarksArray.push(movieData);
      await AsyncStorage.setItem('bookmarks', JSON.stringify(bookmarksArray));
      alert('Movie bookmarked!');
    } catch (error) {
      console.error(error);
    }
  };


  if (
    movieData === undefined &&
    movieData === null &&
    movieCastData === undefined &&
    movieCastData === null
  ) {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollViewContainer}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.appHeaderContainer}>
          <AppHeader header={''} action={() => navigation.goBack()} />
        </View>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={'large'} color={COLORS.Orange} />
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      bounces={false}
      showsVerticalScrollIndicator={false}>
      <StatusBar hidden />
      <View>
        <ImageBackground
          source={{
            uri: baseImagePath('w780', movieData?.backdrop_path),
          }}
          style={styles.imageBG}>
          <LinearGradient
            colors={[COLORS.BlackRGB10, COLORS.Black]}
            style={styles.linearGradient}>
            <View style={styles.appHeaderContainer}>
              <AppHeader header={''} action={() => navigation.goBack()} />
            </View>
          </LinearGradient>
        </ImageBackground>
        <View style={styles.posterContainer}>
          <View>
            <Image
              source={{ uri: baseImagePath('w342', movieData?.poster_path) }}
              style={styles.cardImage}
            />
            <View style={styles.ratingContainer}>
              <StarRating rating={rating} setRating={setRating} />
              <Text style={styles.ratingText}>{rating.toFixed(1)} / 5</Text>
            </View>
          </View>
          <View style={styles.posterInfoContainer}>
            <Text style={styles.title}>{movieData?.original_title}</Text>
            <View style={styles.listInfoContainer}>
              <View style={styles.infoItemContainer}>
                <IconsSolid.CalendarIcon
                  style={{ marginRight: SPACING.space_8 }}
                  size={FONTSIZE.size_20}
                  color={COLORS.WhiteRGBA50}
                />
                <Text style={styles.runtimeText}>
                  {movieData?.release_date}
                </Text>
              </View>
              <View style={styles.infoItemContainer}>
                <IconsSolid.ClockIcon
                  style={{ marginRight: SPACING.space_8 }}
                  size={FONTSIZE.size_20}
                  color={COLORS.WhiteRGBA50}
                />
                <Text style={styles.runtimeText}>
                  {Math.floor(movieData?.runtime / 60)}h{' '}
                  {Math.floor(movieData?.runtime % 60)}m
                </Text>
              </View>
              <View style={styles.infoItemContainer}>
                <View style={styles.genreContainer}>
                  {movieData?.genres.map((item: any) => {
                    return (
                      <View style={styles.genreBox} key={item.id}>
                        <Text style={styles.genreText}>{item.name}</Text>
                      </View>
                    );
                  })}
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={{ marginTop: 75 }}>
        <Text style={styles.tagline}>{movieData?.tagline || movieData?.title}</Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.rateContainer}>
          <IconsSolid.StarIcon size={FONTSIZE.size_20} color={COLORS.Yellow} />
          <Text style={styles.runtimeText}>
            {movieData?.vote_average.toFixed(1)} ({movieData?.vote_count})
          </Text>
          <Text style={styles.runtimeText}>
            {movieData?.release_date.substring(8, 10)}{' '}
            {new Date(movieData?.release_date).toLocaleString('default', {
              month: 'long',
            })}
            {movieData?.release_date.substring(0, 4)}
          </Text>
        </View>
        <Text style={styles.descriptionText}>{movieData?.overview}</Text>
      </View>

      <View>
        <CategoryHeader title="Top Cast" />
        <FlatList
          data={movieCastData}
          keyExtractor={(item: any) => item.id}
          horizontal
          contentContainerStyle={styles.containerGap24}
          renderItem={({ item, index }) => (
            <ActorCastCard
              shouldMarginatedAtEnd={true}
              cardWidth={80}
              isFirst={index === 0 ? true : false}
              isLast={index === movieCastData?.length - 1 ? true : false}
              imagePath={baseImagePath('w185', item.profile_path)}
              title={item.original_name}
              subtitle={item.character}
            />
          )}
        />

        <View style={styles.playContainer}>
          <TouchableOpacity
            style={styles.buttonBG}
            onPress={() => {
              navigation.push('SeatBooking', {
                BgImage: baseImagePath('w780', movieData.backdrop_path),
                PosterImage: baseImagePath('original', movieData.poster_path),
              });
            }}>
            <Text style={styles.buttonText}>Tonton di Bioskop</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonBG}
            onPress={() => {
              setModalVisible(true);
            }}>
            <Text style={styles.buttonText}>Tonton di Streaming</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {trailerUrl ? (
            <Text>Playing</Text>
          ) : (
            <Text>Trailer not available</Text>
          )}
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={{ color: 'red', marginTop: 20 }}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      {/* Bookmark Icon */}
      <TouchableOpacity
        style={styles.bookmarkIcon}
        onPress={() => saveBookmark(movieData)}>
        <IconsSolid.BookmarkIcon size={40} color={COLORS.White} />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default MovieDetailScreen;
