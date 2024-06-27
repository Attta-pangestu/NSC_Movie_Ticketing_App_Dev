import {StyleSheet} from 'react-native';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../../theme/theme';

export const styles = StyleSheet.create({
  text: {
    fontSize: FONTSIZE.size_24,
    color: COLORS.White,
    paddingHorizontal: SPACING.space_24,
    paddingVertical: SPACING.space_20,
    fontFamily: FONTFAMILY.poppins_semibold,
  },
});
