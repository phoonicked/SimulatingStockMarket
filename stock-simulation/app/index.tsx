import { Text, View, StyleSheet, ActivityIndicator, SafeAreaView, Button  } from "react-native";
import React, { useState, useEffect } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { getDailyOpenCloseData } from "@/app/services/polygon-service";

const Index = () => {
    const [stockData, setStockData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [datePickerVisibility, setDatePickerVisibility] = useState(false);

    const fetchData = async (date: Date) => {
        setLoading(true);
        try {
            const formattedDate = date.toISOString().split('T')[0];
            const data = await getDailyOpenCloseData('AAPL', formattedDate);
            setStockData(data);
        } catch (err) {
            console.error('Error: ', err);
            setError(err as Error);
        } finally {
            setLoading(false);
        }
    };

    const handleDateConfirm = (date: Date) => {
        setDatePickerVisibility(false);
        setSelectedDate(date);
        fetchData(date);
    }

    const currentDate = new Date();
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(currentDate.getFullYear() - 1);

    return (
        <SafeAreaView style={styles.container}>
            {loading ? (
                <Text style={styles.text}>Loading...</Text>
            ) : error ? (
                <Text style={styles.errorText}>Error fetching data: {error.message}</Text>
            ) : stockData ? (
                <View>
                    <Text style={styles.symbol}>Symbol: {stockData.symbol}</Text>
                    <Text style={styles.text}>Date: {stockData.from}</Text>
                    <Text style={styles.text}>Open: {stockData.open}</Text>
                    <Text style={styles.text}>High: {stockData.high}</Text>
                    <Text style={styles.text}>Low: {stockData.low}</Text>
                    <Text style={styles.text}>Close: {stockData.close}</Text>
                    <Text style={styles.text}>Volume: {stockData.volume}</Text>
                    <Text style={styles.text}>After Hours: {stockData.afterHours}</Text>
                    <Text style={styles.text}>Pre Market: {stockData.preMarket}</Text>
                </View>
            ) : (
                <Text style={styles.text}>No data available. Please select a date.</Text>
            )}
            <Button title="Select Date" onPress={() => setDatePickerVisibility(true)} />
            <DateTimePickerModal
                isVisible={datePickerVisibility}
                mode="date"
                onConfirm={handleDateConfirm}
                onCancel={() => setDatePickerVisibility(false)}
                maximumDate={currentDate}
                minimumDate={oneYearAgo}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    symbol: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff', // Set text color to white
    },
    text: {
        fontSize: 16,
        color: '#fff', // Set text color to white
    },
    errorText: {
        color: 'red',
    },
});

export default Index;
