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
  Dimensions,
} from 'react-native';
import {
  getMovieCastDetails,
  getMovieDetails,
  getMovieReviews,
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
import YoutubePlayer from 'react-native-youtube-iframe';
import { auth, db } from '../../api/firebase';

const { width } = Dimensions.get('screen');

const MovieDetailScreen = ({ navigation, route }: any) => {
  const [movieData, setMovieData] = useState<any>(undefined);
  const [movieCastData, setmovieCastData] = useState<any>(undefined);
  const [trailerId, setTrailerId] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(0);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [reviews, setReviews] = useState([]);
  const [expandedReviews, setExpandedReviews] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    (async () => {
      const tempMovieData = await getMovieDetails(route.params.movieid);
      setMovieData(tempMovieData);
      setRating(tempMovieData.vote_average);

      const userId = auth.currentUser?.uid;
      if (userId) {
        const userBookmarksRef = db.collection('users').doc(userId).collection('bookmarks').doc(route.params.movieid.toString());
        const userBookmarksDoc = await userBookmarksRef.get();
        setIsBookmarked(userBookmarksDoc.exists);

        const userLikesRef = db.collection('users').doc(userId).collection('likes').doc(route.params.movieid.toString());
        const userLikesDoc = await userLikesRef.get();
        setIsLiked(userLikesDoc.exists);
      }
    })();

    (async () => {
      const tempMovieCastData = await getMovieCastDetails(route.params.movieid);
      setmovieCastData(tempMovieCastData.cast);
    })();

    (async () => {
      const trailerUrl = await getMovieTrailer(route.params.movieid);
      setTrailerId(trailerUrl);
    })();

    (async () => {
      const reviewsData = await getMovieReviews(route.params.movieid);
      setReviews(reviewsData.results);
    })();
  }, [route.params.movieid, isBookmarked, isLiked]);

  const saveBookmark = async () => {
    try {
      const userId = auth.currentUser?.uid;
      if (!userId) {
        throw new Error('User not authenticated');
      }
      const userBookmarksRef = db.collection('users').doc(userId).collection('bookmarks').doc(route.params.movieid.toString());
      const userBookmarksDoc = await userBookmarksRef.get();
      const isBookmarked = userBookmarksDoc.exists;
      if (isBookmarked) {
        setIsBookmarked(false);
        await userBookmarksRef.delete();
      } else {
        const movieDataWithPosterPath = {
          ...movieData,
          poster_path: baseImagePath('w342', movieData.poster_path),
        };
        setIsBookmarked(true);
        await userBookmarksRef.set(movieDataWithPosterPath);
      }
    } catch (error) {
      console.error('Error saving bookmark:', error);
    }
  };

  const toggleLike = async () => {
    try {
      const userId = auth.currentUser?.uid;
      if (!userId) {
        throw new Error('User not authenticated');
      }
      const userLikesRef = db.collection('users').doc(userId).collection('likes').doc(route.params.movieid.toString());
      const userLikesDoc = await userLikesRef.get();
      const isLiked = userLikesDoc.exists;
      if (isLiked) {
        setIsLiked(false);
        await userLikesRef.delete();
      } else {
        const movieDataWithPosterPath = {
          ...movieData,
          poster_path: baseImagePath('w342', movieData.poster_path),
        };
        setIsLiked(true);
        await userLikesRef.set(movieDataWithPosterPath);
      }
    } catch (error) {
      console.error('Error toggling like:', error);
      alert('Error',);
    }
  };


  const toggleReviewExpansion = (reviewId: string) => {
    setExpandedReviews((prevState) => ({
      ...prevState,
      [reviewId]: !prevState[reviewId],
    }));
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
          <View style={{ position: 'relative' }}>
            <Image
              source={{ uri: baseImagePath('w342', movieData?.poster_path) }}
              style={styles.cardImage}
            />
            <View style={styles.ratingContainer}>
              <StarRating rating={rating} setRating={setRating} />
              <Text style={styles.ratingText}>{rating.toFixed(1)} / 10</Text>
            </View>
            <Text style={styles.tagline}>"{movieData?.tagline}"</Text>
            <View style={styles.posterBtnContainer}>
              <TouchableOpacity style={styles.posterBtnAction}
                onPress={
                  () => {
                    navigation.push('SeatBooking', {
                      BgImage: baseImagePath('w780', movieData.backdrop_path),
                      PosterImage: baseImagePath('original', movieData.poster_path),
                    });
                  }
                }
              >
                <Text style={styles.btnPlayingText}>Tonton di Bioskop</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.posterBtnAction}>
                <Text style={styles.btnPlayingText}>Streaming Now</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.posterInfoContainer}>
            <Text style={styles.title}>{movieData?.original_title}</Text>
            <View style={styles.listInfoPosterContainer}>
              <View style={styles.posterInfoItemContainer}>
                <IconsSolid.CalendarIcon
                  style={{ marginRight: SPACING.space_8 }}
                  size={FONTSIZE.size_20}
                  color={COLORS.WhiteRGBA50}
                />
                <Text style={styles.runtimeText}>
                  {movieData?.release_date}
                </Text>
              </View>
              <View style={styles.posterInfoItemContainer}>
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
              <View style={styles.posterInfoItemContainer}>
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

      <View style={styles.infoContainer}>
        <View style={styles.movieActionContainer}>
          <TouchableOpacity
            style={styles.movieActionItem}
            activeOpacity={0.7}
            onPress={saveBookmark}>
            <IconsSolid.BookmarkIcon
              size={FONTSIZE.size_24}
              color={isBookmarked ? 'yellow' : COLORS.White}
            />
            <Text style={{ color: COLORS.WhiteRGBA50, textAlign: 'center' }}>
              Watchlist
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.movieActionItem}
            activeOpacity={0.7}
            onPress={toggleLike}>
            <IconsSolid.HeartIcon
              size={FONTSIZE.size_24}
              color={isLiked ? COLORS.Orange : COLORS.White}
            />
            <Text style={{ color: COLORS.WhiteRGBA50, textAlign: 'center' }}>
              Menyukai
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.movieActionItem}
            activeOpacity={0.7}
            onPress={() => { }}>
            <IconsSolid.ChatBubbleBottomCenterIcon
              size={FONTSIZE.size_24}
              color={COLORS.White}
            />
            <Text style={styles.movieActionText}> Komentari </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.movieActionItem}
            activeOpacity={0.7}
            onPress={() => { }}>
            <IconsSolid.ShareIcon
              size={FONTSIZE.size_24}
              color={COLORS.White}
            />
            <Text style={styles.movieActionText}> Berbagi </Text>
          </TouchableOpacity>
        </View>

        <View style={{ position: 'relative', marginHorizontal: -14 }}>
          {trailerId && (
            <YoutubePlayer
              height={250}
              width={width}
              play={true}
              videoId={trailerId}
            />
          )}
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Summary</Text>
          <View>
            <Text style={styles.descriptionText}>{movieData?.overview}</Text>
          </View>

          <Text style={styles.descriptionTitle}>Reviews</Text>
          <FlatList
            data={reviews}
            keyExtractor={(item: any) => item.id.toString()}
            horizontal
            renderItem={({ item: review }: any) => (
              <View key={review.id} style={styles.reviewContainer}>
                <View style={styles.reviewHeader}>
                  <Image
                    source={{
                      uri: review.author_details.avatar_path
                        ? `https://image.tmdb.org/t/p/w45${review.author_details.avatar_path}`
                        : 'default-avatar.png',
                    }}
                    style={styles.reviewAvatar}
                  />
                  <Text style={styles.reviewAuthor}>{review.author}</Text>
                </View>
                <Text
                  numberOfLines={expandedReviews[review.id] ? undefined : 6}
                  ellipsizeMode={expandedReviews[review.id] ? 'clip' : 'tail'}
                  style={styles.reviewContent}>
                  {review.content}
                </Text>
                {review.content.split('\n').length > 6 && (
                  <TouchableOpacity
                    onPress={() => toggleReviewExpansion(review.id)}>
                    <Text style={{ color: COLORS.Orange, marginTop: 5 }}>
                      {expandedReviews[review.id]
                        ? 'Lihat lebih sedikit'
                        : 'Lihat Selengkapnya'}
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            )}
          />
        </View>
      </View>
      <CategoryHeader title="Pemain Film" />
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

      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {trailerId ? (
            <Text>Playing</Text>
          ) : (
            <Text>Trailer not available</Text>
          )}
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={{ color: 'red', marginTop: 20 }}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default MovieDetailScreen;
