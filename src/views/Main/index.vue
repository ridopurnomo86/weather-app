<template>
    <div className="main-container">
        <Sidebar
            :is-open="isOpenSidebar"
            :on-close="handleCloseSidebar"
            :on-search-country="handleSearchCountryWeather"
            :on-selected-country="handleSelectedCountry"
        />
        <Loader v-if="isLoading" />
        <div v-else class="grid-container">
            <WeatherLocation
                :weather="`${currentWeather.weather?.[0].main}`"
                :location="`${currentWeather.name}`"
                :temp-unit="'C'"
                :temp="Number(currentWeather.main?.temp.toFixed())"
                :on-search-current-location="handleSearchCurrentLocation"
                :on-search-place="handleOpenSidebar"
            />
            <Highlights :current-weather="currentWeather" :forecast-weather="forecastWeather" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import WeatherLocation from 'components/WeatherLocation.vue';
import Sidebar from 'components/core/Sidebar.vue';
import Highlights from './Highlights/index.vue';
import useCurrentLocation from 'composable/useCurrentLocation';
import useFetch from 'composable/useFetch';
import { WeatherApiDataType } from 'types/api-data/weather-api';
import Loader from 'components/core/Loader.vue';
import useForecast from 'composable/useForecast';

const currentWeather = ref<WeatherApiDataType>({} as WeatherApiDataType);

const forecastWeather = ref<any>(null);

const isOpenSidebar = ref<boolean>(false);

const isLoading = ref<boolean>(true);

const location = useCurrentLocation();

const handleSearchCountryWeather = async (country: string) => {
    isLoading.value = true;

    const { request, error } = useFetch({
        path: '/weather',
        query: {
            q: country,
            units: 'metric',
        },
    });

    const forecast = await useForecast({
        country,
    });

    const res = await request();

    if (error && !res) {
        isLoading.value = false;
        return toast((error.value as any).response?.data?.message, { autoClose: 3000, type: 'error' });
    }

    currentWeather.value = await res?.data;
    forecastWeather.value = await forecast;
    isLoading.value = false;
    handleCloseSidebar();
};

const handleSearchCurrentLocation = () => {
    isLoading.value = true;
    useCurrentLocation();
};

const handleOpenSidebar = () => {
    isOpenSidebar.value = true;
};

const handleCloseSidebar = () => {
    if (isOpenSidebar.value) {
        isOpenSidebar.value = false;
    }
};

const handleSelectedCountry = async (country: { id: number; name: string }) => {
    isLoading.value = true;

    const { request } = useFetch({
        path: '/weather',
        query: {
            q: country.name,
            units: 'metric',
        },
    });

    const forecast = await useForecast({
        country: country.name,
    });

    const res = await request();
    currentWeather.value = await res?.data;
    forecastWeather.value = await forecast;
    isLoading.value = false;
    handleCloseSidebar();
};

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
.main-container {
    position: relative;
}
.grid-container {
    display: grid;
    grid-template-columns: 459px auto;
    min-height: 100vh;
}

@media screen and (max-width: 1200px) {
    .grid-container {
        grid-template-columns: 100%;
    }
}
</style>
