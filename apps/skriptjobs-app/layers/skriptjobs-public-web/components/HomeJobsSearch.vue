<script setup lang="ts">
const { lgAndUp } = useDisplay()
const popular = ['marketing', 'design', 'developer', 'sales', 'product manager', 'business dev', 'intern', 'co-founder', 'customer service', 'remote']
</script>

<template>
  <div>
    <SquareImageCard
      :avatar-height="1200"
      :height="700"
      :hide-column="!lgAndUp" alt="job search image" avatar="/media/job-search.png" order="right"
    >
      <p class="search-apply-connect text-5xl lg:text-6xl sm:w-8/12 lg:w-auto h-fullx mb-5">
        Start your search for that
        <span class="text-link">perfect </span>job!
      </p>

      <div class="flex align-center justify-center gap-2 pt-3 w-100">
        <VTextField hide-details maxlength="65" placeholder="Search jobs..." prepend-inner-icon="i-mdi:magnify" />
      </div>
      <div class="gap-2 flex flex-wrap mt-5">
        <VChip v-for="tag in popular" :key="tag">
          <div>
            <VIcon color="link" icon="i-mdi:magnify" start />
            {{ capitalize(tag) }}
          </div>
        </VChip>
      </div>
    </squareimagecard>
  </div>
</template>
