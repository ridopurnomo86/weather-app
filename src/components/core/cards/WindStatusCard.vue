<template>
    <article class="wind-status-card-container">
        <p class="title-text">Wind Status</p>
        <div class="flex-container mb-4">
            <h3 class="total-wind-text">{{ windSpeed }}</h3>
            <p class="wind-text">&nbsp;mph</p>
        </div>
        <div class="flex-container-center">
            <div class="direction-icon" :style="{ transform: `rotate(${45 + degree}deg)` }">
                <img src="../../../assets/icons/direction.svg" alt="direction-icon" />
            </div>
            <p class="wsw-text">&nbsp;WSW</p>
        </div>
    </article>
</template>

<script setup lang="ts">
defineProps<{ windSpeed: number; degree: number }>();
</script>

<style scoped>
.mb-4 {
    margin-bottom: 32px;
}
.wind-status-card-container {
    padding: 24px 0px;
    background-color: var(--main-bg-300);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.direction-icon {
    --default-degree: 45deg;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: rotate(var(--default-degree));
    padding: 8px;
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

.flex-container-center {
    display: flex;
    align-items: center;
}

.total-wind-text {
    font-size: 64px;
    font-weight: 700;
    line-height: 75px;
    color: var(--neutral-300);
}
.wind-text {
    font-size: 36px;
    font-weight: 500;
    line-height: 42px;
    color: var(--neutral-300);
}

.wsw-text {
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    color: var(--neutral-300);
    margin-left: 8px;
}
</style>
