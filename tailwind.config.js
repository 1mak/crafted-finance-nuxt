export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ],
  theme: {
    extend: {
      colors: {
        // Crafted Finance Primary Colors
        'navy': {
          50: '#f2f4f9',
          100: '#e5e9f3',
          200: '#d0d8e7',
          300: '#b1bfd4',
          400: '#8da1bd',
          500: '#5679a3',
          600: '#3a5c8a',
          700: '#2f4b71',
          800: '#2a4260',
          900: '#252f68',
          DEFAULT: '#1e2757'
        },
        'primary-blue': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#00a3e0',
          700: '#0284c7',
          800: '#0369a1',
          900: '#0c4a6e',
          DEFAULT: '#00a3e0'
        },
        'light-blue': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#5db3d4',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          DEFAULT: '#5db3d4'
        },
        // Crafted Finance Grays
        'light-gray': '#f8f9fa',
        'dark-gray': '#333333',
        'medium-gray': '#6c757d'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
        display: ['Inter', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif']
      },
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px'
        }
      },
      boxShadow: {
        'navy': '0 4px 14px 0 rgba(30, 39, 87, 0.15)',
        'navy-lg': '0 8px 30px 0 rgba(30, 39, 87, 0.25)',
        'blue': '0 4px 14px 0 rgba(0, 163, 224, 0.15)',
        'blue-lg': '0 8px 30px 0 rgba(0, 163, 224, 0.25)'
      }
    }
  },
  plugins: []
}