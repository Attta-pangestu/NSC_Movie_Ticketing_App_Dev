import {StyleSheet} from 'react-native';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../theme/theme';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    flex: 1,
    backgroundColor: COLORS.Black,
  },
  loadingContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  scrollViewContainer: {
    flex: 1,
  },
  appHeaderContainer: {
    marginHorizontal: SPACING.space_36,
    marginTop: SPACING.space_20 * 2,
  },
  imageBG: {
    width: '100%',
    aspectRatio: 3072 / 1727,
  },
  linearGradient: {
    height: '100%',
  },
  cardImage: {
    width: 160,
    aspectRatio: 200 / 300,
    borderRadius: BORDERRADIUS.radius_20,
  },
  posterInfoItemContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  runtimeText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_14,
    color: COLORS.WhiteRGBA50,
  },
  title: {
    width: '80%',
    fontFamily: FONTFAMILY.poppins_bold,
    fontSize: FONTSIZE.size_30,
    color: COLORS.White,
    marginHorizontal: SPACING.space_36,
    marginVertical: SPACING.space_4,
    textAlign: 'left',
    letterSpacing: 1.2,
  },
  genreContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: SPACING.space_4,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  genreBox: {
    borderColor: COLORS.WhiteRGBA50,
    borderWidth: 1,
    paddingHorizontal: SPACING.space_8,
    paddingVertical: SPACING.space_4,
    marginHorizontal: SPACING.space_2,
    marginVertical: SPACING.space_2,
    borderRadius: BORDERRADIUS.radius_25,
  },
  genreText: {
    fontSize: FONTSIZE.size_12,
    color: COLORS.WhiteRGBA75,
  },
  tagline: {
    width: 160,
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    color: COLORS.White,
    marginVertical: SPACING.space_15,
    textAlign: 'left',
    marginBottom: 70,
  },
  infoContainer: {
    minHeight: 200,
    marginHorizontal: SPACING.space_32,
    marginTop: 280,
  },
  rateContainer: {
    flexDirection: 'row',
    gap: SPACING.space_10,
    alignItems: 'center',
  },
  starIcon: {
    fontSize: FONTSIZE.size_20,
    color: COLORS.Yellow,
  },
  descriptionText: {
    fontSize: FONTSIZE.size_14,
    color: COLORS.White,
  },
  containerGap24: {
    gap: SPACING.space_24,
  },
  buttonBG: {
    alignItems: 'center',
    marginVertical: SPACING.space_24,
  },
  buttonText: {
    borderRadius: BORDERRADIUS.radius_25 * 2,
    paddingHorizontal: SPACING.space_24,
    paddingVertical: SPACING.space_10,
    backgroundColor: COLORS.Orange,
    fontSize: FONTSIZE.size_14,
    color: COLORS.White,
  },
  playContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: SPACING.space_24,
    justifyContent: 'center',
  },
  posterContainer: {
    position: 'absolute',
    top: 100,
    left: 30,
    flexDirection: 'row',
    gap: 5,
  },
  playBtnContainer: {
    padding: 10,
    position: 'absolute',
    top: -190,
    borderRadius: BORDERRADIUS.radius_50,
    overflow: 'hidden',
    backgroundColor: COLORS.Orange,
    zIndex: 50,
  },
  posterInfoContainer: {
    marginLeft: -25,
    width: 200,
  },
  listInfoPosterContainer: {
    flexDirection: 'column',
    marginTop: SPACING.space_4,
    marginLeft: SPACING.space_32,
    gap: SPACING.space_2,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SPACING.space_10,
  },
  ratingText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_14,
    color: COLORS.White,
    marginLeft: SPACING.space_8,
  },
  bookmarkIcon: {
    position: 'absolute',
    bottom: 250,
    right: 20,
    zIndex: 1000,
    backgroundColor: COLORS.Orange,
    borderRadius: 50,
    padding: SPACING.space_12,
    elevation: 5,
  },
  posterBtnAction: {
    backgroundColor: COLORS.Orange,
    width: 170,
    borderRadius: BORDERRADIUS.radius_25,
    paddingVertical: SPACING.space_4,
  },
  btnPlayingText: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.White,
    textAlign: 'center',
  },
  posterBtnContainer: {
    position: 'absolute',
    bottom: 10,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginLeft: -5,
  },
  movieActionContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: SPACING.space_16,
    marginVertical: SPACING.space_24,
    paddingVertical: SPACING.space_8,
    borderWidth: 1,
    borderRadius: BORDERRADIUS.radius_25,
    borderColor: COLORS.WhiteRGBA50,
  },
  movieActionItem: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  movieActionText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_12,
    color: COLORS.WhiteRGBA50,
    textAlign: 'center',
  },
  descriptionTitle: {
    fontSize: FONTSIZE.size_24,
    color: COLORS.White,
    fontFamily: FONTFAMILY.poppins_semibold,
    textAlign: 'justify',
    paddingTop: SPACING.space_8,
  },
  descriptionContainer: {
    // marginTop: -SPACING.space_36
  },
  reviewContainer: {
    width: width * 0.8, // Atur lebar ulasan agar sesuai dengan layar
    borderColor: COLORS.WhiteRGBA50,
    borderWidth: 1,
    padding: SPACING.space_16,
    marginVertical: SPACING.space_8,
    marginHorizontal: SPACING.space_4,
    borderRadius: BORDERRADIUS.radius_10,
    backgroundColor: COLORS.BlackRGB50,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.space_8,
  },
  reviewAvatar: {
    width: 45,
    height: 45,
    borderRadius: BORDERRADIUS.radius_50,
    marginRight: SPACING.space_16,
  },
  reviewAuthor: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.White,
  },
  reviewContent: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    color: COLORS.WhiteRGBA75,
  },
});
