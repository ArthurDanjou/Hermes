import { store } from '~/store'
import { useAuth } from '~/logic/auth'
import { UserModule } from '~/types'

export const install: UserModule = ({ isClient, router }) => {
  if (isClient) {
    router.beforeEach(async(from, to, next) => {
      const { isAuthenticated, user } = useAuth()

      if (user === null)
        await store.dispatch('FETCH_USER')

      // redirect to login page if not connected
      if (from.meta.auth && !isAuthenticated)
        next({ name: 'login' })

      // redirect to home page if connected
      else if (from.meta.guest && isAuthenticated)
        next({ name: 'index' })

      else next()
    })
  }
}
