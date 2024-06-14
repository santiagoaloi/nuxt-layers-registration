<script setup lang="ts">
const divRef = ref(null)
const position = reactive({ x: 0, y: 0 })
const opacity = ref(0)

function handleMouseMove(e) {
  if (!divRef.value)
    return

  const rect = divRef.value.getBoundingClientRect()

  position.x = e.clientX - rect.left
  position.y = e.clientY - rect.top
}

function handleMouseEnter() {
  opacity.value = 1
}

function handleMouseLeave() {
  opacity.value = 0
}
</script>

<template>
  <VCard>
    <TopBorderHighlight />

    <div
      ref="divRef"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @mousemove="handleMouseMove"
    >
      <div
        :style="{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(65,66,85,.1), transparent 40%)`,
        }"
        class="pointer-events-none absolute -inset-px transition duration-300 hidden dark:block"
      />
      <slot />
    </div>
  </VCard>
</template>
