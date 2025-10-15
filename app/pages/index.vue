<script setup lang="ts">
// SEO Meta
useSeoMeta({
  title: 'Crafted Finance - Financing Solutions for Every Journey',
  description: 'Trusted Australian finance brokers helping you secure the right funding for vehicles, marine, travel, equipment, aviation, business, and insurance.',
  ogTitle: 'Crafted Finance - Financing Solutions for Every Journey',
  ogDescription: 'Trusted Australian finance brokers helping you secure the right funding for vehicles, marine, travel, equipment, aviation, business, and insurance.',
  ogImage: '/og-image.jpg',
  twitterCard: 'summary_large_image',
})

// State for selected category
const selectedCategory = ref<string>('')

// Handle category selection from SolutionsGrid
const handleCategorySelection = (categoryName: string) => {
  selectedCategory.value = categoryName
}
</script>

<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <HeroSection />

    <!-- Solutions Categories Section -->
    <SolutionsGrid @category-selected="handleCategorySelection" />

    <!-- Trust/Team Section -->
    <TeamSection />

    <!-- Contact Form Section -->
    <ContactForm :pre-selected-category="selectedCategory" />
  </div>
</template>