<template>
  <div class="flex flex-col my-2">
    <div
      class="flex cursor-pointer justify-between hover:(bg-red-400 dark:bg-amber-400 dark:text-black) rounded-2xl duration-300 p-3"
      :class="[{'bg-red-300 dark:bg-amber-300 dark:text-black': collapsed}]"
      @click.prevent="collapse()"
    >
      <div class="flex">
        <slot name="icon" />
        <h1 v-if="opened" class="font-semibold ml-2 duration-300">
          {{ t(`sidebar.${title}`) }}
        </h1>
      </div>
      <div
        v-if="opened"
        class="transform duration-300"
        :class="collapsed ? 'rotate-0' : 'rotate-450'"
      >
        <CollapseIcon />
      </div>
    </div>
    <div
      v-show="collapsed"
      class="font-lg"
      :class="opened ? 'ml-8 border-l-2 border-gray-400 dark:border-gray-600' : 'mt-2'"
    >
      <slot name="children" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'

const store = useStore()
const opened = computed(() => store.getters.isOpened)

const collapsed = ref(false)
const collapse = () => {
  collapsed.value = !collapsed.value
}

const { t } = useI18n()

defineProps({
  title: {
    default: 'Title',
    type: String,
  },
})
</script>
