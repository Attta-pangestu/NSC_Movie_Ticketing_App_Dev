import { StyleSheet } from "react-native";
import { COLORS, SPACING } from "../../theme/theme";

export const styles = StyleSheet.create({
    container: {
      display: 'flex',
      backgroundColor: COLORS.Black,
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
    },
    containerGap36: {
      gap: SPACING.space_36,
    },
  });