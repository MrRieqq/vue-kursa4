<template>

  <Swiper
      :slides-per-view="'auto'"
      :space-between="24"
      :loop="skins.length > 4"
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

import 'swiper/css'

import SkinCard from './SkinCard.vue'

defineProps({
  skins: Array
})

</script>

<style scoped>

.slide {
  width: 320px !important;
}
.skins-swiper {
  height: 500px;
}
</style>