<script setup lang="ts">
const props = defineProps({

  rightColumnStyle: {
    type: [String, Object],
    default: '',
  },

  leftColumnStyle: {
    type: String,
    default: '',
  },

  height: {
    type: Number,
    default: 600,
  },

  avatarHeight: {
    type: Number,
    default: 600,
  },

  dense: {
    type: Boolean,
    default: false,
  },

  transparent: {
    type: Boolean,
    default: false,
  },

  flat: {
    type: Boolean,
    default: false,
  },

  noGutters: {
    type: Boolean,
    default: false,
  },

  avatar: {
    type: String,
    default: '',
  },

  overline: {
    type: String,
    default: '',
  },

  title: {
    type: String,
    default: '',
  },

  body: {
    type: String,
    default: '',
  },

  button: {
    type: Object,
    default: () => ({
      text: '',
      icon: 'i-mdi:github',
    }),
  },

  order: {
    type: String,
    default: 'left',
  },
})
</script>

<template>
  <VCard>
    <div class="lg:flex w-100 h-full">
      <!-- This is the right side of the card  if right prop is disabled -->
      <!--  it should be on v order if mdAndUp is true -->

      <div
        :class="`lg:w-1/2  ${order === 'left' ? 'order-last lg:order-last' : `${noGutters && 'pr-3'} `}`"
        :style="{ ... rightColumnStyle, leftColumnStyle }"
        class="hidden xl:block  "
      >
        <!-- <div
          v-if="$slots.content"
          :class="`h-full ${order === 'left' ? 'border-l' : 'border-r'}` " class="border flex flex-col align-center justify-center "
          >
          <slot name="content" />
          </div> -->

        <!-- <div v-if="$slots.avatar" :style="{ height: `${height}px` }">
          <slot name="avatar" />
          </div> -->

        <template v-if="!$slots.content && !$slots.avatar">
          <!-- <VImg
            :height="props.height"
            :lazy-src="img(avatar, { width: props.height, quality: 40 })"
            :src="img(props.avatar, { width: props.height, quality: 70 })"
            class="bg-surface"
            cover
            /> -->

          <VImg
            :height="props.height"
            :src="props.avatar"
            class="bg-surface"
            cover
          />
        </template>
      </div>

      <div
        :class="`w-full xl:w-1/2
       ${order === 'right' ? 'order-last lg:order-last' : ''}
       ${dense ? '' : ' p-15x'}`
        "
      >
        <div v-if="!$slots.content && !$slots.default" class="flex flex-col h-full gap-7">
          <div class="flex text-sm font-light align-center">
            <ColorPipe v-if="overline" />
            <div>{{ `${overline}`.toUpperCase() }} </div>
          </div>

          <h2 v-if="title" class="text-4xl font-bold" v-html="title" />
          <p v-if="body" class="text-lg" v-html="body" />

          <div v-if="button.text">
            <VBtn class="rounded-xl border" color="link" size="x-large" variant="outlined">
              <div>
                {{ button.text }}
                <VIcon end icon="i-mdi:arrow-right" size="17" />
              </div>
            </VBtn>
          </div>
        </div>

        <div v-if="$slots.default" class="flex flex-col flex-wrap overflow-auto w-full h-full p-16 bg-yellowx">
          <slot />
        </div>
      </div>
    </div>
  </VCard>
</template>
