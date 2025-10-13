
<template>
  <!-- Hero Banner - Enhanced with Animations -->
  <section class="relative bg-gradient-to-br from-navy-900 via-navy-600 to-navy-900 py-24 lg:py-32 overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0">
      <!-- Main gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-r from-mint-400/20 via-mint-300/10 to-transparent animate-pulse"></div>

      <!-- Floating geometric shapes -->
      <div class="absolute top-20 left-10 w-32 h-32 bg-mint-400/20 rounded-full blur-xl animate-float-slow"></div>
      <div class="absolute top-40 right-20 w-24 h-24 bg-mint-300/30 rounded-full blur-lg animate-float-medium"></div>
      <div class="absolute bottom-32 left-1/4 w-40 h-40 bg-mint-500/15 rounded-full blur-2xl animate-float-fast"></div>

      <!-- Animated grid overlay -->
      <div class="absolute inset-0 opacity-10">
        <div class="grid grid-cols-12 h-full">
          <div
              v-for="i in 12"
              :key="i"
              class="border-r border-mint-400/20 animate-pulse"
              :style="{ animationDelay: `${i * 0.1}s` }"
          ></div>
        </div>
      </div>

      <!-- Sparkling particles -->
      <div class="absolute inset-0 overflow-hidden">
        <div
            v-for="i in 20"
            :key="`particle-${i}`"
            class="absolute w-1 h-1 bg-mint-300 rounded-full animate-sparkle"
            :style="{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }"
        ></div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-6xl mx-auto text-center">
        <!-- Animated Main Headline -->
        <div class="mb-8">
          <h1 class="text-4xl md:text-7xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span class="inline-block animate-fade-in-up" style="animation-delay: 0.2s;">
              Bring your brand to life
            </span>
            <span class="inline-block animate-fade-in-up" style="animation-delay: 0.4s;">
                with results that can be
              </span>
            <span class="block text-mint-400 mt-4">
              <!-- Typewriter Effect for Random Word - Fixed Width Container -->
              <span
                  class="relative inline-block typewriter-container"
                  :style="{ width: typewriterWidth }"
              >
                <span
                    :key="currentWordIndex"
                    class="typewriter-word animate-fade-in-up absolute left-0 top-0 w-full text-center"
                    style="animation-delay: 2s;"
                >
                  {{ currentWord }}
                </span>

                <!-- Hidden text for width calculation -->
                <span
                    ref="widthCalculator"
                    class="typewriter-word opacity-0 pointer-events-none select-none"
                    aria-hidden="true"
                >
                  {{ longestWord }}
                </span>
              </span>
            </span>
          </h1>
        </div>

        <!-- Animated Subtitle -->
        <p class="text-xl md:text-2xl text-navy-50 mb-8 leading-relaxed max-w-4xl mx-auto animate-fade-in-up opacity-0"
           style="animation-delay: 0.8s; animation-fill-mode: forwards;">
          Premium custom merchandise and branded products designed in Brisbane.
          From NFC key tags to 3D business cards, we help your brand stand out.
        </p>

        <!-- Animated Call-to-Action Buttons -->
        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up opacity-0"
             style="animation-delay: 1s; animation-fill-mode: forwards;">

          <!-- Primary CTA - Enhanced with pulse and glow -->
          <UButton
              to="/products"
              size="lg"
              class="relative group bg-gradient-to-r from-mint-400 via-mint-500 to-mint-400 text-navy-900 hover:from-mint-300 hover:via-mint-400 hover:to-mint-300 font-semibold px-8 py-4 text-lg shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 "
              style="animation-delay: 1.2s;"
          >
            <!-- Glowing border effect -->
            <span class="absolute inset-0 rounded-lg bg-gradient-to-r from-mint-300 via-mint-400 to-mint-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></span>
            <span class="relative flex items-center">
              <UIcon name="i-heroicons-sparkles" class="mr-2 w-5 h-5 animate-spin-slow" />
              Shop Products
              <UIcon name="i-heroicons-arrow-right" class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </UButton>

          <!-- Secondary CTA -->
          <UButton
              to="/quote"
              size="lg"
              variant="outline"
              class="group text-white border-2 border-white hover:bg-white hover:text-navy-900 px-8 py-4 text-lg transition-all duration-500 transform hover:scale-105 relative overflow-hidden"
          >
            <!-- Sliding background effect -->
            <span class="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
            <span class="relative flex items-center">
              Get Custom Quote
              <UIcon name="i-heroicons-chat-bubble-left-ellipsis" class="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </span>
          </UButton>
        </div>

        <!-- Scroll Indicator -->
        <div class="mt-20 animate-fade-in-up opacity-0"
             style="animation-delay: 1.6s; animation-fill-mode: forwards;">
          <div class="flex flex-col items-center cursor-pointer group" @click="scrollToProducts">
            <span class="text-mint-300 text-sm font-medium mb-2 group-hover:text-white transition-colors duration-300">
              Explore Products
            </span>
            <UIcon name="i-heroicons-chevron-down" class="text-mint-400 text-2xl animate-bounce group-hover:translate-y-1 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, nextTick } from 'vue'

// Typewriter effect data
const randomWords = ['felt', 'held', 'touched', 'perceived', 'experienced', 'sensed', 'remembered', 'trusted', 'valued', 'cherished']
const currentWordIndex = ref(0)
const currentWord = ref('')
const showCursor = ref(true)
const isTyping = ref(false)
const widthCalculator = ref<HTMLElement>()
const typewriterWidth = ref('auto')

// Find the longest word for width calculation
const longestWord = computed(() => {
  return randomWords.reduce((longest, current) =>
      current.length > longest.length ? current : longest
  )
})

// Calculate cursor position based on current word length
const cursorPosition = computed(() => {
  if (!widthCalculator.value) return '0px'

  // Create a temporary span to measure the current word width
  const tempSpan = document.createElement('span')
  tempSpan.className = widthCalculator.value.className
  tempSpan.style.position = 'absolute'
  tempSpan.style.visibility = 'hidden'
  tempSpan.textContent = currentWord.value
  document.body.appendChild(tempSpan)

  const width = tempSpan.offsetWidth
  document.body.removeChild(tempSpan)

  return `${width}px`
})

// Typewriter effect variables
let typewriterInterval: NodeJS.Timeout | null = null
let wordChangeTimeout: NodeJS.Timeout | null = null
let cursorInterval: NodeJS.Timeout | null = null

// Calculate and set the container width
const calculateWidth = async () => {
  await nextTick()
  if (widthCalculator.value) {
    const width = widthCalculator.value.offsetWidth
    typewriterWidth.value = `${width + 10}px` // Add small buffer for cursor
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
    }, 100) // Typing speed
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
    }, 50) // Erasing speed (faster than typing)
  })
}

const cycleWords = async () => {
  while (true) {
    // Type the current word
    await typeWord(randomWords[currentWordIndex.value])

    // Wait before erasing
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Erase the word
    await eraseWord()

    // Wait before typing next word
    await new Promise(resolve => setTimeout(resolve, 300))

    // Move to next word
    currentWordIndex.value = (currentWordIndex.value + 1) % randomWords.length
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
  }, 500)
}

// Smooth scroll to products section
const scrollToProducts = () => {
  const element = document.querySelector('[data-products-section]') ||
      document.querySelector('section:nth-child(2)')

  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

// Lifecycle hooks
onMounted(async () => {
  // Set initial word immediately
  currentWord.value = randomWords[0]

  // Calculate width after DOM is ready
  await calculateWidth()

  // Start typewriter effect
  cycleWords()

  // Start cursor blinking
  startCursorBlink()
})

onUnmounted(() => {
  if (typewriterInterval) clearInterval(typewriterInterval)
  if (wordChangeTimeout) clearTimeout(wordChangeTimeout)
  if (cursorInterval) clearInterval(cursorInterval)
})
</script>

<style scoped>
/* Custom animations */
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

@keyframes float-slow {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(10deg); }
}

@keyframes float-medium {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-15px) rotate(-5deg); }
  66% { transform: translateY(-25px) rotate(5deg); }
}

@keyframes float-fast {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  25% { transform: translateY(-10px) rotate(-3deg); }
  50% { transform: translateY(-30px) rotate(3deg); }
  75% { transform: translateY(-20px) rotate(-2deg); }
}

@keyframes sparkle {
  0%, 100% {
    opacity: 0;
    transform: scale(0) rotate(0deg);
  }
  50% {
    opacity: 1;
    transform: scale(1) rotate(180deg);
  }
}

@keyframes bounce-gentle {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Animation classes */
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

.animate-bounce-gentle {
  animation: bounce-gentle 2s ease-in-out infinite;
}

.animate-spin-slow {
  animation: spin-slow 3s linear infinite;
}

/* Typewriter specific styles */
.typewriter-container {
  position: relative;
  display: inline-block;
  text-align: left;
  min-height: 1.2em;
}

.typewriter-word {
  display: inline-block;
  background: linear-gradient(135deg, #a7f3d0, #4ade80, #a7f3d0);
  background-size: 200% 200%;
  animation: gradient-shift 3s ease infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 900;
  text-shadow: 0 0 30px rgba(167, 243, 208, 0.5);
  white-space: nowrap;
}

.cursor-blink {
  animation: cursor-blink 1s infinite;
}

@keyframes cursor-blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Enhanced hover effects */
.group:hover .animate-bounce {
  animation: bounce 0.6s ease-in-out;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .animate-float-slow,
  .animate-float-medium,
  .animate-float-fast {
    animation-duration: 8s;
    opacity: 0.3;
  }

  .animate-sparkle {
    opacity: 0.5;
  }

  .typewriter-container {
    text-align: center;
  }
}

/* Performance optimizations */
.animate-float-slow,
.animate-float-medium,
.animate-float-fast {
  will-change: transform;
}

.animate-sparkle {
  will-change: opacity, transform;
}

.typewriter-word {
  will-change: contents;
}
</style>