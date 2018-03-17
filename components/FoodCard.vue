<template lang="pug">
v-card(:to="`/foods/${food._id}`")
  v-card-media(:src="`https://api.lento.in/public/images/${food.images[0]}`" :height="imageHeight")
  v-card-title(primary-title)
    div
      div.mb-2(v-text="food.type")
      div.title(v-text="food.name")
</template>

<script>
export default {
  props: ['food'],
  computed: {
    imageHeight () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '300px'
        case 'sm': return '400px'
        case 'md': case 'lg': return '500px'
        case 'xl': return '600px'
      }
    }
  }
}
</script>

<style scoped>

</style>