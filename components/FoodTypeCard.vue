<template lang="pug">
v-flex(md4 sm6 xs12)
  v-card(:to="`/type/${food[0].substr(-2)}/1`")
    v-card-media(:src="`https://api.lento.in/public/images/${food[1]}`" height="200")
    v-card-title(primary-title)
      div
        div.title(v-text="food[0]")
        div 맛집 {{ food[2] }}개
</template>

<script>
export default {
  props: ['food']
}
</script>

<style scoped>

</style>