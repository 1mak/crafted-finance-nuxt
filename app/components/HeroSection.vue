
<template>
  <section class="relative bg-navy text-white overflow-hidden min-h-screen flex items-center">
    <!-- Repeating Logo Pattern Background -->
    <div class="absolute inset-0">
      <!-- Base gradient -->
      <div class="absolute inset-0 bg-gradient-to-br from-navy via-navy-800 to-navy-900"></div>

      <!-- Repeating logo pattern overlay -->
      <div class="absolute inset-0 opacity-5">
        <div
            class="absolute inset-0 bg-repeat"
            style="
                background-image: url(/img/logos/crafted_finance_dark_bg.svg);
                background-size: 360px 220px;
                transform: rotate(-12deg) scale(1.6);
                transform-origin: center;
                filter: brightness(1) contrast(3);
          "
        ></div>
      </div>

      <!-- Gradient overlay to soften the pattern -->
      <div class="absolute inset-0 bg-gradient-to-br from-navy/80 via-navy/60 to-navy/80"></div>

      <!-- Subtle gradient orbs -->
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div class="absolute bottom-1/4 right-1/3 w-80 h-80 bg-light-blue/5 rounded-full blur-3xl animate-pulse-slower"></div>
    </div>

    <!-- Centered Content Container -->
    <div class="relative container mx-auto px-6 py-16 z-10">
      <div class="flex flex-col items-center justify-center text-center min-h-[80vh] max-w-4xl mx-auto">

        <!-- Headline with Typewriter Effect -->
        <div class="space-y-6 mb-8">
          <h1
              ref="headlineRef"
              class="transform transition-all duration-1000 delay-200 ease-out"
              :class="headlineAnimated ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'"
          >
            <span class="block text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white mb-4">
              Financing Solutions for
            </span>
            <span class="block text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              <!-- Typewriter Effect Container -->
              <span class="relative inline-block typewriter-container" :style="{ minWidth: typewriterWidth }">
                <span
                    :key="currentWordIndex"
                    class="typewriter-word text-primary-blue"
                >
                  {{ currentWord }}<span v-show="showCursor && isTyping" class="cursor animate-pulse">|</span>
                </span>

                <!-- Hidden text for width calculation -->
                <span
                    ref="widthCalculator"
                    class="typewriter-word opacity-0 pointer-events-none absolute whitespace-nowrap"
                    aria-hidden="true"
                >
                  {{ longestWord }}
                </span>
              </span>
            </span>
          </h1>
        </div>

        <!-- Subheadline -->
        <p
            ref="subheadlineRef"
            class="text-lg lg:text-xl xl:text-2xl text-blue-100 leading-relaxed max-w-3xl transform transition-all duration-1000 delay-400 ease-out mb-10"
            :class="subheadlineAnimated ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'"
        >
          Trusted Australian finance brokers helping you secure the right funding for all your needs.
        </p>


        <!-- Trust Indicators -->
        <div
            ref="trustRef"
            class="transform transition-all duration-1000 delay-600 ease-out flex flex-col sm:flex-row gap-6 mb-12 w-full max-w-2xl"
            :class="trustAnimated ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'"
        >
          <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 flex-1">
            <div class="flex items-center gap-4">
              <Icon name="lucide:shield-check" class="w-8 h-8 text-primary-blue flex-shrink-0" />
              <div class="text-left">
                <p class="text-sm font-semibold text-white">Authorised under Australian Credit Licence 543046</p>
                <p class="text-xs text-blue-200">Credit Representative 572894</p>
              </div>
            </div>
          </div>
          <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 flex-1">
            <div class="flex items-center gap-4">
              <Icon name="lucide:users" class="w-8 h-8 text-light-blue flex-shrink-0" />
              <div class="text-left">
                <p class="text-sm font-semibold text-white">Trusted by Australians</p>
                <p class="text-xs text-blue-200">Expert finance brokers</p>
              </div>
            </div>
          </div>
        </div>

        <!-- CTAs with Hover Animations -->
        <div
            ref="ctaRef"
            class="transform transition-all duration-1000 delay-800 ease-out"
            :class="ctaAnimated ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'"
        >
          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
                @click="scrollToForm"
                variant="primary"
                size="large"
                class="w-full sm:w-auto group hover:scale-105 transition-all duration-300 hover:shadow-blue-lg px-8 py-4"
            >
              <span class="flex items-center gap-3">
                Get Started
                <Icon name="lucide:arrow-right" class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
            <Button
                @click="scrollToSolutions"
                variant="secondary"
                size="large"
                class="w-full sm:w-auto group hover:scale-105 transition-all duration-300 px-8 py-4"
            >
              <span class="flex items-center gap-3">
                <Icon name="lucide:compass" class="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Explore Finance Solutions
              </span>
            </Button>
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
import { ref, onMounted, onUnmounted, computed, nextTick } from 'vue'

// Typewriter effect data - Finance categories
const financeCategories = ['vehicles', 'marine', 'travel', 'equipment', 'aviation', 'business', 'insurance']
const currentWordIndex = ref(0)
const currentWord = ref('')
const showCursor = ref(true)
const isTyping = ref(false)
const widthCalculator = ref<HTMLElement>()
const typewriterWidth = ref('auto')

// Categories data
const categories = [
  {
    name: 'Vehicles',
    description: 'Cars, trucks, motorcycles and commercial vehicles with competitive rates and flexible terms.',
    icon: 'lucide:car',
    image: '/img/stock/vehicle.webp',
    benefits: ['New & used vehicles', 'Quick approval', 'Competitive rates']
  },
  {
    name: 'Marine',
    description: 'Boats, yachts, and watercraft financing with specialized marine lending expertise.',
    icon: 'lucide:anchor',
    image: '/img/stock/marine.webp',
    benefits: ['All vessel types', 'Marine specialists', 'Flexible terms']
  },
  {
    name: 'Travel',
    description: 'Caravans, motorhomes and travel trailers to fund your adventure dreams.',
    icon: 'lucide:map-pin',
    image: '/img/stock/travel.webp',
    benefits: ['Adventure funding', 'Travel experts', 'Dream financing']
  },
  {
    name: 'Equipment',
    description: 'Business and industrial equipment financing for growth and productivity.',
    icon: 'lucide:wrench',
    image: '/img/stock/equipment.webp',
    benefits: ['Business growth', 'Equipment leasing', 'Tax benefits']
  },
  {
    name: 'Aviation',
    description: 'Aircraft and aviation equipment with specialized aviation finance knowledge.',
    icon: 'lucide:plane',
    image: '/img/stock/aviation.webp',
    benefits: ['Aircraft loans', 'Aviation expertise', 'Pilot programs']
  },
  {
    name: 'Business',
    description: 'Business loans and commercial finance solutions for expansion and operations.',
    icon: 'lucide:briefcase',
    image: '/img/stock/business.webp',
    benefits: ['Growth capital', 'Working capital', 'Commercial loans']
  },
  {
    name: 'Insurance',
    description: 'Comprehensive insurance solutions to protect your valuable investments.',
    icon: 'lucide:shield-check',
    benefits: ['Asset protection', 'Coverage options', 'Risk management']
  }
]

// Animation refs
const headlineRef = ref(null)
const subheadlineRef = ref(null)
const ctaRef = ref(null)
const trustRef = ref(null)
const scrollRef = ref(null)

// Animation state
const headlineAnimated = ref(false)
const subheadlineAnimated = ref(false)
const ctaAnimated = ref(false)
const trustAnimated = ref(false)
const scrollAnimated = ref(false)

// Find the longest word for width calculation
const longestWord = computed(() => {
  return financeCategories.reduce((longest, current) =>
      current.length > longest.length ? current : longest
  )
})

// Typewriter effect variables
let typewriterInterval: NodeJS.Timeout | null = null
let cursorInterval: NodeJS.Timeout | null = null

// Calculate and set the container width
const calculateWidth = async () => {
  await nextTick()
  if (widthCalculator.value) {
    const width = widthCalculator.value.offsetWidth
    typewriterWidth.value = `${width + 20}px` // Add buffer for cursor
  }
}

// Typewriter effect functions
const typeWord = (word: string) => {
  return new Promise<void>((resolve) => {
    currentWord.value = ''
    isTyping.value = true
    let index = 0

    typewriterInterval = setInterval(() => {
      if (index < word.length) {
        currentWord.value += word[index]
        index++
      } else {
        isTyping.value = false
        clearInterval(typewriterInterval!)
        resolve()
      }
    }, 120) // Typing speed
  })
}

const eraseWord = () => {
  return new Promise<void>((resolve) => {
    if (currentWord.value.length === 0) {
      resolve()
      return
    }

    isTyping.value = true
    typewriterInterval = setInterval(() => {
      if (currentWord.value.length > 0) {
        currentWord.value = currentWord.value.slice(0, -1)
      } else {
        isTyping.value = false
        clearInterval(typewriterInterval!)
        resolve()
      }
    }, 80) // Erasing speed (faster than typing)
  })
}

const cycleWords = async () => {
  // Initial delay before starting typewriter
  await new Promise(resolve => setTimeout(resolve, 2000))

  while (true) {
    // Type the current word
    await typeWord(financeCategories[currentWordIndex.value])

    // Wait before erasing
    await new Promise(resolve => setTimeout(resolve, 2500))

    // Erase the word
    await eraseWord()

    // Wait before typing next word
    await new Promise(resolve => setTimeout(resolve, 500))

    // Move to next word
    currentWordIndex.value = (currentWordIndex.value + 1) % financeCategories.length
  }
}

// Cursor blinking effect
const startCursorBlink = () => {
  cursorInterval = setInterval(() => {
    if (!isTyping.value) {
      showCursor.value = !showCursor.value
    } else {
      showCursor.value = true
    }
  }, 600)
}

const scrollToContactWithCategory = (categoryName: string) => {
  const element = document.getElementById('contact-form')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    // Emit event or call method to pre-fill form
    setTimeout(() => {
      const event = new CustomEvent('prefill-form', {
        detail: { category: categoryName }
      })
      window.dispatchEvent(event)
    }, 500)
  }
}

// Scroll functions
const scrollToForm = () => {
  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
}

const scrollToSolutions = () => {
  document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })
}

// Lifecycle hooks
onMounted(async () => {
  // Set initial word
  currentWord.value = financeCategories[0]

  // Calculate width after DOM is ready
  await calculateWidth()

  // Start animations
  setTimeout(() => headlineAnimated.value = true, 300)
  setTimeout(() => subheadlineAnimated.value = true, 500)
  setTimeout(() => trustAnimated.value = true, 700)
  setTimeout(() => ctaAnimated.value = true, 900)
  setTimeout(() => scrollAnimated.value = true, 1100)

  // Start typewriter effect
  cycleWords()

  // Start cursor blinking
  startCursorBlink()
})

onUnmounted(() => {
  if (typewriterInterval) clearInterval(typewriterInterval)
  if (cursorInterval) clearInterval(cursorInterval)
})
</script>

<style scoped>

/* Animation classes */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
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

.animate-sparkle {
  animation: sparkle 2s ease-in-out infinite;
}

/* Custom animations for logo pattern */
@keyframes float-pattern {
  0% { transform: rotate(15deg) scale(1.1) translateX(0) translateY(0); }
  25% { transform: rotate(15deg) scale(1.1) translateX(10px) translateY(-5px); }
  50% { transform: rotate(15deg) scale(1.1) translateX(0) translateY(-10px); }
  75% { transform: rotate(15deg) scale(1.1) translateX(-10px) translateY(-5px); }
  100% { transform: rotate(15deg) scale(1.1) translateX(0) translateY(0); }
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.05; transform: scale(1); }
  50% { opacity: 0.1; transform: scale(1.05); }
}

@keyframes pulse-slower {
  0%, 100% { opacity: 0.03; transform: scale(1); }
  50% { opacity: 0.08; transform: scale(1.08); }
}

.animate-pulse-slow {
  animation: pulse-slow 8s ease-in-out infinite;
}

.animate-pulse-slower {
  animation: pulse-slower 10s ease-in-out infinite;
}

/* Typewriter specific styles */
.typewriter-container {
  position: relative;
  display: inline-block;
  text-align: center;
  min-height: 1.2em;
}

.typewriter-word {
  display: inline-block;
  font-weight: 700;
  background: linear-gradient(135deg, #00a3e0, #5db3d4, #00a3e0);
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  white-space: nowrap;
}

.cursor {
  color: #00a3e0;
  font-weight: 300;
  margin-left: 2px;
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Enhanced button hover effects */
.group:hover .group-hover\\:translate-x-1 {
  transform: translateX(0.25rem);
}

.group:hover .group-hover\\:rotate-12 {
  transform: rotate(12deg);
}

/* Performance optimization */
.absolute.inset-0 {
  will-change: transform;
}

.typewriter-word {
  will-change: contents;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .min-h-screen {
    min-height: 100vh;
  }

  /* Adjust logo pattern on mobile */
  .bg-repeat {
    background-size: 120px 60px !important;
  }

  .typewriter-container {
    text-align: center;
  }
}

@media (max-width: 640px) {
  /* Further adjust pattern size for small screens */
  .bg-repeat {
    background-size: 100px 50px !important;
  }
}
</style>