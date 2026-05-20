<template>
  <div class="slider-wrapper">
    <div
        class="embla"
        ref="emblaRef"
    >
      <div class="embla__container">

        <div
            v-for="skin in filteredSkins"
            :key="skin.id"
            class="embla__slide"
        >
          <SkinCard :skin="skin" />
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import emblaCarouselVue from 'embla-carousel-vue'
import WheelGesturesPlugin from 'embla-carousel-wheel-gestures'

import SkinCard from './SkinCard.vue'

import { useSearch } from '@/stores/useSearch'

const props = defineProps({
  skins: {
    type: Array,
    default: () => []
  }
})

const { search } = useSearch()

const filteredSkins = computed(() => {

  const query =
      search.value
          .trim()
          .toLowerCase()

  if (!query) {
    return props.skins
  }

  return props.skins.filter(skin => {

    return (
        skin.name?.toLowerCase().includes(query) ||
        skin.skin?.toLowerCase().includes(query) ||
        skin.market_hash_name?.toLowerCase().includes(query)
    )
  })
})

const [emblaRef] = emblaCarouselVue(
    {
      axis: 'x',
      dragFree: true,
      containScroll: 'trimSnaps',
      align: 'start'
    },
    [
      WheelGesturesPlugin({
        forceWheelAxis: 'x'
      })
    ]
)
</script>

<style scoped>
.slider-wrapper {
  width: 100%;
  overflow: visible;
  padding: 20px 0;
}

.embla {
  overflow: hidden;
  cursor: grab;
  touch-action: pan-y pinch-zoom;
}

.embla:active {
  cursor: grabbing;
}

.embla__container {
  display: flex;
  gap: 24px;
  padding: 10px 0 20px;
  user-select: none;
}

.embla__slide {
  flex: 0 0 320px;
}
</style>