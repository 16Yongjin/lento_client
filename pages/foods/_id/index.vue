<template lang="pug">
FoodPage(:food="food")
</template>

<script>
import FoodPage from '@/components/FoodPage'
export default {
  components: {
    FoodPage
  },
  async asyncData ({ app, params, error }) {
    try {
      const food = await app.$axios.$get(`/public/foods/${params.id}`)
      return { food }
    } catch (e) {
      error({ statusCode: 404, message: '식당이 없어요.' })
    }
  },
  mounted () {
    this.$store.dispatch('setTitle')
  }
}
</script>

<style scoped>
</style>