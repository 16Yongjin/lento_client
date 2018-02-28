<template lang="pug">
div
  FoodPage(:food="food")
  v-btn(fixed fab bottom right color="orange" @click="reload")
    v-icon replay

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
  }
}
</script>

<style scoped>


</style>