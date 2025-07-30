<script setup lang="ts">
import { useI18n } from '#imports'
import { config } from '~/config'
import AboutCard from '../Cards/AboutCard.vue'
import List from '../List/List.vue'
import ListItem from '../List/ListItem.vue'
import BaseSection from './BaseSection.vue'

const { t } = useI18n()
</script>

<template>
  <BaseSection id="about" :title="t('about.title')">
    <AboutCard :title="t('about.whatWeDo.title')" class="leading-relaxed">
      <p class="text-muted-foreground mb-4">
        {{ t('about.whatWeDo.description') }}
      </p>
      <List>
        <ListItem>{{ t('about.whatWeDo.installations') }}</ListItem>
        <ListItem>{{ t('about.whatWeDo.modernization') }}</ListItem>
        <ListItem>{{ t('about.whatWeDo.lighting') }}</ListItem>
        <ListItem>{{ t('about.whatWeDo.outlets') }}</ListItem>
        <ListItem>{{ t('about.whatWeDo.diagnostics') }}</ListItem>
        <ListItem>{{ t('about.whatWeDo.maintenance') }}</ListItem>
        <ListItem>{{ t('about.whatWeDo.security') }}</ListItem>
        <ListItem>{{ t('about.whatWeDo.emergency') }}</ListItem>
        <ListItem>{{ t('about.whatWeDo.consulting') }}</ListItem>
      </List>
    </AboutCard>
    <AboutCard :title="t('about.values.title')" class="leading-relaxed">
      <p class="text-muted-foreground mb-4">
        {{ t('about.values.description') }}
      </p>
      <List>
        <ListItem>{{ t('about.values.quality') }}</ListItem>
        <ListItem>{{ t('about.values.experience') }}</ListItem>
        <ListItem>{{ t('about.values.reliability') }}</ListItem>
        <ListItem>{{ t('about.values.pricing') }}</ListItem>
        <ListItem>{{ t('about.values.warranty') }}</ListItem>
        <ListItem>{{ t('about.values.materials') }}</ListItem>
      </List>
    </AboutCard>
    <AboutCard :title="t('about.company.title')" class="leading-relaxed">
      <p class="text-muted-foreground mb-4">
        {{ t('about.company.description') }}
      </p>
      <List>
        <ListItem>{{ t('about.company.nip') }}: {{ config.company.nip }}</ListItem>
        <ListItem>{{ t('about.company.regon') }}: {{ config.company.regon }}</ListItem>
        <ListItem>{{ t('about.company.phone') }}: {{ config.company.phone }}</ListItem>
        <ListItem>{{ t('about.company.email') }}: {{ config.company.email }}</ListItem>
        <ListItem>{{ t('about.company.coverage') }}</ListItem>
      </List>
    </AboutCard>
  </BaseSection>
</template>
