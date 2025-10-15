<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
    <div class="container mx-auto px-6">
      <div class="flex items-center justify-between h-20">

        <!-- Logo Section -->
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="flex items-center space-x-3 group">
            <img
                src="/img/logos/crafted_finance_bright_bg.svg"
                alt="Crafted Finance"
                class="h-50 w-auto transition-transform duration-200 group-hover:scale-105"
            />
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-8">
          <NuxtLink
              to="/"
              :class="[
              'text-sm font-medium transition-colors duration-200',
              route.path === '/'
                ? 'text-primary-blue'
                : 'text-dark-gray hover:text-primary-blue'
            ]"
          >
            Home
          </NuxtLink>

          <button
              @click="scrollToSolutions"
              class="text-sm font-medium text-dark-gray hover:text-primary-blue transition-colors duration-200"
          >
            Solutions
          </button>

          <button
              @click="scrollToTeam"
              class="text-sm font-medium text-dark-gray hover:text-primary-blue transition-colors duration-200"
          >
            Our Team
          </button>
        </nav>

        <!-- Desktop CTA -->
        <div class="hidden lg:flex items-center space-x-4">
          <Button
              @click="scrollToContact"
              variant="primary"
              size="medium"
          >
            Get Started
          </Button>
        </div>

        <!-- Mobile Menu Button -->
        <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="lg:hidden p-2 text-dark-gray hover:text-primary-blue rounded-md transition-colors"
            :aria-expanded="isMobileMenuOpen"
            aria-label="Toggle menu"
        >
          <Icon
              :name="isMobileMenuOpen ? 'lucide:x' : 'lucide:menu'"
              class="w-6 h-6"
          />
        </button>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="isMobileMenuOpen" class="lg:hidden border-t border-gray-100 bg-white/98 backdrop-blur-md">
        <div class="container mx-auto px-6 py-6 space-y-4">

          <NuxtLink
              to="/"
              :class="[
              'block px-4 py-3 text-base font-medium rounded-lg transition-colors',
              route.path === '/'
                ? 'text-primary-blue bg-blue-50'
                : 'text-dark-gray hover:text-primary-blue hover:bg-gray-50'
            ]"
          >
            Home
          </NuxtLink>

          <button
              @click="scrollToSolutions"
              class="block w-full text-left px-4 py-3 text-base font-medium text-dark-gray hover:text-primary-blue hover:bg-gray-50 rounded-lg transition-colors"
          >
            Solutions
          </button>

          <button
              @click="scrollToTeam"
              class="block w-full text-left px-4 py-3 text-base font-medium text-dark-gray hover:text-primary-blue hover:bg-gray-50 rounded-lg transition-colors"
          >
            Our Team
          </button>

          <!-- Mobile CTA -->
          <div class="pt-4 mt-4 border-t border-gray-100">
            <Button
                @click="scrollToContact"
                variant="primary"
                size="large"
                class="w-full"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const route = useRoute()
const isMobileMenuOpen = ref(false)

// Close mobile menu when route changes
watch(() => route.path, () => {
  isMobileMenuOpen.value = false
})

// Scroll functions for navigation
const scrollToSolutions = () => {
  const element = document.getElementById('solutions')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    isMobileMenuOpen.value = false
  }
}

const scrollToTeam = () => {
  const element = document.querySelector('[data-section="team"]')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    isMobileMenuOpen.value = false
  }
}

const scrollToContact = () => {
  const element = document.getElementById('contact-form')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    isMobileMenuOpen.value = false
  }
}
</script>