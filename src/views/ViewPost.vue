<script lang="ts" setup>
import {ref} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {posts} from '@posts/posts.json';
import Toc from '../components/Toc/index.vue';

const route = useRoute();
const router = useRouter();
const postName = route.params.postName as string;
const post = ref<String>('');
const postCover = ref<string>('');
const mdFiles = await import.meta.glob(`@posts/post/**/*.md`, {as: 'url'});
const curMdFilePath = Object.keys(mdFiles).find(fileName => fileName.includes(postName)) || '';

try {
    // 动态导入md，异步导出html
    const {html} = await import(curMdFilePath);
    post.value = html;
    const {cover} = posts.filter(post => post.name === postName)[0];
    postCover.value = cover;
} catch (e) {
    // if postName不存在，跳转404
    console.error('postName不存在，跳转404', e);
    console.debug('posts: ', post, 'postName: ', postName);
    router.push("/404");
}

const imgRootPath = new URL(`@posts/assets`, import.meta.url).pathname;
const paths = import.meta.glob(`@posts/assets/*`, {as: 'url'});
// 获取图片的动态路径
const getSrc = (name: string) => Object.keys(paths).find(path => path === `${imgRootPath}/${name}`);
</script>

<template>
	<div class="container">
		<!-- 作者信息介绍 -->
		<div class="cover">
			<img :src="getSrc(postCover)" alt="cover" />
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
