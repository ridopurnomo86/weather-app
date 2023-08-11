<template>
    <div className="container">
        <Loader v-if="isLoading" />
        <div v-else class="grid-container">
            <WeatherLocation
                :weather="`${currentWeather.weather?.[0].main}`"
                :location="`${currentWeather.name}`"
                :temp-unit="'C'"
                :temp="Number(currentWeather.main?.temp.toFixed())"
                :on-search-current-location="handleSearchCurrentLocation"
                :on-search-place="handleSearchPlace"
            />
            <div class="info-container">
                <DailyWeatherCardList :forecasts="forecastWeather.value" />
                <VisibilityCard :visibility="currentWeather.visibility" />
                <AirPressureCard :air-pressure="currentWeather.main.pressure" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import WeatherLocation from 'components/WeatherLocation.vue';
import VisibilityCard from './components/core/cards/VisibilityCard.vue';
import AirPressureCard from './components/core/cards/AirPressureCard.vue';
import DailyWeatherCardList from 'components/core/data-display/DailyWeatherCardList.vue';
import useCurrentLocation from 'composable/useCurrentLocation';
import useFetch from 'composable/useFetch';
import { WeatherApiDataType } from 'types/api-data/weather-api';
import Loader from 'components/core/Loader.vue';
import useForecast from './composable/useForecast';

const currentWeather = ref<WeatherApiDataType>({} as WeatherApiDataType);

const forecastWeather = ref<any>(null);

const isLoading = ref<boolean>(true);

const location = useCurrentLocation();

const handleSearchCurrentLocation = () => {};

const handleSearchPlace = () => {};

watch(location, async () => {
    const { request } = useFetch({
        path: '/weather',
        query: {
            lat: location.data.latitude,
            lon: location.data.longitude,
            units: 'metric',
        },
    });

    const forecast = await useForecast({
        latitude: location.data.latitude,
        longitude: location.data.longitude,
    });

    if (location.data) {
        const res = await request();
        currentWeather.value = await res?.data;
        forecastWeather.value = await forecast;
        isLoading.value = false;
    }
});
</script>

<style scoped>
.grid-container {
    display: grid;
    grid-template-columns: 459px auto;
    min-height: 100vh;
}
.info-container {
    background-color: var(--main-bg-400);
    width: 100%;
}
</style>
