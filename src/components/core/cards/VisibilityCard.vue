<template>
    <article class="visibility-card-container">
        <p class="title-text">Visibility</p>
        <div class="flex-container">
            <h3 class="total-miles-text">{{ visibilityConverter(visibility) }}</h3>
            <p class="miles-text">&nbsp;miles</p>
        </div>
    </article>
</template>

<script setup lang="ts">
import { visibilityConverter } from '@/modules/visibilityConverter';

defineProps<{ visibility: number }>();
</script>

<style scoped>
.visibility-card-container {
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
.total-miles-text {
    font-size: 64px;
    font-weight: 700;
    line-height: 75px;
    color: var(--neutral-300);
}
.miles-text {
    font-size: 36px;
    font-weight: 500;
    line-height: 42px;
    color: var(--neutral-300);
}
</style>
