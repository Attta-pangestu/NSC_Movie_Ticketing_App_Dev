import {Dimensions, StyleSheet} from 'react-native';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../theme/theme';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: COLORS.Black,
    position: 'relative',
  },
  scrollViewContainer: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  categoryContainer: {
    paddingHorizontal: SPACING.space_36,
  },
  categoryBtn: {
    paddingHorizontal: SPACING.space_32,
    paddingVertical: SPACING.space_4,
    borderRadius: BORDERRADIUS.radius_25,
    marginHorizontal: SPACING.space_8,
    backgroundColor: COLORS.BlackRGB50,
  },
  selectedCategoryBtn: {
    backgroundColor: COLORS.Orange,
  },
  categoryText: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_14,
    color: COLORS.White,
  },
  categoryContentContainer: {
    paddingHorizontal: SPACING.space_8,
    paddingTop: SPACING.space_24,
  },
  menuIcon: {
    padding: SPACING.space_10,
    backgroundColor: COLORS.BlackRGB50,
    borderRadius: BORDERRADIUS.radius_25,
  },

  containerGap36: {
    gap: SPACING.space_36,
  },
  bannerImage: {
    width: Dimensions.get('window').width,
    height: 600,
    objectFit: 'cover',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SPACING.space_8,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'gray',
    margin: SPACING.space_4,
  },
  paginationDotActive: {
    backgroundColor: COLORS.Orange,
  },
  gapContainer: {
    gap: SPACING.space_36,
  },
  ImageBG: {
    width: '100%',
    height: 600,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: height * 0.6,
  },
});
