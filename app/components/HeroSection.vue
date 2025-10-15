
<template>
  <section class="relative bg-navy text-white overflow-hidden min-h-screen flex items-center">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0">
      <!-- Base gradient -->
      <div class="absolute inset-0 bg-gradient-to-br from-navy via-navy-800 to-navy-900"></div>

      <!-- Animated pattern overlay -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.3)_1px,_transparent_0)] bg-[size:20px_20px] animate-pulse"></div>
      </div>

      <!-- Floating geometric shapes -->
      <div class="absolute top-20 left-10 w-32 h-32 border border-primary-blue/20 rounded-full animate-float-slow"></div>
      <div class="absolute bottom-32 right-16 w-24 h-24 bg-primary-blue/10 rounded-lg rotate-12 animate-float-medium"></div>
      <div class="absolute top-1/2 right-1/4 w-16 h-16 border-2 border-light-blue/30 rotate-45 animate-float-fast"></div>

      <!-- Gradient orbs -->
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div class="absolute bottom-1/4 right-1/3 w-80 h-80 bg-light-blue/5 rounded-full blur-3xl animate-pulse-slower"></div>
    </div>

    <div class="relative container mx-auto px-6 py-16">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">

        <!-- Left Column - Logo and Visual Elements -->
        <div class="flex flex-col items-center lg:items-start justify-center space-y-8">
          <!-- Main Logo with Animation -->
          <div
              ref="logoRef"
              class="transform transition-all duration-1000 ease-out"
              :class="logoAnimated ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'"
          >
            <img
                src="/img/logos/crafted_finance_dark_bg.svg"
                alt="Crafted Finance"
                class="h-125 lg:h-125 xl:h-200 max-w-full object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>

          </div>

        <!-- Right Column - Content -->
        <div class="flex flex-col justify-center space-y-8">

          <!-- Headline with Staggered Animation -->
          <div class="space-y-4">
            <h1
                ref="headlineRef"
                class="transform transition-all duration-1000 delay-200 ease-out"
                :class="headlineAnimated ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'"
            >
              <span class="block text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white mb-2">
                Financing Solutions
              </span>
              <span class="block text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span class="text-primary-blue relative">
                  for Every Journey
                </span>
              </span>
            </h1>
          </div>

          <!-- Subheadline -->
          <p
              ref="subheadlineRef"
              class="text-lg lg:text-xl xl:text-2xl text-blue-100 leading-relaxed max-w-2xl transform transition-all duration-1000 delay-400 ease-out"
              :class="subheadlineAnimated ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'"
          >
            Trusted Australian finance brokers helping you secure the right funding for
            <span class="text-primary-blue font-semibold">vehicles, marine, travel, equipment, aviation, business, and insurance.</span>
          </p>

          <!-- Animated Feature Points -->
          <!-- Trust Indicators -->
          <div
              ref="trustRef"
              class="transform transition-all duration-1000 delay-300 ease-out flex flex-col sm:flex-row gap-4"
              :class="trustAnimated ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
          >
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 ">
              <div class="flex items-center gap-4">
                <Icon name="lucide:shield-check" class="w-8 h-8 text-primary-blue" />
                <div>
                  <p class="text-sm font-semibold text-white">Australian Licensed</p>
                  <p class="text-xs text-blue-200">Credit Representative 572894</p>
                </div>
              </div>
            </div>
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div class="flex items-center gap-4">
                <Icon name="lucide:users" class="w-8 h-8 text-light-blue" />
                <div>
                  <p class="text-sm font-semibold text-white">Trusted by Australians</p>
                  <p class="text-xs text-blue-200">Expert finance brokers</p>
                </div>
              </div>
            </div>
          </div>


          <!-- CTAs with Hover Animations -->
          <div
              ref="ctaRef"
              class="transform transition-all duration-1000 delay-700 ease-out"
              :class="ctaAnimated ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'"
          >
            <div class="flex flex-col sm:flex-row gap-4">
              <Button
                  @click="scrollToForm"
                  variant="primary"
                  size="large"
                  class="w-full sm:w-auto group hover:scale-105 transition-all duration-300 hover:shadow-blue-lg"
              >
                <span class="flex items-center gap-2">
                  Get Started
                  <Icon name="lucide:arrow-right" class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
              <Button
                  @click="scrollToSolutions"
                  variant="secondary"
                  size="large"
                  class="w-full sm:w-auto group hover:scale-105 transition-all duration-300"
              >
                <span class="flex items-center gap-2">
                  <Icon name="lucide:compass" class="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Explore Finance Solutions
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Animated Scroll Indicator -->
    <div
        ref="scrollRef"
        class="absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ease-out"
        :class="scrollAnimated ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'"
    >
      <div class="animate-bounce cursor-pointer" @click="scrollToSolutions">
        <div class="flex flex-col items-center gap-2">
          <span class="text-xs text-blue-200 font-medium">Scroll to explore</span>
          <Icon name="lucide:chevron-down" class="w-6 h-6 text-primary-blue" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Animation refs
const logoRef = ref(null)
const headlineRef = ref(null)
const subheadlineRef = ref(null)
const featuresRef = ref(null)
const ctaRef = ref(null)
const trustRef = ref(null)
const statsRef = ref(null)
const scrollRef = ref(null)

// Animation state
const logoAnimated = ref(false)
const headlineAnimated = ref(false)
const subheadlineAnimated = ref(false)
const featuresAnimated = ref(false)
const ctaAnimated = ref(false)
const trustAnimated = ref(false)
const statsAnimated = ref(false)
const scrollAnimated = ref(false)
const underlineAnimated = ref(false)

// Feature points data
const features = [
  { icon: 'lucide:check-circle', text: 'Fast 24hr response' },
  { icon: 'lucide:shield-check', text: 'Licensed & regulated' },
  { icon: 'lucide:users', text: 'Expert guidance' },
  { icon: 'lucide:heart-handshake', text: 'Trusted by thousands' }
]

// Scroll functions
const scrollToForm = () => {
  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
}

const scrollToSolutions = () => {
  document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })
}

// Animation sequence on mount
onMounted(() => {
  // Staggered animation sequence
  setTimeout(() => logoAnimated.value = true, 100)
  setTimeout(() => headlineAnimated.value = true, 300)
  setTimeout(() => subheadlineAnimated.value = true, 500)
  setTimeout(() => featuresAnimated.value = true, 700)
  setTimeout(() => ctaAnimated.value = true, 900)
  setTimeout(() => trustAnimated.value = true, 400)
  setTimeout(() => statsAnimated.value = true, 600)
  setTimeout(() => scrollAnimated.value = true, 1100)
  setTimeout(() => underlineAnimated.value = true, 1200)
})
</script>

<style scoped>
/* Custom animations */
@keyframes float-slow {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

@keyframes float-medium {
  0%, 100% { transform: translateY(0px) rotate(12deg); }
  50% { transform: translateY(-15px) rotate(15deg); }
}

@keyframes float-fast {
  0%, 100% { transform: translateY(0px) rotate(45deg); }
  50% { transform: translateY(-10px) rotate(50deg); }
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.05; transform: scale(1); }
  50% { opacity: 0.1; transform: scale(1.05); }
}

@keyframes pulse-slower {
  0%, 100% { opacity: 0.03; transform: scale(1); }
  50% { opacity: 0.08; transform: scale(1.08); }
}

.animate-float-slow {
  animation: float-slow 6s ease-in-out infinite;
}

.animate-float-medium {
  animation: float-medium 4s ease-in-out infinite;
}

.animate-float-fast {
  animation: float-fast 3s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 8s ease-in-out infinite;
}

.animate-pulse-slower {
  animation: pulse-slower 10s ease-in-out infinite;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .min-h-screen {
    min-height: 100vh;
  }
}

@media (max-width: 768px) {
  /* Stack layout on mobile */
  .grid.lg\\:grid-cols-2 {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  /* Adjust logo size on mobile */
  .h-32.lg\\:h-40.xl\\:h-48 {
    height: 7rem;
  }
}

/* Enhanced button hover effects */
.group:hover .group-hover\\:translate-x-1 {
  transform: translateX(0.25rem);
}

.group:hover .group-hover\\:rotate-12 {
  transform: rotate(12deg);
}

/* Background elements performance optimization */
.absolute.inset-0 {
  will-change: transform;
}

.animate-float-slow,
.animate-float-medium,
.animate-float-fast {
  will-change: transform;
}
</style>