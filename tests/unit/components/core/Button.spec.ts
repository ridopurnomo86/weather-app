import { describe, it, expect, vi } from 'vitest';
import { mount, shallowMount } from '@vue/test-utils';
import Button from 'components/core/Button.vue';

describe('Button', () => {
    it('should display Button', async () => {
        const mockOnclick = vi.fn();

        const text = 'Search for places';
        const comp = mount(Button, { props: { text, onClick: mockOnclick } });

        expect(comp.find('button').text()).toBeTruthy();
        expect(comp.find('p').text()).toBe('Search for places');

        await comp.find('button').trigger('click');

        expect(mockOnclick).toBeCalledTimes(1);
    });

    it.each([
        {
            variant: 'primary',
            expectBg: '#3c47e9',
        },
        {
            variant: 'secondary',
            expectBg: '#6e707a',
        },
    ])('should display Button style based on variant $variant', ({ variant }) => {
        const text = 'Search for places';

        const comp = shallowMount(Button, {
            props: {
                text,
                variant,
            },
        });

        expect(comp.find('[aria-label="core-button"]').isVisible()).toBe(true);
        expect(comp.attributes('data-variant')).toBe(variant);
    });
});
