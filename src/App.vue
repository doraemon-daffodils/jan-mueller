<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg

const { t } = useI18n()
const description = t('meta.description')

const host = import.meta.env.PROD
  ? 'https://jan-mueller.at'
  : 'http://localhost:3333'
const ogImage = `${host}/og-logo.png`

const router = useRouter()

useHead({
  link: [
    {
      rel: 'canonical',
      href: computed(() => `${host}${router.currentRoute.value.fullPath}`),
    },
  ],
  meta: [
    {
      name: 'description',
      content: description,
    },
    {
      property: 'twitter:description',
      content: description,
    },
    {
      property: 'twitter:image',
      content: ogImage,
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:image',
      content: ogImage,
    },
  ],
})
</script>

<template>
  <router-view />
</template>
