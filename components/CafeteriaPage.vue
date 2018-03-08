<template lang="pug">
v-container(grid-list-md)
  v-layout(wrap justify-center)
    v-flex(md8 sm10 xs12)
      v-card
        v-card-title(primary-title)
          div
            div.headline 인문관
            div(v-text="cafeteria.inmun.day")

    v-flex(md8 sm10 xs12 v-for="(menu, i) in cafeteria.inmun.menus" :key="'inmun'+i")
      v-card
        v-card-text.lines
          div.lines(v-text="menu")

    v-flex(md8 sm10 xs12)
      v-card
        v-card-title(primary-title)
          div
            div.headline 교수회관
            div(v-text="cafeteria.kyosu.day")

    v-flex(md8 sm10 xs12 v-for="(menu, i) in cafeteria.kyosu.menus" :key="'kyosu' + i")
      v-card
        v-card-text.lines
          div.lines(v-text="menu")
</template>

<script>
export default {
  props: ['cafeteria']
}
</script>

<style scoped>
.lines {
  white-space: pre-line
}
</style>