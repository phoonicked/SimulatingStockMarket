import {Text, View, StyleSheet, ActivityIndicator, SafeAreaView, Button, TextInput, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { getDailyOpenCloseData } from "@/app/services/polygon-service";
import {styles} from "@/styles";
import axios from "axios";

const Index = () => {
    const [stockData, setStockData] = useState<any>(null);
    const [error, setError] = useState<Error | null>(null);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [datePickerVisibility, setDatePickerVisibility] = useState(false);
    const [stockTicker, setStockTicker] = useState<string>('AAPL');
    const [noData, setNoData] = useState(false);

    const fetchData = async (ticker: string, date: Date) => {
        setError(null);
        setNoData(false);
        try {
            const year = date.getFullYear();
            const month = (`0${date.getMonth() + 1}`).slice(-2);
            const day = (`0${date.getDate()}`).slice(-2);
            const formattedDate = `${year}-${month}-${day}`;
            // console.log('Fetching data for: ', ticker); // Debug stock ticker
            const data = await getDailyOpenCloseData(ticker, formattedDate);
            setStockData(data);
        } catch (err) {
            if(axios.isAxiosError(err)) {
                if(err.response) {
                    if(err.response.status === 404) {
                        setNoData(true);
                    } else if(err.response.status === 401) {
                        setError(new Error('API key is not provided or invalid.'));
                    } else {
                        setError(new Error(err.response.data.message || 'An error occurred while fetching data.'));
                    }
                } else {
                    setError(new Error('An error occurred while fetching data.'));
                }
            } else {
                setError(new Error('An unexpected error occurred.'));
            }
            setStockData(null);
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
                {error ? (
                        <Text style={styles.errorText}>Error fetching data: {error.message}</Text>
                ) : noData ? (
                        <Text style={styles.errorText}>No data available. Please change ticker or change date.</Text>
                ): stockData ? (
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
                ): null }
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
            <View style={styles.news}>
                <Text style={styles.sectionTitle}>News</Text>
                {/* Placeholder for future content */}
            </View>
        </SafeAreaView>
    );
};

export default Index;
