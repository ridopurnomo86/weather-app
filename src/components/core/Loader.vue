<template>
    <div class="overlay-container">
        <div class="flex-container">
            <div class="loader"></div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.flex-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}
.overlay-container {
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 100;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.4);
}
.loader {
    border: 4px solid rgba(0, 0, 0, 1);
    border-left-color: transparent;
    border-radius: 50%;
}

.loader {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: transparent;
    width: 36px;
    height: 36px;
}

.loader {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: transparent;
    width: 36px;
    height: 36px;
    animation: spin89345 1s linear infinite;
}

@keyframes spin89345 {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
