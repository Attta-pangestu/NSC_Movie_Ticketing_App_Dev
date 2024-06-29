import { StyleSheet } from "react-native";
import { COLORS, FONTSIZE } from "../../theme/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: COLORS.Black,
  },
  logo: {
    marginBottom: 20,
  },
  title: {
    fontSize: FONTSIZE.size_24,
    color: COLORS.Orange,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    marginBottom: 20,
    color: COLORS.White,
  },
  loginButton: {
    width: '100%',
    paddingVertical: 8,
    backgroundColor: COLORS.Orange,
  },
  orText: {
    marginVertical: 20,
    color: COLORS.White,
  },
  googleButton: {
    width: '100%',
    paddingVertical: 8,
    borderColor: COLORS.Orange,
  },
  registerButton: {
    width: '100%',
    paddingVertical: 8,
    color: COLORS.White,
    backgroundColor: COLORS.DarkGrey,
  },
});
