<template>
  <div
      class="bg-white rounded-lg p-6 shadow-sm hover:shadow-navy-lg transition-all duration-300 cursor-pointer hover:-translate-y-1 border border-gray-100 group"
      @click="$emit('click')"
  >
    <div class="flex flex-col items-center text-center">
      <!-- Icon -->
      <div class="mb-4 p-3 bg-primary-blue/10 rounded-lg group-hover:bg-primary-blue/20 transition-colors">
        <Icon :name="category.icon" class="w-8 h-8 text-primary-blue" />
      </div>

      <!-- Category Name -->
      <h3 class="text-xl font-semibold text-dark-gray mb-2">
        {{ category.name }}
      </h3>

      <!-- Description -->
      <p class="text-medium-gray text-sm leading-relaxed">
        {{ category.description }}
      </p>

      <!-- Arrow indicator -->
      <div class="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <Icon name="lucide:arrow-right" class="w-5 h-5 text-primary-blue" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Category {
  name: string
  description: string
  icon: string
}

defineProps<{
  category: Category
}>()

defineEmits<{
  click: []
}>()
</script>