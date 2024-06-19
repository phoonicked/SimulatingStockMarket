import axios from 'axios';
import { POLYGON_API_KEY } from '@env';

const BASE_URL = 'https://api.polygon.io';

export const getDailyOpenCloseData = async (symbol, date) => {
    try {
        const response = await axios.get(`${BASE_URL}/v1/open-close/${symbol}/${date}`, {
            params: {
                adjusted: true,
                apiKey: POLYGON_API_KEY,
            },
        });
        // console.log('API response: ', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fethcing stock data', error);
        throw error;
    }
};