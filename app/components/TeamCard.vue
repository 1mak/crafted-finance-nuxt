<template>
  <div class="bg-light-gray rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
    <!-- Photo -->
    <div class="mb-4">
      <img
          :src="member.image"
          :alt="member.name"
          class="w-24 h-24 rounded-full mx-auto object-cover border-4 border-white shadow-md"
      />
    </div>

    <!-- Name & Title -->
    <h3 class="text-xl font-semibold text-dark-gray mb-1">
      {{ member.name }}
    </h3>
    <p class="text-primary-blue font-medium mb-3">
      {{ member.title }}
    </p>

    <!-- Description -->
    <p class="text-medium-gray text-sm leading-relaxed mb-4">
      {{ member.description }}
    </p>

    <!-- LinkedIn Button -->
    <Button
        :href="member.linkedin"
        variant="outline"
        size="small"
        target="_blank"
        class="inline-flex items-center gap-2"
    >
      <Icon name="lucide:linkedin" class="w-4 h-4" />
      LinkedIn
    </Button>
  </div>
</template>

<script setup lang="ts">
interface TeamMember {
  name: string
  title: string
  linkedin: string
  image: string
  description: string
}

defineProps<{
  member: TeamMember
}>()
</script>