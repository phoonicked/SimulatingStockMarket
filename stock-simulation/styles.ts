import {StyleSheet} from "react-native";
import {theme} from "@/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        padding: theme.spacing.medium,
    },
    topSection: {
        flex: 0.3,
        backgroundColor: theme.colors.cardBackground,
        borderRadius: theme.borderRadius.medium,
        marginBottom: theme.spacing.medium,
        marginHorizontal: theme.spacing.small,
    },
    card: {
        backgroundColor: theme.colors.cardBackground,
        borderRadius: theme.borderRadius.medium,
        padding: theme.spacing.medium,
        marginBottom: theme.spacing.medium,
        marginHorizontal: theme.spacing.small,
    },
    news: {
        flex: 0.7,
        backgroundColor: theme.colors.cardBackground,
        borderRadius: theme.borderRadius.medium,
        padding: theme.spacing.medium,
        marginBottom: theme.spacing.medium,
        marginHorizontal: theme.spacing.small,
    },
    sectionTitle: {
        color: '#ffffff',
        fontSize: theme.fonts.large,
        fontWeight: 'bold',
        marginBottom: theme.spacing.small,
    },
    input: {
        backgroundColor: '#333333',
        color: '#ffffff',
        borderRadius: theme.borderRadius.small,
        padding: theme.spacing.small,
        marginBottom: theme.spacing.small,
    },
    symbol: {
        fontSize: theme.fonts.large,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    text: {
        fontSize: theme.fonts.regular,
        color: theme.colors.text,
    },
    errorText: {
        color: theme.colors.onError,
    },
    appTitle: {
        fontSize: theme.fonts.titleLarge,
        fontWeight: 'bold',
        color: theme.colors.text,
        marginBottom: theme.spacing.small,
        textAlign: 'center',
    },
    slogan: {
        fontSize: theme.fonts.regular,
        color: theme.colors.subtitle,
        marginBottom: theme.spacing.small,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: theme.colors.primary,
        borderRadius: theme.borderRadius.extraLarge,
        paddingVertical: theme.spacing.medium,
        paddingHorizontal: theme.spacing.large,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: theme.spacing.small,
        width: '80%',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5,
    },
    buttonText: {
        color: theme.colors.whiteText,
        fontSize: theme.fonts.regular,
        fontWeight: 'bold',
    },
    createButton: {
        backgroundColor: theme.colors.secondary,
        marginBottom: theme.spacing.medium,
    },
    createButtonText: {
        color: theme.colors.text,
    },
    orText: {
        marginTop: theme.spacing.large,
        color: theme.colors.subtitle,
        fontSize: theme.fonts.regular,
        marginBottom: theme.spacing.medium,
        alignSelf: 'center',
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    socialButton: {
        backgroundColor: theme.colors.primaryContainer,
        borderRadius: theme.borderRadius.medium,
        padding: theme.spacing.small,
        alignItems: 'center',
        justifyContent: 'center',
    },
    socialIcon: {
        width: 24,
        height: 24,
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: theme.spacing.medium,
        alignSelf: 'center',
    },
    centerContent: {
        flex: 0.7,
        justifyContent: 'center',
        alignItems: 'center',
    },
});