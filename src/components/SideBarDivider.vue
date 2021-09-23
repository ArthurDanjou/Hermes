<template>
  <div
    class="border-2 rounded-full border-gray-100 dark:border-gray-800 my-4"
    :class="{'w-full': !opened}"
  ></div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'

const store = useStore()
const opened = computed(() => store.getters.isOpened)
</script>
