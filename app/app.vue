<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
useHead({
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
  ],
  meta: [
    { name: 'theme-color', content: '#8B4513' }, // Coffee brown color
    { name: 'msapplication-TileColor', content: '#8B4513' }
  ]
})

</script>
<style>
@import 'tailwindcss/theme';
@import 'tailwindcss/utilities';

</style>