import { StyleSheet } from "react-native";
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from "../../theme/theme";

export const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flex: 1,
      backgroundColor: COLORS.Black,
    },
    cardImage: {
      aspectRatio: 2 / 3,
      borderRadius: BORDERRADIUS.radius_20,
    },
    textTitle: {
      fontSize: FONTSIZE.size_14,
      color: COLORS.White,
      textAlign: 'center',
      paddingVertical: SPACING.space_10,
    },
  });