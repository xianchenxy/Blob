<script lang="ts" setup>
import {contact} from '@DataConfig/user.json';

const {html: about} = await import('@DataConfig/aboutMe.md');
</script>

<template>
	<h1 style="font-size: 200%; text-align: center">About Me</h1>
	<p>Who am I</p>
	<el-divider />
	<main>
		<div class="about center">
			<div class="vuepress-markdown-body" v-html="about"></div>
		</div>
		<div class="contact">
			<h2>Contact Me</h2>
			<div class="grid-3_xs-1_sm-2_md-2 gridContainer">
				<div v-for="item in Object.keys(contact)" class="col">
					<a :href="contact[item as keyof typeof contact]" target="_blank">
						<div class="contactItem">
							<h3>{{ item }}</h3>
							<p>{{ contact[item as keyof typeof contact] }}</p>
						</div>
					</a>
				</div>
			</div>
		</div>
	</main>
</template>

<style scoped lang="scss">
@import url(../../public/styles/gridlex.min.css);

p {
	text-align: center;
	font-style: italic;
	opacity: 0.5;
}

.about {
	.vuepress-markdown-body {
		max-width: 805px;
	}

	::v-deep(li) {
		margin: 12px 0;
	}
}

.contact {
	box-sizing: border-box;

	h2 {
		text-align: center;
		width: 100%;
		margin-bottom: 50px;
	}

	.gridContainer {
		max-width: calc(100vw - 0.5rem * 2);
		justify-content: center;
	}

	.contactItem {
		margin: 0 auto;
		max-width: 400px;
		text-align: center;
		background-color: rgb(var(--background-color));
		box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.3);
		border-radius: 20px;
		cursor: pointer;
		padding: 15px;
		transition: all 0.25s ease;
		word-wrap: break-word;

		&:hover {
			transform: scale(1.05);
		}

		p {
			font-size: 14px;
		}

		* {
			margin-bottom: 10px;
		}
	}
}
</style>
