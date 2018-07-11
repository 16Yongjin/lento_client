export const state = () => ({
  sidebar: false,
  dark: ((date) => date >= 17 || date <= 5)((new Date()).getHours()),
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
  },
  setFoodTypes (state, { type, foods }) {
    state.foodTypes[type] = foods
  },
  setTypedFoodList (state, foods) {
    state.typedFoodList = foods
  }
}
export const getters = {
  mainFoods ({ mainFoods }) {
    return mainFoods
  },
  foodTypes ({ foodTypes }) {
    return foodTypes
  },
  typedFoodList ({ typedFoodList }) {
    return typedFoodList
  }
}

export const actions = {
  setTitle ({ commit }, title) {
    commit('setTitle', title || '외대 주변 식당')
  }
}
