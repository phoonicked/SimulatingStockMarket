import {Text, View, StyleSheet, ActivityIndicator, SafeAreaView, Button, TextInput, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { getDailyOpenCloseData } from "@/app/services/polygon-service";

const Index = () => {
    const [stockData, setStockData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [datePickerVisibility, setDatePickerVisibility] = useState(false);
    const [stockTicker, setStockTicker] = useState<string>('AAPL');

    const fetchData = async (ticker: string, date: Date) => {
        setLoading(true);
        setError(null);
        try {
            const year = date.getFullYear();
            const month = (`0${date.getMonth() + 1}`).slice(-2);
            const day = (`0${date.getDate()}`).slice(-2);
            const formattedDate = `${year}-${month}-${day}`;
            // console.log('Fetching data for: ', ticker); // Debug stock ticker
            const data = await getDailyOpenCloseData(ticker, formattedDate);
            setStockData(data);
        } catch (err) {
            console.error('Error: ', err);
            setError(err as Error);
            setStockData(null);
        } finally {
            setLoading(false);
        }
    };

    const handleConfirm = (date: Date) => {
        setDatePickerVisibility(false);
        setSelectedDate(date);
        fetchData(stockTicker, date);
    }

    const handleTickerChange = (ticker: string) => {
        setStockTicker(ticker);
    }

    const currentDate = new Date();
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(currentDate.getFullYear() - 1);

    return (
        <SafeAreaView style={styles.container}>
            {/* Top Section */}
            <View style={styles.topSection}></View>

            {/* Daily Stock Data Section */}
            <View style={styles.card}>
                <Text style={styles.sectionTitle}>Daily Stock Data</Text>
                <TextInput
                    style={styles.input}
                    placeholder={"Enter Stock Ticker"}
                    value={stockTicker}
                    onChangeText={handleTickerChange}
                />
                <TouchableOpacity onPress={() => setDatePickerVisibility(true)}>
                    <Text style={styles.input}>{selectedDate ? selectedDate.toDateString() : 'Select Date'}</Text>
                </TouchableOpacity>
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
                <DateTimePickerModal
                    isVisible={datePickerVisibility}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={() => setDatePickerVisibility(false)}
                    maximumDate={currentDate}
                    minimumDate={oneYearAgo}
                />
            </View>

            {/* News Section */}
            <View style={styles.card}>
                <Text style={styles.sectionTitle}>News</Text>
                {/* Placeholder for future content */}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
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

export default Index;
