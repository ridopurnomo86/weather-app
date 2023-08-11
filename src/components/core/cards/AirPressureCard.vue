<template>
    <article class="air-pressure-card-container">
        <p class="title-text">Air Pressure</p>
        <div class="flex-container">
            <h3 class="total-air-text">{{ airPressure }}</h3>
            <p class="air-text">&nbsp;mb</p>
        </div>
    </article>
</template>

<script setup lang="ts">
defineProps<{ airPressure: number }>();
</script>

<style scoped>
.air-pressure-card-container {
    padding: 24px 0px;
    background-color: var(--main-bg-300);
    max-width: 328px;
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
.total-air-text {
    font-size: 64px;
    font-weight: 700;
    line-height: 75px;
    color: var(--neutral-300);
}
.air-text {
    font-size: 36px;
    font-weight: 500;
    line-height: 42px;
    color: var(--neutral-300);
}
</style>
