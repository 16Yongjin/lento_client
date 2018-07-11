<template lang="pug">
v-flex(xs12 sm6 md3)
  v-card(:to="`/foods/${food._id}`" :height="cardHeight")
    v-card-title(primary-title)
      div.title(v-text="food.name")
    v-card-media(v-if="image" :src="`https://api.lento.in/public/images/${image}`" height="200")
    v-card-text(v-if="food.menu")
      div.menu-line {{ food.menu.substr(0, 50) + (food.menu[50] ? '...' : '') }}
</template>

<script>
export default {
  props: ['food'],
  computed: {
    cardHeight () {
      return this.$vuetify.breakpoint.name === 'xs' ? null : '100%'
    },
    image () {
      return this.food.images && this.food.images[0]
    }
  }
}
</script>

<style scoped>
.menu-line {
  text-overflow: ellipsis;
}
</style>