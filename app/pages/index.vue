<script setup lang="ts">
import HeroBanner from '~/components/HeroBanner.vue'
import ProductRange from '~/components/ProductRange.vue'
import WhyChoose from '~/components/WhyChoose.vue'

// Meta tags for SEO
useSeoMeta({
  title: 'MyBizKit - Outstanding Branding for Your Business',
  ogTitle: 'MyBizKit - Outstanding Branding for Your Business',
  description: 'Premium branded merchandise and custom products for Brisbane businesses. Key tags with NFC, 3D business cards, license plate frames, and stationary items.',
  ogDescription: 'Premium branded merchandise and custom products for Brisbane businesses. Key tags with NFC, 3D business cards, license plate frames, and stationary items.',
  ogImage: '/img/hero-products.jpg'
})

// Product examples for carousel
const productExamples = [
  {
    image: '/img/example-1.jpg',
    caption: 'Custom NFC Key Tags - Tech Startup',
    alt: 'Custom branded NFC key tags for technology company'
  },
  {
    image: '/img/example-2.jpg',
    caption: '3D Business Cards - Real Estate',
    alt: '3D printed business cards for real estate agent'
  },
  {
    image: '/img/example-3.jpg',
    caption: 'License Plate Frame - Local Business',
    alt: 'Custom license plate frame with business branding'
  },
  {
    image: '/img/example-4.jpg',
    caption: 'Wireless Charging Phone Holder - Corporate',
    alt: 'Branded phone holder with wireless charging'
  }
]

// Instagram feed placeholder
const instagramPosts = [
  { image: '/img/instagram-1.jpg', link: '#', alt: 'Recent custom key tag project' },
  { image: '/img/instagram-2.jpg', link: '#', alt: 'Behind the scenes 3D printing' },
  { image: '/img/instagram-3.jpg', link: '#', alt: 'Custom business card showcase' },
  { image: '/img/instagram-4.jpg', link: '#', alt: 'License plate frame installation' },
  { image: '/img/instagram-5.jpg', link: '#', alt: 'Stationary items collection' },
  { image: '/img/instagram-6.jpg', link: '#', alt: 'Customer testimonial post' }
]
</script>

<template>
  <div>
    <HeroBanner />

    <ProductRange />

    <!-- Product Examples Carousel -->
    <section class="bg-gray-50 py-16 lg:py-24">
      <div class="container mx-auto px-4">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-4xl lg:text-5xl font-bold text-navy-900 mb-4 text-center">
            Recent Projects
          </h2>
          <p class="text-xl text-navy-600 mb-12 text-center max-w-3xl mx-auto">
            See how we've helped Brisbane businesses create outstanding branded merchandise
          </p>

          <!-- Horizontal Scrolling Carousel -->
          <div class="overflow-x-auto pb-6">
            <div class="flex space-x-6 w-max">
              <div
                  v-for="(example, index) in productExamples"
                  :key="index"
                  class="flex-none w-80 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div class="aspect-[4/3] bg-gradient-to-br from-mint-100 to-navy-100 relative flex items-center justify-center">
                  <!-- Placeholder for product image -->
                  <div class="text-6xl text-navy-400">📷</div>
                </div>
                <div class="p-6">
                  <p class="text-navy-900 font-semibold text-lg">{{ example.caption }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Instagram Feed - Masonry Grid -->
    <section class="container mx-auto px-4 py-16 lg:py-24">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            Follow Our Work
          </h2>
          <p class="text-xl text-navy-600 mb-8">
            See our latest projects and behind-the-scenes content on Instagram
          </p>
          <UButton
              external
              to="https://instagram.com/mybizkit"
              class="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 font-semibold px-6 py-3"
          >
            <UIcon name="i-heroicons-camera" class="mr-2" />
            Follow @mybizkit
          </UButton>
        </div>

        <!-- Masonry Grid -->
        <div class="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <div
              v-for="(post, index) in instagramPosts"
              :key="index"
              class="break-inside-avoid bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <div class="aspect-square bg-gradient-to-br from-mint-100 to-navy-100 relative flex items-center justify-center">
              <!-- Instagram post placeholder -->
              <div class="text-4xl text-navy-400">📷</div>
              <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <UIcon name="i-heroicons-camera" class="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <WhyChoose />

  </div>
</template>

<style scoped>
/* Custom scrollbar for carousel */
.overflow-x-auto::-webkit-scrollbar {
  height: 8px;
}
</style>


