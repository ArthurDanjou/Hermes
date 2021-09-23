<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useStore } from 'vuex'

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Hermes - ArtDanjProduction',
  meta: [
    { name: 'description', content: 'Hermes is my personal dashboard used to manage my services.' },
  ],
})

const store = useStore()
onBeforeMount(() => {
  store.dispatch('FETCH_USER')
})
</script>

<template>
  <router-view />
</template>
