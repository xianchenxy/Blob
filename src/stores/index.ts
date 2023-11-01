import {defineStore} from 'pinia';
import {useDark} from '@vueuse/core';

export const appStore = defineStore({
    id: 'app',
    state() {
        return {
            isDark: useDark(),
            defaultFileName: 'default.png'
        };
    },
    getters: {
        getPostCoverSrc(state) {
            return (name?: string | undefined | ''): string => {
                name = name || state.defaultFileName;
                if (/^https?:/.test(name)) return name;

                if (/^#posts#/.test(name)) {
                    return new URL(`../../posts/post/${name.slice('#posts#'.length)}`, import.meta.url).href;
                }

                return new URL(`../assets/post/${name}`, import.meta.url).href;
            };
        }
    }
});