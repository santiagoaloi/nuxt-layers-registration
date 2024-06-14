<script setup lang="ts">
const route = useRoute()
const fullHeight = computedEager(() => route.meta.fullHeight)
</script>

<template>
  <VMain :class="fullHeight && 'h-full'">
    <slot />
  </VMain>
</template>
