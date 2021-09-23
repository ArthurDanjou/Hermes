<template>
  <div class="flex items-center mb-8">
    <div class="mr-4 text-lg flex items-center justify-center p-2 bg-red-400 dark:bg-amber-400 rounded-xl text-black">
      <slot />
    </div>
    <h1 class="font-medium text-4xl">
      {{ title }}
    </h1>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Title',
  },
})
</script>
