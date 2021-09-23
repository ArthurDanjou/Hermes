import { Module } from 'vuex'

const sidebarModule: Module<any, any> = {
  state: {
    opened: true,
  },
  getters: {
    isOpened(state: any) {
      return state.opened
    },
  },
  mutations: {
    SET_OPENED(state: any, value: boolean) {
      state.opened = value
    },
  },
  actions: {},
}

export default sidebarModule
