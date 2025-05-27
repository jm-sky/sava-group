<script setup lang="ts">
import Card from './Card.vue'

defineProps<{
  title: string
}>()
</script>

<template>
  <Card class="space-y-2">
    <h3 class="text-xl font-semibold mb-4">
      {{ title }}
    </h3>
    <slot />
  </Card>
</template>