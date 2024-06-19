import axios from 'axios';
import { POLYGON_API_KEY } from '@env';

const BASE_URL = 'https://api.polygon.io';

export const getStockData = async (symbol) => {
    try {
        const response = await axios.get(`${BASE_URL}/v2/aggs/ticker/${symbol}/prev?apiKey=${POLYGON_API_KEY}`, {
            params: {
                apiKey: POLYGON_API_KEY,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fethcing stock data', error);
        throw error;
    }
}