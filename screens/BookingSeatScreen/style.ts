import { StyleSheet } from 'react-native';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../../theme/theme';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: COLORS.Black,
  },
  ImageBG: {
    width: '100%',
    aspectRatio: 3072 / 1727,
  },
  linearGradient: {
    height: '100%',
  },
  appHeaderContainer: {
    marginHorizontal: SPACING.space_36,
    marginTop: SPACING.space_20 * 2,
  },
  screenText: {
    textAlign: 'center',
    fontSize: FONTSIZE.size_10,
    color: COLORS.White,
    fontFamily: FONTFAMILY.poppins_regular,
  },
  seatContainer: {
    marginVertical: SPACING.space_20,
  },
  containerGap20: {
    gap: SPACING.space_20,
  },
  seatRow: {
    flexDirection: 'row',
    gap: SPACING.space_20,
    justifyContent: 'center',
  },
  seatRadioContainer: {
    flexDirection: 'row',
    marginTop: SPACING.space_36,
    marginBottom: SPACING.space_10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  radioContainer: {
    flexDirection: 'row',
    gap: SPACING.space_10,
    alignItems: 'center',
  },

  radioText: {
    fontSize: FONTSIZE.size_12,
    color: COLORS.Grey,
    fontFamily: FONTFAMILY.poppins_medium,
  },
  containerGap24: {
    gap: SPACING.space_24,
  },
  dateContainer: {
    width: SPACING.space_10 * 7,
    height: SPACING.space_10 * 10,
    borderRadius: SPACING.space_10 * 10,
    backgroundColor: COLORS.DarkGrey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateText: {
    fontSize: FONTSIZE.size_24,
    color: COLORS.White,
    fontFamily: FONTFAMILY.poppins_medium,
  },
  dayText: {
    fontSize: FONTSIZE.size_12,
    color: COLORS.White,
    fontFamily: FONTFAMILY.poppins_regular,
  },
  OutterContainer: {
    marginVertical: SPACING.space_24,
  },
  timeContainer: {
    paddingVertical: SPACING.space_10,
    borderWidth: 1,
    borderColor: COLORS.WhiteRGBA50,
    paddingHorizontal: SPACING.space_20,
    borderRadius: BORDERRADIUS.radius_25,
    backgroundColor: COLORS.DarkGrey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeText: {
    fontSize: FONTSIZE.size_14,
    color: COLORS.White,
    fontFamily: FONTFAMILY.poppins_regular,
  },
  buttonPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.space_24,
    paddingBottom: SPACING.space_24,
  },
  priceContainer: {
    alignItems: 'center',
  },
  totalPriceText: {
    fontSize: FONTSIZE.size_14,
    color: COLORS.Grey,
    fontFamily: FONTFAMILY.poppins_regular,
  },
  price: {
    fontSize: FONTSIZE.size_24,
    color: COLORS.White,
    fontFamily: FONTFAMILY.poppins_medium,
  },
  buttonText: {
    borderRadius: BORDERRADIUS.radius_25,
    paddingHorizontal: SPACING.space_24,
    paddingVertical: SPACING.space_10,
    fontSize: FONTSIZE.size_16,
    color: COLORS.White,
    backgroundColor: COLORS.Orange,
  },
  seatWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  seatNumber: {
    position: 'absolute',
    fontSize: 10,
    color: COLORS.White,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    height: '80%',
    backgroundColor: COLORS.White,
    borderRadius: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.space_10,
  },
  title: {
    fontSize: FONTSIZE.size_16,
    color: COLORS.Black,
    fontFamily: FONTFAMILY.poppins_medium,
  },
  closeButton: {
    padding: SPACING.space_24,
  },
  closeIcon: {
    color: COLORS.Orange,
  },
  webView: {
    width: '100%',
    height: '100%',
  },
});
