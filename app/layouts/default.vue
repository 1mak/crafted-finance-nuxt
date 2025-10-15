
<template>
  <div class="min-h-screen bg-white">
    <!-- Header -->
    <HeaderNav />

    <!-- Main Content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import HeaderNav from '~/components/HeaderNav.vue'
import FooterSection from '~/components/FooterSection.vue'

// Global meta configuration
useHead({
  htmlAttrs: {
    lang: 'en-AU'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }
  ]
})
</script>