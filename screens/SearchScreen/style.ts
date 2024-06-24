import { StyleSheet } from "react-native";
import { COLORS, SPACING } from "../../theme/theme";

export const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      backgroundColor: COLORS.Black,
    },
    InputHeaderContainer: {
      display: 'flex',
      marginHorizontal: SPACING.space_36,
      marginTop: SPACING.space_28,
      marginBottom: SPACING.space_28 - SPACING.space_12,
    },
    centerContainer: {
      alignItems: 'center',
    },
  });
  