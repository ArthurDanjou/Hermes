import { createStore } from 'vuex'
import auth from '~/store/modules/auth'
import sidebar from '~/store/modules/sidebar'

export const store = createStore({
  modules: {
    auth,
    sidebar,
  },
})
