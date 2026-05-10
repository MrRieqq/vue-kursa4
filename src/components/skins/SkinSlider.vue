<template>
  <Swiper
      :modules="[Mousewheel]"
      :slides-per-view="'auto'"
      :space-between="24"
      :loop="skins.length > 4"
      :mousewheel="{
        forceToAxis: true,
        sensitivity: 1,
        releaseOnEdges: true
      }"
      class="skins-swiper"
  >
    <SwiperSlide
        v-for="skin in skins"
        :key="skin.id"
        class="slide"
    >
      <SkinCard :skin="skin" />
    </SwiperSlide>
  </Swiper>
</template>
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Mousewheel } from 'swiper/modules'
import 'swiper/css'
import SkinCard from './SkinCard.vue'
defineProps({
  skins: Array
})
</script>
<style scoped>
.skins-swiper {
  overflow: visible;
}
.slide {
  width: 320px !important;
}
</style>