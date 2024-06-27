// style.ts
import { StyleSheet } from 'react-native';
import { COLORS, FONTFAMILY, FONTSIZE, SPACING, BORDERRADIUS } from '../../theme/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: SPACING.space_24,
        backgroundColor: COLORS.Black,
    },
    header: {
        fontSize: FONTSIZE.size_24,
        color: COLORS.White,
        fontFamily: FONTFAMILY.poppins_bold,
        marginBottom: SPACING.space_24,
        textAlign: 'center',
    },
    bookmarkItem: {
        flexDirection: 'row',
        marginBottom: SPACING.space_24,
        backgroundColor: COLORS.DarkGrey,
        borderRadius: BORDERRADIUS.radius_25,
        overflow: 'hidden',
    },
    posterImage: {
        width: 100,
        height: 150,
        borderTopLeftRadius: BORDERRADIUS.radius_25,
        borderBottomLeftRadius: BORDERRADIUS.radius_25,
    },
    bookmarkDetails: {
        flex: 1,
        padding: SPACING.space_12,
        justifyContent: 'center',
    },
    movieTitle: {
        fontSize: FONTSIZE.size_18,
        color: COLORS.White,
        fontFamily: FONTFAMILY.poppins_bold,
        marginBottom: SPACING.space_8,
    },
    movieDuration: {
        fontSize: FONTSIZE.size_14,
        color: COLORS.White,
        fontFamily: FONTFAMILY.poppins_regular,
        marginBottom: SPACING.space_4,
    },
    movieGenres: {
        fontSize: FONTSIZE.size_14,
        color: COLORS.Grey,
        fontFamily: FONTFAMILY.poppins_regular,
        marginBottom: SPACING.space_12,
    },
    removeText: {
        fontSize: FONTSIZE.size_14,
        color: COLORS.Orange,
        fontFamily: FONTFAMILY.poppins_medium,
    },
    removeIconContainer: {
        position: 'absolute',
        top: SPACING.space_12,
        right: SPACING.space_12,
        zIndex: 1,
    },
    removeIcon: {
        fontSize: FONTSIZE.size_20,
        color: COLORS.Orange,
    },
});

