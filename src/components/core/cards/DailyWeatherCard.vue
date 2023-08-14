<template>
    <article class="daily-weather-card-container">
        <div class="wrapper">
            <p class="weather-text">{{ dateTime }}</p>
            <img :src="`${getImageUrl(weather as WeatherCategoryType)}`" class="image" :alt="`image-${weather}`" />
            <div class="flex-container">
                <p class="max-temp-text" aria-label="max-temp-text">{{ maxTemp }}°C</p>
                <p class="min-temp-text" aria-label="min-temp-text">{{ minTemp }}°C</p>
            </div>
        </div>
    </article>
</template>

<script setup lang="ts">
import { WeatherCategoryType } from '@/types/api-data/weather-api';

interface DailyWeatherCardPropsType {
    maxTemp: number;
    minTemp: number;
    weather: WeatherCategoryType | string;
    dateTime: string;
}

const getImageUrl = (weather: WeatherCategoryType): string | null => {
    switch (weather) {
        case 'Snow':
            return new URL(`../../../assets/Snow.png`, import.meta.url).href;
        case 'Clear':
            return new URL(`../../../assets/Clear.png`, import.meta.url).href;
        case 'Thunderstorm':
            return new URL(`../../../assets/Thunderstorm.png`, import.meta.url).href;
        case 'Drizzle':
            return new URL(`../../../assets/LightRain.png`, import.meta.url).href;
        case 'Rain':
            return new URL(`../../../assets/HeavyRain.png`, import.meta.url).href;
        case 'Clouds':
            return new URL(`../../../assets/HeavyCloud.png`, import.meta.url).href;
        default:
            return null;
    }
};

defineProps<DailyWeatherCardPropsType>();
</script>

<style scoped>
.daily-weather-card-container {
    max-width: 140px;
}
.wrapper {
    width: 100%;
    padding: 18px 22px;
    background-color: var(--main-bg-300);
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}
.weather-text {
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    margin-bottom: 8px;
    color: var(--neutral-300);
}
.image {
    width: 60px;
    aspect-ratio: 1;
    margin-bottom: 32px;
    object-fit: contain;
}
.flex-container {
    display: flex;
    align-items: center;
}
.max-temp-text {
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    color: var(--neutral-300);
    margin-right: 16px;
}
.min-temp-text {
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    color: var(--neutral-500);
}
</style>
