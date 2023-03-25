<template>
	<div class="target" @click="hitTarget"></div>
</template>

<script>
export default {
	mounted() {
		this.randTarget();
	},
	methods: {
		hitTarget() {
			this.$store.commit('updateScore');
			this.randTarget();
		},
		randTarget() {
			let target = document.getElementsByClassName('target');
			let vertical = Math.floor(Math.random() * 100);
			let horizontal = Math.floor(Math.random() * 100);
			target[0].style.position = 'absolute';
			target[0].style.top = vertical + '%';
			target[0].style.left = horizontal + '%';
		},
	},
};
</script>

<style scoped>
@import '../assets/scss/target.scss';
</style>
