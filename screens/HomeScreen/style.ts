import {Dimensions, StyleSheet} from 'react-native';
import {COLORS, SPACING} from '../../theme/theme';

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
  InputHeaderContainer: {
    marginHorizontal: SPACING.space_36,
    marginTop: SPACING.space_28,
    position: 'absolute',
    top: 11,
    zIndex: 50,
  },
  containerGap36: {
    gap: SPACING.space_36,
  },
  bannerImage: {
    width: Dimensions.get('window').width,
    height: 400,
    objectFit: 'fill',
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
});
