import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    // Private keys (only available on server-side)
    smtpHost: process.env.NITRO_SMTP_HOST,
    smtpPort: parseInt(process.env.NITRO_SMTP_PORT || '587'),
    smtpUser: process.env.NITRO_SMTP_USER,
    smtpPass: process.env.NITRO_SMTP_PASS,
    businessEmail: process.env.NITRO_BUSINESS_EMAIL,
    resendApiKey: process.env.NITRO_RESEND_API_KEY,
  },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui'
  ],

  css: ['~/assets/css/main.css'],

  ui: {
    global: true,
    icons: ['heroicons', 'simple-icons']
  },
})