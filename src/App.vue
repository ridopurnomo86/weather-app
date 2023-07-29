<script setup lang="ts">
import WeatherLocation from './components/WeatherLocation.vue';
import Button from './components/core/Button.vue';
</script>

<template>
    <Button variant="primary" :text="'Search for places'" :on-click="() => console.log('clicked')" />
    <div className="container">
        <WeatherLocation />
    </div>
</template>
