import { Module } from 'vuex'
import { User } from '~/logic/auth'
import { useAxios } from '~/logic/axios'
const axios = useAxios()

const authModule: Module<any, any> = {
  state: {
    user: null,
    authenticated: false,
  },
  getters: {
    getUser(state: any) {
      return state.user
    },
    isAuthenticated(state: any) {
      return state.authenticated
    },
  },
  mutations: {
    SET_USER(state: any, user: User) {
      state.user = user
    },
    RESET_USER(state: any) {
      state.user = null
    },
    SET_AUTHENTICATED(state: any, value: boolean) {
      state.authenticated = value
    },
  },
  actions: {
    async FETCH_USER({ commit, state }) {
      let user: User | null = state.user
      if (!user) {
        try {
          const response = await axios.get('/auth/me')
          if (response.status === 200) {
            user = {
              id: response.data.user.id,
              username: response.data.user.username,
              email: response.data.user.email,
            }
          }
        }
        catch (error) {
          user = null
        }
      }
      commit('SET_USER', user)
      commit('SET_AUTHENTICATED', true)
    },
  },
}

export default authModule
