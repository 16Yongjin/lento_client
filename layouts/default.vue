<template lang="pug">
v-app(:dark="dark")
  v-navigation-drawer(:mini-variant.sync="miniVariant" :clipped="clipped" v-model="drawer" fixed app)
    v-list
      v-list-tile(router :to="item.to" :key="i" v-for="(item, i) in items" exact)
        v-list-tile-action
          v-icon(v-html="item.icon")
        v-list-tile-content
          v-list-tile-title(v-text="item.title")
  v-toolbar(fixed app :clipped-left="clipped")
    v-toolbar-side-icon(@click="drawer = !drawer")
    v-toolbar-title(v-text="title")
    v-spacer
    v-btn(flat icon @click="$store.commit('switchDark')")
      v-icon {{ dark ? 'brightness_7' : 'brightness_3' }}


  v-content
    nuxt

</template>

<script>
  export default {
    data () {
      console.log(this.$route.name)
      return {
        clipped: false,
        drawer: false,
        items: [
          { icon: 'apps', title: '랜덤', to: '/random' },
          { icon: 'school', title: '학식', to: '/cafeteria' }
        ],
        miniVariant: false
      }
    },
    computed: {
      dark () { return this.$store.state.dark },
      title () { return this.$store.state.title }
    }
  }
</script>
