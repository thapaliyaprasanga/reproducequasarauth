const state = {
    token: null,
    user:{
        username: null
    }
}

const getters = {
  authenticated(state){
    return state.token && state.user.username && true
  }
}

const mutations = {
  login(state, payload){
    state.user.username = payload.username
    state.token = payload.token
  }
}

const actions = {
  login({commit}, payload){
    commit('login', {...payload, token: "ja;lfjalf"})
  }    
}

export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state
}