import { WeatherApiDataType } from './weather-api';

export type ForecastCityType = {
    id: number;
    name: string;
    coord: {
        lat: number;
        lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
};

export type ForecastApiDataType = {
    cod: string;
    message: number;
    cnt: number;
    list: WeatherApiDataType[];
    city: ForecastCityType;
};
