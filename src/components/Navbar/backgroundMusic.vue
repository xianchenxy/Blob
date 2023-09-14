<script setup lang="ts">
import {ref} from 'vue';

let isPlay = ref(false);

const audio = ref(new Audio());

function handleClick() {
	if (isPlay.value) {
		audio.value.pause();
		isPlay.value = false;
	} else {
		audio.value.play();
		audio.value.volume = 0.7;
		isPlay.value = true;
	}
}

</script>

<template>
	<div>
		<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000"
			 :data-canPlay="isPlay"
			 @click="handleClick">
			<path d="M0 0h24v24H0z" fill="none" />
			<path v-if="isPlay"
				  d="M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z" />
			<path v-else
				  d="M4.27 3L3 4.27l9 9v.28c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4v-1.73L19.73 21 21 19.73 4.27 3zM14 7h4V3h-6v5.18l2 2z" />
		</svg>

		<audio ref="audio" src="https://mp3.t57.cn:7087/kwlink_d.php?id=228908" autoplay></audio>
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

svg[data-canPlay="true"] {
	animation: audioPlay 1.4s linear;
}
</style>