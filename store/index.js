export const state = () => ({
  sidebar: false,
  dark: (new Date()).getHours() >= 17,
  title: '외대 주변 식당',
  mainFoods: []
})

export const mutations = {
  toggleSidebar (state) {
    state.sidebar = !state.sidebar
  },
  setTitle (state, title) {
    state.title = title
  },
  switchDark (state) {
    state.dark = !state.dark
  },
  setMainFoods (state, foods) {
    state.mainFoods = foods
  }
}

export const getters = {
  mainFoods ({ mainFoods }) {
    return mainFoods
  }
}

export const actions = {
  setTitle ({ commit }, title) {
    commit('setTitle', title || '외대 주변 식당')
  }
}
