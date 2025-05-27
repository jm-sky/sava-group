<script setup lang="ts">
import Card from './Card.vue'

</script>

<template>
  <Card>
    <div class="flex flex-col justify-center gap-1.5 mx-auto">
      <slot />
    </div>
  </Card>
</template>