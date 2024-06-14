<template>
  <SquareImageCard
    :avatar-height="1250"
    :height="700"
    alt="hero image"
    avatar="/ai/landing-1.jpg"
    class="rounded-xl"
  >
    <div class="p-md-5 h-full flex flex-col justify-center bg-greenx">
      <HomeMessageChip class="prevent-select" />

      <p class="search-apply-connect text-5xl lg:text-6xl sm:w-8/12 lg:w-auto  font-bold mb-5">
        <!-- Ready to  <span class="text-link"> forge </span>
          <span class="relative"> your future career?</span> -->
        title
      </p>

      <p class="we-made-job-hunting text-2xl">
        subtitle
      </p>
      <HomeHeroActionButtons />
    </div>
  </SquareImageCard>
</template>

<style scoped>
  .search-apply-connect {
  @apply text-6xl font-bold;
}

.get-hired {
  @apply bg-clip-text bg-gradient-to-bl from-[#8788ee] to-[#304c85] text-transparent;
}
</style>
