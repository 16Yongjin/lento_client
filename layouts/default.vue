<template lang="pug">
v-app(:dark="dark")
  v-toolbar(fixed app :clipped-left="clipped")
    v-btn(flat icon to="/")
      v-icon home
    v-toolbar-title(v-text="title" to="/")
    v-spacer
    v-btn(flat icon to="/random") 
      v-icon apps
    v-btn(flat icon to="/cafeteria")
      v-icon school
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
