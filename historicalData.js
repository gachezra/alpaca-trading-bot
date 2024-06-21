const axios = require('axios');
const fs = require('fs');

const API_KEY = 'your_api_key';
const API_SECRET = 'your_api_secret';
const BASE_URL = 'https://paper-api.alpaca.markets';

const getHistoricalData = async (symbol, start, end) => {
    const url = `${BASE_URL}/v2/stocks/${symbol}/bars?start=${start}&end=${end}&timeframe=minute`;
    const response = await axios.get(url, {
        headers: {
            'APCA-API-KEY-ID': API_KEY,
            'APCA-API-SECRET-KEY': API_SECRET
        }
    });
    return response.data.bars;
};

module.exports = getHistoricalData;
