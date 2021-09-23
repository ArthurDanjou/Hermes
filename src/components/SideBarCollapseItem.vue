<template>
  <div
    class="my-2 flex py-1 z-50"
    :class="{'pl-2': opened}"
  >
    <router-link
      :to="link"
      class="duration-300 flex hover:(bg-gray-300 dark:bg-gray-700) rounded-2xl cursor-pointer"
      :class="opened ? 'p-3 w-full' : 'p-3'"
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
