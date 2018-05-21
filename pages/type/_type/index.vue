<template lang="pug">
v-container(grid-list-lg)
  v-layout(row wrap)
    food-card(v-for="food in foodList" :food="food" :key="food.name")
  div
    infinite-loading(ref="infiniteLoading" @infinite="infiniteHandler")
        span(slot="no-results") 식당이 없어요.
        span(slot="no-more") 끝 :)
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading/src/components/InfiniteLoading.vue'
import FoodCard from '@/components/FoodCard'

export default {
  async asyncData ({ app, params, error, store }) {
    try {
      const type = params.type
      if (!store.getters.foodTypes[type]) {
        const foods = await app.$axios.$get(`/public/type/${encodeURIComponent(type)}`)
        console.log('load type food from server')
        store.commit('setFoodTypes', { type, foods })
      }
    } catch (e) {
      console.log(e)
    }
  },
  computed: {
    foods () {
      const type = this.$route.params.type
      return this.$store.getters.foodTypes[type]
    },
    foodList: {
      get () {
        return this.$store.getters.typedFoodList
      },
      set (foods) {
        this.$store.commit('setTypedFoodList', foods)
      }
    }
  },
  methods: {
    infiniteHandler ($state) {
      const foodLen = this.foods.length
      const len = this.foodList.length
      if (foodLen <= len) {
        console.log('complete')
        return $state.complete()
      }
      const temp = []
      for (let i = len; i < foodLen && i < len + 12; i++) {
        temp.push(this.foods[i])
      }
      this.foodList = this.foodList.concat(temp)

      $state.loaded()
    }
  },
  mounted () {
    const type = this.$route.params.type
    this.$store.dispatch('setTitle', type)

    if (this.foodList.length && this.foods[0].name !== this.foodList[0].name) {
      console.log('different food type')
      this.foodList = []
      this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset')
    }
  },
  components: {
    InfiniteLoading,
    FoodCard
  }
}
</script>

<style scoped>


</style>