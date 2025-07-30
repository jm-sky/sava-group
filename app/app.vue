<script setup>
import NavbarSection from '@/components/Layout/Navbar.vue'
import HeroSection from '@/components/Sections/HeroSection.vue'
import AboutSection from '@/components/Sections/AboutSection.vue'
import TestimonialsSection from '@/components/Sections/TestimonialsSection.vue'
import ContactSection from '@/components/Sections/ContactSection.vue'
import FooterSection from '@/components/Sections/FooterSection.vue'
import ScrollToTop from '@/components/Sections/ScrollToTop.vue'

useHead({
  title: 'SAVA GROUP - Profesjonalne usługi elektryczne',
  meta: [
    { name: 'description', content: 'SAVA GROUP - Profesjonalne usługi elektryczne. Instalacje elektryczne, modernizacja, montaż oświetlenia, pomiary i diagnostyka.' },
  ],
})

useSeoMeta({
  ogImage: '/logo.png',
  twitterCard: 'summary_large_image',
  robots: 'index,follow',
})

const options = {
  testimonials: false,
}
</script>

<template>
  <div>
    <NavbarSection />
    <HeroSection />
    <AboutSection />
    <TestimonialsSection v-if="options.testimonials" />
    <ContactSection />
    <FooterSection />
    <ScrollToTop />
  </div>
</template>
