/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,vue,ts}",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e6eef5',
          100: '#ccdde8',
          200: '#99bbd1',
          300: '#6699bb',
          400: '#3377a4',
          500: '#1e3a5f',
          600: '#1a334f',
          700: '#162b40',
          800: '#122430',
          900: '#0e1d20'
        },
        mint: {
          50: '#f0fdf7',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#a7f3d0',
          500: '#4ade80',
          600: '#22c55e',
          700: '#16a34a',
          800: '#15803d',
          900: '#166534'
        },
        // Standard grays for Tailwind 4.0 compatibility
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827'
        },

        coffee: {
          // Rich coffee browns
          bean: '#3C2415',     // Dark coffee bean
          roast: '#5D4037',    // Medium roast
          espresso: '#4A2C2A', // Espresso brown
          mocha: '#8D6E63',    // Light coffee

          // Warm earth tones
          earth: '#A0826D',    // Warm earth
          clay: '#BCAAA4',     // Light clay
          sand: '#D7CCC8',     // Warm sand
          cream: '#F5F5DC',    // Coffee cream

          // Natural accents
          forest: '#4E5D3A',   // Deep forest green
          sage: '#87A96B',     // Sage green
          gold: '#D4AF37',     // Golden honey
          copper: '#B87333',   // Copper accent

          // Neutrals
          paper: '#FAF7F2',    // Warm paper white
          linen: '#F0EDE5',    // Natural linen
          stone: '#8A8A8A',    // Warm stone grey
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Source Sans Pro', 'Inter', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['Merriweather', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'coffee-gradient': 'linear-gradient(135deg, #3C2415 0%, #5D4037 50%, #8D6E63 100%)',
        'earth-gradient': 'linear-gradient(135deg, #4E5D3A 0%, #87A96B 100%)',
        'warm-gradient': 'linear-gradient(135deg, #F5F5DC 0%, #D7CCC8 100%)',
      },
      boxShadow: {
        warm: '0 4px 14px 0 rgba(60, 36, 21, 0.15)',
        coffee: '0 8px 30px 0 rgba(60, 36, 21, 0.25)',
      }
    },
  },
  plugins: []
}