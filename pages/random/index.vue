<template lang="pug">
div
  FoodPage(:food="food")
  v-btn(fixed fab bottom right color="orange" @click="reload")
    v-icon(color="white") replay

</template>

<script>
import FoodPage from '@/components/FoodPage'
export default {
  components: {
    FoodPage
  },
  async asyncData ({ app }) {
    const food = await app.$axios.$get('/public/foods/random')
    return { food }
  },
  methods: {
    async reload () {
      this.food = await this.$axios.$get('/public/foods/random')
    }
  },
  mounted () {
    this.$store.dispatch('setTitle', '랜덤')
  }
}
</script>

<style scoped>


</style>