<template lang="pug">
  v-container(grid-list-lg fluid)
    v-layout(row wrap)
      v-flex(xs12)
        h3.display-2.keep-line
          | 한국외대 😋
          | 주변맛집 🍽
        v-divider.my-3
      v-flex(xs12)
        h2 음식종류
      food-type-card(v-for="food in foods" :food="food" :key="food[1]")
      v-flex(xs12)
        v-card(to="/random")
          v-card-text.text-xs-center.display-1(flat) 더보기
      v-flex(xs12)
        v-card(to="/cafeteria")
          v-card-text.text-xs-center.display-1(flat) 학식
</template>

<script>
import FoodTypeCard from '@/components/FoodTypeCard'

export default {
  components: {
    FoodTypeCard
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
      return [
        [ '🍚 한식', 'b82nalfx21n.jpeg', 73 ],
        [ '🍝 양식', 'xs4lleaqxe.jpg', 30 ],
        [ '🍣 일식', 'qqh0cna7led.jpg', 12 ],
        [ '🍜 분식', 'w0irrvhgyds.jpeg', 10 ],
        [ '🍲 중식', 'cfj00zr72f.jpeg', 9 ],
        [ '🍗 치킨', '1ewpx6xhbr1.jpeg', 6 ] ]
    }
  },
  mounted () {
    this.$store.dispatch('setTitle', '홈')
  }
}
</script>

<style scoped>
.keep-line {
  word-break: keep-all;
  white-space: pre;
}

</style>