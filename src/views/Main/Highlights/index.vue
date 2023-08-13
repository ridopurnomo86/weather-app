<template>
    <main class="info-container">
        <div class="container">
            <div class="filter-temperature-container">
                <button class="temperature-type-button">
                    &deg;
                    <p>C</p>
                </button>
                <button class="temperature-type-button">
                    &deg;
                    <p>F</p>
                </button>
            </div>
            <DailyWeatherCardList :forecasts="forecastWeather.value" />
            <h1 class="title-text">Today’s Hightlights</h1>
            <div class="grid-highlights-container">
                <WindStatusCard
                    :wind-speed="Number(speedConverter(currentWeather.wind.speed))"
                    :degree="currentWeather.wind.deg"
                />
                <HumidityCard :humidity-percentage="currentWeather.main.humidity" />
                <VisibilityCard :visibility="currentWeather.visibility" />
                <AirPressureCard :air-pressure="currentWeather.main.pressure" />
            </div>
        </div>
        <Footer />
    </main>
</template>

<script setup lang="ts">
import HumidityCard from 'components/core/cards/HumidityCard.vue';
import Footer from 'components/core/Footer.vue';
import VisibilityCard from 'components/core/cards/VisibilityCard.vue';
import WindStatusCard from 'components/core/cards/WindStatusCard.vue';
import AirPressureCard from 'components/core/cards/AirPressureCard.vue';
import DailyWeatherCardList from 'components/core/data-display/DailyWeatherCardList.vue';
import { speedConverter } from 'modules/speedConverter';
import { WeatherApiDataType } from '@/types/api-data/weather-api';

defineProps<{ forecastWeather: { value: WeatherApiDataType[] }; currentWeather: WeatherApiDataType }>();
</script>

<style scoped>
.info-container {
    background-color: var(--main-bg-400);
    width: 100%;
    height: 100%;
    padding: 42px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.container {
    --max-width: 960px;
    --container-padding: 4rem;
    width: min(var(--max-width), 100% - (var(--container-padding) * 2));
    margin-inline: auto;
}

.grid-highlights-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(308px, 1fr));
    gap: 24px;
}
.title-text {
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    color: var(--neutral-300);
    margin-bottom: 32px;
}
.filter-temperature-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 66px;
}
.temperature-type-button {
    border: none;
    width: auto;
    background: none;
    color: var(--neutral-300);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 12px;
    border-radius: 100%;
    background-color: var(--main-bg-500);
    font-size: 18px;
    font-weight: 700;
    line-height: 21px;
    cursor: pointer;
    margin-right: 12px;
}
.temperature-type-button:last-child {
    margin-right: 0px;
}
</style>
