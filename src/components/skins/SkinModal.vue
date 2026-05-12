<template>
  <transition name="fade">
    <div
        v-if="show"
        class="modal-overlay"
        @click.self="close"
    >
      <div class="modal">

        <button
            class="close-btn"
            @click="close"
        >
          ✕
        </button>

        <div class="top-section">
          <div class="left">
            <div class="summary-card">
              <h3>Summary</h3>
              <div class="float-box">
                <div class="float-top">
                  <span>Float</span>
                  <b>
                    0.{{ randomFloat }}
                  </b>
                </div>
                <div class="float-bar">
                  <div class="float-progress"></div>
                </div>
              </div>
              <div class="info-row">
                <span>Exterior</span>
                <b>{{ skin.exterior }}</b>
              </div>
              <div class="info-row">
                <span>Rarity</span>
                <div
                    class="rarity"
                    :style="{
                    color: skin.rarityColor
    }"          >
                  {{ skin.rarity }}

                  <div
                      class="dot"
                      :style="{
                      background: skin.rarityColor
      }"          ></div>
                </div>
              </div>
              <div class="info-row">
                <span>Pattern</span>
                <b>#{{ pattern }}</b>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="header">
              <div>
                <h1
                    :style="{
                    color: skin.rarityColor
                    }"
                >
                  {{ skin.name }} | {{ skin.skin }}
                </h1>
              </div>
            </div>
            <div class="skin-preview">
              <img
                  :src="skin.image"
                  :alt="skin.market_hash_name"
              >
            </div>
            <div class="actions">
              <a
                  :href="skin.inspect"
                  target="_blank"
                  class="action-btn"
              >
                Inspect
              </a>
            </div>
            <div class="bottom-buy">
              <div class="price-wrapper">
                <div class="price">
                  ${{ skin.price }}
                </div>
                <div
                    class="percent"
                    :class="
                    skin.percent.includes('-')
                    ? 'red'
                    : 'green'
                  "
                >
                  {{ skin.percent }}
                </div>
              </div>
              <a
                  :href="skin.inspect"
                  target="_blank"
                  class="buy-btn"
              >
                Add To Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script setup>
import {
  computed,
  watch,
  onMounted,
  onBeforeUnmount
} from 'vue'
const props = defineProps({
  show: Boolean,
  skin: Object
})
const emit = defineEmits([
  'close'
])
const close = () => {
  emit('close')
}
const randomFloat = computed(() =>
    Math.floor(
        Math.random() * 999999999
    )
)
const pattern = computed(() =>
    Math.floor(
        Math.random() * 999
    )
)
const handleKeydown = (e) => {
  if (
      e.key === 'Escape' &&
      props.show
  ) {
    close()
  }
}
watch(
    () => props.show,
    (opened) => {
      if (opened) {
        document.body.style.overflow =
            'hidden'

      } else {
        document.body.style.overflow =
            'auto'
      }
    }
)
onMounted(() => {
  window.addEventListener(
      'keydown',
      handleKeydown
  )
})
onBeforeUnmount(() => {
  window.removeEventListener(
      'keydown',
      handleKeydown
  )
  document.body.style.overflow =
      'auto'
})
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: .25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 999999999;
  background:
      rgba(5,0,8,.72);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 22px;
}
.modal {
  width: 100%;
  max-width: 1450px;
  border-radius: 28px;
  overflow: hidden;
  background:
      linear-gradient(
          180deg,
          rgba(255,255,255,.06),
          rgba(255,255,255,.02)
      );
  border:
      1px solid rgba(255,78,203,.18);
  box-shadow:
      0 0 60px rgba(255,78,203,.18),
      inset 0 0 30px rgba(255,255,255,.02);
  backdrop-filter: blur(24px);
  position: relative;
}
.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 12px;
  background:
      rgba(255,255,255,.04);
  color: rgba(255,255,255,.6);
  cursor: pointer;
  z-index: 10;
  transition: .25s;
}
.close-btn:hover {
  background:
      rgba(255,78,203,.12);
  color: #ff4ecb;
}
.top-section {
  display: grid;
  grid-template-columns:
      320px 1fr;
}
.left {
  padding: 24px;
  border-right:
      1px solid rgba(255,255,255,.06);
}
.summary-card {
  background:
      rgba(255,255,255,.03);
  border:
      1px solid rgba(255,255,255,.05);
  border-radius: 18px;
  padding: 18px;
}
.summary-card h3 {
  margin-bottom: 22px;
  color: white;
}
.float-top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 14px;
}
.float-top span {
  color:
      rgba(255,255,255,.45);
}
.float-top b {
  color: white;
}
.float-bar {
  width: 100%;
  height: 8px;
  border-radius: 999px;
  overflow: hidden;
  background:
      linear-gradient(
          90deg,
          #00ff88,
          #ffb700,
          #ff4d6d
      );
}
.float-progress {
  width: 42%;
  height: 100%;
  background: white;
}
.info-row {
  margin-top: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.info-row span {
  color:
      rgba(255,255,255,.45);
}
.info-row b {
  color: white;
}
.rarity {
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
}
.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ff4d6d;
}
.right {
  padding: 24px 28px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.header h1 {
  font-size: 42px;
  color: white;
}
.header p {
  margin-top: 6px;
  color:
      rgba(255,255,255,.45);
}
.actions {
  display: flex;
}
.action-btn {
  cursor: pointer;
  height: 42px;
  position: relative;
  top: 20px;
  padding: 0 18px;
  border-radius: 12px;
  border:
      1px solid rgba(255,78,203,.25);
  background:
      rgba(255,255,255,.03);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: white;
  transition: .25s;
}
.action-btn:hover {
  border-color: #ff4ecb;
  background:
      rgba(255,78,203,.08);
}
.skin-preview {
  margin-top: 30px;
  height: 420px;
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.skin-preview img {
  width: 100%;
  max-width: 520px;
  object-fit: contain;
  filter:
      drop-shadow(
          0 0 30px rgba(255,78,203,.25)
      );
}
.bottom-buy {
  margin-top: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
.price-wrapper {
  display: flex;
  align-items: center;
  gap: 18px;
}
.price {
  font-size: 52px;
  font-weight: 800;
  color: white;
}
.percent {
  padding: 8px 14px;
  border-radius: 999px;
  font-weight: 700;
}
.green {
  color: #00ff88;
  background:
      rgba(0,255,136,.12);
}
.red {
  color: #ff4d6d;
  background:
      rgba(255,77,109,.12);
}
.buy-btn {
  cursor: pointer;
  flex: 1;
  max-width: 320px;
  height: 64px;
  border-radius: 18px;
  background:
      linear-gradient(
          90deg,
          #ff4ecb,
          #7b61ff
      );
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: white;
  font-size: 18px;
  font-weight: 700;
  transition: .25s;
}
.buy-btn:hover {
  transform: translateY(-3px);
  box-shadow:
      0 0 30px rgba(255,78,203,.35);
}
@media(max-width: 1100px) {
  .top-section {
    grid-template-columns: 1fr;
  }
  .left {
    border-right: none;
    border-bottom:
        1px solid rgba(255,255,255,.06);
  }
  .bottom-buy {
    flex-direction: column;
    align-items: stretch;
  }
  .buy-btn {
    max-width: 100%;
  }
}
</style>