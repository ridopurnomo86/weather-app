<template>
    <div class="sidebar-weather-location-container">
        <div class="weather-image-container">
            <img src="../assets/Shower.png" alt="shower image" />
        </div>
        <div class="weather-info-container">
            <div class="weather-degree-container">
                <h1 class="weather-degree-text">15</h1>
                <p class="degree-text">&deg;<span>C</span></p>
            </div>
            <p class="weather-type-text">Shower</p>
            <p class="date-text">Today&nbsp;&#x2022;&nbsp;Fri, 5 Jun</p>
            <div class="flex-container">
                <img src="../assets/icons/location.svg" alt="location icon" />
                <p class="location-text">Helsinski</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.flex-container {
    display: flex;
    align-items: center;
}
.sidebar-weather-location-container {
    max-width: 459px;
    min-height: 100vh;
    background-color: var(--main-bg-300);
}
.weather-image-container {
    background-image: url('../assets/Cloud-background.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 160%;
    background-clip: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-shadow: inset 0 0 100% #6db3f2;
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
</style>
