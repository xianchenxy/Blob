<script lang="ts" setup>
import {ref} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {posts} from '@posts/posts.json';
import Toc from '../components/Toc/index.vue';
import {appStore} from '@/stores';

const store = appStore();
const route = useRoute();
const router = useRouter();
const postName = route.params.postName as string;
const post = ref<String>('');
const postCover = ref<string>('');

let mdFileFn = null;
let globs = null;
try {
	// 1.获取全部 post 位置
	globs = import.meta.glob(`../../posts/post/**/*.md`);
	const reg = new RegExp(`\.\./\.\./posts/post/((.*?)?${postName})\.md$`);
	for (let path in globs) {
		if (globs.hasOwnProperty(path) && reg.test(path)) {
			// 2. 获取到 post 的懒加载函数
			mdFileFn = globs[path];
			break;
		}
	}
	// 动态导入md，异步导出html
	let {html} = await mdFileFn!();
	// 获取到md文件中所有的相对路径图片
	html = html.replace(/(?<=<img\ssrc=('|"))(.+?)(?=\1)/g, function (imgSrc: string) {
		// 处理非http链接的图片
		if (!/^https?/.test(imgSrc)) {
			// 需要进行转换的路径（通常为系列专栏，例如设计模式design_patterns
			if (/^#(.*?)#/.test(imgSrc)) {
				const prefix = imgSrc.match(/^#(.*?)#/)![1];
				imgSrc = imgSrc.replace(/^#.*?#/, '');
				return new URL(`../../posts/post/${prefix}/${imgSrc}`, import.meta.url).href;
			}
			// 不需要转换，可直接用
			return new URL(`../../posts/post/${postName}/${imgSrc}`, import.meta.url).href;
		}
		return imgSrc;
	});

	post.value = html;
	const {cover} = posts.filter(post => post.name === postName)[0];
	postCover.value = cover;
} catch (e) {
	// if postName不存在，跳转404
	console.error('postName不存在，跳转404', e);
	console.debug('posts: ', post, 'postName: ', postName, 'mdFileFn', mdFileFn, 'globs', globs);
	// router.push('/404');
}

function handleError(ev: Event) {
	const {src} = ev.target as HTMLImageElement;
	if (src.indexOf('undefined') === -1 || src.indexOf(store.defaultFileName) === -1) {
		(ev.target as HTMLImageElement).src = store.getPostCoverSrc();
	}
}
</script>

<template>
	<div class="container">
		<!-- 作者信息介绍 -->
		<div class="cover">
			<img :src="store.getPostCoverSrc(postCover)" :onerror="handleError" alt="cover" />
		</div>
		<!-- 异步组件 -->
		<div class="post-body vuepress-markdown-body" v-html="post" v-highlight></div>
		<!-- toc组件 -->
		<toc></toc>
	</div>
</template>

<style scoped lang="scss">
.container {
	.cover,
	.post-body {
		max-width: 805px;
		margin: 0 auto;
	}

	.cover {
		border-radius: 10px;
		overflow: hidden;
		height: 400px;

		img {
			// img是行内元素，是不能直接设置宽高的
			display: block;
			width: 100%;
			height: 100%;
			// object-fit: cover;
		}
	}
}
</style>
