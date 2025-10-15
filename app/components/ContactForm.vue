<template>
  <section id="contact-form" class="py-20 bg-navy text-white">
    <div class="container mx-auto px-6">
      <div class="max-w-2xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold mb-4 text-white">
            Start Your Finance Journey Today
          </h2>
          <p class="text-xl text-blue-100">
            Get in touch with our team for personalized finance solutions
          </p>
        </div>

        <form @submit.prevent="submitForm" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput
                v-model="form.firstName"
                label="First Name"
                type="text"
                required
                :error="errors.firstName"
            />
            <FormInput
                v-model="form.lastName"
                label="Last Name"
                type="text"
                required
                :error="errors.lastName"
            />
          </div>

          <FormInput
              v-model="form.email"
              label="Email Address"
              type="email"
              required
              :error="errors.email"
          />

          <FormInput
              v-model="form.phone"
              label="Phone Number"
              type="tel"
              required
              :error="errors.phone"
          />

          <FormSelect
              id="category-select"
              v-model="form.category"
              label="Finance Category"
              required
              :options="categoryOptions"
              :error="errors.category"
          />

          <FormInput
              v-model="form.loanAmount"
              label="Loan Amount (Optional)"
              type="number"
              placeholder="Enter amount"
          />

          <FormTextarea
              v-model="form.message"
              label="Message/Details"
              required
              :error="errors.message"
              placeholder="Please provide details about your finance needs..."
              rows="4"
          />

          <div class="flex items-start gap-3">
            <input
                id="consent"
                v-model="form.consent"
                type="checkbox"
                required
                class="mt-1 w-4 h-4 text-primary-blue bg-white border-gray-300 rounded focus:ring-primary-blue focus:ring-2"
            />
            <label for="consent" class="text-sm text-blue-100 leading-relaxed">
              I agree to the <NuxtLink to="/privacy-policy" class="text-primary-blue hover:underline">Privacy Policy</NuxtLink> and consent to being contacted by Crafted Finance
            </label>
          </div>

          <Button
              type="submit"
              variant="primary"
              size="large"
              :loading="isSubmitting"
              class="w-full"
          >
            {{ isSubmitting ? 'Submitting...' : 'Submit Enquiry' }}
          </Button>
        </form>

        <!-- Success Message -->
        <div v-if="showSuccess" class="mt-8 p-4 bg-green-600 text-white rounded-lg">
          <div class="flex items-center gap-2">
            <Icon name="lucide:check-circle" class="w-5 h-5" />
            <span class="font-medium">Thank you! We'll be in touch within 24 hours.</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import FormSelect from '~/components/FormSelect.vue'
import FormInput from '~/components/FormInput.vue'
import FormTextarea from '~/components/FormTextarea.vue'

interface Props {
  preSelectedCategory?: string
}

const props = defineProps<Props>()

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  category: '',
  loanAmount: '',
  message: '',
  consent: false
})

const errors = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  category: '',
  message: ''
})

const isSubmitting = ref(false)
const showSuccess = ref(false)

const categoryOptions = [
  { value: '', label: 'Select a category...' },
  { value: 'Vehicles', label: 'Vehicles - Cars, trucks, motorcycles' },
  { value: 'Marine', label: 'Marine - Boats, yachts, watercraft' },
  { value: 'Travel', label: 'Travel - Caravans, motorhomes' },
  { value: 'Equipment', label: 'Equipment - Business & industrial' },
  { value: 'Aviation', label: 'Aviation - Aircraft financing' },
  { value: 'Business', label: 'Business - Commercial finance' },
  { value: 'Insurance', label: 'Insurance - Comprehensive solutions' },
  { value: 'Other', label: 'Other - Please specify in message' }
]

// Watch for pre-selected category changes
watch(() => props.preSelectedCategory, (newCategory) => {
  if (newCategory && categoryOptions.some(option => option.value === newCategory)) {
    form.category = newCategory

    // Auto-populate message with category context
    if (!form.message) {
      const categoryLabels = {
        'Vehicles': 'I\'m interested in vehicle financing options.',
        'Marine': 'I\'m looking for marine/boat financing.',
        'Travel': 'I\'m interested in caravan or motorhome financing.',
        'Equipment': 'I need business equipment financing.',
        'Aviation': 'I\'m looking for aircraft financing options.',
        'Business': 'I need business finance solutions.',
        'Insurance': 'I\'m interested in insurance solutions.'
      }

      form.message = categoryLabels[newCategory as keyof typeof categoryLabels] || 'I\'m interested in your finance solutions.'
    }
  }
}, { immediate: true })

const validateForm = () => {
  let isValid = true

  // Reset errors
  Object.keys(errors).forEach(key => {
    errors[key] = ''
  })

  if (!form.firstName.trim()) {
    errors.firstName = 'First name is required'
    isValid = false
  }

  if (!form.lastName.trim()) {
    errors.lastName = 'Last name is required'
    isValid = false
  }

  if (!form.email.trim()) {
    errors.email = 'Email is required'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email'
    isValid = false
  }

  if (!form.phone.trim()) {
    errors.phone = 'Phone number is required'
    isValid = false
  }

  if (!form.category) {
    errors.category = 'Please select a category'
    isValid = false
  }

  if (!form.message.trim()) {
    errors.message = 'Message is required'
    isValid = false
  } else if (form.message.trim().length < 20) {
    errors.message = 'Please provide at least 20 characters'
    isValid = false
  }

  return isValid
}

const submitForm = async () => {
  if (!validateForm()) return

  isSubmitting.value = true

  try {
    // Submit form using Nuxt email plugin or API route
    await $fetch('/api/contact', {
      method: 'POST',
      body: form
    })

    showSuccess.value = true

    // Reset form
    Object.keys(form).forEach(key => {
      if (key === 'consent') {
        form[key] = false
      } else {
        form[key] = ''
      }
    })

  } catch (error) {
    console.error('Form submission error:', error)
    // Handle error - show error message
  } finally {
    isSubmitting.value = false
  }
}

// Expose method to external components for category selection
defineExpose({
  selectCategory: (categoryName: string) => {
    if (categoryOptions.some(option => option.value === categoryName)) {
      form.category = categoryName
    }
  }
})
</script>