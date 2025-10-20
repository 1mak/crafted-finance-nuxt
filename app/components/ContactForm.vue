
<template>
  <section id="contact-form" class="relative py-24 bg-gradient-to-br from-navy to-navy overflow-hidden">
    <!-- Modern Background Elements -->
    <div class="absolute inset-0">
      <!-- Subtle geometric pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.15)_1px,_transparent_0)] bg-[size:40px_40px]"></div>
      </div>

      <!-- Floating gradient orbs with lighter colors for dark background -->
      <div class="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-primary-blue/20 to-light-blue/15 rounded-full blur-3xl animate-float-slow"></div>
      <div class="absolute bottom-32 right-16 w-80 h-80 bg-gradient-to-r from-light-blue/15 to-primary-blue/10 rounded-full blur-3xl animate-float-medium"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-primary-blue/5 to-light-blue/5 rounded-full blur-3xl animate-float-slow"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <!-- Modern Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 bg-primary-blue/20 rounded-full px-4 py-2 mb-6">
          <Icon name="lucide:message-circle" class="w-4 h-4 text-primary-blue" />
          <span class="text-sm font-medium text-primary-blue">Get In Touch</span>
        </div>

        <h2 class="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-white via-slate-100 to-primary-blue bg-clip-text text-transparent mb-6">
          Ready to Get
          <span class="block">Started?</span>
        </h2>

        <p class="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Take the first step towards your financial goals. Our experts are ready to provide personalized advice and competitive solutions.
        </p>
      </div>

      <!-- Form Container -->
      <div class="max-w-4xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          <!-- Contact Info Side -->
          <div class="space-y-8">
            <div class="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-primary-blue/30 transition-all duration-500">
              <h3 class="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>

              <div class="space-y-6">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-primary-blue to-light-blue rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="lucide:zap" class="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold text-white mb-2">Fast Approvals</h4>
                    <p class="text-slate-300">Quick decisions with our streamlined process and extensive lender network.</p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="lucide:shield-check" class="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold text-white mb-2">Expert Guidance</h4>
                    <p class="text-slate-300">Professional advice tailored to your unique financial situation.</p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name="lucide:heart-handshake" class="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 class="text-lg font-semibold text-white mb-2">Personal Service</h4>
                    <p class="text-slate-300">Dedicated support throughout your entire finance journey.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Contact Details -->
            <div class="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h4 class="text-xl font-bold text-white mb-6">Contact Details</h4>

              <div class="space-y-4">
                <div class="flex items-center gap-3">
                  <Icon name="lucide:phone" class="w-5 h-5 text-primary-blue" />
                  <a href="tel:+61434658240" class="text-slate-300 hover:text-white transition-colors">
                    0434 658 240
                  </a>
                </div>

                <div class="flex items-center gap-3">
                  <Icon name="lucide:mail" class="w-5 h-5 text-primary-blue" />
                  <a href="mailto:info@crafted-finance.com.au" class="text-slate-300 hover:text-white transition-colors">
                    info@crafted-finance.com.au
                  </a>
                </div>

                <div class="flex items-center gap-3">
                  <Icon name="lucide:clock" class="w-5 h-5 text-primary-blue" />
                  <span class="text-slate-300">Mon-Fri: 9AM-6PM AEST</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Form Side -->
          <div class="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-primary-blue/30 transition-all duration-500">
            <form @submit.prevent="submitForm" class="space-y-6">

              <!-- Name Fields -->
              <div class="">
                <div class="space-y-4 mb-4">
                  <label for="firstName" class="block text-sm font-medium text-white">
                    First Name <span class="text-red-400">*</span>
                  </label>
                  <input
                      id="firstName"
                      v-model="formData.firstName"
                      type="text"
                      required
                      class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 focus:bg-white/15 transition-all duration-300"
                      placeholder="John"
                  />
                </div>

                <div class="space-y-4">
                  <label for="lastName" class="block text-sm font-medium text-white">
                    Last Name <span class="text-red-400">*</span>
                  </label>
                  <input
                      id="lastName"
                      v-model="formData.lastName"
                      type="text"
                      required
                      class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 focus:bg-white/15 transition-all duration-300"
                      placeholder="Smith"
                  />
                </div>
              </div>

              <!-- Contact Fields -->
              <div class="">
                <div class="space-y-4">
                  <label for="email" class="block text-sm font-medium text-white">
                    Email Address <span class="text-red-400">*</span>
                  </label>
                  <input
                      id="email"
                      v-model="formData.email"
                      type="email"
                      required
                      class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 focus:bg-white/15 transition-all duration-300"
                      placeholder="john.smith@email.com"
                  />
                </div>

                <div class="space-y-2">
                  <label for="phone" class="block text-sm font-medium text-white">
                    Phone Number <span class="text-red-400">*</span>
                  </label>
                  <input
                      id="phone"
                      v-model="formData.phone"
                      type="tel"
                      required
                      class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 focus:bg-white/15 transition-all duration-300"
                      placeholder="0400 000 000"
                  />
                </div>
              </div>

              <!-- Solution Type -->
              <div class="space-y-2">
                <label for="solutionType" class="block text-sm font-medium text-white">
                  What type of financing are you looking for? <span class="text-red-400">*</span>
                </label>
                <select
                    id="solutionType"
                    v-model="formData.solutionType"
                    required
                    class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 focus:bg-white/15 transition-all duration-300"
                    :class="{ 'ring-2 ring-green-400 bg-green-50/10': isPreFilled }"
                >
                  <option value="" class="text-slate-700">Select a solution type</option>
                  <option value="Vehicles" class="text-slate-700">Vehicle Finance</option>
                  <option value="Marine" class="text-slate-700">Marine Finance</option>
                  <option value="Travel" class="text-slate-700">Travel & Recreation</option>
                  <option value="Equipment" class="text-slate-700">Equipment Finance</option>
                  <option value="Aviation" class="text-slate-700">Aviation Finance</option>
                  <option value="Business" class="text-slate-700">Business Finance</option>
                  <option value="Insurance" class="text-slate-700">Insurance Solutions</option>
                </select>
              </div>

              <!-- Loan Amount -->
              <div class="space-y-2">
                <label for="loanAmount" class="block text-sm font-medium text-white">
                  Approximate Loan Amount
                </label>
                <select
                    id="loanAmount"
                    v-model="formData.loanAmount"
                    class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 focus:bg-white/15 transition-all duration-300"
                >
                  <option value="" class="text-slate-700">Select amount range</option>
                  <option value="Under $25K" class="text-slate-700">Under $25,000</option>
                  <option value="$25K - $50K" class="text-slate-700">$25,000 - $50,000</option>
                  <option value="$50K - $100K" class="text-slate-700">$50,000 - $100,000</option>
                  <option value="$100K - $250K" class="text-slate-700">$100,000 - $250,000</option>
                  <option value="$250K - $500K" class="text-slate-700">$250,000 - $500,000</option>
                  <option value="Over $500K" class="text-slate-700">Over $500,000</option>
                </select>
              </div>

              <!-- Message -->
              <div class="space-y-2">
                <label for="message" class="block text-sm font-medium text-white">
                  Tell us more about your requirements
                </label>
                <textarea
                    id="message"
                    v-model="formData.message"
                    rows="4"
                    class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 focus:bg-white/15 transition-all duration-300 resize-none"
                    placeholder="Please provide details about what you're looking to finance, your timeline, and any specific requirements..."
                ></textarea>
              </div>

              <!-- Submit Button -->
              <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full group bg-gradient-to-r from-primary-blue to-light-blue hover:from-light-blue hover:to-primary-blue text-white font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl hover:shadow-primary-blue/25 transition-all duration-500 transform hover:scale-[1.02] rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="!isSubmitting" class="flex items-center justify-center gap-3">
                  <Icon name="lucide:send" class="w-5 h-5" />
                  Send My Enquiry
                  <Icon name="lucide:arrow-right" class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <span v-else class="flex items-center justify-center gap-2">
                  <Icon name="lucide:loader-2" class="w-5 h-5 animate-spin" />
                  Sending...
                </span>
              </button>

              <!-- Privacy Note -->
              <p class="text-xs text-slate-400 text-center">
                By submitting this form, you agree to our
                <a href="#" class="text-primary-blue hover:text-light-blue underline">Privacy Policy</a>
                and consent to being contacted about finance solutions.
              </p>
            </form>
          </div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="text-center mt-16">
        <div class="inline-flex items-center gap-2 text-slate-300">
          <Icon name="lucide:clock" class="w-4 h-4 text-primary-blue" />
          <span class="text-sm">Typical response time: Within 2 hours during business hours</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

interface Props {
  preSelectedCategory?: string
}

const props = withDefaults(defineProps<Props>(), {
  preSelectedCategory: ''
})

const isSubmitting = ref(false)
const isPreFilled = ref(false)

const formData = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  solutionType: '',
  loanAmount: '',
  message: ''
})

// Watch for pre-selected solution changes
watch(() => props.preSelectedCategory, (newSolution) => {
  if (newSolution) {
    formData.solutionType = newSolution
    isPreFilled.value = true

    // Remove pre-fill indication after a few seconds
    setTimeout(() => {
      isPreFilled.value = false
    }, 3000)
  }
}, { immediate: true })

const submitForm = async () => {
  isSubmitting.value = true
  const config = useRuntimeConfig()
  console.log('config', config.smtpHost)

  try {

    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: formData
    })

    if (response.success) {
      // Show success message
      await navigateTo('/', {
        external: false,
        replace: false
      })

      // You could show a success modal/toast instead
      alert('Thank you for your enquiry! We\'ll be in touch within 2 hours during business hours.')

      // Reset form
      Object.keys(formData).forEach(key => {
        formData[key as keyof typeof formData] = ''
      })
    }

  } catch (error: any) {
    console.error('Form submission error:', error)

    // Show user-friendly error message
    const errorMessage = error.data?.message || 'Sorry, there was an error submitting your form. Please try again or call us directly.'
    alert(errorMessage)

  } finally {
    isSubmitting.value = false
  }
}

// Expose method for manual pre-filling
const prefillForm = (solutionType: string) => {
  formData.solutionType = solutionType
  isPreFilled.value = true
  setTimeout(() => {
    isPreFilled.value = false
  }, 3000)
}

defineExpose({
  prefillForm
})
</script>

<style scoped>
@keyframes float-slow {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(2deg); }
}

@keyframes float-medium {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(-2deg); }
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

/* Form input styling for dark background */
input::placeholder,
textarea::placeholder,
select {
  color: rgba(148, 163, 184, 0.7);
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
}

/* Custom scrollbar for textarea */
textarea::-webkit-scrollbar {
  width: 8px;
}

textarea::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

textarea::-webkit-scrollbar-thumb {
  background: rgba(59, 130, 246, 0.5);
  border-radius: 4px;
}

textarea::-webkit-scrollbar-thumb:hover {
  background: rgba(59, 130, 246, 0.7);
}
</style>