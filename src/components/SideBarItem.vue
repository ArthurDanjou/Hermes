<template>
  <div class="flex my-2">
    <router-link
      :to="link"
      class="duration-300 flex hover:(bg-gray-300 dark:bg-gray-700) rounded-2xl cursor-pointer p-3"
      :class="{'w-full': opened}"
    >
      <slot />
      <h1 v-if="opened" class="font-semibold ml-2">
        {{ t(`sidebar.${title}`) }}
      </h1>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'

const store = useStore()
const opened = computed(() => store.getters.isOpened)
const { t } = useI18n()

defineProps({
  title: {
    default: 'Title',
    type: String,
  },
  link: {
    default: '/',
    type: String,
  },
})
</script>
