<script setup lang="ts">
const theme = useTheme()
const colorMode = useColorMode()

function setTheme() {
  if (process.client) {
    nextTick(() => {
      theme.global.name.value = colorMode.value
    })
  }
}

const themeButtons = [
  { mode: 'dark', icon: 'i-mdi:moon-waning-crescent' },
  { mode: 'light', icon: 'i-mdi:lightbulb-on' },
]

const activeThemeButton = computed({
  get: () => themeButtons.findIndex(btn => btn.mode === colorMode.value),
  set: index => colorMode.preference = themeButtons[index].mode,
})

onMounted(() => {
  setTheme()
})
</script>

<template>
  <!-- {{ colorMode.value }} -->
  <ClientOnly>
    <VBtnToggle v-model="activeThemeButton" class="p-1" mandatory variant="text">
      <VBtn
        v-for="({ icon }, i) in themeButtons"
        :key="i"
        :icon="icon"
        class="mr-1 mask mask-hexagon"
        rounded="lg"
        size="small"
        @click="setTheme()"
      >
        <VIcon size="x-small">
          {{ icon }}
        </VIcon>
      </VBtn>
    </VBtnToggle>
  </ClientOnly>
</template>
