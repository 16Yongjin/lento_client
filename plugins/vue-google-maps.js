import Vue from 'vue'
import * as VueGoogleMaps from '~/node_modules/vue2-google-maps/src/main'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDsT5FxGGcpWD6-Qq_Bh2PGCYl1fUPrS2Q',
    libraries: 'places'
  }
})
