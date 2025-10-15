
<template>
  <section id="solutions" class="py-20 bg-light-gray">
    <div class="container mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-dark-gray mb-4">
          Solutions for Every Journey
        </h2>
        <p class="text-xl text-medium-gray max-w-2xl mx-auto">
          Whatever your financing needs, we have the expertise and lender network to help you achieve your goals.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <CategoryCard
            v-for="category in categories"
            :key="category.name"
            :category="category"
            @click="selectCategory(category.name)"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const categories = [
  {
    name: 'Vehicles',
    description: 'Cars, trucks, motorcycles and commercial vehicles',
    icon: 'lucide:car'
  },
  {
    name: 'Marine',
    description: 'Boats, yachts, and watercraft financing',
    icon: 'lucide:anchor'
  },
  {
    name: 'Travel',
    description: 'Caravans, motorhomes and travel trailers',
    icon: 'lucide:map-pin'
  },
  {
    name: 'Equipment',
    description: 'Business and industrial equipment',
    icon: 'lucide:wrench'
  },
  {
    name: 'Aviation',
    description: 'Aircraft and aviation equipment',
    icon: 'lucide:plane'
  },
  {
    name: 'Business',
    description: 'Business loans and commercial finance',
    icon: 'lucide:briefcase'
  },
  {
    name: 'Insurance',
    description: 'Comprehensive insurance solutions',
    icon: 'lucide:shield-check'
  }
]

const selectCategory = (categoryName: string) => {
  // Emit event to parent or use composable to set selected category
  const contactForm = document.getElementById('contact-form')
  if (contactForm) {
    contactForm.scrollIntoView({ behavior: 'smooth' })
    // Set category in form - this would need to be implemented with state management
    setTimeout(() => {
      const categorySelect = document.getElementById('category-select') as HTMLSelectElement
      if (categorySelect) {
        categorySelect.value = categoryName
        categorySelect.dispatchEvent(new Event('change'))
      }
    }, 500)
  }
}
</script>