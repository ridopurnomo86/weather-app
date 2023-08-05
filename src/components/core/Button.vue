<template>
    <button
        :class="`button-container ${variant}`"
        aria-label="core-button"
        :data-testid="'core-button'"
        @click="onClick"
    >
        <!-- <slot /> -->
        <p class="button-text">{{ text }}</p>
    </button>
</template>

<script setup lang="ts">
export interface ButtonPropsType {
    variant?: 'primary' | 'default';
    text?: string;
    onClick?: () => void;
}

withDefaults(defineProps<ButtonPropsType>(), {
    variant: 'default',
});
</script>

<style>
.button-container {
    border: none;
    padding: 12px 18px;
    box-shadow: 0px 4px 4px 0px #00000040;
    cursor: pointer;
    transition: 0.3s;
}

.default {
    background-color: #6e707a;
    color: #e7e7eb;
}

.primary {
    background-color: #3c47e9;
    color: #e7e7eb;
}

.button-text {
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
}
.button-container:hover {
    opacity: 0.8;
}
</style>
