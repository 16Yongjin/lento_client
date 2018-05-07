<template lang="pug">
v-container(grid-list-md)
  v-layout(wrap justify-center)
      v-flex(md8 sm10 xs12)
        v-card
          v-card-title(primary-title)
            div
              div.headline(v-text="food.name")
              div(v-text="food.type")
      v-flex(md8 sm10 xs12) 
        v-card.pb-0
          v-card-title.title 사진 {{ hasPhoto ? `${photoIdx + 1} / ${food.images.length}` : '' }}
            v-spacer
            photo-upload(:id="food._id" :name="food.name")

          v-card-media(v-if="hasPhoto" :height="imageHeight" :src="`https://api.lento.in/public/images/${food.images[photoIdx]}`")
            div.middle
              v-btn(@click="previousPhoto" icon color="blue-grey lighten-3" left absolute)
                v-icon(large) keyboard_arrow_left
            div.middle
              v-btn(@click="nextPhoto" icon color="blue-grey lighten-3" right absolute)
                v-icon(large) keyboard_arrow_right
          v-card-text(v-if="food.sensei").title 출처 - 
            a(v-if="food.sensei" :href="food.sensei" target="_blank") 외밥최선생
      v-flex(md8 sm10 xs12 v-if="food.honbab")
        v-card
          v-card-title.title 
            span.mr-2 혼밥슐랭 {{ `${food.honbab}스타` }}
            v-icon(v-for="i in 5" :key="i" :color="i <= food.honbab ? 'yellow' : 'grey'") star
          v-card-text(v-if="food.honmono") {{ food.honmono }}

      v-flex(md8 sm10 xs12 v-if="food.time")
        v-card
          v-card-title.pb-0.title 영업시간
          v-card-text
            div.lines(v-text="food.time")
      v-flex(md8 sm10 xs12 v-if="food.menu")
        v-card
          v-card-title.pb-0.title 메뉴
          v-card-text
            div(v-show="idx < 6 || moreMenu" v-for="(menu, idx) in food.menu" :key="menu" v-text="menu")
          v-card-actions(v-if="food.menu.length > 6")
            v-spacer
            v-btn(@click="moreMenu = !moreMenu" flat) {{ !moreMenu ? '메뉴 더보기' : '메뉴 접기' }}
              v-icon {{ !moreMenu ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}  
            v-spacer
      v-flex(md8 sm10 xs12 v-if="food.lat")
        v-card
          v-card-title.pb-0.title 위치
          v-card-text
            gmap-map(style="width: 100%; height: 300px; left:0; top:0" :center="{ lat: food.lat, lng: food.lng }" :zoom="18")
              gmap-marker(:position="{ lat:food.lat, lng: food.lng }")
              gmap-info-window(:position="{ lat:food.lat, lng: food.lng }") 
                h3(style="color: black;") {{ food.name }}
          
</template>

<script>
import PhotoUpload from '@/components/PhotoUpload'
import mapImage from '~/plugins/map-image'
export default {
  props: ['food'],
  components: {
    PhotoUpload
  },
  head () {
    const { food } = this
    return {
      meta: [
        { hid: 'og-title', property: 'og:title', content: food.name },
        { hid: 'og-description', property: 'og:description', content: food.type },
        { hid: 'og-image', property: 'og:image', content: this.hasPhoto ? `https://api.lento.in/public/images/${this.hasPhoto}` : mapImage(food) }
      ]
    }
  },
  data () {
    return {
      moreMenu: false,
      photoIdx: 0
    }
  },
  watch: {
    food () {
      this.photoIdx = 0
    }
  },
  methods: {
    nextPhoto () {
      this.photoIdx = (this.photoIdx + 1) % this.food.images.length
    },
    previousPhoto () {
      this.photoIdx = (this.photoIdx - 1) < 0 ? this.food.images.length - 1 : this.photoIdx - 1
    }
  },
  computed: {
    imageHeight () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '300px'
        case 'sm': return '400px'
        case 'md': case 'lg': return '500px'
        case 'xl': return '600px'
      }
    },
    hasPhoto () {
      return this.food.images && this.food.images[0]
    }
  }
}
</script>

<style scoped>
.middle {
  width: 100%;
  transform: translateY(50%)
}

.lines { white-space: pre-line; }

a:link { text-decoration: none; }

a:visited { text-decoration: none; }

</style>