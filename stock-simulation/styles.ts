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
        fontSize: 20,
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
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    text: {
        fontSize: 16,
        color: theme.colors.text,
    },
    errorText: {
        color: theme.colors.onError,
    },
});