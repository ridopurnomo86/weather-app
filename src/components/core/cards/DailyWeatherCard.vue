<template>
    <article class="daily-weather-card-container">
        <div class="wrapper">
            <p class="weather-text">Tommorow</p>
            <img src="../../../assets/LightCloud.png" class="image" alt="light-cloud-image" />
            <div class="flex-container">
                <p class="max-temp-text">16°C</p>
                <p class="min-temp-text">16°C</p>
            </div>
        </div>
    </article>
</template>

<script setup lang="ts"></script>

<style scoped>
.daily-weather-card-container {
    max-width: 120px;
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
