<template lang="pug">
v-flex(xs12 sm6 md4)
  v-card(:to="`/foods/${food._id}`")
    v-card-title(primary-title)
      div.title(v-text="food.name")
    v-card-media(v-if="image" :src="`https://api.lento.in/public/images/${image}`" height="300")
    v-card-text(v-if="food.menu")
      div {{ food.menu.length > 100 ? food.menu.substr(0, 50) + '...' : food.menu }}
</template>

<script>
export default {
  props: ['food'],
  computed: {
    image () {
      return this.food.images && this.food.images[0]
    }
  }
}
</script>

<style scoped>

</style>