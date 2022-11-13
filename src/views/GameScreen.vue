<template>
  <div class="wrap">
    <div class="status font-18">
      <div class="status__inner">
        <p class="status__text">Player：{{ showName }}</p>
        <p class="status__text">Score：{{ showScore }}</p>
        <p class="status__text">Time：{{ time }}</p>
      </div>
    </div>
    <div class="filed">
      <component :is="target"></component>
    </div>
  </div>
</template>

<script>
import Target1 from '../components/GameTarget1.vue';
  export default {
    components: {
      Target1
    },
    data() {
      return {
        time: 5,
        target: "Target1",
      }
    },
    mounted() {
      let timer = setInterval(() => {
        this.timeLeft(this.time);
        if(this.time <= 0) {
          clearInterval(timer);
          this.$store.dispatch('statusPost');
          this.$router.push('/result');
        }
      }, 1000);
    },
    computed: {
      showName() {
        return this.$store.getters.name;
      },
      showScore() {
        return this.$store.getters.score;
      }
    },
    methods: {
      timeLeft(time) {
        if(time > 0) {
          time--;
        } else {
          return;
        }
        this.time = time;
      },
      test() {
        this.$store.dispatch('statusPost');
      }
    }
  }
</script>

<style lang='scss' scoped>
  @import '../assets/scss/game.scss';
</style>