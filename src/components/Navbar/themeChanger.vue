<script lang="ts" setup>
import {useDark, useToggle} from '@vueuse/core';
import {appStore} from '@/stores';
import {ref} from 'vue';

const store = appStore();
const isDark = store.isDark;
const toggleDark = useToggle(useDark());

let val = ref(isDark);

function toggleTheme() {
	toggleDark();
	store.$patch((state: any) => {
		state.isDark = val;
	});
}
</script>

<template>
	<el-switch v-model="val" size="large" inline-prompt
			   active-icon="Sunny" inactive-icon="Moon"
			   @click="toggleTheme"
	></el-switch>
</template>

<style scoped lang="scss"></style>
