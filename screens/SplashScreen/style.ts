import {StyleSheet} from 'react-native';
import { COLORS, FONTSIZE } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: COLORS.Orange,
    fontSize: FONTSIZE.size_42,
    fontFamily: 'Poppins-Bold',
  },
});
