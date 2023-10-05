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
            return (name?: string | undefined | ''): string => {
                name = name || 'default-js.avif';
                return /^https?:/.test(name) ? name : new URL(`../assets/post/${name}`, import.meta.url).href;
            };
        }
    }
});