<script setup lang="ts">
defineProps({
  size: {
    type: String,
    default: '48',
  },
})

const theme = useTheme()

const colors = computed(() => {
  return theme.current.value.variables
})
</script>

<template>
  <svg
    :height="size"
    :width="size"
    fill="none"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M47 7H1v36h46v-36Z" fill="transparent" stroke-width="1" />
    <path :fill="colors.svgFillSoft" d="M47 15v28H1l46 -28Z" stroke-width="1" />
    <path
      :stroke="colors.svgStroke"
      d="M5 11h2"
      stroke-linecap="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M11 11h2"
      stroke-linecap="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M17 11h2"
      stroke-linecap="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M47 7H1v36h46v-36Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M1 15h46"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M17 31h-6V28L14 23"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M15 29v6"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M37 31h-6V28l3 -5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="M35 29v6"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
    <path
      :stroke="colors.svgStroke"
      d="m24 23 -3 2v8l3 2 3 -2v-8l-3 -2Z"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1"
    />
  </svg>
</template>
