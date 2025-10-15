
<template>
  <div class="relative">
    <label v-if="label" :for="id" class="block text-sm font-medium mb-2 text-white">
      {{ label }}
      <span v-if="required" class="text-red-400 ml-1">*</span>
    </label>

    <div class="relative">
      <textarea
          :id="id"
          :value="modelValue"
          :required="required"
          :disabled="disabled"
          :placeholder="placeholder"
          :rows="rows"
          :maxlength="maxlength"
          :minlength="minlength"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
          class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:ring-2 focus:ring-primary-blue focus:border-primary-blue transition-colors backdrop-blur-sm resize-vertical"
          :class="{
          'border-red-400 focus:ring-red-400 focus:border-red-400': error,
          'opacity-50 cursor-not-allowed resize-none': disabled,
          'ring-2 ring-primary-blue border-primary-blue': isFocused && !error
        }"
      ></textarea>

      <!-- Character counter (if maxlength is provided) -->
      <div
          v-if="maxlength && showCharacterCount"
          class="absolute bottom-2 right-3 text-xs text-blue-200/70 pointer-events-none"
      >
        {{ characterCount }}/{{ maxlength }}
      </div>

      <!-- Resize handle indicator -->
      <div class="absolute bottom-1 right-1 pointer-events-none">
        <Icon name="lucide:grip-horizontal" class="w-3 h-3 text-blue-200/30 rotate-45" />
      </div>
    </div>

    <!-- Error message -->
    <p v-if="error" class="mt-1 text-sm text-red-400 flex items-center gap-1">
      <Icon name="lucide:alert-circle" class="w-4 h-4 flex-shrink-0" />
      {{ error }}
    </p>

    <!-- Help text -->
    <p v-else-if="helpText" class="mt-1 text-sm text-blue-200/80">
      {{ helpText }}
    </p>

    <!-- Character count warning (when approaching limit) -->
    <p
        v-else-if="maxlength && characterCount > maxlength * 0.9"
        class="mt-1 text-sm text-yellow-400 flex items-center gap-1"
    >
      <Icon name="lucide:info" class="w-4 h-4 flex-shrink-0" />
      {{ maxlength - characterCount }} characters remaining
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  id?: string
  modelValue: string
  label?: string
  placeholder?: string
  required?: boolean
  disabled?: boolean
  error?: string
  helpText?: string
  rows?: number
  maxlength?: number
  minlength?: number
  showCharacterCount?: boolean
  autoResize?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  id: () => `textarea-${Math.random().toString(36).substr(2, 9)}`,
  rows: 4,
  showCharacterCount: true,
  autoResize: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
  'focus': [event: FocusEvent]
  'blur': [event: FocusEvent]
}>()

// Reactive state
const isFocused = ref(false)
const textareaRef = ref<HTMLTextAreaElement>()

// Computed properties
const characterCount = computed(() => props.modelValue?.length || 0)

// Event handlers
const handleInput = (event: Event) => {
  const target = event.target as HTMLTextAreaElement
  let value = target.value

  // Enforce maxlength if provided
  if (props.maxlength && value.length > props.maxlength) {
    value = value.slice(0, props.maxlength)
    target.value = value
  }

  emit('update:modelValue', value)

  // Auto-resize functionality
  if (props.autoResize) {
    autoResizeTextarea(target)
  }
}

const handleFocus = (event: FocusEvent) => {
  isFocused.value = true
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  isFocused.value = false
  emit('blur', event)
}

// Auto-resize function
const autoResizeTextarea = (textarea: HTMLTextAreaElement) => {
  textarea.style.height = 'auto'
  textarea.style.height = `${textarea.scrollHeight}px`
}

// Initialize auto-resize if enabled
onMounted(() => {
  if (props.autoResize && textareaRef.value) {
    autoResizeTextarea(textareaRef.value)
  }
})

// Watch for external value changes and auto-resize
watch(() => props.modelValue, () => {
  if (props.autoResize && textareaRef.value) {
    nextTick(() => {
      if (textareaRef.value) {
        autoResizeTextarea(textareaRef.value)
      }
    })
  }
})
</script>

<style scoped>
/* Custom scrollbar for textarea */
textarea::-webkit-scrollbar {
  width: 8px;
}

textarea::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

textarea::-webkit-scrollbar-thumb {
  background: rgba(0, 163, 224, 0.3);
  border-radius: 4px;
}

textarea::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 163, 224, 0.5);
}

/* Smooth transitions */
textarea {
  transition: all 0.2s ease-in-out;
}

/* Focus glow effect */
textarea:focus {
  box-shadow: 0 0 0 3px rgba(0, 163, 224, 0.1);
}

/* Disabled state */
textarea:disabled {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
}

/* Error state glow */
textarea.border-red-400:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}
</style>