<template>
  <div class="flex flex-col sm:flex-row  gap-4 mt-5">
    <SettingsButton
      class="rounded-xl"
      color="link"
      size="x-large"
    >
      Explore jobs
    </SettingsButton>

    <SettingsButton
      class="rounded-xl"
      contrast
      size="x-large"
    >
      <div>
        Join our waiting list
        <VIcon icon="i-mdi:chevron-right" />
      </div>
    </SettingsButton>
  </div>
</template>
