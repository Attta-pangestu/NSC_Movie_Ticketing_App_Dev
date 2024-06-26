import {StyleSheet} from 'react-native';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
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
    borderRadius: BORDERRADIUS.radius_25,
  },
  infoItemContainer: {
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
    marginVertical: SPACING.space_15,
    textAlign: 'left',
    letterSpacing: 1.2,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
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
    fontSize: FONTSIZE.size_14,
    fontStyle: 'italic',
    color: COLORS.White,
    marginHorizontal: SPACING.space_36,
    marginVertical: SPACING.space_15,
    textAlign: 'center',
  },
  infoContainer: {
    marginHorizontal: SPACING.space_24,
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
  listInfoContainer: {
    flexDirection: 'column',
    marginTop: -10,
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
});
