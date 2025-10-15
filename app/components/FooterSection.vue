
<template>
  <footer class="bg-white text-navy">
    <div class="container mx-auto px-6 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        <!-- Company Info -->
        <div class="lg:col-span-2">
          <!-- Logo -->
          <div class="space-x-3 mb-6">
            <img
                src="/img/logos/crafted_finance_bright_bg.svg"
                alt="Crafted Finance"
                class="h-50"
            />
            <p class="text-primary-blue text-sm font-medium">
              Financing Solutions for Every Journey
            </p>
          </div>

          <p class="text-navy mb-6 leading-relaxed max-w-md">
            Trusted Australian finance brokers helping you secure the right funding for vehicles, marine, travel, equipment, aviation, business, and insurance.
          </p>


        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold mb-6 text-primary-blue">Quick Links</h4>
          <ul class="space-y-3">
            <li>
              <NuxtLink
                  to="/"
                  class="text-navy hover:text-primary-blue transition-colors text-sm"
              >
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                  to="/privacy-policy"
                  class="text-navy hover:text-primary-blue transition-colors text-sm"
              >
                Privacy Policy
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                  to="/complaints-and-compliments"
                  class="text-navy hover:text-primary-blue transition-colors text-sm"
              >
                Complaints & Compliments
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Social Media -->
        <div>
          <h4 class="text-lg font-semibold mb-6 text-primary-blue">Connect</h4>
          <div class="flex space-x-3">
            <a
                href="https://www.linkedin.com/company/crafted-finance"
                target="_blank"
                rel="noopener noreferrer"
                class="p-2 bg-primary-blue/20 text-primary-blue hover:bg-primary-blue hover:text-white rounded-lg transition-colors"
                aria-label="LinkedIn"
            >
              <Icon name="lucide:linkedin" class="w-5 h-5" />
            </a>
          </div>

          <!-- Contact Info -->
          <div class="space-y-2 text-sm text-navy mt-4">
            <p class="flex items-center">
              <Icon name="lucide:mail" class="w-4 h-4 mr-2 text-primary-blue" />
              info@crafted-finance.com.au
            </p>
            <p class="flex items-center">
              <Icon name="lucide:map-pin" class="w-4 h-4 mr-2 text-primary-blue" />
              Australia Wide Service
            </p>
          </div>
          <!-- Credentials -->
          <div class="mt-2">
            <div class="flex items-center gap-2 text-sm text-navy mb-2">
              <Icon name="lucide:shield-check" class="w-4 h-4 text-primary-blue" />
              <span>Australian Credit Licence 543046</span>
            </div>
            <div class="flex items-center gap-2 text-sm text-navy">
              <Icon name="lucide:certificate" class="w-4 h-4 text-primary-blue" />
              <span>Credit Representative 572894</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Legal Text Section -->
      <div class="border-t border-navy-300 mt-12 pt-8">
        <div class="text-xs text-navy-600 leading-relaxed space-y-3">
          <p class="font-medium text-navy">
            Crafted Finance Pty Ltd | ACN: 690 892 409 Credit Representative 572894 is authorised to provide credit assistance by Viking Asset Aggregation Pty Ltd Australian Credit Licence 543046
          </p>

          <p>
            This website is designed to provide you with factual information only. We do not provide financial or investment advice. Information on this site does not take into account your needs, objectives or financial situation. To understand whether a credit product is right for you, speak to one of our accredited Finance Brokers. Credit provider terms, conditions, interest rates, fees, charges and minimum loan amounts apply. Credit is subject to approval by the relevant credit provider.
          </p>
        </div>

        <!-- Copyright -->
        <div class="flex flex-col md:flex-row justify-between items-center mt-8 pt-6 border-t border-navy-300 ">
          <p class="text-primary-blue text-xs">
            © 2025 Crafted Finance. All rights reserved.
          </p>

          <div class="flex items-center space-x-4 mt-4 md:mt-0">
            <div class="flex items-center text-xs text-primary-blue">
              <Icon name="lucide:map-pin" class="w-3 h-3 mr-1 text-primary-blue" />
              <span>Australian Owned & Operated</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
</script>