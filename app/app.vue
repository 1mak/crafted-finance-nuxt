<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
useHead({
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
  ],
  meta: [
    { name: 'theme-color', content: '#0ea5e9' },
    { name: 'msapplication-TileColor', content: '#0ea5e9' }
  ]
})

</script>
<style>
@import 'tailwindcss/theme';
@import 'tailwindcss/utilities';

</style>