import {StyleSheet} from 'react-native';
import {COLORS, FONTSIZE, SPACING} from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: SPACING.space_20,
  },
  settingContainer: {
    flex: 1,
  },
  iconStyle: {
    color: COLORS.White,
    fontSize: FONTSIZE.size_24,
    paddingHorizontal: SPACING.space_20,
  },
  iconBG: {
    justifyContent: 'center',
  },
  title: {
    fontSize: FONTSIZE.size_18,
    color: COLORS.White,
  },
  subtitle: {
    fontSize: FONTSIZE.size_14,
    color: COLORS.WhiteRGBA15,
  },
});
