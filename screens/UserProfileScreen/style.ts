import { StyleSheet } from 'react-native';
import { COLORS, FONTSIZE } from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.Black,
  },
  loadingText: {
    color: COLORS.White,
    fontSize: FONTSIZE.size_20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  profileName: {
    color: COLORS.White,
    fontSize: FONTSIZE.size_24,
    marginBottom: 10,
  },
  profileEmail: {
    color: COLORS.WhiteRGBA32,
    fontSize: FONTSIZE.size_18,
    marginBottom: 10,
  },
  profileInfo: {
    color: COLORS.Yellow,
    fontSize: FONTSIZE.size_16,
    marginBottom: 10,
  },
  logoutButton: {
    backgroundColor: COLORS.Orange,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 20,
  },
  logoutButtonText: {
    color: COLORS.White,
    fontSize: FONTSIZE.size_18,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
    backgroundColor: COLORS.Orange,
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: COLORS.White,
    fontSize: FONTSIZE.size_18,
  },
});
