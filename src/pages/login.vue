<template>
  <main class="p-12 h-screen w-screen bg-gradient-to-r from-amber-400 to-pink-400 dark:(bg-gradient-to-r from-blue-900 to-purple-900) flex items-center justify-center">
    <div class="relative bg-white dark:bg-gray-900 p-4 rounded-xl flex flex-col justify-between w-full lg:w-1/3">
      <div class="absolute top-5 left-5 flex">
        <ColorModeButton class="mr-2" />
        <LanguageButton />
      </div>
      <div class="mb-8">
        <div class="text-center mt-8 mb-12">
          <Logo />
        </div>
        <div class="w-full">
          <form class="w-full">
            <div class="w-full mb-8">
              <input
                id="email"
                v-model="form.email"
                required
                :placeholder="t('login.form.email')"
                type="text"
                class="w-full py-2 px-4 border-gray-200 focus:bg-gray-100 duration-300 dark:(border-gray-800 bg-gray-900 focus:bg-gray-800) border-2 rounded-lg"
              />
            </div>
            <div class=" w-full">
              <input
                id="password"
                v-model="form.password"
                required
                :placeholder="t('login.form.password')"
                type="password"
                autocomplete="suggested"
                class="w-full py-2 px-4 border-gray-200 focus:bg-gray-100 duration-300 dark:(border-gray-800 bg-gray-900 focus:bg-gray-800) border-2 rounded-lg"
              />
            </div>
            <div class="flex justify-between my-2">
              <div class="font-thin text-sm duration-300" :class="error ? 'text-red-500': 'text-transparent'">
                {{ t('login.credentials') }}
              </div>
              <div class="text-sm duration-300 cursor-pointer border-b-2 border-gray-200 hover:(border-red-400 text-red-400 dark:text-amber-400 dark:border-amber-400) text-gray-400">
                {{ t('login.forget') }}
              </div>
            </div>
            <div class="my-8 flex justify-center">
              <button
                class="w-full font-bold px-8 py-2 border-2 rounded-lg border-red-400 dark:border-amber-400 text-red-400 dark:text-amber-400 hover:(bg-red-400 dark:bg-amber-400 text-white) hover:dark:text-black duration-300 cursor-pointer"
                @click.prevent="handleLogin()"
              >
                {{ t('login.form.login') }}
              </button>
            </div>
          </form>
        </div>
        <div class="mt-2 flex justify-center">
          <div class="text-sm cursor-pointer">
            {{ t('login.no_account') }} <span class="duration-300 border-b-2 border-gray-200 hover:(border-red-400 text-red-400 dark:text-amber-400 dark:border-amber-400) text-gray-400">{{ t('login.ask') }}</span>
          </div>
        </div>
      </div>
      <div class="flex justify-center flex-col items-center">
        <p class="block text-xs text-gray-700 dark:text-gray-300">
          {{ t('login.secure') }}
        </p>
        <p class="text-xs text-gray-700 dark:text-gray-300">
          {{ t('login.credits') }}
        </p>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { useAuth } from '~/logic/auth'

const store = useStore()
const { t } = useI18n()

const form = ref({ email: '', password: '' })
const error = ref(false)
const { login } = useAuth()
const handleLogin = () => {
  login({
    email: form.value.email,
    password: form.value.password,
  }).catch(() => {
    form.value.password = ''
    error.value = true
    setTimeout(() => error.value = false, 7000)
  })
}
</script>

<route lang="yaml">
meta:
  layout: auth
  guest: true
</route>

<style scoped lang="scss">
</style>
