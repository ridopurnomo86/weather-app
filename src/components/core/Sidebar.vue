<template>
    <div class="overlay" :style="{ display: isOpen ? 'block' : 'none' }"></div>
    <aside class="sidebar-container" aria-label="sidebar" :style="{ display: isOpen ? 'block' : 'none' }">
        <div class="flex-end-container">
            <button class="mb-10 cross-icon" @click="onClose">
                <img src="../../assets/icons/cross.svg" alt="cross-icon-svg" />
            </button>
        </div>
        <div class="flex-container">
            <div class="input-container">
                <span class="search-icon">
                    <img src="../../assets/icons/search.svg" alt="search-icon" />
                </span>
                <input v-model="inputCountry" type="text" placeholder="search location" class="input" />
            </div>
            <Button class="button" :variant="'primary'" :text="'Search'" @click="onSearchCountry(inputCountry)" />
        </div>
        <div class="list-countries-container">
            <div v-for="country in defaultCountries" :key="country.id">
                <div class="country-container" @click="onSelectedCountry(country)">
                    <p class="country-text">{{ country.name }}</p>
                    <div class="right-icon">
                        <img src="../../assets/icons/right-arrow.svg" alt="right-arrow-icon" />
                    </div>
                </div>
            </div>
        </div>
    </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from 'components/core/Button.vue';

const inputCountry = ref('');

const defaultCountries = [
    {
        id: 1,
        name: 'London',
    },
    {
        id: 2,
        name: 'Barcelona',
    },
];

export interface SidebarPropsType {
    isOpen: boolean;
    onClose: () => void;
    onSelectedCountry: (country: { id: number; name: string }) => void;
    onSearchCountry: (value: string) => void;
}

withDefaults(defineProps<SidebarPropsType>(), {
    isOpen: false,
});
</script>

<style scoped>
.mb-10 {
    margin-bottom: 40px;
}
.flex-end-container {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    background: none;
    border: none;
}
.cross-icon {
    cursor: pointer;
    background: none;
    border: none;
}
.sidebar-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 459px;
    z-index: 10;
    background-color: var(--main-bg-300);
    padding: 42px 28px;
    height: 100%;
}
@media screen and (max-width: 1200px) {
    .sidebar-container {
        width: 100%;
    }
}
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.2);
}
.flex-container {
    display: flex;
}
.input-container {
    position: relative;
    display: flex;
    flex-direction: column;
    width: fit-content;
}
.input {
    border: 1px solid var(--neutral-300);
    padding: 8px 16px 8px 32px;
    font-family: Raleway;
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    color: var(--neutral-700);
}
.search-icon {
    position: absolute;
    top: 11px;
    left: 12px;
}
.button {
    padding: 0 20px;
    margin-left: 12px;
}
.list-countries-container {
    margin-top: 56px;
}
.country-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 24px 12px;
    cursor: pointer;
    transition: 0.3s ease-out;
}
.country-container:hover {
    border: 1px solid var(--neutral-700);
}
.right-icon {
    display: none;
}
.country-container:hover > .right-icon {
    display: block;
}
.country-container:last-child {
    margin-top: 16px;
}
.country-text {
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    color: var(--neutral-300);
}
</style>
