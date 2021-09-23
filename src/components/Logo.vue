<template>
  <div
    v-if="opened && router.currentRoute.name !== 'login'"
    class="font-black text-xl tracking-widest"
  >
    {{ t('logo.long') }}
  </div>
  <div
    v-else
    class="font-black text-xl tracking-widest"
  >
    {{ t('logo.short') }}
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'

const router = useRouter()
const store = useStore()
const opened = computed(() => store.getters.isOpened)
const { t } = useI18n()
</script>
