<script setup lang="ts">
import {onMounted, ref} from 'vue';
import {appStore} from '@/stores';
import {ElMessageBox, ElNotification} from 'element-plus';
import 'element-plus/theme-chalk/src/message-box.scss';
import 'element-plus/theme-chalk/src/notification.scss';

let isPlay = ref(false);
const store = appStore();

interface CustomAudio extends HTMLAudioElement {
}

import audioFile from '../../../public/audio/FreeLoop.mp3';

const audio = ref<CustomAudio | null>(null);
onMounted(() => {
	audio.value!.addEventListener('ended', () => {
		isPlay.value = false;
	});
});

function handleClick() {
	if (isPlay.value) {
		audio.value!.pause();
		isPlay.value = false;
	} else {
		const confirmTime = sessionStorage.getItem('no-confirm-volume');
		let promise: Promise<any> = Promise.resolve();

		if (!confirmTime || +confirmTime < +Date.now()) {
			promise = ElMessageBox.alert('请注意音量哦', '确定播放背景音乐吗？', {
				type: 'warning',
				confirmButtonText: 'OK，播放吧',
				showCancelButton: true,
				cancelButtonText: '先等等~'
			});

			promise.then(() => {
				// 确认加一个0.5h有效期，避免重复确认
				sessionStorage.setItem('no-confirm-volume', (+Date.now() + 3600 / 2 * 1000).toString());
			}, () => {
			});
		}

		promise.then(() => {
			audio.value!.play();
			audio.value!.volume = 0.7;
			isPlay.value = true;

			ElNotification({
				title: `歌曲：《${store.defaultMusic}》已播放`,
				message: '请欣赏~',
				position: 'bottom-right'
			});
		}, () => {
		});
	}
}
</script>

<template>
	<div style="font-size: 0;">
		<svg v-if="store.isDark" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
			 fill="#fff"
			 :class="{'playing': isPlay}"
			 @click="handleClick">
			<path d="M0 0h24v24H0z" fill="none" />
			<path v-if="isPlay"
				  d="M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z" />
			<path v-else
				  d="M4.27 3L3 4.27l9 9v.28c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4v-1.73L19.73 21 21 19.73 4.27 3zM14 7h4V3h-6v5.18l2 2z" />
		</svg>
		<svg v-else xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000"
			 :class="{'playing': isPlay}"
			 @click="handleClick">
			<path d="M0 0h24v24H0z" fill="none" />
			<path v-if="isPlay"
				  d="M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z" />
			<path v-else
				  d="M4.27 3L3 4.27l9 9v.28c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4v-1.73L19.73 21 21 19.73 4.27 3zM14 7h4V3h-6v5.18l2 2z" />
		</svg>

		<audio ref="audio" :src="audioFile"></audio>
	</div>
</template>

<style scoped lang="scss">
@keyframes audioPlay {
	25% {
		transform: rotate(-30deg);
	}

	50% {
		transform: rotate(0deg);
	}

	75% {
		transform: rotate(30deg);
	}

	100% {
		transform: rotate(0deg);
	}
}

svg.playing {
	animation: audioPlay 1.4s linear infinite;
}
</style>