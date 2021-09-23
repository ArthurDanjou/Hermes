<template>
  <main class="flex">
    <SideBar />
    <div
      class="w-full h-full duration-300"
      :class="opened ? 'ml-64' : 'ml-20'"
    >
      <Header />
      <div class="mt-16 p-4">
        <router-view />
        <Footer />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'

const store = useStore()
const opened = computed(() => store.getters.isOpened)
</script>
