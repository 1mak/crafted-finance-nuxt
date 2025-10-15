<template>
  <component
      :is="href ? 'a' : 'button'"
      :href="href"
      :target="target"
      :type="href ? undefined : type"
      :disabled="disabled || loading"
      class="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      :class="[sizeClasses, variantClasses]"
  >
    <Icon v-if="loading" name="lucide:loader-2" class="animate-spin -ml-1 mr-2 h-4 w-4" />
    <slot />
  </component>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'small' | 'medium' | 'large'
  type?: 'button' | 'submit' | 'reset'
  href?: string
  target?: string
  disabled?: boolean
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'medium',
  type: 'button',
  disabled: false,
  loading: false
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'small':
      return 'px-4 py-2 text-sm'
    case 'large':
      return 'px-8 py-4 text-lg'
    default:
      return 'px-6 py-3 text-base'
  }
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'secondary':
      return 'bg-white text-navy border-2 border-white hover:bg-gray-100 focus:ring-gray-500'
    case 'outline':
      return 'bg-transparent text-primary-blue border-2 border-primary-blue hover:bg-primary-blue hover:text-white focus:ring-primary-blue'
    default:
      return 'bg-primary-blue text-white hover:bg-primary-blue-700 focus:ring-primary-blue shadow-lg hover:shadow-blue-lg'
  }
})
</script>