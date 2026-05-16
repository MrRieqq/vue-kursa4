<template>
  <transition name="fade">
    <div
        v-if="modelValue"
        class="modal-overlay"
        @click="close"
    >
      <div class="modal" @click.stop>
        <button class="close-btn" @click="close">
          ✕
        </button>
        <h2>
          Поддержка SkinTick
        </h2>
        <p class="subtitle">
          Свяжитесь с нами любым удобным способом
        </p>
        <div class="contacts">
          <a
              href="https://t.me/invo_bankai"
              target="_blank"
              class="contact-card"
          >
            <img src="/tg.svg" alt="">
            <div>
              <h3>Telegram</h3>
              <span>@invo_bankai</span>
            </div>
          </a>
          <a
              href="https://vk.com/kripo43k"
              target="_blank"
              class="contact-card"
          >
            <img src="/vk.svg" alt="">
            <div>
              <h3>VK</h3>
              <span>vk.com/kripo43k</span>
            </div>
          </a>
          <a
              href="mailto:leo.bankai337@gmail.com"
              class="contact-card"
          >
            <img src="/mail.svg" alt="">
            <div>
              <h3>Email</h3>
              <span>leo.bankai337@gmail.com</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </transition>
</template>
<script setup>
const props = defineProps({
  modelValue: Boolean
})
const emit = defineEmits(['update:modelValue'])
const close = () => {
  emit('update:modelValue', false)
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
      opacity .35s ease,
      transform .35s cubic-bezier(.16,1,.3,1);
}
.fade-enter-active .modal,
.fade-leave-active .modal {
  transition:
      transform .35s cubic-bezier(.16,1,.3,1),
      opacity .35s ease,
      filter .35s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-from .modal {
  opacity: 0;
  transform:
      scale(.88)
      translateY(40px);
  filter: blur(12px);
}
.fade-enter-to .modal {
  opacity: 1;
  transform:
      scale(1)
      translateY(0);
  filter: blur(0);
}
.fade-leave-to .modal {
  opacity: 0;
  transform:
      scale(.88)
      translateY(20px);
  filter: blur(10px);
}
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(5, 0, 8, .72);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999;
  padding: 20px;
}
.modal {
  width: 100%;
  max-width: 440px;
  padding: 38px;
  border-radius: 30px;
  position: relative;
  background:
      linear-gradient(
          180deg,
          rgba(255,255,255,.06),
          rgba(255,255,255,.02)
      );
  border: 1px solid rgba(255,78,203,.22);
  box-shadow:
      0 0 60px rgba(255,78,203,.18),
      inset 0 0 30px rgba(255,255,255,.02);
  backdrop-filter: blur(24px);
  overflow: hidden;
}
.modal::before {
  content: "";
  position: absolute;
  top: -80px;
  right: -80px;
  width: 220px;
  height: 220px;
  background:
      radial-gradient(
          circle,
          rgba(255,78,203,.18),
          transparent 70%
      );
  pointer-events: none;
}
.close-btn {
  position: absolute;
  top: 18px;
  right: 18px;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 12px;
  background: rgba(255,255,255,.05);
  color: rgba(255,255,255,.75);
  cursor: pointer;
  transition: .25s ease;
}
.close-btn:hover {
  background: rgba(255,78,203,.12);
  color: #ff4ecb;
}
h2 {
  font-size: 34px;
  color: white;
  margin-bottom: 8px;
}
.subtitle {
  color: rgba(255,255,255,.5);
  margin-bottom: 28px;
  font-size: 14px;
}
.contacts {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.contact-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px;
  border-radius: 18px;
  text-decoration: none;
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.08);
  transition:
      transform .25s ease,
      border-color .25s ease,
      box-shadow .25s ease;
}
.contact-card:hover {
  transform: translateY(-2px);
  border-color: #ff4ecb;
  box-shadow:
      0 0 24px rgba(255,78,203,.16);
}
.contact-card img {
  width: 26px;
  height: 26px;
}
.contact-card h3 {
  color: white;
  font-size: 16px;
}
.contact-card span {
  color: rgba(255,255,255,.5);
  font-size: 13px;
}
</style>