<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import AboutCard from './AboutCard.vue'

const { t } = useI18n()
</script>

<template>
  <section id="about" class="py-20 bg-white dark:bg-gray-900">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-12">
        {{ t('about.title') }}
      </h2>
      <div class="grid md:grid-cols-3 gap-8">
        <AboutCard :title="t('about.whatWeDo.title')">
          <p class="text-gray-600 dark:text-gray-300">
            {{ t('about.whatWeDo.description') }}
          </p>
          <ul class="list-disc list-inside mt-1 text-gray-600 dark:text-gray-300">
            <li>{{ t('about.whatWeDo.customWebApplications') }}</li>
            <li>{{ t('about.whatWeDo.documentManagement') }}</li>
            <li>{{ t('about.whatWeDo.integrations') }}</li>
            <li>{{ t('about.whatWeDo.processOptimization') }}</li>
          </ul>
        </AboutCard>
        <AboutCard :title="t('about.values.title')">
          <p class="text-gray-600 dark:text-gray-300">
            {{ t('about.values.description') }}
          </p>
          <ul class="list-disc list-inside mt-1 text-gray-600 dark:text-gray-300">
            <li>{{ t('about.values.cleanCode') }}</li>
            <li>{{ t('about.values.architecture') }}</li>
            <li>{{ t('about.values.userExperience') }}</li>
            <li>{{ t('about.values.processUnderstanding') }}</li>
          </ul>
        </AboutCard>
        <AboutCard :title="t('about.technologies.title')">
          <p class="text-gray-600 dark:text-gray-300">
            {{ t('about.technologies.description') }}
          </p>
          <ul class="list-disc list-inside mt-1 text-gray-600 dark:text-gray-300">
            <li>
              <span class="font-semibold mr-1">{{ t('about.technologies.list.backend') }}:</span>
              <span>PHP, Laravel, Python (Flask, Django), Node.js</span>
            </li>
            <li>
              <span class="font-semibold mr-1">{{ t('about.technologies.list.frontend') }}:</span>
              <span>Vue.js 3, JavaScript, TailwindCSS</span>
            </li>
            <li>
              <span class="font-semibold mr-1">{{ t('about.technologies.list.databases') }}:</span>
              <span>SQL Server, PostgreSQL, MySQL</span>
            </li>
            <li>
              <span class="font-semibold mr-1">{{ t('about.technologies.list.ops') }}:</span>
              <span>Linux, Apache, Nginx</span>
            </li>
          </ul>
        </AboutCard>
      </div>
    </div>
  </section>
</template>
