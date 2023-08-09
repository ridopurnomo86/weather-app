import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import DailyWeatherCard from 'components/core/cards/DailyWeatherCard.vue';

describe('DailyWeatherCard', () => {
    it('should display DailyWeatherCard', async () => {
        const comp = mount(DailyWeatherCard, {
            props: { dateTime: 'Tommorow', minTemp: 16, maxTemp: 20, weather: 'Rain' },
        });

        expect(comp.find('p').text()).toBe('Tommorow');
        expect(comp.find('[aria-label="max-temp-text"]').text()).toBe('20°C');
        expect(comp.find('[aria-label="min-temp-text"]').text()).toBe('16°C');
    });

    it.each([
        {
            weather: 'Snow',
            sourceImage: '/src/assets/Snow.png',
        },
        {
            weather: 'Clear',
            sourceImage: '/src/assets/Clear.png',
        },
        {
            weather: 'Thunderstorm',
            sourceImage: '/src/assets/Thunderstorm.png',
        },
        {
            weather: 'Drizzle',
            sourceImage: '/src/assets/LightRain.png',
        },
        {
            weather: 'Rain',
            sourceImage: '/src/assets/HeavyRain.png',
        },
        {
            weather: 'Clouds',
            sourceImage: '/src/assets/HeavyCloud.png',
        },
    ])('should render image DailyWeatherCard based on $weather', async ({ sourceImage, weather }) => {
        const comp = mount(DailyWeatherCard, {
            props: { dateTime: 'Tommorow', minTemp: 16, maxTemp: 20, weather },
        });

        expect(comp.find('img').attributes('src')).toContain(sourceImage);
    });
});
