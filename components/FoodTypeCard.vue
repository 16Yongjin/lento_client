<template lang="pug">
v-flex(md4 sm6 xs12)
  v-card(:to="`/type/${food[0].substr(-2)}`")
    v-card-media(:src="`https://api.lento.in/public/images/${food[1]}`" height="200")
    v-card-title(primary-title)
      div
        div.title(v-text="food[0]")
        div {{ food[2] }}개의 식당
</template>

<script>
export default {
  props: ['food']
}
</script>

<style scoped>

</style>