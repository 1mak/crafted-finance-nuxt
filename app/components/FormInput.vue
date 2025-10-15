<template>
  <div>
    <label :for="id" class="block text-sm font-medium text-blue-100 mb-2">
      {{ label }}
      <span v-if="required" class="text-red-400">*</span>
    </label>
    <input
        :id="id"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :required="required"
        @input="$emit('update:modelValue', $event.target.value)"
        class="w-full px-4 py-3 bg-white text-dark-gray rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-colors"
        :class="{ 'border-red-500': error }"
    />
    <p v-if="error" class="mt-1 text-sm text-red-400">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue: string
  label: string
  type?: string
  placeholder?: string
  required?: boolean
  error?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: '',
  required: false,
  error: ''
})

const id = `input-${Math.random().toString(36).substr(2, 9)}`

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>