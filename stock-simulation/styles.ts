import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1c1c1c',
        padding: 20,
    },
    topSection: {
        flex: 1,
        backgroundColor: '#292929',
        borderRadius: 16,
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#292929',
        borderRadius: 16,
        padding: 20,
        marginBottom: 20,
    },
    sectionTitle: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        backgroundColor: '#333333',
        color: '#ffffff',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
    },
    symbol: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    text: {
        fontSize: 16,
        color: '#ffffff',
    },
    errorText: {
        color: 'red',
    },
});