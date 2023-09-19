<script lang="ts" setup>
import {useRouter} from 'vue-router';
import {appStore} from '@/stores';
import {computed, reactive} from 'vue';

const props = defineProps({
	title: String,
	description: String,
	link: [String, Array],
	linkPrefixText: [String, Array],
	img: String,
	cover: String,
	vlog: String
});

const ProjectTitle = props.title || 'My Fantastic Project';
const backgroundImg = props.img || 'default.png';
const projectLinkImg = props.cover || 'github.svg';
const renderLink = [props.link].flat();
const renderLinkPrefixText = [props.linkPrefixText || 'link: '].flat();

const router = useRouter();

// function goPost(ProjectTitle: String) {
// 	router.push(`/post/${ProjectTitle}`);
// 	// if postName.md不存在，将在ViewPost中跳转404
// }

// 获取图片的动态路径
const getSrc = (name: string) => new URL(`../../assets/project/${name}`, import.meta.url).href;

const store = appStore();
const themeVar = computed(() => store.isDark ? 'var(--el-color-white)' : 'var(--el-color-black)');
</script>

<template>
	<div class="project-card">
		<div>
			<div class="subtitle-wrap">
				<img :src="getSrc(projectLinkImg)" width="20" height="20" alt="project icon" />
				<!--					<span class="subtitle" @click="goPost(ProjectTitle)">{{ ProjectTitle }}</span>-->
				<span class="subtitle">{{ ProjectTitle }}</span>
			</div>
			<div class="text">{{ description }}</div>

			<div class="content-wrap">
				<img :src="getSrc(backgroundImg)" alt="" />
			</div>
		</div>

		<div class="side-btn">
			<el-tooltip v-if="vlog" content="watch introduction vlog" placement="top" :enterable="false">
				<a :href="vlog" target="_blank">
					<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
						 :fill="themeVar">
						<rect fill="none" height="24" width="24" y="0" />
						<path
							d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M9.5,16.5v-9l7,4.5L9.5,16.5z" />
					</svg>
				</a>
			</el-tooltip>

<!--			<el-tooltip content="project details" placement="top" :enterable="false">-->
<!--				<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" :fill="themeVar">-->
<!--					<path d="M0 0h24v24H0z" fill="none" />-->
<!--					<path-->
<!--						d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />-->
<!--				</svg>-->
<!--			</el-tooltip>-->

			<el-tooltip>
				<template #content>
					<p style="font-size: 18px;font-weight:bold;line-height: 1.5;margin-bottom: 12px;">project online
						website</p>
					<ul style="font-size: 14px;">
						<li v-for="(link, index) in renderLink" style="text-indent: 2em" :key="index">
							{{ renderLinkPrefixText[index] }}
							<a :href="link" target="_blank">{{ link }}</a>
						</li>
					</ul>
				</template>

				<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" :fill="themeVar">
					<path d="M0 0h24v24H0z" fill="none" />
					<path
						d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
				</svg>
			</el-tooltip>
		</div>
	</div>
</template>

<style scoped lang="scss">
li {
	list-style-type: none;
	max-width: 400px;
	margin: 6px;

	a {
		color: inherit;
		word-break: break-all;
		text-decoration: underline;
	}

	a:hover {
		color: var(--el-color-primary);
		text-decoration: none;
	}
}

.project-card {
	gap: 16px;
	display: flex;
	min-width: 350px;
	max-width: 1400px;
}

.subtitle-wrap {
	align-items: center;
	justify-content: center;
	gap: 8px;
	display: flex;
	height: 40px;
	margin-bottom: 16px;

	.subtitle {
		font-size: 18px;
	}

	img {
		border-radius: 4px;
	}
}

.text {
	text-indent: 2em;
	margin-bottom: 12px;
	color: var(--el-text-color-regular);
}

.content-wrap {
	position: relative;

	img {
		width: 100%;
		min-height: 250px;
		object-fit: contain;
		border-radius: 20px;
		box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.4);
	}
}

.side-btn {
	flex-direction: column;
	gap: 8px;
	justify-content: end;
	display: flex;
}
</style>
