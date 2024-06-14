<script setup lang="ts">
const route = useRoute()
const hideAppBar = computedEager(() => !route.meta.hideAppBar)
</script>

<template>
  <!-- using key to re-render the appbar in case the appbar is hidden on scroll
    and going back to a history mode page still doesnt display the bar -->

  <VAppBar
    v-show="hideAppBar"
    :height="100" absolute
  >
    <VCard
      class="mx-auto flex items-center p-7 mt-2 elevation-0 w-100"
      color="app-background" height="68"
    >
      <NuxtLink to="/">
        <SkriptjobsLogo />
      </NuxtLink>
      <VSpacer />

      <GAppBarMenuRight />
    </VCard>
  </VAppBar>
</template>
