<script lang="ts" setup>
import ProjectCard from '../components/ProjectCard/index.vue';
// project所有信息放在project.json里，图片放在default里
import {projects, moduleName, description} from '../../project/project.json';
import {ref} from 'vue';

// 为了均匀子盒子的分布，强行使用flex布局
// 在尾行添加几个空盒子,以使得真盒子左对齐
const postLen = ref(projects.length);
// 指定一行的盒子数
const columnNum = ref(3);
</script>

<template>
	<h1 style="font-size: 200%; text-align: center">{{ moduleName }}</h1>
	<p>{{ description }}</p>
	<el-divider />
	<main>
		<ProjectCard v-for="project in projects" v-bind="project" :key="project.title"></ProjectCard>
		<div v-if="postLen % columnNum > 0"
			 v-for="item in columnNum - (postLen % columnNum)"
			 class="fake-card"
		></div>
	</main>
</template>

<style scoped lang="scss">
p {
	font-size: 100%;
	text-align: center;
	font-style: italic;
	opacity: 0.5;
}

main {
	padding: 0 28px;
	max-width: 1512px;
	margin: 0 auto;
	min-height: 65vh;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;

	* {
		margin: 60px 0;
	}

	.fake-card {
		// 规格和真盒子一样
		margin: 20px;
		width: 100%;
		max-width: 350px;
		visibility: hidden;
	}
}
</style>
