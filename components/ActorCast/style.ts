import { StyleSheet } from 'react-native';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  cardImage: {
    aspectRatio: 1920 / 1920,
    borderRadius: BORDERRADIUS.radius_25 * 4,
  },
  title: {
    alignSelf: 'stretch',
    fontSize: FONTSIZE.size_12,
    color: COLORS.White,
    fontFamily: FONTFAMILY.poppins_medium,
  },
  subtitle: {
    alignSelf: 'stretch',
    fontSize: FONTSIZE.size_10,
    color: COLORS.White,
    fontFamily: FONTFAMILY.poppins_medium,
  },
});
