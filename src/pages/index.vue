<template>
  <div>
    {{ t('hello') }} <br />
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
  auth: true
</route>

<script setup lang="ts">
const { t } = useI18n()
</script>
