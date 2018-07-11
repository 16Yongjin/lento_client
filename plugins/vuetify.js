import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VCard,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  VDialog,
  VCheckbox,
  VDivider,
  VPagination
} from 'vuetify'

Vue.use(Vuetify, {
  components: {
    VApp,
    VCard,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    VDialog,
    VCheckbox,
    VDivider,
    VPagination
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
