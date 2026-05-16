<template>
  <div class="skin-card" @click="showModal = true;emit('modal-open')">
    <div class="top">
      <div class="info">
        <h3>{{ skin.name }}</h3>
        <p>{{ skin.skin }}</p>
      </div>
      <span
          class="quality"
          :style="{
            borderColor: getQualityColor(skin.quality),
            color: getQualityColor(skin.quality)
          }">
        {{ skin.quality }}
      </span>
    </div>
    <img
        :src="skin.image || fallbackImage"
        :alt="skin.name"/>
    <SkinGraph :prices="skin.graph" />
    <div class="bottom">
      <div>
        <h2>${{ skin.price }}</h2>
        <small>
          {{ skin.updated }}
        </small>
      </div>
      <span :class="skin.percent.includes('-')? 'red': 'green'">
        {{ skin.percent }}
      </span>
    </div>
  </div>
  <Teleport to="body">
    <SkinModal :show="showModal" :skin="skin" @close="showModal = false;emit('modal-close')"/>
  </Teleport>
</template>
<script setup>
import { ref } from 'vue'
import SkinGraph from './SkinGraph.vue'
import SkinModal from '../ui/SkinModal.vue'
const showModal = ref(false)
const fallbackImage =
    'https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtYQWWlP_HmojxnB7mrxJf5N2x2QXj-hU4j6rDyoDAd1Q8J1sQFrnFvgLoxu7sYwM/360fx360f'
const props = defineProps({
  skin: Object
})
const emit = defineEmits([
  'modal-open',
  'modal-close'
])
function getQualityColor(quality) {
  switch(quality) {
    case 'FN':
      return '#00ff88'
    case 'MW':
      return '#00a2ff'
    case 'FT':
      return '#ffb700'
    case 'WW':
      return '#ff7300'
    case 'BS':
      return '#ff3b3b'
    default:
      return '#ffffff'
  }
}
</script>
<style scoped>
.skin-card {
  width: 100%;
  max-width: 320px;
  min-width: 320px;
  padding: 20px;
  border-radius: 24px;
  background:
      rgba(255,255,255,0.05);
  border:
      1px solid rgba(255,255,255,0.08);
  transition: .3s;
  backdrop-filter: blur(10px);
}
.skin-card:hover {
  transform: translateY(-5px);
  border-color: #ff4ecb;
  box-shadow:
      0 0 25px rgba(255,78,203,.3);
}
.top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
}
.info {
  max-width: 220px;
}
.top h3 {
  font-size: 20px;
  font-weight: 700;
  color: white;
  line-height: 1.2;
}
.top p {
  margin-top: 5px;
  color:
      rgba(255,255,255,.6);
  font-size: 14px;
}
.quality {
  width: 44px;
  height: 44px;
  min-width: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid;
  background:
      rgba(255,255,255,0.05);
  font-weight: 700;
  font-size: 13px;
}
img {
  width: 100%;
  height: 180px;
  object-fit: contain;
  margin-top: 15px;
  user-select: none;
}
.bottom {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.bottom h2 {
  font-size: 34px;
  font-weight: 700;
}
.bottom small {
  color:
      rgba(255,255,255,.6);
}
.green {
  color: #00ff88;
  font-weight: 700;
}
.red {
  color: #ff4d6d;
  font-weight: 700;
}
</style>