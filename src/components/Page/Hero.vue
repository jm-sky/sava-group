<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Button } from '@/components/ui/button'
import DevMadeItLogo from '../Logo/DevMadeItLogo.vue'

const { t } = useI18n()
</script>

<template>
  <section class="relative h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-gray-900">
    <div class="container mx-auto px-4 text-center">
      <DevMadeItLogo class="mb-2" />

      <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
        {{ t('hero.description') }}
      </p>
      <div class="flex justify-center gap-4">
        <Button
          as="a"
          href="#about"
          size="lg"
          variant="primary"
        >
          {{ t('hero.learnMore') }}
        </Button>
        <Button
          href="#contact"
          size="lg"
          variant="outline"
          as="a"
        >
          {{ t('hero.contact') }}
        </Button>
      </div>
    </div>
  </section>
</template>
