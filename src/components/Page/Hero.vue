<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Button } from '@/components/ui/button'
import GradientMaskedContent from '../GradientMaskedContent.vue'
import DevMadeItLogo from '../Logo/DevMadeItLogo.vue'

const { t } = useI18n()
</script>

<template>
  <GradientMaskedContent>
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
        class="relative overflow-hidden shadow-2xl duration-300 before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white before:duration-200 before:ease-out hover:text-primary hover:shadow-primary-800/50 dark:hover:shadow-primary-300/50 hover:before:h-56 hover:before:w-56 hover:before:blur-md hover:scale-110 hover:ring"
      >
        <span class="relative z-10">{{ t('hero.learnMore') }}</span>
      </Button>

      <Button
        as="a"
        href="#contact"
        size="lg"
        variant="outline"
        class="duration-200 hover:outline-2 hover:bg-white outline-primary-500 outline-offset-4 hover:ring hover:ring-primary hover:scale-105 hover:text-primary hover:shadow-2xl hover:shadow-primary-800/50 dark:hover:shadow-primary-300/50"
      >
        {{ t('hero.contact') }}
      </Button>
    </div>
  </GradientMaskedContent>
</template>
