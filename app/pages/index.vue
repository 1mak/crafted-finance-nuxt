<template>
  <div>
    <!-- Other sections -->
    <HeroSection />

    <!-- Solutions Section with enquiry handling -->
    <SolutionsGrid
        @category-selected="handleCategorySelection"
    />

    <!-- Contact Form Section -->
    <ContactForm
        ref="contactFormRef"
        :pre-selected-category="selectedSolution"
    />

    <TeamSection />

    <!-- Other sections -->
  </div>
</template>

<script setup lang="ts">
import SolutionsGrid from '@/components/SolutionsGrid.vue'
import ContactForm from '@/components/ContactForm.vue'

const contactFormRef = ref()
const selectedSolution = ref<string>('')

const handleCategorySelection = (categoryName: string) => {
  selectedSolution.value = categoryName

  // Optional: Add a slight delay to ensure the form is ready
  nextTick(() => {
    if (contactFormRef.value && contactFormRef.value.prefillForm) {
      contactFormRef.value.prefillForm(categoryName)
    }
  })
}
</script>