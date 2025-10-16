
<template>
  <section id="solutions" class="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
    <!-- Modern Background Elements -->
    <div class="absolute inset-0">
      <!-- Subtle geometric pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(59,130,246,0.3)_1px,_transparent_0)] bg-[size:40px_40px]"></div>
      </div>

      <!-- Floating gradient orbs -->
      <div class="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200/20 to-primary-blue/10 rounded-full blur-3xl animate-float-slow"></div>
      <div class="absolute bottom-32 right-16 w-64 h-64 bg-gradient-to-r from-light-blue/20 to-blue-300/10 rounded-full blur-3xl animate-float-medium"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Modern Header -->
      <div class="text-center mb-20">
        <div class="inline-flex items-center gap-2 bg-primary-blue/10 rounded-full px-4 py-2 mb-6">
          <Icon name="lucide:zap" class="w-4 h-4 text-primary-blue" />
          <span class="text-sm font-medium text-primary-blue">Finance Solutions</span>
        </div>

        <h2 class="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-navy via-navy to-primary-blue bg-clip-text text-transparent mb-6">
          Solutions for Every
          <span class="block">Financial Journey</span>
        </h2>

        <p class="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Whatever your financing needs, we have the expertise and lender network to help you achieve your goals with tailored solutions.
        </p>
      </div>

      <!-- Interactive Solutions Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div
            v-for="(category, index) in categories"
            :key="category.name"
            class="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/50 hover:border-primary-blue/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-blue/10 cursor-pointer"
            :class="[
            selectedCategory === category.name ? 'ring-2 ring-primary-blue shadow-2xl shadow-primary-blue/20 -translate-y-2' : '',
            `animate-fade-in-up`
          ]"
            :style="{ animationDelay: `${index * 100}ms` }"
            @click="selectCategory(category.name)"
        >
          <!-- Glow effect on selection -->
          <div
              v-if="selectedCategory === category.name"
              class="absolute inset-0 bg-gradient-to-r from-primary-blue/10 to-light-blue/10 rounded-3xl blur-xl"
          ></div>

          <div class="relative z-10">
            <!-- Icon with modern gradient background -->
            <div class="relative mb-6">
              <div
                  class="w-16 h-16 rounded-2xl bg-gradient-to-br transition-all duration-500 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 group-hover:from-primary-blue group-hover:to-light-blu"
                  :class="[
                  selectedCategory === category.name
                    ? 'from-primary-blue to-light-blue shadow-lg shadow-primary-blue/30'
                    : 'from-slate-100 to-slate-200 group-hover:from-primary-blue group-hover:to-light-blue group-hover:shadow-lg group-hover:shadow-primary-blue/30'
                ]"
              >
                <Icon
                    :name="category.icon"
                    class="w-8 h-8 transition-colors duration-500"
                    :class="selectedCategory === category.name ? 'text-white' : 'text-slate-600 group-hover:text-white'"
                />
              </div>

              <!-- Floating indicator -->
              <div
                  v-if="selectedCategory === category.name"
                  class="absolute -top-2 -right-2 w-4 h-4 bg-primary-blue rounded-full animate-pulse"
              ></div>
            </div>

            <!-- Content -->
            <div class="space-y-3">
              <h3
                  class="text-2xl font-bold transition-colors duration-300"
                  :class="selectedCategory === category.name ? 'text-primary-blue' : 'text-navy group-hover:text-primary-blue'"
              >
                {{ category.name }}
              </h3>

              <p class="text-slate-600 group-hover:text-slate-700 transition-colors duration-300 leading-relaxed">
                {{ category.description }}
              </p>

              <!-- Key benefits -->
              <div class="pt-4 space-y-2">
                <div
                    v-for="benefit in category.benefits"
                    :key="benefit"
                    class="flex items-center gap-2 text-sm text-slate-500 group-hover:text-slate-600 transition-colors duration-300"
                >
                  <Icon name="lucide:check" class="w-4 h-4 text-green-500" />
                  <span>{{ benefit }}</span>
                </div>
              </div>
            </div>

            <!-- Interactive CTA -->
            <div class="mt-6 pt-6 border-t border-slate-100 group-hover:border-primary-blue/20 transition-colors duration-300">
              <button
                  @click.stop="enquireNow(category.name)"
                  class="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-50 group-hover:bg-primary-blue group-hover:text-primary-blue transition-all duration-300 text-sm font-medium group-hover:shadow-md hover:scale-105"
                  :class="selectedCategory === category.name ? 'bg-primary-blue text-primary-blue shadow-md' : 'text-slate-600'"
              >
                <span>Enquire Now</span>
                <Icon name="lucide:send" class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Modern CTA Section -->
      <div class="text-center mt-20">
        <div class="max-w-2xl mx-auto mb-8">
          <p class="text-lg text-slate-600 mb-8">
            Ready to explore your financing options? Get personalized advice from our expert team.
          </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
              @click="scrollToForm"
              variant="primary"
              size="large"
              class="group bg-gradient-to-r from-primary-blue to-light-blue hover:from-primary-blue hover:to-primary-blue text-white font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl hover:shadow-primary-blue/25 transition-all duration-500 transform hover:scale-105"
          >
            <span class="flex items-center gap-3">
              <Icon name="lucide:calculator" class="w-5 h-5" />
              Get Your Quote
              <Icon name="lucide:arrow-right" class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>

          <Button
              @click="openConsultation"
              variant="outline"
              size="large"
              class="group border-2 border-slate-300 hover:border-primary-blue text-slate-700 hover:text-primary-blue px-8 py-4 text-lg transition-all duration-500 hover:bg-primary-blue/5"
          >
            <span class="flex items-center gap-3">
              <Icon name="lucide:phone" class="w-5 h-5" />
              Free Consultation
            </span>
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  categorySelected: [categoryName: string]
  enquiryRequested: [categoryName: string]
}>()

const selectedCategory = ref<string | null>(null)

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

const selectCategory = (categoryName: string) => {
  selectedCategory.value = selectedCategory.value === categoryName ? null : categoryName
  emit('categorySelected', categoryName)
}

const enquireNow = (categoryName: string) => {
  // Emit the enquiry event to the parent component
  emit('categorySelected', categoryName)
  console.log('categoryName', categoryName)

  // Scroll to the contact form
  const contactForm = document.getElementById('contact-form')
  if (contactForm) {
    contactForm.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

const scrollToForm = (categoryName?: string) => {
  if (categoryName) {
    emit('enquiryRequested', categoryName)
  }

  const contactForm = document.getElementById('contact-form')
  if (contactForm) {
    contactForm.scrollIntoView({ behavior: 'smooth' })
  }
}

const openConsultation = () => {
  // Could open a modal or navigate to consultation booking
  console.log('Open consultation booking')
}
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

@keyframes float-slow {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(2deg); }
}

@keyframes float-medium {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(-2deg); }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out forwards;
  opacity: 0;
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

.animate-float-medium {
  animation: float-medium 6s ease-in-out infinite;
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
</style>