import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VCard,
  VNavigationDrawer,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VDialog,
  VCheckbox,
  VBottomNav
} from 'vuetify'

Vue.use(Vuetify, {
  components: {
    VApp,
    VCard,
    VNavigationDrawer,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VDialog,
    VCheckbox,
    VBottomNav
  },
  theme: {
    primary: '#90CAF9',
    secondary: '#BBDEFB',
    accent: '#7986CB',
    error: '#DD2C00',
    warning: '#FFEB3B',
    info: '#2196f3',
    success: '#4caf50'
  }
})
