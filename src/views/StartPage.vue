<template>
  <div class="wrap">
    <div class="wrap__inner">
      <p class="text font-24 m-b-20">マトをクリックしてscoreを稼ごう！！</p>
    
      <div class="player-name font-24 m-b-20">
        <p class="player-name__text m-b-10">PlyerName</p>
        <input type="text" v-model="name" class="player-name__name">
      </div>
      <router-link to="/game" @click="start" class="button">スタート</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ''
    }
  },
  created() {
    this.$store.commit('reset')
  },
  methods: {
    start() {
      this.$store.commit('playerName', this.name)
    }
  }
}
</script>

<style lang='scss' scoped>
  @import '../assets/scss/start.scss';
</style>