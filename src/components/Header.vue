<template>
  <header class="fixed bg-white dark:bg-dark-900 top-0 w-full h-16 border-b border-gray-200 dark:border-gray-800">
    <div class="h-full flex items-center justify-center">
      <div
        class="bg-white dark:bg-dark-900 py-1 cursor-pointer z-10 absolute top-4 -left-3 transition-transform delay-300 duration-300 transform flex justify-center items-center"
        :class="opened ? 'rotate-540' : 'rotate-0'"
        @click="setOpened(!opened)"
      >
        <ArrowIcon />
      </div>
      <h1>Header</h1>
      <ColorModeButton class="mx-2" />
      <LanguageButton class="mx-2" />
      <div
        class="hover:text-red-400 cursor-pointer mx-4 duration-500"
        @click.prevent="logout"
      >
        Logout
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { useAuth } from '~/logic/auth'

const store = useStore()
const opened = computed(() => store.getters.isOpened)
const setOpened = (value: boolean) => {
  store.commit('SET_OPENED', value)
}

const { logout, } = useAuth()
</script>
