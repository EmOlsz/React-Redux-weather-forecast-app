import axios from 'axios';

const API_WEATHER_KEY = '16dbf7b73f9194d963ad1a85b212e371';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_WEATHER_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log('Start: ', request);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}