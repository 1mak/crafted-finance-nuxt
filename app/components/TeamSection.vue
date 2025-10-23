<template>
  <section class="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden" id="team">
    <!-- Modern Background Elements -->
    <div class="absolute inset-0">
      <!-- Subtle geometric pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(59,130,246,0.3)_1px,_transparent_0)] bg-[size:40px_40px]"></div>
      </div>

      <!-- Floating gradient orbs -->
      <div class="absolute top-20 right-10 w-72 h-72 bg-gradient-to-r from-blue-200/20 to-primary-blue/10 rounded-full blur-3xl animate-float-slow"></div>
      <div class="absolute bottom-32 left-16 w-64 h-64 bg-gradient-to-r from-light-blue/20 to-blue-300/10 rounded-full blur-3xl animate-float-medium"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Modern Header -->
      <div class="text-center mb-20">
        <div class="inline-flex items-center gap-2 bg-primary-blue/10 rounded-full px-4 py-2 mb-6">
          <Icon name="lucide:users" class="w-4 h-4 text-primary-blue" />
          <span class="text-sm font-medium text-primary-blue">Expert Team</span>
        </div>

        <h2 class="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-navy via-navy to-primary-blue bg-clip-text text-transparent mb-6">
          Meet Our
          <span class="block">Finance Experts</span>
        </h2>

        <p class="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Our experienced finance brokers are committed to finding the right solution for your unique needs with personalized service and expert guidance.
        </p>
      </div>

      <!-- Team Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
        <div
            v-for="(member, index) in teamMembers"
            :key="member.name"
            class="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/50 hover:border-primary-blue/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-blue/10"
            :class="`animate-fade-in-up`"
            :style="{ animationDelay: `${index * 200}ms` }"
        >
          <!-- Glow effect on hover -->
          <div class="absolute inset-0 bg-gradient-to-r from-primary-blue/5 to-light-blue/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div class="relative z-10">
            <!-- Photo with modern styling -->
            <div class="relative mb-6 flex justify-center">
              <div class="relative">
                <div class="w-28 h-28 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 group-hover:from-primary-blue/10 group-hover:to-light-blue/10 transition-all duration-500 group-hover:scale-105 group-hover:rotate-2 shadow-lg group-hover:shadow-xl">
                  <img
                      :src="member.image"
                      :alt="member.name"
                      class="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                      onerror="this.src='https://ui-avatars.com/api/?name=' + encodeURIComponent(this.alt) + '&size=112&background=e2e8f0&color=475569&bold=true&format=svg'"
                  />
                </div>

                <!-- Professional indicator -->
                <div class="absolute -bottom-2 -right-2 w-8 h-8 bg-primary-blue rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon name="lucide:briefcase" class="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            <!-- Content -->
            <div class="text-center space-y-3">
              <h3 class="text-2xl font-bold text-navy group-hover:text-primary-blue transition-colors duration-300">
                {{ member.name }}
              </h3>

              <p class="text-primary-blue font-semibold text-lg">
                {{ member.title }}
              </p>

              <p class="text-slate-600 group-hover:text-slate-700 transition-colors duration-300 leading-relaxed">
                {{ member.description }}
              </p>

              <!-- Expertise tags -->
              <div v-if="member.expertise" class="pt-4 space-y-2">
                <div class="flex flex-wrap justify-center gap-2">
                  <span
                      v-for="skill in member.expertise"
                      :key="skill"
                      class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-blue/10 text-primary-blue group-hover:bg-primary-blue/20 transition-colors duration-300"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>

            <!-- LinkedIn CTA -->
            <div class="mt-6 pt-6 border-t border-slate-100 group-hover:border-primary-blue/20 transition-colors duration-300">
              <a
                  :href="member.linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-50 group-hover:bg-primary-blue group-hover:text-primary-blue transition-all duration-300 text-sm font-medium group-hover:shadow-md hover:scale-105"
              >
                <Icon name="lucide:linkedin" class="w-4 h-4" />
                <span>Connect on LinkedIn</span>
                <Icon name="lucide:external-link" class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Enhanced Trust Badges -->
      <div class="text-center">
        <div class="inline-flex flex-col items-center space-y-6">
          <p class="text-lg font-medium text-slate-700 mb-4">Trusted & Qualified Finance Professionals</p>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 hover:border-primary-blue/30 transition-all duration-300 hover:shadow-lg">
              <div class="flex flex-col items-center gap-3">
                <div class="w-12 h-12 bg-gradient-to-br from-primary-blue to-light-blue rounded-xl flex items-center justify-center">
                  <Icon name="lucide:shield-check" class="w-6 h-6 text-white" />
                </div>
                <div class="text-center">
                  <p class="text-sm font-semibold text-navy">Professional Expertise</p>
                  <p class="text-xs text-slate-600">Consumer & Commercial</p>
                </div>
              </div>
            </div>

            <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 hover:border-primary-blue/30 transition-all duration-300 hover:shadow-lg">
              <div class="flex flex-col items-center gap-3">
                <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <Icon name="lucide:users" class="w-6 h-6 text-white" />
                </div>
                <div class="text-center">
                  <p class="text-sm font-semibold text-navy">Experienced Brokers</p>
                  <p class="text-xs text-slate-600">Years of Industry Expertise</p>
                </div>
              </div>
            </div>

            <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50 hover:border-primary-blue/30 transition-all duration-300 hover:shadow-lg">
              <div class="flex flex-col items-center gap-3">
                <div class="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
                  <Icon name="lucide:star" class="w-6 h-6 text-white" />
                </div>
                <div class="text-center">
                  <p class="text-sm font-semibold text-navy">Trusted Service</p>
                  <p class="text-xs text-slate-600">Client-Focused Approach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const teamMembers = [
  {
    name: 'Olan O\'Mahony',
    title: 'Director',
    linkedin: 'https://www.linkedin.com/in/olan-o-mahony-a614587a/',
    image: '/img/team/olan_omahony_small.jpg',
    description: 'Experienced finance professional specializing in complex lending solutions across multiple industries with over 15 years of expertise.',
    expertise: ['Vehicle Finance', 'Business Loans', 'Marine Finance', 'Equipment Finance']
  },
  {
    name: 'Robert Sunderland',
    title: 'Director',
    linkedin: 'https://www.linkedin.com/in/robert-sunderland-062274301/',
    image: '/img/team/robert_sundland_small.jpg',
    description: 'Dedicated to providing personalized finance solutions with a focus on client satisfaction and building long-term relationships.',
    expertise: ['Finance and Business', 'Equipment Finance', 'Vehicle Finance']
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

/* Image error handling */
img[src=""], img:not([src]), img[src="https://placehold.co/112x112"] {
  background: linear-gradient(135deg, #e2e8f0, #cbd5e1);
}
</style>