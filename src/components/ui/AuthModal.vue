<template>
  <transition name="fade">
    <div v-if="modelValue" class="modal-overlay" @click="close">
      <div class="modal" @click.stop>
        <button class="close-btn" @click="close">
          ✕
        </button>
        <h2>
          {{ isLogin ? t('authLogin') : t('authRegister') }}
        </h2>
        <p class="subtitle">
          {{ isLogin ? t('authLoginSubtitle') : t('authRegisterSubtitle') }}
        </p>
        <form class="auth-form">
          <input v-if="!isLogin" type="text" :placeholder="t('authNickname')">
          <input type="email" placeholder="Email">
          <input type="password" :placeholder="t('authPassword')">
          <button type="submit" class="submit-btn">
            {{ isLogin ? t('authLogin') : t('authCreateAccount') }}
          </button>
        </form>
        <div class="divider">
          <span>{{ t('authOr') }}</span>
        </div>
        <a href="https://steamcommunity.com/openid/login/" target="_blank" class="steam-btn"><img src="/steam.svg" alt="Steam">Steam</a>
        <div class="switch-text">
          <span>{{ isLogin ? t('authNoAccount') : t('authHaveAccount') }}</span>
          <button class="switch-btn" @click="isLogin = !isLogin">
            {{ isLogin ? t('authRegisterBtn') : t('authLoginBtn') }}
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script setup>
import {
  ref,
  watch,
  onMounted,
  onBeforeUnmount
} from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const props = defineProps({
  modelValue: Boolean,
  mode: {
    type: String,
    default: 'login'
  }
})
const emit = defineEmits([
  'update:modelValue'
])
const isLogin = ref(
    props.mode === 'login'
)
watch(
    () => props.mode,
    (newMode) => {
      isLogin.value =
          newMode === 'login'
    }
)
const close = () => {
  emit('update:modelValue', false)
}
const handleKeydown = (e) => {
  if (
      e.key === 'Escape' &&
      props.modelValue
  ) {
    close()
  }
}
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
})
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
  background: radial-gradient(
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
.auth-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.auth-form input {
  height: 54px;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,.08);
  background: rgba(255,255,255,.04);
  padding: 0 18px;
  color: white;
  font-size: 15px;
  outline: none;
  transition:
      border-color .25s ease,
      box-shadow .25s ease,
      background .25s ease;
}
.auth-form input::placeholder {
  color: rgba(255,255,255,.35);
}
.auth-form input:focus {
  border-color: #ff4ecb;
  background: rgba(255,255,255,.06);
  box-shadow:
      0 0 20px rgba(255,78,203,.18);
}
.submit-btn {
  margin-top: 10px;
  height: 56px;
  border: 1px solid rgba(255,78,203,.55);
  border-radius: 18px;
  background:
      linear-gradient(
          180deg,
          rgba(255,78,203,.22),
          rgba(255,78,203,.08)
      );
  color: white;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition:
      transform .25s ease,
      box-shadow .25s ease,
      border-color .25s ease;
}
.submit-btn:hover {
  transform: translateY(-2px);
  border-color: #ff4ecb;
  box-shadow:
      0 0 30px rgba(255,78,203,.28);
}
.divider {
  position: relative;
  margin: 24px 0 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.divider::before,
.divider::after {
  content: "";
  flex: 1;
  height: 1px;
  background:
      linear-gradient(
          90deg,
          transparent,
          rgba(255,255,255,.12),
          transparent
      );
}
.divider span {
  padding: 0 14px;
  color: rgba(255,255,255,.38);
  font-size: 13px;
  white-space: nowrap;
}
.steam-btn {
  width: 100%;
  height: 56px;
  text-decoration: none;
  border-radius: 18px;
  border: 1px solid rgba(255,255,255,.08);
  background:
      linear-gradient(
          180deg,
          rgba(255,255,255,.05),
          rgba(255,255,255,.025)
      );
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: white;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition:
      transform .25s ease,
      border-color .25s ease,
      box-shadow .25s ease,
      background .25s ease;
}
.steam-btn img {
  width: 25px;
  height: 25px;
}
.steam-btn:hover {
  transform: translateY(-2px);
  border-color: rgba(255,78,203,.45);
  background:
      linear-gradient(
          180deg,
          rgba(255,78,203,.10),
          rgba(255,78,203,.04)
      );
  box-shadow:
      0 0 24px rgba(255,78,203,.14);
}
.switch-text {
  margin-top: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 14px;
}
.switch-text span {
  color: rgba(255,255,255,.82);
}
.switch-btn {
  position: relative;
  background: transparent;
  border: none;
  color: #ff4ecb;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition:
      color .25s ease,
      transform .25s ease,
      text-shadow .25s ease;
}
.switch-btn::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 0;
  height: 1px;
  background: #ff4ecb;
  transition: width .25s ease;
}
.switch-btn:hover {
  color: #ff7ad9;
  transform: translateY(-1px);
  text-shadow:
      0 0 12px rgba(255,78,203,.45);
}
.switch-btn:hover::after {
  width: 100%;
}
</style>