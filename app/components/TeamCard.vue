<template>
  <div class="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-200/50 hover:border-primary-blue/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-blue/10">
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
            class="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-50 group-hover:bg-primary-blue group-hover:text-white transition-all duration-300 text-sm font-medium group-hover:shadow-md hover:scale-105"
        >
          <Icon name="lucide:linkedin" class="w-4 h-4" />
          <span>Connect on LinkedIn</span>
          <Icon name="lucide:external-link" class="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface TeamMember {
  name: string
  title: string
  linkedin: string
  image: string
  description: string
  expertise?: string[]
}

defineProps<{
  member: TeamMember
}>()
</script>

<style scoped>
/* Glass morphism effect */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* Image error handling */
img[src=""], img:not([src]), img[src*="placehold"] {
  background: linear-gradient(135deg, #e2e8f0, #cbd5e1);
}
</style>