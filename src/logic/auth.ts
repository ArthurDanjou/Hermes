import { store } from '~/store'
import { useAxios } from '~/logic/axios'

export interface User {
  id: number
  username: string
  email: string
}

interface Credentials {
  email: string
  password: string
}

interface Auth {
  readonly isAuthenticated: Boolean
  readonly user: User
  readonly login: (credentials: Credentials) => Promise<void>
  readonly logout: () => Promise<void>
}

export const useAuth = (): Auth => {
  const axios = useAxios()
  const router = useRouter()
  const user = computed(() => store.getters.getUser)
  const isAuthenticated = computed(() => store.getters.isAuthenticated)

  const login = async(
    credentials: Credentials,
  ) => {
    const response = await axios.post('/auth/web/login', {
      email: credentials.email,
      password: credentials.password,
    })
    if (response.status === 200) {
      store.commit('SET_AUTHENTICATED', true)
      store.commit('SET_USER', {
        id: response.data.user.id,
        email: response.data.user.email,
        username: response.data.user.username,
      })
      await router.push({ name: 'index' })
    }
  }
  const logout = async() => {
    const response = await axios.post('/auth/web/logout')
    if (response.status === 200) {
      await store.commit('SET_AUTHENTICATED', false)
      await store.commit('RESET_USER')
      await router.push({ name: 'login' })
    }
  }

  return {
    login,
    logout,
    isAuthenticated: isAuthenticated.value,
    user: user.value,
  }
}
