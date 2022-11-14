<template>
  <div class="wrap">
    <div class="result font-24">
      <p class="reslut__text">Player：{{ showName }}</p>
      <p class="reslut__text">Score：{{ showScore }}</p>
    </div>
    <ul class="result-list">
      <li v-for="result in results" :key="result.name" class="result-list__item font-18">
        <p class="result-list__text">Player：{{result.fields.name.stringValue}}</p>
        <p class="result-list__text">Score：{{result.fields.score.integerValue}}</p>
      </li>
    </ul>
    <router-link to="/" class="button">もう一度</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      results: []
    }
  },
  // beforeRouteLeave (to, from, next) {
  //   this.$store.commit('reset')
  //   console.log(to)
  //   next('/')
  // },
  async created() {
    await this.$store.dispatch('resultList')
    this.$store.commit('ranking')
    this.results = this.$store.getters.results
  },
  computed: {
    showName() {
      return this.$store.state.name
    },
    showScore() {
      return this.$store.state.score
    }
  },
  // watch: {
  //   $route() {
  //     console.log('watch')
  //     this.$store.commit('reset')
  //   }
  // }
}
</script>

<style lang='scss' scoped>
  @import '../assets/scss/result.scss';
</style>