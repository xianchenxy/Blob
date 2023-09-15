import {defineStore} from 'pinia';
import {useDark} from '@vueuse/core';

export const appStore = defineStore({
    id: 'app',
    state() {
        return {
            isDark: useDark()
        };
    }
});