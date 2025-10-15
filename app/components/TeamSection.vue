<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-dark-gray mb-4">
          Meet Our Expert Team
        </h2>
        <p class="text-xl text-medium-gray max-w-2xl mx-auto">
          Our experienced finance brokers are committed to finding the right solution for your unique needs.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <TeamCard
            v-for="member in teamMembers"
            :key="member.name"
            :member="member"
        />
      </div>

      <!-- Trust Badges -->
      <div class="mt-16 text-center">
        <div class="flex flex-wrap justify-center items-center gap-8">
          <div class="flex items-center gap-2 text-medium-gray">
            <Icon name="lucide:shield-check" class="w-5 h-5 text-primary-blue" />
            <span class="text-sm font-medium">Australian Credit Licence</span>
          </div>
          <div class="flex items-center gap-2 text-medium-gray">
            <Icon name="lucide:users" class="w-5 h-5 text-primary-blue" />
            <span class="text-sm font-medium">Experienced Brokers</span>
          </div>
          <div class="flex items-center gap-2 text-medium-gray">
            <Icon name="lucide:star" class="w-5 h-5 text-primary-blue" />
            <span class="text-sm font-medium">Trusted Service</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const teamMembers = [
  {
    name: 'Olan O\'Mahony',
    title: 'Senior Finance Broker',
    linkedin: 'https://www.linkedin.com/in/olan-o-mahony-a614587a/',
    image: '/team/olan.jpg', // Placeholder - extract from LinkedIn or use professional photo
    description: 'Experienced finance professional specializing in complex lending solutions across multiple industries.'
  },
  {
    name: 'Robert Sunderland',
    title: 'Finance Consultant',
    linkedin: 'https://www.linkedin.com/in/robert-sunderland-062274301/',
    image: '/team/robert.jpg', // Placeholder
    description: 'Dedicated to providing personalized finance solutions with a focus on client satisfaction and long-term relationships.'
  }
]
</script>