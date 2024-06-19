import { Text, View, StyleSheet, ActivityIndicator, SafeAreaView  } from "react-native";
import React, { useState, useEffect } from 'react';
import { getDailyOpenCloseData } from "@/app/services/polygon-service";

const Index = () => {
    const [stockData, setStockData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            try {
                const data = await getDailyOpenCloseData('AAPL', '2023-06-16');
                console.log('Fetched data: ', data);
                if(isMounted){
                    setStockData(data);
                }
            } catch (err) {
                console.error('Error: ', err);
                if(isMounted){
                    setError(err as Error);
                }
            } finally {
                if(isMounted){
                    setLoading(false);
                }
            }
        };
        fetchData();

        return () => {
            isMounted = false;
        };
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff"/>;
    }

    if (error) {
        return <Text style={styles.errorText}>Error fetching data: {error.message}</Text>;
    }

    console.log('Stock data: ', stockData);

    return (
        <SafeAreaView style={styles.container}>
            {stockData ? (
                <View>
                    <Text style={styles.symbol}>Symbol: AAPL</Text>
                    <Text style={styles.text}>Date: {stockData.from}</Text>
                    <Text style={styles.text}>Open: {stockData.open}</Text>
                    <Text style={styles.text}>High: {stockData.high}</Text>
                    <Text style={styles.text}>Low: {stockData.low}</Text>
                    <Text style={styles.text}>Close: {stockData.close}</Text>
                    <Text style={styles.text}>Volume: {stockData.volume}</Text>
                </View>
            ) : (
                <Text>No data available</Text>
            )}
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
