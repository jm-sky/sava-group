<script setup lang="ts">
const testimonials = [
  {
    author: "Jan Madeyski",
    date: "2023",
    location: "Warszawa",
    content: "Jestem bardzo zadowolony ze współpracy"
  }
]
</script>

<template>
  <BaseSection title="Opinie">
    <TestimonialCard
      v-for="testimonial in testimonials"
      :key="`${testimonial.author}-${testimonial.date}`"
      :author="testimonial.author"
      :date="testimonial.date"
      :location="testimonial.location"
      :content="testimonial.content"
    />
  </BaseSection>
</template>