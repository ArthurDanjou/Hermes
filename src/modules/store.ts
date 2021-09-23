import { UserModule } from '~/types'
import { store } from '~/store'

export const install: UserModule = ({ isClient, app }) => {
  if (isClient)
    app.use(store)
}
