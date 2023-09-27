import {defineStore} from 'pinia';
import {useDark} from '@vueuse/core';

export const appStore = defineStore({
    id: 'app',
    state() {
        return {
            isDark: useDark()
        };
    },
    getters: {
        getPostCoverSrc() {
            return (name: string = 'default-vue.png'): string => {
                return /^https?:/.test(name) ? name : new URL(`../../posts/assets/${name}`, import.meta.url).href;
            };
        }
    }
});