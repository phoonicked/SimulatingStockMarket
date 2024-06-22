import axios from 'axios';
import { POLYGON_API_KEY } from '@env';

const BASE_URL = 'https://api.polygon.io';

export const getDailyOpenCloseData = async (ticker, date) => {
    const url = `${BASE_URL}/v1/open-close/${ticker}/${date}`;
    console.log('Fetching data from: ', url);
    try {
        const response = await axios.get(url, {
            params: {
                adjusted: true,
                apiKey: POLYGON_API_KEY,
            },
            headers: {
                'Cache-Control': 'no-cache',
            },
        });
        console.log('API response: ', response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching stock data', error);
        throw error;
    }
};