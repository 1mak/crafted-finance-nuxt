<template>
  <div>
    <!-- SEO Meta -->
    <Head>
      <Title>Complaints & Compliments | Crafted Finance</Title>
      <Meta name="description" content="Submit complaints, compliments, or feedback about our finance services. We're committed to continuous improvement and customer satisfaction." />
    </Head>

    <!-- Hero Section -->
    <section class="relative py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      <!-- Modern Background Elements -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 opacity-5">
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(59,130,246,0.3)_1px,_transparent_0)] bg-[size:40px_40px]"></div>
        </div>
        <div class="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200/20 to-primary-blue/10 rounded-full blur-3xl animate-float-slow"></div>
        <div class="absolute bottom-32 right-16 w-64 h-64 bg-gradient-to-r from-light-blue/20 to-blue-300/10 rounded-full blur-3xl animate-float-medium"></div>
      </div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center max-w-4xl mx-auto">
          <div class="inline-flex items-center gap-2 bg-primary-blue/10 rounded-full px-4 py-2 mb-6">
            <Icon name="lucide:message-square-heart" class="w-4 h-4 text-primary-blue" />
            <span class="text-sm font-medium text-primary-blue">Your Voice Matters</span>
          </div>

          <h1 class="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-navy via-navy to-primary-blue bg-clip-text text-transparent mb-6">
            Complaints &
            <span class="block">Compliments</span>
          </h1>

          <p class="text-xl text-slate-600 leading-relaxed mb-8">
            Your feedback helps us improve our services and continue delivering exceptional finance solutions.
            We value both your concerns and your praise.
          </p>

          <!-- Quick Stats -->
          <div class="grid grid-cols-3 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50">
              <div class="text-2xl font-bold text-primary-blue mb-2">24hrs</div>
              <div class="text-sm text-slate-600">Response Time</div>
            </div>
            <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50">
              <div class="text-2xl font-bold text-primary-blue mb-2">100%</div>
              <div class="text-sm text-slate-600">Cases Reviewed</div>
            </div>
            <div class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200/50">
              <div class="text-2xl font-bold text-primary-blue mb-2">AFCA</div>
              <div class="text-sm text-slate-600">Member</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Overview -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-3xl lg:text-4xl font-bold text-navy mb-6">Our Resolution Process</h2>
          <p class="text-xl text-slate-600 max-w-3xl mx-auto">
            We're committed to addressing your feedback promptly and professionally
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div v-for="(step, index) in processSteps" :key="step.title" class="text-center">
            <div class="relative mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-primary-blue to-light-blue rounded-2xl mx-auto flex items-center justify-center shadow-lg">
                <Icon :name="step.icon" class="w-8 h-8 text-white" />
              </div>
              <div class="absolute -top-2 -left-2 w-8 h-8 bg-navy rounded-full flex items-center justify-center">
                <span class="text-white text-sm font-bold">{{ index + 1 }}</span>
              </div>
            </div>
            <h3 class="text-lg font-bold text-navy mb-3">{{ step.title }}</h3>
            <p class="text-slate-600 text-sm">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Feedback Form Section -->
    <section class="relative py-24 bg-gradient-to-br from-navy via-slate-900 to-navy overflow-hidden">
      <!-- Background elements similar to contact form -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.15)_1px,_transparent_0)] bg-[size:40px_40px]"></div>
        </div>
        <div class="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-primary-blue/20 to-light-blue/15 rounded-full blur-3xl animate-float-slow"></div>
        <div class="absolute bottom-32 right-16 w-80 h-80 bg-gradient-to-r from-light-blue/15 to-primary-blue/10 rounded-full blur-3xl animate-float-medium"></div>
      </div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-slate-100 to-primary-blue bg-clip-text text-transparent mb-6">
            Share Your Feedback
          </h2>
          <p class="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Whether it's a complaint, compliment, or suggestion, we want to hear from you.
          </p>
        </div>

        <!-- Form -->
        <div class="max-w-4xl mx-auto">
          <div class="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <form @submit.prevent="submitFeedback" class="space-y-6">

              <!-- Feedback Type -->
              <div class="space-y-2">
                <label class="block text-sm font-medium text-white">
                  Type of Feedback <span class="text-red-400">*</span>
                </label>
                <div class="grid grid-cols-3 md:grid-cols-3 gap-4">
                  <label
                      v-for="type in feedbackTypes"
                      :key="type.value"
                      class="relative flex items-center p-4 rounded-xl border border-white/20 hover:border-primary-blue/50 transition-all duration-300 cursor-pointer"
                      :class="{
                      'border-primary-blue/50 bg-primary-blue/10': formData.feedbackType === type.value
                    }"
                  >
                    <input
                        v-model="formData.feedbackType"
                        :value="type.value"
                        type="radio"
                        name="feedbackType"
                        class="sr-only"
                    />
                    <div class="flex items-center gap-3">
                      <Icon :name="type.icon" class="w-6 h-6" :class="type.color" />
                      <div>
                        <div class="text-white font-medium">{{ type.label }}</div>
                        <div class="text-slate-400 text-xs">{{ type.description }}</div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              <!-- Personal Information -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="space-y-2">
                  <label for="name" class="block text-sm font-medium text-white">
                    Full Name <span class="text-red-400">*</span>
                  </label>
                  <input
                      id="name"
                      v-model="formData.name"
                      type="text"
                      required
                      class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 focus:bg-white/15 transition-all duration-300"
                      placeholder="Your full name"
                  />
                </div>

                <div class="space-y-2">
                  <label for="email" class="block text-sm font-medium text-white">
                    Email Address <span class="text-red-400">*</span>
                  </label>
                  <input
                      id="email"
                      v-model="formData.email"
                      type="email"
                      required
                      class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 focus:bg-white/15 transition-all duration-300"
                      placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <!-- Reference Information -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="space-y-2">
                  <label for="reference" class="block text-sm font-medium text-white">
                    Reference Number (if applicable)
                  </label>
                  <input
                      id="reference"
                      v-model="formData.reference"
                      type="text"
                      class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 focus:bg-white/15 transition-all duration-300"
                      placeholder="e.g., loan application number"
                  />
                </div>

                <div class="space-y-2">
                  <label for="dateOfService" class="block text-sm font-medium text-white">
                    Date of Service
                  </label>
                  <input
                      id="dateOfService"
                      v-model="formData.dateOfService"
                      type="date"
                      class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 focus:bg-white/15 transition-all duration-300"
                  />
                </div>
              </div>

              <!-- Feedback Details -->
              <div class="space-y-2">
                <label for="details" class="block text-sm font-medium text-white">
                  Please provide details <span class="text-red-400">*</span>
                </label>
                <textarea
                    id="details"
                    v-model="formData.details"
                    rows="6"
                    required
                    class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 focus:bg-white/15 transition-all duration-300 resize-none"
                    placeholder="Please provide as much detail as possible about your experience, including dates, names, and specific concerns or praise..."
                ></textarea>
              </div>

              <!-- Preferred Response Method -->
              <div class="space-y-2">
                <label class="block text-sm font-medium text-white">
                  Preferred Response Method
                </label>
                <div class="flex flex-wrap gap-4">
                  <label class="flex items-center gap-2 text-white">
                    <input
                        v-model="formData.responseMethod"
                        value="email"
                        type="radio"
                        class="text-primary-blue focus:ring-primary-blue"
                    />
                    <Icon name="lucide:mail" class="w-4 h-4" />
                    Email
                  </label>
                  <label class="flex items-center gap-2 text-white">
                    <input
                        v-model="formData.responseMethod"
                        value="phone"
                        type="radio"
                        class="text-primary-blue focus:ring-primary-blue"
                    />
                    <Icon name="lucide:phone" class="w-4 h-4" />
                    Phone Call
                  </label>
                  <label class="flex items-center gap-2 text-white">
                    <input
                        v-model="formData.responseMethod"
                        value="none"
                        type="radio"
                        class="text-primary-blue focus:ring-primary-blue"
                    />
                    <Icon name="lucide:eye-off" class="w-4 h-4" />
                    No Response Needed
                  </label>
                </div>
              </div>

              <!-- Submit Button -->
              <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full group bg-gradient-to-r from-primary-blue to-light-blue hover:from-light-blue hover:to-primary-blue text-white font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl hover:shadow-primary-blue/25 transition-all duration-500 transform hover:scale-[1.02] rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="!isSubmitting" class="flex items-center justify-center gap-3">
                  <Icon name="lucide:send" class="w-5 h-5" />
                  Submit Feedback
                  <Icon name="lucide:arrow-right" class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <span v-else class="flex items-center justify-center gap-2">
                  <Icon name="lucide:loader-2" class="w-5 h-5 animate-spin" />
                  Submitting...
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- AFCA Information -->
    <section class="py-20 bg-slate-50">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <div class="bg-white rounded-3xl p-8 shadow-lg border border-slate-200">
            <div class="text-center mb-8">
              <Icon name="lucide:shield-check" class="w-16 h-16 text-primary-blue mx-auto mb-4" />
              <h3 class="text-2xl font-bold text-navy mb-4">External Dispute Resolution</h3>
              <p class="text-slate-600">
                If you're not satisfied with our response, you can escalate your complaint to AFCA.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 class="text-lg font-semibold text-navy mb-4">Australian Financial Complaints Authority (AFCA)</h4>
                <div class="space-y-3 text-sm text-slate-600">
                  <div class="flex items-center gap-2">
                    <Icon name="lucide:globe" class="w-4 h-4 text-primary-blue" />
                    <a href="https://www.afca.org.au" target="_blank" class="hover:text-primary-blue transition-colors">
                      www.afca.org.au
                    </a>
                  </div>
                  <div class="flex items-center gap-2">
                    <Icon name="lucide:mail" class="w-4 h-4 text-primary-blue" />
                    <span>info@afca.org.au</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <Icon name="lucide:phone" class="w-4 h-4 text-primary-blue" />
                    <span>1800 931 678</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 class="text-lg font-semibold text-navy mb-4">Postal Address</h4>
                <div class="text-sm text-slate-600">
                  <p>Australian Financial Complaints Authority</p>
                  <p>GPO Box 3</p>
                  <p>Melbourne VIC 3001</p>
                </div>
              </div>
            </div>

            <div class="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-200">
              <p class="text-sm text-slate-700">
                <strong>Note:</strong> AFCA provides free, fair and independent financial services complaint resolution.
                Please allow us the opportunity to resolve your complaint first before contacting AFCA.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const isSubmitting = ref(false)

const processSteps = [
  {
    title: 'Submit',
    description: 'Submit your feedback through our secure online form',
    icon: 'lucide:send'
  },
  {
    title: 'Acknowledge',
    description: 'We acknowledge receipt within 1 business day',
    icon: 'lucide:mail-check'
  },
  {
    title: 'Investigate',
    description: 'We thoroughly investigate and review your feedback',
    icon: 'lucide:search'
  },
  {
    title: 'Resolve',
    description: 'We respond with our findings and any actions taken',
    icon: 'lucide:check-circle'
  }
]

const feedbackTypes = [
  {
    value: 'complaint',
    label: 'Complaint',
    description: 'Report an issue or concern',
    icon: 'lucide:alert-triangle',
    color: 'text-red-400'
  },
  {
    value: 'compliment',
    label: 'Compliment',
    description: 'Share positive feedback',
    icon: 'lucide:heart',
    color: 'text-green-400'
  },
  {
    value: 'suggestion',
    label: 'Suggestion',
    description: 'Propose improvements',
    icon: 'lucide:lightbulb',
    color: 'text-yellow-400'
  }
]

const formData = reactive({
  feedbackType: '',
  name: '',
  email: '',
  reference: '',
  dateOfService: '',
  details: '',
  responseMethod: 'email'
})

const submitFeedback = async () => {
  isSubmitting.value = true

  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log('Feedback submitted:', formData)

    alert('Thank you for your feedback! We will review your submission and respond accordingly.')

    // Reset form
    Object.keys(formData).forEach(key => {
      if (key === 'responseMethod') {
        formData[key] = 'email'
      } else {
        formData[key as keyof typeof formData] = ''
      }
    })

  } catch (error) {
    console.error('Form submission error:', error)
    alert('Sorry, there was an error submitting your feedback. Please try again.')
  } finally {
    isSubmitting.value = false
  }
}
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

.backdrop-blur-sm {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}

input::placeholder,
textarea::placeholder {
  color: rgba(148, 163, 184, 0.7);
}

input:focus,
textarea:focus,
select:focus {
  outline: none;
}
</style>