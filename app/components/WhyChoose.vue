
<template>
  <!-- Why Choose Us Section - Enhanced -->
  <section class="relative bg-gradient-to-br from-navy-600 via-navy-500 to-navy-700 py-20 lg:py-28 overflow-hidden">

    <!-- Enhanced Background Elements -->
    <div class="absolute inset-0">
      <!-- Subtle grid pattern -->

    <!-- Floating geometric shapes -->
    <div class="absolute top-20 left-10 w-64 h-64 bg-mint-400/10 rounded-full blur-3xl animate-float-slow"></div>
    <div class="absolute bottom-32 right-16 w-48 h-48 bg-mint-300/15 rounded-full blur-2xl animate-float-medium"></div>
    <div class="absolute top-1/2 left-1/3 w-32 h-32 bg-white/5 rounded-full blur-xl animate-float-fast"></div>

    <!-- Subtle sparkle effects -->
    <div class="absolute inset-0">
      <div
          v-for="i in 8"
          :key="`sparkle-${i}`"
          class="absolute w-2 h-2 bg-mint-300/60 rounded-full animate-twinkle"
          :style="{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }"
      ></div>
    </div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-7xl mx-auto">

        <!-- Enhanced Header Section -->
        <div class="text-center mb-20 animate-fade-in-up">
          <div class="inline-flex items-center justify-center p-2 bg-mint-400/20 rounded-full mb-6">
            <div class="bg-mint-400 p-3 rounded-full">
              <UIcon name="i-heroicons-star" class="text-navy-900 text-xl" />
            </div>
          </div>

          <h2 class="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Why Choose
            <span class="bg-gradient-to-r from-mint-300 to-mint-500 bg-clip-text text-transparent">
              MyBizKit?
            </span>
          </h2>

          <div class="max-w-4xl mx-auto">
            <p class="text-xl lg:text-2xl text-navy-100 leading-relaxed mb-8">
              We're not just another merchandise company. We're your local Brisbane partner
              in creating outstanding branded products that make your business memorable.
            </p>

            <!-- Trust indicators -->
            <div class="flex items-center justify-center space-x-8 text-navy-200">
              <div class="flex items-center">
                <UIcon name="i-heroicons-map-pin" class="mr-2 text-mint-400" />
                <span class="text-md font-medium">Brisbane Based</span>
              </div>
              <div class="flex items-center">
                <UIcon name="i-heroicons-clock" class="mr-2 text-mint-400" />
                <span class="text-md font-medium">Fast Delivery</span>
              </div>
              <div class="flex items-center">
                <UIcon name="i-heroicons-shield-check" class="mr-2 text-mint-400" />
                <span class="text-md font-medium">Quality Guaranteed</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Enhanced Grid with Staggered Animations -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          <div
              v-for="(point, index) in whyChooseUs"
              :key="index"
              class="group animate-fade-in-up"
              :style="{ animationDelay: `${index * 0.15}s` }"
          >
            <!-- Enhanced Card Design -->
            <div class="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 h-full transition-all duration-500 group-hover:bg-white/15 group-hover:border-mint-300/30 group-hover:transform group-hover:-translate-y-2 group-hover:shadow-2xl">

              <!-- Glowing border effect on hover -->
              <div class="absolute inset-0 rounded-3xl bg-gradient-to-r from-mint-300/20 to-mint-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

              <div class="relative z-10">
                <!-- Enhanced Icon Container -->
                <div class="relative mb-8">
                  <div class="bg-gradient-to-br from-mint-400 to-mint-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-500 shadow-lg group-hover:shadow-mint-400/50">
                    <!-- Icon glow effect -->
                    <div class="absolute inset-0 bg-gradient-to-br from-mint-300 to-mint-400 rounded-2xl blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                    <UIcon :name="point.icon" class="relative text-3xl text-navy-900 group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  <!-- Floating accent -->
                  <div class="absolute -top-2 -right-2 w-6 h-6 bg-mint-300/30 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <!-- Enhanced Text Content -->
                <div class="text-center">
                  <h3 class="text-xl lg:text-2xl font-bold text-mint-400 mb-4 group-hover:text-mint-200 transition-colors duration-300">
                    {{ point.title }}
                  </h3>

                  <p class="text-navy-100 leading-relaxed text-base lg:text-lg group-hover:text-white transition-colors duration-300">
                    {{ point.description }}
                  </p>
                </div>


              </div>
            </div>
          </div>
        </div>

        <!-- Enhanced CTA Section -->
        <div class="text-center mt-20 animate-fade-in-up" style="animation-delay: 0.9s;">
          <div class="max-w-2xl mx-auto mb-8">
            <p class="text-lg text-navy-100 mb-8">
              Ready to elevate your brand with premium merchandise that stands out?
            </p>
          </div>

          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <UButton
                to="/about"
                size="lg"
                class="group relative bg-gradient-to-r from-mint-400 via-mint-500 to-mint-400 text-navy-900 hover:from-mint-300 hover:via-mint-400 hover:to-mint-300 font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
            >
              <!-- Button glow effect -->
              <span class="absolute inset-0 rounded-lg bg-gradient-to-r from-mint-300 via-mint-400 to-mint-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></span>

              <span class="relative flex items-center">
                <UIcon name="i-heroicons-information-circle" class="mr-2 w-5 h-5" />
                Learn More About Us
                <UIcon name="i-heroicons-arrow-right" class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </UButton>

            <UButton
                to="/contact"
                size="lg"
                variant="outline"
                class="group text-white border-2 border-white/30 hover:border-mint-400 hover:bg-mint-400/10 px-8 py-4 text-lg transition-all duration-500 backdrop-blur-sm"
            >
              <span class="flex items-center">
                <UIcon name="i-heroicons-chat-bubble-left-ellipsis" class="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Get In Touch
              </span>
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const whyChooseUs = [
  {
    icon: 'i-heroicons-map-pin',
    title: 'Local Brisbane Business',
    description: 'Personal service with convenient local pickup and drop-off options throughout the Brisbane metropolitan area.'
  },
  {
    icon: 'i-heroicons-truck',
    title: 'Australia & NZ Shipping',
    description: 'Fast, reliable delivery across Australia and New Zealand with full tracking.'
  },
  {
    icon: 'i-heroicons-clock',
    title: 'Swift Turnaround',
    description: 'Quick production times without compromising on quality, attention to detail, or craftsmanship standards.'
  },
  {
    icon: 'i-heroicons-star',
    title: 'Quality Over Price',
    description: 'Premium materials and meticulous craftsmanship in every product we create, ensuring lasting impressions.'
  },
  {
    icon: 'i-heroicons-paint-brush',
    title: 'Hands-On Design',
    description: 'Collaborative design process with direct communication and expert guidance throughout your entire project.'
  },
  {
    icon: 'i-heroicons-chat-bubble-left-right',
    title: 'Easy Communication',
    description: 'Responsive, friendly customer service that keeps you informed and involved every step of the way.'
  }
]
</script>

<style scoped>
/* Enhanced animations */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float-slow {
  0%, 100% {
    transform: translateY(0px) rotate(0deg) scale(1);
  }
  50% {
    transform: translateY(-30px) rotate(5deg) scale(1.05);
  }
}

@keyframes float-medium {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-20px) rotate(-3deg);
  }
  66% {
    transform: translateY(-35px) rotate(3deg);
  }
}

@keyframes float-fast {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-15px) rotate(-2deg);
  }
  50% {
    transform: translateY(-40px) rotate(2deg);
  }
  75% {
    transform: translateY(-25px) rotate(-1deg);
  }
}

@keyframes twinkle {
  0%, 100% {
    opacity: 0;
    transform: scale(0) rotate(0deg);
  }
  25% {
    opacity: 0.6;
    transform: scale(0.8) rotate(90deg);
  }
  50% {
    opacity: 1;
    transform: scale(1) rotate(180deg);
  }
  75% {
    opacity: 0.4;
    transform: scale(1.2) rotate(270deg);
  }
}

/* Animation classes */
.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
  opacity: 0;
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

.animate-float-medium {
  animation: float-medium 6s ease-in-out infinite;
}

.animate-float-fast {
  animation: float-fast 4s ease-in-out infinite;
}

.animate-twinkle {
  animation: twinkle 4s ease-in-out infinite;
}

/* Enhanced hover effects */
.group:hover .transform {
  transform: translateY(-8px) scale(1.02);
}

/* Glass morphism effect */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* Custom gradient text */
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}

/* Performance optimizations */
.animate-float-slow,
.animate-float-medium,
.animate-float-fast,
.animate-twinkle {
  will-change: transform;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .animate-float-slow,
  .animate-float-medium,
  .animate-float-fast {
    animation-duration: 10s;
    opacity: 0.6;
  }

  .animate-twinkle {
    opacity: 0.8;
  }
}

/* Dark mode compatibility */
@media (prefers-color-scheme: dark) {
  .backdrop-blur-sm {
    backdrop-filter: blur(12px);
  }
}
</style>