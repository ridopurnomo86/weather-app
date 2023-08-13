<template>
    <article class="humidity-card-container">
        <p class="title-text">Humidity</p>
        <div class="flex-container mb-4">
            <h3 class="total-humidity-text">{{ humidityPercentage }}</h3>
            <p class="percent-text">%</p>
        </div>
        <div class="flex-between-container">
            <p class="total-percentage-text">0</p>
            <p class="total-percentage-text">50</p>
            <p class="total-percentage-text">100</p>
        </div>
        <span class="percentage">
            <span class="percentage-fill" :style="{ width: `${humidityPercentage}%` }"></span>
        </span>
        <div class="flex-between-container mt-1">
            <p class="total-percentage-text"></p>
            <p class="total-percentage-text"></p>
            <p class="total-percentage-text">%</p>
        </div>
    </article>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ humidityPercentage: number }>(), {
    humidityPercentage: 0,
});
</script>

<style scoped>
.mb-4 {
    margin-bottom: 32px;
}
.mt-1 {
    margin-top: 4px;
}
.humidity-card-container {
    padding: 24px 0px;
    background-color: var(--main-bg-300);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.title-text {
    font-size: 16px;
    font-weight: 500;
    line-height: 42.26px;
    color: var(--neutral-300);
    margin-bottom: 8px;
}
.flex-container {
    display: flex;
    align-items: flex-end;
}
.flex-between-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 229px;
}
.total-humidity-text {
    font-size: 64px;
    font-weight: 700;
    line-height: 75px;
    color: var(--neutral-300);
}

.percent-text {
    font-size: 36px;
    font-weight: 400;
    line-height: 42px;
    color: var(--neutral-300);
}
.total-percentage-text {
    font-family: Raleway;
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
    color: var(--neutral-500);
    margin-bottom: 4px;
}
.percentage {
    position: relative;
    width: 100%;
    background-color: var(--neutral-300);
    height: 8px;
    border-radius: 80px;
    max-width: 229px;
    overflow: hidden;
}
.percentage-fill {
    position: absolute;
    border-radius: 80px;
    top: 0;
    height: 8px;
    width: 20%;
    background-color: var(--info-600);
}
</style>
