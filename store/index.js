export const state = () => ({
  sidebar: false,
  dark: false,
  title: '외대 주변 식당'
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
  }
}

export const actions = {
  setTitle ({ commit }, title) {
    commit('setTitle', title || '외대 주변 식당')
  }
}
