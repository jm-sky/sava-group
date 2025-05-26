<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { LanguagesIcon, MoonIcon, SunIcon } from 'lucide-vue-next'
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
  <nav class="fixed top-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md z-50 border-b transition-colors">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <div class="flex-shrink-0">
          <a href="#" class="text-xl font-bold">
            <CompanyName />
          </a>
        </div>
        <div class="flex flex-row items-center justify-end gap-4">
          <div class="hidden md:block">
            <NavbarLinks />
          </div>
          <Button variant="ghost" size="sm" @click="toggleDark()">
            <MoonIcon v-if="isDark" class="size-4" />
            <SunIcon v-else class="size-4" />
          </Button>
          <Button variant="ghost" size="sm" @click="toggleLocale()">
            <LanguagesIcon class="size-4" />
          </Button>
        </div>
      </div>
    </div>
  </nav>
</template>

