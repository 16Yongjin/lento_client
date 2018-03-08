<template lang="pug">
div
  cafeteria-page(v-if="cafeteria.time === model" :cafeteria="cafeteria" v-for="(cafeteria, idx) in cafeterias" :key="idx")

  v-bottom-nav(app fixed :value="true" :active.sync="model")
    v-btn(flat color="teal" value="점심")
      span 점심
      v-icon brightness_5
    v-btn(flat color="teal" value="저녁")
      span 저녁
      v-icon brightness_2


</template>

<script>
import CafeteriaPage from '@/components/CafeteriaPage'
export default {
  components: {
    CafeteriaPage
  },
  data () {
    return {
      model: '점심'
    }
  },
  async asyncData ({ app }) {
    const cafeterias = await app.$axios.$get('/public/hufs')
    console.log(cafeterias)
    return { cafeterias }
  },
  computed: {
    dark () { return this.$store.state.dark }
  }
}
</script>

<style scoped>
.h100 {
  height: 100%;
}
.lines {
  white-space: pre-line
}
</style>