<template>
    <div class="daily-weather-card-list-container">
        <div v-for="forecast in forecasts" :key="forecast?.dt">
            <DailyWeatherCard
                :max-temp="Number(forecast.main?.temp_max.toFixed())"
                :min-temp="Number(forecast.main?.temp_min.toFixed())"
                :date-time="renderDateTime(forecast.dt_txt)"
                :weather="forecast.weather?.[0].main"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { WeatherApiDataType } from '@/types/api-data/weather-api';
import DailyWeatherCard from 'components/core/cards/DailyWeatherCard.vue';
import dayjs from 'dayjs';
import isTommorow from 'dayjs/plugin/isTomorrow';

dayjs.extend(isTommorow);

interface DailyWeatherCardListPropsType {
    forecasts: WeatherApiDataType[];
}

const renderDateTime = (date: string) => {
    return dayjs(date).isTomorrow() ? 'Tommorow' : dayjs(date).format('ddd, D MMM');
};

defineProps<DailyWeatherCardListPropsType>();
</script>

<style scoped>
.daily-weather-card-list-container {
    display: flex;
    gap: 26px;
    flex-wrap: wrap;
}
</style>
