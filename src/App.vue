<template>
    <div className="container">
        <Loader v-if="isLoading" />
        <WeatherLocation
            v-else
            :weather="`${currentWeather.weather?.[0].main}`"
            :location="`${currentWeather.name}`"
            :temp-unit="'C'"
            :temp="tempConverter(currentWeather.main?.temp)"
            :on-search-current-location="handleSearchCurrentLocation"
            :on-search-place="handleSearchPlace"
        />
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import WeatherLocation from './components/WeatherLocation.vue';
import useCurrentLocation from './composable/useCurrentLocation';
import useFetch from './composable/useFetch';
import tempConverter from './modules/tempConverter';
import { WeatherApiDataType } from './types/api-data/weather-api';
import Loader from './components/core/Loader.vue';

const currentWeather = ref<WeatherApiDataType>({} as WeatherApiDataType);
const isLoading = ref<boolean>(true);

const location = useCurrentLocation();

const handleSearchCurrentLocation = () => {};

const handleSearchPlace = () => {};

watch(location, async () => {
    const { request } = useFetch({
        query: {
            lat: location.data.latitude,
            lon: location.data.longitude,
        },
    });

    if (location.data) {
        const res = await request();
        currentWeather.value = await res?.data;
        isLoading.value = false;
    }
});
</script>
