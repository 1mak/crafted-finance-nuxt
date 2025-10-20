<template>
  <div>
    <!-- Other sections -->
    <HeroSection />

    <!-- Solutions Section with enquiry handling -->
    <SolutionsGrid
        @category-selected="handleCategorySelection"
    />

    <!-- Contact Form Section -->
    <ContactForm
        ref="contactFormRef"
        :pre-selected-category="selectedSolution"
    />

    <TeamSection />

    <!-- Other sections -->
  </div>
</template>

<script setup lang="ts">
import SolutionsGrid from '@/components/SolutionsGrid.vue'
import ContactForm from '@/components/ContactForm.vue'

// SEO and Meta Data
useHead({
  title: 'Crafted Finance | Financing Solutions for Every Journey in Australia',
  meta: [
    {
      name: 'description',
      content: 'Trusted Australian finance brokers specializing in vehicle, marine, travel, equipment, aviation, business finance and insurance solutions. Get competitive rates and expert guidance. Australian Credit Licence 543046.'
    },
    {
      name: 'keywords',
      content: 'Australian finance broker, vehicle finance, marine finance, travel finance, equipment finance, aviation finance, business loans, insurance solutions, car loans Australia, boat loans, caravan finance'
    },
    {
      name: 'author',
      content: 'Crafted Finance Pty Ltd'
    },
    {
      name: 'robots',
      content: 'index, follow'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:title',
      content: 'Crafted Finance | Financing Solutions for Every Journey'
    },
    {
      property: 'og:description',
      content: 'Trusted Australian finance brokers helping you secure the right funding for vehicles, marine, travel, equipment, aviation, business, and insurance.'
    },
    {
      property: 'og:url',
      content: 'https://crafted-finance.com.au'
    },
    {
      property: 'og:site_name',
      content: 'Crafted Finance'
    },
    {
      property: 'og:locale',
      content: 'en_AU'
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Crafted Finance | Financing Solutions for Every Journey'
    },
    {
      name: 'twitter:description',
      content: 'Trusted Australian finance brokers helping you secure the right funding for vehicles, marine, travel, equipment, aviation, business, and insurance.'
    },
    // Geo-targeting for Australia
    {
      name: 'geo.region',
      content: 'AU'
    },
    {
      name: 'geo.country',
      content: 'Australia'
    },
    // Business information
    {
      name: 'classification',
      content: 'Finance Broker, Financial Services'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://crafted-finance.com.au'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          // Main Organization Schema
          {
            '@type': 'Organization',
            '@id': 'https://crafted-finance.com.au/#organization',
            name: 'Crafted Finance Pty Ltd',
            legalName: 'Crafted Finance Pty Ltd',
            url: 'https://crafted-finance.com.au',
            logo: 'https://crafted-finance.com.au/logo.png',
            description: 'Trusted Australian finance brokers specializing in vehicle, marine, travel, equipment, aviation, business finance and insurance solutions.',
            foundingDate: '2024',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'AU',
              addressRegion: 'Australia'
            },
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'Customer Service',
              email: 'info@crafted-finance.com.au',
              availableLanguage: 'English'
            },
            sameAs: [
              'https://www.linkedin.com/in/olan-o-mahony-a614587a/',
              'https://www.linkedin.com/in/robert-sunderland-062274301/'
            ],
            areaServed: {
              '@type': 'Country',
              name: 'Australia'
            },
            serviceArea: {
              '@type': 'Country',
              name: 'Australia'
            }
          },

          // Financial Service Schema
          {
            '@type': 'FinancialService',
            '@id': 'https://crafted-finance.com.au/#service',
            name: 'Crafted Finance',
            provider: {
              '@id': 'https://crafted-finance.com.au/#organization'
            },
            description: 'Comprehensive financing solutions including vehicle finance, marine finance, travel finance, equipment finance, aviation finance, business loans, and insurance services.',
            serviceType: 'Finance Broker',
            areaServed: {
              '@type': 'Country',
              name: 'Australia'
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Finance Solutions',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Vehicle Finance',
                    description: 'Car loans, truck finance, motorcycle financing'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Marine Finance',
                    description: 'Boat loans and watercraft financing'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Travel Finance',
                    description: 'Caravan and motorhome financing'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Equipment Finance',
                    description: 'Business and industrial equipment financing'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Aviation Finance',
                    description: 'Aircraft financing solutions'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Business Finance',
                    description: 'Business loans and commercial finance'
                  }
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Insurance Solutions',
                    description: 'Comprehensive insurance products'
                  }
                }
              ]
            }
          },

          // Website Schema
          {
            '@type': 'WebSite',
            '@id': 'https://crafted-finance.com.au/#website',
            url: 'https://crafted-finance.com.au',
            name: 'Crafted Finance',
            description: 'Financing Solutions for Every Journey',
            publisher: {
              '@id': 'https://crafted-finance.com.au/#organization'
            },
            inLanguage: 'en-AU',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://crafted-finance.com.au/?search={search_term_string}',
              'query-input': 'required name=search_term_string'
            }
          },

          // WebPage Schema
          {
            '@type': 'WebPage',
            '@id': 'https://crafted-finance.com.au/#webpage',
            url: 'https://crafted-finance.com.au',
            name: 'Crafted Finance | Financing Solutions for Every Journey',
            description: 'Trusted Australian finance brokers helping you secure the right funding for vehicles, marine, travel, equipment, aviation, business, and insurance.',
            isPartOf: {
              '@id': 'https://crafted-finance.com.au/#website'
            },
            about: {
              '@id': 'https://crafted-finance.com.au/#organization'
            },
            mainEntity: {
              '@id': 'https://crafted-finance.com.au/#service'
            },
            breadcrumb: {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://crafted-finance.com.au'
                }
              ]
            }
          },

          // Professional Service Schema
          {
            '@type': 'ProfessionalService',
            name: 'Crafted Finance',
            description: 'Australian Credit Representative providing finance brokerage services',
            provider: {
              '@id': 'https://crafted-finance.com.au/#organization'
            },
            serviceType: 'Finance Broker',
            category: 'Financial Services',
            areaServed: 'Australia',
            hasCredential: {
              '@type': 'EducationalOccupationalCredential',
              name: 'Australian Credit Licence',
              recognizedBy: {
                '@type': 'Organization',
                name: 'ASIC'
              }
            }
          }
        ]
      })
    }
  ]
})

const contactFormRef = ref()
const selectedSolution = ref<string>('')

const handleCategorySelection = (categoryName: string) => {
  selectedSolution.value = categoryName

  // Optional: Add a slight delay to ensure the form is ready
  nextTick(() => {
    if (contactFormRef.value && contactFormRef.value.prefillForm) {
      contactFormRef.value.prefillForm(categoryName)
    }
  })
}
</script>