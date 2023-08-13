import dayjs from 'dayjs';
import useFetch from './useFetch';
import { ref, watchEffect } from 'vue';
import isTommorow from 'dayjs/plugin/isTomorrow';
import { WeatherApiDataType } from '@/types/api-data/weather-api';

dayjs.extend(isTommorow);

const forecast = ref<any>(null);

const useForecast = async ({
    latitude,
    longitude,
    country,
}: {
    latitude?: number;
    longitude?: number;
    country?: string;
}) => {
    watchEffect(async () => {
        const { request: requestForecast } = useFetch({
            path: '/forecast',
            query: {
                ...(country
                    ? { q: country }
                    : {
                          lat: latitude,
                          lon: longitude,
                      }),
                units: 'metric',
            },
        });

        const res = await requestForecast();
        const data = await res?.data.list;

        const date = data?.map((item: WeatherApiDataType) => ({
            ...item,
            dt_txt: dayjs(item.dt_txt).startOf('d').format(),
        }));

        const listForecast = [...new Map(date?.map((item: WeatherApiDataType) => [item['dt_txt'], item])).values()];
        listForecast.shift();

        forecast.value = listForecast;
    });

    return forecast;
};

export default useForecast;
