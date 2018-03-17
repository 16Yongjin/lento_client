<template lang="pug">
  v-container(grid-list-lg)
    v-layout(row wrap)
      v-flex(xs12)
        h3.display-3 외대 주변 식당
        v-divider.my-3
      v-flex(md6 xs12 v-for="food in foods" :key="food._id")
        food-card(:food="food")
      v-flex(xs12)
        v-card(to="/random")
          v-card-text.text-xs-center.display-1(flat) 더보기
      v-flex(xs12)
        v-card(to="/cafeteria")
          v-card-text.text-xs-center.display-1(flat) 학식
</template>

<script>
import FoodCard from '@/components/FoodCard'
export default {
  components: {
    FoodCard
  },
  async asyncData ({ app, params, error, store }) {
    try {
      if (!store.getters.mainFoods.length) {
        const foods = await app.$axios.$get(`/public/foods/randomWithImage`)
        store.commit('setMainFoods', foods)
      }
    } catch (e) {
      console.log(e)
    }
  },
  computed: {
    foods () {
      return this.$store.getters.mainFoods
    }
  },
  mounted () {
    this.$store.dispatch('setTitle', '홈')
  }
}
</script>

<style scoped>

</style>