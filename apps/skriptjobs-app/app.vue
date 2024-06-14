<script setup lang="ts">
const title = 'Skriptjobs™ – Discover your next career journey'
const description = 'Join us and start exploring companies, jobs or talent. We made job hunting and recruiting a fun thing to do. We aim to be the proxy that links talent with opportunity.'
const image = 'https://skriptjobs.com/Skriptjobs-Meta-ShareImg_Hero-EN.png'
const url = 'https://skriptjobs.com'

useSeoMeta({
  title,
  description,
  ogDescription: description,
  ogImage: image,
  twitterCard: 'summary',
  twitterTitle: title,
  twitterImage: image,
  twitterDescription: description,
  ogTitle: title,
  ogUrl: url,
})

useHead({
  bodyAttrs: {
    class: 'no-transitions',
  },
})

const boot = ref(false)

onMounted(() => {
  setTimeout(() => {
    boot.value = true
  }, 50)
})
</script>

<template>
  <div :class="boot ? 'opacity-100' : 'opacity-0'" class="max-w-[1475px] mx-auto px-3 ">
    <VApp>
      <GAppBar />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
      <TheFooter />
    </VApp>
  </div>
</template>

<style>
html.dark {
  background-color: #191a23;
}

html.light {
  background-color: #f3f1f1;
}
</style>
