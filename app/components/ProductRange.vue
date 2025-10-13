
<template>
  <!-- Bento Grid - Product Showcase -->
  <section class="container mx-auto px-4 py-16 lg:py-20" data-products-section>
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl lg:text-4xl font-bold text-navy-900 mb-8 text-center">
        Our Product Range
      </h2>

      <!-- Compact 4-Column Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">

        <!-- Key Tags with NFC -->
        <NuxtLink
            :to="productCategories[0].link"
            class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-100 hover:border-mint-200 transform hover:-translate-y-2"
        >
          <div class="aspect-[4/3] bg-gradient-to-br from-mint-50 to-mint-100 relative flex items-center justify-center p-6">
            <UIcon
                :name="productCategories[0].icon"
                class="text-5xl lg:text-6xl text-navy-500 group-hover:scale-110 group-hover:text-mint-600 transition-all duration-500"
            />
            <!-- Floating badge for featured products -->
            <div class="absolute top-3 right-3 bg-mint-400 text-navy-900 text-xs font-bold px-2 py-1 rounded-full">
              Popular
            </div>
          </div>
          <div class="p-4 lg:p-5">
            <h3 class="text-lg lg:text-xl font-bold text-navy-900 mb-2 group-hover:text-mint-600 transition-colors duration-300">
              {{ productCategories[0].title }}
            </h3>
            <p class="text-navy-600 mb-4 text-sm leading-relaxed">
              {{ productCategories[0].description }}
            </p>
            <div class="flex items-center text-navy-500 group-hover:text-mint-500 group-hover:translate-x-1 transition-all duration-300 font-semibold text-sm">
              <span class="mr-2">Explore</span>
              <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
            </div>
          </div>
        </NuxtLink>

        <!-- 3D Business Cards -->
        <NuxtLink
            :to="productCategories[1].link"
            class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-100 hover:border-mint-200 transform hover:-translate-y-2"
        >
          <div class="aspect-[4/3] bg-gradient-to-br from-navy-50 to-navy-100 relative flex items-center justify-center p-6">
            <UIcon
                :name="productCategories[1].icon"
                class="text-5xl lg:text-6xl text-mint-500 group-hover:scale-110 group-hover:text-navy-600 transition-all duration-500"
            />
            <div class="absolute top-3 right-3 bg-navy-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              Premium
            </div>
          </div>
          <div class="p-4 lg:p-5">
            <h3 class="text-lg lg:text-xl font-bold text-navy-900 mb-2 group-hover:text-mint-600 transition-colors duration-300">
              {{ productCategories[1].title }}
            </h3>
            <p class="text-navy-600 mb-4 text-sm leading-relaxed">
              {{ productCategories[1].description }}
            </p>
            <div class="flex items-center text-navy-500 group-hover:text-mint-500 group-hover:translate-x-1 transition-all duration-300 font-semibold text-sm">
              <span class="mr-2">Explore</span>
              <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
            </div>
          </div>
        </NuxtLink>

        <!-- License Plate Frames -->
        <NuxtLink
            :to="productCategories[2].link"
            class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-100 hover:border-mint-200 transform hover:-translate-y-2"
        >
          <div class="aspect-[4/3] bg-gradient-to-br from-mint-50 to-navy-50 relative flex items-center justify-center p-6">
            <UIcon
                :name="productCategories[2].icon"
                class="text-5xl lg:text-6xl text-navy-500 group-hover:scale-110 group-hover:text-mint-600 transition-all duration-500"
            />
            <div class="absolute top-3 right-3 bg-mint-300 text-navy-900 text-xs font-bold px-2 py-1 rounded-full">
              Custom
            </div>
          </div>
          <div class="p-4 lg:p-5">
            <h3 class="text-lg lg:text-xl font-bold text-navy-900 mb-2 group-hover:text-mint-600 transition-colors duration-300">
              {{ productCategories[2].title }}
            </h3>
            <p class="text-navy-600 mb-4 text-sm leading-relaxed">
              {{ productCategories[2].description }}
            </p>
            <div class="flex items-center text-navy-500 group-hover:text-mint-500 group-hover:translate-x-1 transition-all duration-300 font-semibold text-sm">
              <span class="mr-2">Explore</span>
              <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
            </div>
          </div>
        </NuxtLink>

        <!-- Stationary Items -->
        <NuxtLink
            :to="productCategories[3].link"
            class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-100 hover:border-mint-200 transform hover:-translate-y-2"
        >
          <div class="aspect-[4/3] bg-gradient-to-br from-navy-50 to-mint-50 relative flex items-center justify-center p-6">
            <UIcon
                :name="productCategories[3].icon"
                class="text-5xl lg:text-6xl text-mint-500 group-hover:scale-110 group-hover:text-navy-600 transition-all duration-500"
            />
            <div class="absolute top-3 right-3 bg-navy-400 text-white text-xs font-bold px-2 py-1 rounded-full">
              Tech
            </div>
          </div>
          <div class="p-4 lg:p-5">
            <h3 class="text-lg lg:text-xl font-bold text-navy-900 mb-2 group-hover:text-mint-600 transition-colors duration-300">
              {{ productCategories[3].title }}
            </h3>
            <p class="text-navy-600 mb-4 text-sm leading-relaxed">
              {{ productCategories[3].description }}
            </p>
            <div class="flex items-center text-navy-500 group-hover:text-mint-500 group-hover:translate-x-1 transition-all duration-300 font-semibold text-sm">
              <span class="mr-2">Explore</span>
              <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
            </div>
          </div>
        </NuxtLink>

      </div>

      <!-- Call-to-Action Section -->
      <div class="text-center mt-12">
        <p class="text-navy-600 mb-6 text-lg">
          Can't find what you're looking for? We create custom solutions.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <UButton
              to="/products"
              size="lg"
              class="bg-mint-400 text-navy-900 hover:bg-mint-500 font-semibold px-6 py-3 transition-all duration-300 transform hover:scale-105"
          >
            View All Products
          </UButton>
          <UButton
              to="/quote"
              size="lg"
              variant="outline"
              class="text-navy-600 border-navy-300 hover:bg-navy-600 hover:text-white px-6 py-3 transition-all duration-300"
          >
            Get Custom Quote
          </UButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Product categories for Bento Grid
const productCategories = [
  {
    title: 'Key Tags with NFC',
    description: 'Smart key tags with optional NFC chip integration for modern connectivity',
    image: '/img/key-tags.jpg',
    link: '/products/key-tags',
    icon: 'i-heroicons-key',
    featured: true
  },
  {
    title: '3D Business Cards',
    description: 'Premium three-dimensional business cards that make lasting impressions',
    image: '/img/business-cards.jpg',
    link: '/products/business-cards',
    icon: 'i-heroicons-identification',
    featured: true
  },
  {
    title: 'License Plate Frames',
    description: 'Custom frames with interchangeable badges for professional branding',
    image: '/img/license-frames.jpg',
    link: '/products/license-frames',
    icon: 'i-heroicons-rectangle-stack'
  },
  {
    title: 'Stationary Items',
    description: 'Professional desk accessories including wireless charging phone holders',
    image: '/img/stationary.jpg',
    link: '/products/stationary',
    icon: 'i-heroicons-cube'
  }
]
</script>

<style scoped>
/* Enhanced hover animations */
.group:hover .transform {
  transform: translateY(-8px) scale(1.02);
}

/* Staggered animation on load */
.grid > *:nth-child(1) { animation-delay: 0.1s; }
.grid > *:nth-child(2) { animation-delay: 0.2s; }
.grid > *:nth-child(3) { animation-delay: 0.3s; }
.grid > *:nth-child(4) { animation-delay: 0.4s; }

/* Card entrance animation */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.grid > * {
  animation: slideUp 0.6s ease-out forwards;
}
</style>