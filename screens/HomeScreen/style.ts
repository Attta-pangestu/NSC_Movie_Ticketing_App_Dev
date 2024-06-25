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
