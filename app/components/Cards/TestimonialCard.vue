<script setup lang="ts">
defineProps<{
  author: string
  date: string
  location: string
  content: string
}>()
</script>

<template>
  <BaseCard class="flex flex-col h-full">
    <blockquote class="text-gray-700 dark:text-gray-300 mb-4 flex-grow italic">
      "{{ content }}"
    </blockquote>
    <div class="text-sm text-gray-600 dark:text-gray-400 border-t pt-4">
      <div class="font-semibold">{{ author }}</div>
      <div class="text-xs">{{ date }} - {{ location }}</div>
    </div>
  </BaseCard>
</template>