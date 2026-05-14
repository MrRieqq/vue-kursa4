<template>
  <header class="navbar">
    <div class="navbar-inner container">
      <div class="logo">
        <a href="http://localhost:5173">
        <img src="/logo.svg" alt="logo">
        </a>
      </div>
      <nav class="nav-links">
        <a href="#">Рынок</a>
        <router-link to="/skins" class="nav-link" active-class="active-link">Скины</router-link>
        <a href="#">Аналитика</a>
        <a href="#">Графики</a>
        <router-link to="/faq" class="nav-link" active-class="active-link">FAQ</router-link>
      </nav>
      <div class="nav-right">
        <input type="text" placeholder="Поиск скина..." class="input-with-icon">
        <button class="login-btn" @click="openLogin">Войти</button>
        <button class="register-btn" @click="openRegister">Регистрация</button>
      </div>
    </div>
  </header>
  <AuthModal v-model="showModal" :mode="modalMode"/>
</template>
<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 99999;
}
.navbar-inner {
  width: 100%;
  max-width: 1920px;
  height: 90px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  background: rgba(20,0,20,0.75);
  backdrop-filter: blur(14px);
  border-bottom:
      1px solid rgba(255,255,255,0.08);
}
.logo {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.logo img {
  width: 170px;
  display: block;
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 35px;
  margin-left: 50px;
}
.nav-links a {
  color: rgba(255,255,255,0.72);
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition:
      color .25s ease,
      transform .25s ease;
}
.nav-links a:hover {
  color: #ff4ecb;
  transform: translateY(-1px);
}
.active-link {
  color: #ff4ecb !important;
}
.nav-right {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 15px;
}
.nav-right input {
  width: 250px;
  height: 44px;
  outline: none;
  border-radius: 14px;
  padding: 0 15px 0 50px;
  border: 2px solid #3C1B37;
  background:
      url('../../../public/poisk.png') no-repeat 15px center,
      rgba(255,255,255,0.03);
  color: white;
  transition:
      border-color .25s ease,
      box-shadow .25s ease;
}
.nav-right input::placeholder {
  color: rgba(255,255,255,.45);
}
.nav-right input:focus {
  border-color: #ff4ecb;
  box-shadow:
      0 0 20px rgba(255,78,203,.25);
}
.nav-right button {
  height: 44px;
  padding: 0 24px;
  border-radius: 14px;
  color: white;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  transition:
      transform .25s ease,
      box-shadow .25s ease,
      border-color .25s ease,
      background .25s ease;
}
.login-btn {
  background: transparent;
  border: 1px solid rgba(255,78,203,.6);
}
.register-btn {
  border: 1px solid rgba(255,78,203,.6);
  background: transparent;
}
.login-btn:hover,
.register-btn:hover {
  transform: translateY(-3px);
  box-shadow:
      0 0 25px rgba(255,78,203,.35);
}
.login-btn:hover {
  background:
      rgba(255,78,203,.08);
  border-color: #ff4ecb;
}
.register-btn:hover {
  background:
      rgba(255,78,203,.08);
}

@media(max-width: 1100px) {
  .nav-links {
    display: none;
  }
}
@media(max-width: 768px) {
  .navbar-inner {
    padding: 0 20px;
  }
  .nav-right input {
    width: 180px;
  }
  .register-btn {
    display: none;
  }
}
</style>
<script setup lang="ts">
import { ref } from 'vue'
import AuthModal from '@/components/ui/AuthModal.vue'

const showModal = ref(false)
const modalMode = ref('login')

const openLogin = () => {
  modalMode.value = 'login'
  showModal.value = true
}

const openRegister = () => {
  modalMode.value = 'register'
  showModal.value = true
}
</script>