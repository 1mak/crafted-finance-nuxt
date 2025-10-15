<template>
  <div class="relative">
    <label v-if="label" :for="id" class="block text-sm font-medium mb-2 text-white">
      {{ label }}
      <span v-if="required" class="text-red-400 ml-1">*</span>
    </label>

    <div class="relative">
      <select
          :id="id"
          :value="modelValue"
          :required="required"
          :disabled="disabled"
          @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
          class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-colors backdrop-blur-sm"
          :class="{
          'border-red-400 focus:ring-red-400 focus:border-red-400': error,
          'opacity-50 cursor-not-allowed': disabled
        }"
      >
        <option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
            :disabled="option.disabled"
            class="text-navy bg-white"
        >
          {{ option.label }}
        </option>
      </select>

      <!-- Custom dropdown arrow -->
      <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <Icon name="lucide:chevron-down" class="w-5 h-5 text-blue-200" />
      </div>
    </div>

    <p v-if="error" class="mt-1 text-sm text-red-400">
      {{ error }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Option {
  value: string
  label: string
  disabled?: boolean
}

interface Props {
  id: string
  modelValue: string
  label?: string
  options: Option[]
  required?: boolean
  disabled?: boolean
  error?: string
}

defineProps<Props>()

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>