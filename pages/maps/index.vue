<template lang="pug">
v-layout(column)
  v-flex(wrap)
    v-card
      v-card-title
        span This map index
      v-card-text(style="width: 100%; height: 100%; left:0; top:0" )
        gmap-map(style="width: 100%; height: 100%; position: absolute; left:0; top:0" :center="{lat: 1.38, lng: 103.8}" :zoom="12")
      
</template>

<script>
export default {
}
</script>

<style scoped>

</style>