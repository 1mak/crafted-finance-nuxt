<script setup lang="ts">
// Navigation items
const navigation = [
  { name: 'Products', href: '/products', current: false },
  { name: 'About', href: '/about', current: false },
  { name: 'Contact', href: '/contact', current: false }
]

// Get current route
const route = useRoute()

// Update current navigation item based on route
const currentNavigation = computed(() => {
  return navigation.map(item => ({
    ...item,
    current: item.href === '/' ? route.path === '/' : route.path.startsWith(item.href)
  }))
})

// Mobile menu state
const isMobileMenuOpen = ref(false)

// Cart store (placeholder for future implementation)
const cartItemsCount = ref(0)

// Close mobile menu when route changes
watch(() => route.path, () => {
  isMobileMenuOpen.value = false
})
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Fresh, Light Header -->
    <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100/80 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">

          <!-- Logo Section - Clean and Prominent -->
          <div class="flex-shrink-0">
            <NuxtLink to="/" class="flex items-center space-x-4 group">
              <!-- Your SVG Logo -->
              <div class="relative transition-transform duration-200 group-hover:scale-105">

              </div>

              <!-- Brand Text - Updated with new tagline -->
              <div class="hidden sm:block">
                <div class="text-4xl font-bold font-family-display text-navy-900 tracking-tight flex items-center space-x-2">
                  <img src="/img/logos/mybizkitlogo.svg" alt="MyBizKit Logo" class="w-16 h-16" />
                  MyBizKit
                </div>
              </div>
            </NuxtLink>
          </div>

          <!-- Desktop Navigation - Clean Pills -->
          <nav class="hidden lg:flex items-center space-x-2">
            <NuxtLink
                to="/"
                :class="[
                'px-6 py-3 text-sm font-medium rounded-full transition-all duration-200',
                route.path === '/'
                  ? 'text-navy-900 bg-mint-100/80 shadow-sm'
                  : 'text-gray-600 hover:text-navy-900 hover:bg-gray-50'
              ]"
            >
              Home
            </NuxtLink>

            <NuxtLink
                v-for="item in currentNavigation"
                :key="item.name"
                :to="item.href"
                :class="[
                'px-6 py-3 text-sm font-medium rounded-full transition-all duration-200',
                item.current
                  ? 'text-navy-900 bg-mint-100/80 shadow-sm'
                  : 'text-gray-600 hover:text-navy-900 hover:bg-gray-50'
              ]"
            >
              {{ item.name }}
            </NuxtLink>
          </nav>

          <!-- Desktop Actions - Light and Friendly -->
          <div class="hidden lg:flex items-center space-x-4">
            <!-- Cart Button -->
            <NuxtLink
                to="/cart"
                class="relative p-3 text-gray-600 hover:text-navy-900 hover:bg-gray-50 rounded-full transition-all duration-200 group"
            >
              <UIcon name="i-heroicons-shopping-bag" class="w-6 h-6" />
              <span v-if="cartItemsCount > 0"
                    class="absolute -top-1 -right-1 w-5 h-5 bg-mint-500 text-white text-xs font-bold rounded-full flex items-center justify-center shadow-lg">
                {{ cartItemsCount }}
              </span>
            </NuxtLink>

            <!-- Primary CTA - Fresh and Inviting -->
            <NuxtLink
                to="/quote"
                class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-mint-400 to-mint-500 text-navy-900 text-sm font-semibold rounded-full hover:from-mint-500 hover:to-mint-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Quote
              <UIcon name="i-heroicons-arrow-right" class="ml-2 w-4 h-4" />
            </NuxtLink>
          </div>

          <!-- Mobile Menu Button -->
          <button
              @click="isMobileMenuOpen = !isMobileMenuOpen"
              class="lg:hidden p-3 text-gray-600 hover:text-navy-900 hover:bg-gray-50 rounded-full transition-colors"
          >
            <UIcon :name="isMobileMenuOpen ? 'i-heroicons-x-mark' : 'i-heroicons-bars-3'" class="w-6 h-6" />
          </button>
        </div>
      </div>

      <!-- Mobile Navigation - Clean and Spacious -->
      <Transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2"
      >
        <div v-if="isMobileMenuOpen" class="lg:hidden border-t border-gray-100 bg-white/98 backdrop-blur-md">
          <div class="px-4 py-6 space-y-2">

            <NuxtLink
                to="/"
                :class="[
                'block px-4 py-4 text-lg font-medium rounded-xl transition-colors',
                route.path === '/'
                  ? 'text-navy-900 bg-mint-50'
                  : 'text-gray-700 hover:text-navy-900 hover:bg-gray-50'
              ]"
            >
              Home
            </NuxtLink>

            <NuxtLink
                v-for="item in currentNavigation"
                :key="item.name"
                :to="item.href"
                :class="[
                'block px-4 py-4 text-lg font-medium rounded-xl transition-colors',
                item.current
                  ? 'text-navy-900 bg-mint-50'
                  : 'text-gray-700 hover:text-navy-900 hover:bg-gray-50'
              ]"
            >
              {{ item.name }}
            </NuxtLink>

            <!-- Mobile Actions -->
            <div class="pt-6 mt-6 border-t border-gray-100 space-y-3">
              <NuxtLink
                  to="/cart"
                  class="flex items-center px-4 py-4 text-lg font-medium text-gray-700 hover:text-navy-900 hover:bg-gray-50 rounded-xl transition-colors"
              >
                <UIcon name="i-heroicons-shopping-bag" class="mr-4 w-6 h-6" />
                Cart
                <span v-if="cartItemsCount > 0"
                      class="ml-auto w-6 h-6 bg-mint-500 text-white text-sm font-bold rounded-full flex items-center justify-center">
                  {{ cartItemsCount }}
                </span>
              </NuxtLink>

              <NuxtLink
                  to="/quote"
                  class="flex items-center justify-center px-4 py-4 bg-gradient-to-r from-mint-400 to-mint-500 text-navy-900 text-lg font-semibold rounded-xl hover:from-mint-500 hover:to-mint-600 transition-all shadow-lg"
              >
                Get Quote
                <UIcon name="i-heroicons-arrow-right" class="ml-3 w-5 h-5" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </Transition>
    </header>

    <!-- Main Content -->
    <main class="min-h-screen">
      <slot />
    </main>

    <!-- Light, Modern Footer -->
    <footer class="bg-white border-t border-gray-200 py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          <!-- Company Info -->
          <div class="lg:col-span-2">
            <!-- Logo -->
            <div class="flex items-center space-x-4 mb-8">
              <img src="/img/logos/mybizkitlogo.svg" alt="MyBizKit Logo" class="w-12 h-12" />
              <div>
                <h3 class="text-2xl font-bold text-navy-900">MyBizKit</h3>
                <p class="text-mint-600 font-medium">Outstanding Branding</p>
              </div>
            </div>

            <p class="text-gray-600 mb-8 text-lg leading-relaxed max-w-lg">
              Premium custom merchandise and branded products designed in Brisbane.
              We help your business stand out with quality products that make lasting impressions.
            </p>

            <!-- Contact Info -->
            <div class="space-y-4 mb-8">
              <p class="flex items-center text-gray-600">
                <UIcon name="i-heroicons-map-pin" class="mr-3 text-mint-500 text-lg" />
                Brisbane, Queensland, Australia
              </p>
              <p class="flex items-center text-gray-600">
                <UIcon name="i-heroicons-phone" class="mr-3 text-mint-500 text-lg" />
                1300 MY BIZKIT
              </p>
              <p class="flex items-center text-gray-600">
                <UIcon name="i-heroicons-envelope" class="mr-3 text-mint-500 text-lg" />
                hello@mybizkit.com.au
              </p>
            </div>

            <!-- Social Links -->
            <div class="flex space-x-3">
              <UButton
                  external
                  to="https://instagram.com/mybizkit"
                  variant="ghost"
                  class="p-3 text-gray-400 hover:text-mint-500 hover:bg-mint-50 rounded-full transition-all"
                  target="_blank"
              >
                <UIcon name="i-heroicons-camera" class="text-xl" />
              </UButton>
              <UButton
                  external
                  to="https://facebook.com/mybizkit"
                  variant="ghost"
                  class="p-3 text-gray-400 hover:text-mint-500 hover:bg-mint-50 rounded-full transition-all"
                  target="_blank"
              >
                <UIcon name="i-heroicons-users" class="text-xl" />
              </UButton>
              <UButton
                  external
                  to="https://linkedin.com/company/mybizkit"
                  variant="ghost"
                  class="p-3 text-gray-400 hover:text-mint-500 hover:bg-mint-50 rounded-full transition-all"
                  target="_blank"
              >
                <UIcon name="i-heroicons-building-office" class="text-xl" />
              </UButton>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="text-lg font-semibold mb-6 text-navy-900">Quick Links</h4>
            <ul class="space-y-3">
              <li>
                <UButton to="/products" variant="link" class="p-0 text-gray-600 hover:text-mint-500 text-base transition-colors">
                  Products
                </UButton>
              </li>
              <li>
                <UButton to="/about" variant="link" class="p-0 text-gray-600 hover:text-mint-500 text-base transition-colors">
                  About Us
                </UButton>
              </li>
              <li>
                <UButton to="/quote" variant="link" class="p-0 text-gray-600 hover:text-mint-500 text-base transition-colors">
                  Custom Quote
                </UButton>
              </li>
              <li>
                <UButton to="/contact" variant="link" class="p-0 text-gray-600 hover:text-mint-500 text-base transition-colors">
                  Contact
                </UButton>
              </li>
              <li>
                <UButton to="/faq" variant="link" class="p-0 text-gray-600 hover:text-mint-500 text-base transition-colors">
                  FAQ
                </UButton>
              </li>
            </ul>
          </div>

          <!-- Services & Support -->
          <div>
            <h4 class="text-lg font-semibold mb-6 text-navy-900">Services & Support</h4>
            <ul class="space-y-3">
              <li>
                <UButton to="/shipping" variant="link" class="p-0 text-gray-600 hover:text-mint-500 text-base transition-colors">
                  Shipping Info
                </UButton>
              </li>
              <li>
                <UButton to="/returns" variant="link" class="p-0 text-gray-600 hover:text-mint-500 text-base transition-colors">
                  Returns & Refunds
                </UButton>
              </li>
              <li>
                <UButton to="/privacy" variant="link" class="p-0 text-gray-600 hover:text-mint-500 text-base transition-colors">
                  Privacy Policy
                </UButton>
              </li>
              <li>
                <UButton to="/terms" variant="link" class="p-0 text-gray-600 hover:text-mint-500 text-base transition-colors">
                  Terms of Service
                </UButton>
              </li>
            </ul>

            <!-- Business Hours -->
            <div class="mt-8">
              <h5 class="font-semibold mb-4 text-navy-900">Business Hours</h5>
              <div class="space-y-2 text-sm text-gray-600">
                <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
                <p class="text-mint-600 mt-3 font-medium">Brisbane local pickup available</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom Footer -->
        <div class="border-t border-gray-200 mt-12 pt-8">
          <div class="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div class="text-center lg:text-left">
              <p class="text-gray-600">
                © 2025 MyBizKit. Bring your brand to life. All rights reserved.
              </p>
              <p class="text-sm text-gray-400 mt-1">
                Australian Business Number: 12 345 678 901
              </p>
            </div>

            <div class="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-8">
              <div class="flex items-center text-sm text-gray-600">
                <UIcon name="i-heroicons-truck" class="mr-2 text-mint-500" />
                <span>Australia & NZ Shipping</span>
              </div>

              <!-- Payment Methods -->
              <div class="flex items-center space-x-2">
                <span class="text-sm text-gray-500">Payment:</span>
                <div class="flex items-center space-x-2 text-mint-500">
                  <UIcon name="i-heroicons-credit-card" />
                  <span class="text-xs text-gray-500">Visa • Mastercard • PayPal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Enhanced backdrop blur for glass effect */
.backdrop-blur-md {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* Smooth transitions for all interactive elements */
a, button {
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Enhanced focus states for accessibility */
a:focus-visible, button:focus-visible {
  outline-offset: 2px;
  border-radius: 8px;
}

/* Logo hover effect */
.group:hover img {
  filter: drop-shadow(0 4px 8px rgba(167, 243, 208, 0.3));
}

/* Main content breathing room */
main {
  min-height: calc(100vh - 80px);
}

/* Ensure proper stacking */
header {
  z-index: 50;
}
</style>