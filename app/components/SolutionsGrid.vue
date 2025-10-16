<template>
  <section class="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50" id="solutions">
    <div class="container mx-auto px-6">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 bg-primary-blue/10 rounded-full px-4 py-2 mb-6">
          <Icon name="lucide:sparkles" class="w-4 h-4 text-primary-blue" />
          <span class="text-sm font-medium text-primary-blue">Finance Solutions</span>
        </div>

        <h2 class="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-navy via-navy to-primary-blue bg-clip-text text-transparent mb-6">
          Financing for
          <span class="block">Every Journey</span>
        </h2>

        <p class="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          From vehicles to aircraft, marine vessels to business equipment - we have specialized finance solutions for all your needs.
        </p>
      </div>

      <!-- Solutions Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div
            v-for="(category, index) in categories"
            :key="category.name"
            class="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/50 hover:border-primary-blue/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-blue/10 overflow-hidden"
            :class="`animate-fade-in-up`"
            :style="{ animationDelay: `${index * 100}ms` }"
        >
          <!-- Background Image with Overlay -->
          <div
              v-if="category.image"
              class="absolute inset-0 opacity-0 group-hover:opacity-50 transition-all duration-700"
          >
            <img
                :src="category.image"
                :alt="category.name"
                class="w-full h-full object-cover rounded-3xl scale-110 group-hover:scale-105 transition-transform duration-700"
            />
            <!-- Gradient overlay for better text readability -->
            <div class="absolute inset-0 bg-gradient-to-br from-primary-blue/20 via-transparent to-navy/20 rounded-3xl"></div>
          </div>

          <!-- Subtle Pattern Background for cards without images -->
          <div
              v-if="!category.image"
              class="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500"
          >
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(59,130,246,0.3)_1px,_transparent_1px)] bg-[size:30px_30px] rounded-3xl"></div>
          </div>

          <!-- Glow effect on hover -->
          <div class="absolute inset-0 bg-gradient-to-r from-primary-blue/5 to-light-blue/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div class="relative z-10">
            <!-- Icon with enhanced styling -->
            <div class="relative mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-primary-blue to-light-blue rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <Icon :name="category.icon" class="w-8 h-8 text-white" />
              </div>

              <!-- Floating indicator -->
              <div class="absolute -top-2 -right-2 w-6 h-6 bg-navy rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                <Icon name="lucide:arrow-up-right" class="w-3 h-3 text-white" />
              </div>
            </div>

            <!-- Content -->
            <div class="space-y-4">
              <h3 class="text-2xl font-bold text-navy group-hover:text-primary-blue transition-colors duration-300">
                {{ category.name }}
              </h3>

              <p class="text-slate-600 group-hover:text-slate-700 transition-colors duration-300 leading-relaxed">
                {{ category.description }}
              </p>

              <!-- Benefits List -->
              <div v-if="category.benefits" class="space-y-2">
                <ul class="space-y-1">
                  <li
                      v-for="benefit in category.benefits"
                      :key="benefit"
                      class="flex items-center gap-2 text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-300"
                  >
                    <div class="w-1.5 h-1.5 bg-primary-blue rounded-full flex-shrink-0"></div>
                    <span>{{ benefit }}</span>
                  </li>
                </ul>
              </div>

              <!-- CTA -->
              <div class="pt-4">
                <button class="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-50 group-hover:bg-primary-blue group-hover:text-primary-blue transition-all duration-300 text-sm font-medium group-hover:shadow-md hover:scale-105">
                  <span>Learn More</span>
                  <Icon name="lucide:arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>

          <!-- Corner accent -->
          <div class="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-primary-blue/20 to-light-blue/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></div>
        </div>
      </div>

      <!-- Call to Action Section -->
      <div class="text-center mt-16">
        <div class="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/50 max-w-2xl mx-auto">
          <h3 class="text-2xl font-bold text-navy mb-4">Ready to Get Started?</h3>
          <p class="text-slate-600 mb-6 leading-relaxed">
            Our expert finance brokers are ready to help you find the perfect solution for your needs.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="group bg-gradient-to-r from-primary-blue to-light-blue hover:from-light-blue hover:to-primary-blue text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <span class="flex items-center gap-2">
                <Icon name="lucide:phone" class="w-5 h-5" />
                Get Pre-Approved
                <Icon name="lucide:arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
            <button class="group border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105">
              <span class="flex items-center gap-2">
                <Icon name="lucide:calculator" class="w-5 h-5" />
                Calculate Rates
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
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
</script>

<style scoped>
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
  animation: fade-in-up 0.6s ease-out forwards;
  opacity: 0;
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

/* Enhanced hover effects */
.group:hover .group-hover\:scale-105 {
  transform: scale(1.05);
}

.group:hover .group-hover\:scale-110 {
  transform: scale(1.1);
}

.group:hover .group-hover\:scale-150 {
  transform: scale(1.5);
}

/* Smooth transitions for background images */
img {
  transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Ensure text remains readable over background images */
.relative.z-10 {
  position: relative;
  z-index: 10;
}
</style>