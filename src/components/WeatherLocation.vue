<template>
    <div class="sidebar-weather-location-container">
        <div>
            <div className="header-container">
                <Button :text="'Search for places'" :on-click="onSearchPlace" />
                <button class="icon-container" :on-click="onSearchCurrentLocation">
                    <img src="../assets/icons/gps.svg" alt="gps icon" />
                </button>
            </div>
            <div class="weather-image-container">
                <img src="../assets/Cloud-background.png" class="cloud-background" alt="cloud background image" />
                <img :src="`${getImageUrl(weather)}`" class="image" :alt="`image-${weather}`" />
            </div>
        </div>
        <div class="weather-info-container">
            <div class="weather-degree-container">
                <h1 class="weather-degree-text">{{ temp }}</h1>
                <p class="degree-text">
                    &deg;<span>{{ tempUnit }}</span>
                </p>
            </div>
            <p class="weather-type-text">{{ weather }}</p>
            <p class="date-text">Today&nbsp;&#x2022;&nbsp;{{ dayjs().format('ddd, D MMM') }}</p>
            <div class="flex-container">
                <img src="../assets/icons/location.svg" alt="location icon" />
                <p class="location-text">{{ location }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';
import Button from './core/Button.vue';
import { WeatherCategoryType } from '@/types/api-data/weather-api';

export interface WeatherLocationPropsType {
    weather: WeatherCategoryType;
    location: string;
    temp: number;
    tempUnit: string;
    onSearchPlace: () => void;
    onSearchCurrentLocation: () => void;
}

const getImageUrl = (weather: WeatherCategoryType): string | null => {
    switch (weather) {
        case 'Snow':
            return new URL(`../assets/Snow.png`, import.meta.url).href;
        case 'Clear':
            return new URL(`../assets/Clear.png`, import.meta.url).href;
        case 'Thunderstorm':
            return new URL(`../assets/Thunderstorm.png`, import.meta.url).href;
        case 'Drizzle':
            return new URL(`../assets/LightRain.png`, import.meta.url).href;
        case 'Rain':
            return new URL(`../assets/HeavyRain.png`, import.meta.url).href;
        case 'Clouds':
            return new URL(`../assets/HeavyCloud.png`, import.meta.url).href;
        default:
            return null;
    }
};

defineProps<WeatherLocationPropsType>();
</script>

<style scoped>
.flex-container {
    display: flex;
    align-items: center;
}
.header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;
}

.icon-container {
    background-color: #6e707a4d;
    border: none;
    padding: 8px;
    border-radius: 50%;
    cursor: pointer;
}
.sidebar-weather-location-container {
    background-color: var(--main-bg-300);
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 42px 28px;
    overflow: hidden;
}
.weather-image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-shadow: inset 0 0 100% #6db3f2;
    position: relative;
}
.cloud-background {
    position: absolute;
    right: -120px;
    top: 0;
    bottom: 0;
    max-width: 850px;
    aspect-ratio: 1;
    object-fit: cover;
    opacity: 0.3;
}
.shower-image {
    position: relative;
    top: 90px;
}

.weather-info-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}
.weather-degree-container {
    display: flex;
    align-items: flex-end;
    margin-bottom: 87px;
}
.weather-degree-text {
    font-size: 144px;
    font-weight: 500;
    line-height: 145px;
    color: var(--neutral-300);
}
.degree-text {
    font-size: 48px;
    font-weight: 500;
    line-height: 56px;
    color: var(--neutral-500);
}
.weather-type-text {
    font-size: 36px;
    font-weight: 600;
    line-height: 42px;
    color: var(--neutral-500);
    margin-bottom: 87px;
}
.location-text {
    font-size: 18px;
    font-weight: 600;
    line-height: 21px;
    color: var(--neutral-600);
    margin-left: 8px;
}
.date-text {
    font-size: 18px;
    font-weight: 500;
    line-height: 21px;
    color: var(--neutral-600);
    margin-bottom: 32px;
}

@media screen and (max-height: 960px) {
    .weather-degree-container {
        margin-bottom: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .degree-text {
        font-size: 24px;
    }
    .weather-degree-text {
        font-size: 60px;
    }
    .weather-type-text {
        font-size: 24px;
        margin-bottom: 24px;
    }
    .cloud-background {
        display: none;
    }
    .shower-image {
        position: relative;
        max-width: 200px;
        top: 0;
    }
}
</style>
