<template lang="pug">
  v-layout.h100(wrap)
    v-flex
      gmap-map(style="width: 100%; height: 100%; left:0; top:0" :center="{ lat: food.lat, lng: food.lng }" :zoom="18")
        gmap-marker(:position="{ lat:food.lat, lng: food.lng }")
        gmap-info-window(:position="{ lat:food.lat, lng: food.lng }") 
          h3(style="color: black;") {{ food.name }}
  
</template>

<script>
import mapImage from '~/plugins/map-image'
export default {
  head () {
    const { food } = this
    return {
      meta: [
        { hid: 'og-title', property: 'og:title', content: food.name },
        { hid: 'og-description', property: 'og:description', content: food.type },
        { hid: 'og-image', property: 'og:image', content: mapImage(food) }
      ]
    }
  },
  async asyncData ({ app, params, error }) {
    try {
      const food = await app.$axios.$get(`https://api.lento.in/public/foods/${params.id}`)
      return { food }
    } catch (e) {
      console.log(e)
      error({ statusCode: 404, message: '식당이 없어요.' })
    }
  },
  created () {
    this.$store.dispatch('setTitle', this.food.name)
  },
  destroyed () {
    this.$store.dispatch('setTitle')
  }
}
</script>

<style scoped>
.h100 {
  height: 100%;
}

.max500 {
  max-width: 500px;
}

</style>