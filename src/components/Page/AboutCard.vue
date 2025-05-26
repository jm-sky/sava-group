<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="p-6 bg-gray-50 dark:bg-gray-950 rounded-lg">
    <h3 class="text-xl font-semibold mb-4">
      {{ title }}
    </h3>
    <slot />
  </div>
</template>