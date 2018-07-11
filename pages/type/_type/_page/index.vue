<template lang="pug">
v-container(grid-list-lg)
  v-layout.layout(row wrap)
    food-card(v-for="food in foods" :food="food" :key="food.name")
  v-layout(justify-center)
    v-pagination(v-model="page" :length="pageLength")
</template>

<script>
import FoodCard from '@/components/FoodCard'

export default {
  head () {
    const desscripton = this.foods.map(food => food.name).join(', ')
    return {
      meta: [
        { hid: 'og-title', property: 'og:title', content: `한국외대 주변 ${this.type} 맛집` },
        { hid: 'description', property: 'description', content: `한국외대 주변 ${this.type} 맛집 ${desscripton}` },
        { hid: 'og-description', property: 'og:description', content: desscripton }
      ]
    }
  },
  async asyncData ({ app, params, error, store }) {
    try {
      const { type, page } = params
      if (!Number.isInteger(+page)) {
        this.$router.push(`/type/${this.type}/1`)
      }
      const foods = await app.$axios.$get(`/public/type/${encodeURIComponent(type)}/${page}`)
      return { foods, type, page: Number(page) }
    } catch (e) {
      console.log(e)
    }
  },
  data () {
    return {
      pageLength: { 한식: 7, 양식: 3, 일식: 1, 분식: 1, 중식: 1, 치킨: 1 }[this.$route.params.type]
    }
  },
  computed: {
    foodList: {
      get () {
        return this.$store.getters.typedFoodList
      },
      set (foods) {
        this.$store.commit('setTypedFoodList', foods)
      }
    }
  },
  watch: {
    page (v, c) {
      console.log(v, c)
      this.$router.push(`/type/${this.type}/${v}`)
    }
  },
  components: {
    FoodCard
  }
}
</script>

<style scoped>
.layout {
  min-height: 20px;
}

</style>