<template>
  <div
    class="h-9 w-9 cursor-pointer flex items-center p-1.5 rounded-xl hover:bg-gray-300 dark:hover:bg-dark-400 duration-200"
    @click="toggleDark"
  >
    <div v-if="isDark">
      <SunIcon />
    </div>
    <div v-else>
      <MoonIcon />
    </div>
  </div>
</template>

<script setup lang="ts">
import { isDark, toggleDark } from '~/logic'
</script>
