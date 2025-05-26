<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { MoonIcon, SunIcon } from 'lucide-vue-next'
import { useI18n } from 'vue-i18n'
import { Button } from '@/components/ui/button'
import CompanyName from '../Logo/CompanyName.vue'
import NavbarLinks from './NavbarLinks.vue'

const { locale } = useI18n()

const toggleLocale = () => {
  const nextLocale = locale.value === 'pl' ? 'en' : 'pl'
  locale.value = nextLocale
}

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <nav class="fixed top-0 w-full bg-white/60 dark:bg-black/60 backdrop-blur-md z-50 border-b transition-colors">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <div class="flex-shrink-0">
          <a href="#" class="block text-xl font-bold hover:opacity-90 hover:scale-105 transition-all duration-100 ease-in-out drop-shadow hover:drop-shadow-lg">
            <CompanyName />
          </a>
        </div>
        <div class="flex flex-row items-center justify-end gap-4">
          <div class="hidden md:block">
            <NavbarLinks />
          </div>
          <Button
            variant="ghost"
            size="sm"
            class="relative size-8"
            @click="toggleDark()"
          >
            <Transition
              enter-from-class="opacity-0 -translate-y-5"
              enter-active-class="absolute transition-all duration-300 ease-in-out"
              enter-to-class="opacity-100 translate-y-0"
              leave-from-class="opacity-100 translate-y-0"
              leave-active-class="absolute transition-all duration-200 ease-in-out"
              leave-to-class="opacity-0 translate-y-5"
            >
              <MoonIcon v-if="isDark" class="size-4" />
              <SunIcon v-else class="size-4" />
            </Transition>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            class="relative size-8"
            @click="toggleLocale()"
          >
            <Transition
              enter-from-class="opacity-0 -translate-y-5"
              enter-active-class="absolute transition-all duration-300 ease-in-out"
              enter-to-class="opacity-100 translate-y-0"
              leave-from-class="opacity-100 translate-y-0"
              leave-active-class="absolute transition-all duration-200 ease-in-out"
              leave-to-class="opacity-0 translate-y-5"
            >
              <span v-if="locale === 'pl'">PL</span>
              <span v-else>EN</span>
            </Transition>
          </Button>
        </div>
      </div>
    </div>
  </nav>
</template>

