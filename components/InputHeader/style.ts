import {StyleSheet} from 'react-native';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../theme/theme';

export const styles = StyleSheet.create({
  inputBox: {
    display: 'flex',
    flex: 1,
    paddingVertical: SPACING.space_8,
    paddingLeft: SPACING.space_18,
    borderWidth: 2,
    borderColor: COLORS.WhiteRGBA75,
    borderRadius: BORDERRADIUS.radius_25,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: COLORS.BlackRGB50,
  },
  textInput: {
    flex: 1,
    width: '100%',
    fontFamily: FONTFAMILY.poppins_extrabold,
    fontSize: FONTSIZE.size_14,
    color: COLORS.White,
  },
  textInputPlaceholder: {
    color: COLORS.WhiteRGBA75,
  },
  searchIcon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: SPACING.space_18,
  },
  appName: {
    fontSize: FONTSIZE.size_36,
    shadowColor: COLORS.Black,
    fontFamily: FONTFAMILY.poppins_extrabold,
    color: COLORS.Orange,
  },
  inputHeaderContainer: {
    position: 'absolute',
    top: 11,
    zIndex: 50,
    flexDirection: 'row',
    gap: SPACING.space_8,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: SPACING.space_18,
    marginTop: SPACING.space_28,
  },
});
