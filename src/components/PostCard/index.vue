<script lang="ts" setup>
import {ref} from 'vue';
import {Ipost} from './types';
import {appStore} from '@/stores';

// 使用泛型参数时，defineProps内部不再接收参数，编译器会自动编译为required
const props = defineProps<{ post: Ipost }>();

const store = appStore();
const isShadow = ref('always');

function handleError(ev: Event) {
	(ev.target as HTMLImageElement).src = store.getPostCoverSrc();
}
</script>

<template>
	<router-link :to="`/post/${post.name}`" class="card_container">
		<el-card class="post_card"
				 :class="{ move_down: isShadow === 'never' }"
				 :body-style="{padding: 0}"
				 @mouseover="isShadow = 'never'"
				 @mouseout="isShadow = 'always'"
		>
			<!-- post封面 -->
			<div class="cover_container">
				<img :class="{ scale_up: isShadow === 'never' }"
					 :style="post.style"
					 :src="store.getPostCoverSrc(post.cover)"
					 :onerror="handleError"
				/>
			</div>
			<!-- post信息 -->
			<div class="post_info">
				<h3>{{ post.title }}</h3>
				<time v-if="post.date">{{ post.date }}</time>
				<p v-if="post.description">{{ post.description }}</p>
				<div v-if="post.tags.length > 0" class="tags">
					<span v-for="tag in post.tags" :key="tag" :data-content="tag">{{ tag }}</span>
				</div>
			</div>
		</el-card>
	</router-link>
</template>

<style scoped lang="scss">
.card_container {
	margin: 20px;

	.post_card {
		width: 380px;
		height: 380px;
		border: 0;
		border-radius: var(--border-radius);
		transition: all 0.3s;
		position: relative;

		.cover_container {
			height: 150px;
			width: 100%;
			font-size: 0;
			border-radius: var(--border-radius);
			overflow: hidden;

			img {
				width: 100%;
				height: 150px;
				object-fit: cover;
				transition: all 0.3s;
			}
		}

		.post_info {
			font-size: 0.85rem;
			padding: 15px;
			max-height: 150px;
			overflow: hidden;

			h3 {
				font-size: 1.2rem;
				overflow: hidden;
				text-overflow: ellipsis;
			}

			p {
				margin-top: 5px;
				opacity: 0.8;

				display: -webkit-box;
				overflow: hidden;
				text-overflow: ellipsis;
				-webkit-box-orient: vertical; //子元素应该被水平或垂直排列
				-webkit-line-clamp: 3; //3行后显示省略号
			}

			.tags {
				position: absolute;
				bottom: 20px;

				span {
					font-weight: bold;
					margin-right: 6px;
					padding: 2px 8px;
					border-radius: 4px;
					background-color: var(--el-color-danger-light-7);
				}

				span:nth-child(4n),
				span[data-content="css" i] {
					background-color: var(--el-color-primary-light-7);
				}

				span[data-content="vue" i] {
					background-color: var(--el-color-success-light-7);
				}

				span[data-content="js" i],
				span[data-content="JavaScript" i] {
					background-color: var(--el-color-warning-light-7);
				}

				span[data-content="design pattern" i] {
					background-color: #3997ab;
				}

				span[data-content="vite" i] {
					background-color: #c88dff;
				}
			}
		}
	}
}
</style>
