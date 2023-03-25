<template>
	<div class="wrap">
		<div class="result font-24">
			<p class="reslut__text">あなたのScore</p>
			<p class="reslut__text">Player：{{ showName }}</p>
			<p class="reslut__text">Score：{{ showScore }}</p>
		</div>
		<transition-group appear name="fade" tag="ul" class="result-list is-list m-b-30">
			<li v-for="(result, index) in results" :key="result.name" class="result-list__item font-18" :style="{ 'transition-delay': `${index * 0.3 + 0.3}s` }">
				<p>{{ index + 1 }}位</p>
				<p class="result-list__text">Player：{{ result.fields.name.stringValue }}</p>
				<p class="result-list__text">Score：{{ result.fields.score.integerValue }}</p>
			</li>
		</transition-group>
		<router-link to="/" class="button">もう一度</router-link>
	</div>
</template>

<script>
export default {
	data() {
		return {
			results: [],
		};
	},
	beforeRouteLeave(to, from, next) {
		this.$store.commit('reset');
		next();
	},
	created() {
		this.$store.dispatch('resultList');
		this.$store.commit('ranking');
		this.results = this.$store.getters.results;
	},
	computed: {
		showName() {
			return this.$store.state.name;
		},
		showScore() {
			return this.$store.state.score;
		},
	},
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/result.scss';
</style>
