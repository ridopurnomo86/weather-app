import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import HelloWorld from 'components/HelloWorld.vue';

describe('HelloWorld', () => {
    it('should display header text', () => {
        const msg = 'Hello Vue 3';
        const comp = mount(HelloWorld, { props: { msg } });

        expect(comp.find('h1').text()).toBe('Hello Vue 3');
    });

    it('should increase count depends totalclick', async () => {
        const comp = mount(HelloWorld);

        expect(comp.find('button')).toBeTruthy();

        await comp.find('button').trigger('click');

        expect(comp.find('button').text()).toBe('count is 1');
    });
});
