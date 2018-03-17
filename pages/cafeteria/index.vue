<template lang="pug">
div
  cafeteria-page(v-if="!idx === lunch" :cafeteria="cafeteria" v-for="(cafeteria, idx) in cafeterias" :key="idx")

  v-btn(fixed fab bottom right color="orange" @click="lunch = !lunch")
    v-icon(color="white") {{ lunch ? '저녁' : '점심' }}
</template>

<script>
import CafeteriaPage from '@/components/CafeteriaPage'
export default {
  components: {
    CafeteriaPage
  },
  data () {
    return {
      lunch: (new Date()).getHours() < 16
    }
  },
  async asyncData ({ app }) {
    const cafeterias = await app.$axios.$get('/public/hufs')
    return { cafeterias }
  },
  mounted () {
    this.$store.dispatch('setTitle', '학식')
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