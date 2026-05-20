<template>
  <div class="contacts-page">
    <AppHeader />
    <main class="contacts container">
      <section class="contacts-hero fade-up">
        <span class="contacts-badge">КОНТАКТЫ / ПОДДЕРЖКА</span>
        <h1>Контакты SkinTick</h1>
        <p>
          Свяжитесь с нами по любым вопросам:
          поддержка, сотрудничество, интеграции и безопасность.
        </p>
      </section>
      <section class="contacts-grid">
        <div class="contact-card fade-up delay-1">
          <div class="contact-icon">
            <img src="/support.svg" alt="">
          </div>
          <h2>Поддержка</h2>
          <p>
            Если у вас возникли вопросы,
            наша поддержка работает 24/7.
          </p>
          <div class="contact-list">
            <a href="https://t.me/invo_bankai"><img src="/tg.svg" alt="tg"> Telegram</a>
            <a href="mailto:leo.bankai337@gmail.com"><img src="/mail.svg" alt="email"> leo.bankai337@gmail.com</a>
          </div>
        </div>
        <div class="contact-card fade-up delay-2">
          <div class="contact-icon">
            <img src="/party.svg" alt="party">
          </div>
          <h2>Сотрудничество</h2>
          <p>
            Для блогеров, стримеров,
            рекламы и партнерских предложений.
          </p>
          <div class="contact-list">
            <a href="mailto:eftdrops337@gmail.com"><img src="/mail.svg" alt="email"> eftdrops337@gmail.com</a>
            <a href="https://www.youtube.com/@lol-iz1rs"><img src="/youtube.svg" alt="youtube"> Youtube</a>
          </div>
        </div>
      </section>
      <section class="security-section fade-up delay-3">
        <div class="security-box">
          <div class="security-left">
            <span class="security-mini">ПРОВЕРКА СОТРУДНИКА</span>
            <h2>Безопасность</h2>
            <p>
              Если кто-то написал вам от имени SkinTick,
              вы можете проверить сотрудника через поддержку.
            </p>
          </div>
          <div class="security-form">
            <input
                v-model="employeeInput"
                type="text"
                placeholder="Telegram, Youtube или E-mail"
                @keyup.enter="verifyEmployee">
            <button @click="verifyEmployee">Проверить</button>
            <div
                v-if="verificationResult"
                class="verification-result"
                :class="{
                success: verificationResult.success,
                error: !verificationResult.success
              }">
              {{ verificationResult.message }}
            </div>
          </div>
        </div>
      </section>
      <section class="bottom-box fade-up delay-4">
        <div class="support-box">
          <div>
            <h2>Нужна помощь?</h2>
            <p>
              Мы всегда готовы помочь вам
              разобраться с платформой SkinTick.
            </p>
          </div>
          <button @click="showSupportModal = true">Написать в поддержку</button>
        </div>
      </section>
    </main>
    <div class="line"></div>
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-brand">
          <img src="/logo.svg" alt="SkinTick">
          <p>
            Актуальные цены, графики
            и аналитика рынка CS2
            в реальном времени
          </p>
          <div class="footer-socials">
            <a href="https://www.tiktok.com/@lolke17"><img src="/tiktok.svg" alt=""></a>
            <a href="https://www.youtube.com/@lol-iz1rs"><img src="/youtube.svg" alt=""></a>
            <a href="https://vk.com/kripo43k"><img src="/vk.svg" alt=""></a>
            <a href="https://t.me/invo_bankai"><img src="/tg.svg" alt=""></a>
          </div>
        </div>
        <div class="footer-column">
          <h4>МАРКЕТ</h4>
          <a href="https://lis-skins.com/ru/cs2/">Продать скины CS2</a>
          <a href="https://lis-skins.com/ru/market/cs2/">Купить скины CS2</a>
          <a href="https://cs.money/ru/csgo/trade/">Обменять скины CS2</a>
        </div>
        <div class="footer-column">
          <h4>ПОМОЩЬ</h4>
          <router-link to="/faq" class="nav-link" active-class="active-link">FAQ</router-link>
          <a href="https://lis-skins.com/ru/prodat-veshi-stim/srazu-mnogo/">Как продать все скины CS2 в стиме сразу</a>
          <a href="https://lis-skins.com/ru/how-it-works/">Как это работает</a>
          <router-link to="/guarantees" class="nav-link" active-class="active-link">Гарантии</router-link>
          <router-link to="/contacts" class="nav-link" active-class="active-link">Контакты</router-link>
        </div>
        <div class="footer-column">
          <h4>ПОЛЕЗНОЕ</h4>
          <a href="https://lis-skins.com/ru/blog/">Блог</a>
          <a href="https://lis-skins.com/ru/reviews/">Отзывы о нас</a>
          <a href="https://lis-skins.com/ru/oferta/">Пользовательское соглашение</a>
          <a href="https://lis-skins.com/ru/privacy_policy/">Политика конфиденциальности</a>
          <a href="https://lis-skins.com/ru/profile/api/">API</a>
        </div>
        <div class="footer-right">
          <div class="footer-selects">
            <button class="footer-select"><img src="/public/usd.svg" alt="usd">USD</button>
            <button class="footer-select"><img src="/public/ru.svg" alt="ru">RU</button>
          </div>
          <p>
            Веб-сайт SkinTick управляется компанией Ин-Гейм
            Солюшн ЛТД.
          </p>
          <span>
              © 2017-2026 SkinTick, все права защищены<br>
              Powered by Steam. Not affiliated with Valve Corp.
          </span>
        </div>
      </div>
    </footer>
    <SupportModal v-model="showSupportModal" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import SupportModal from '@/components/ui/SupportModal.vue'
const showSupportModal = ref(false)
const employeeInput = ref('')
const verificationResult = ref<null | {
  success: boolean
  message: string
}>(null)
const employees = [
  {
    telegram: '@invo_bankai',
    email: 'leo.bankai337@gmail.com',
    role: 'Support'
  },
  {
    telegram: '@kbas228',
    email: 'stas.tanasakov@gmail.com',
    role: 'Partner'
  },
  {
    telegram: '@ChiffKiff63',
    role: 'Partner'
  },
  {
    youtube: '@lol-iz1rs',
    role: 'Youtube support'
  },
  {
    telegram: '@L0xxyN',
    email: 'brabanan@gmail.com',
    role: 'Freak partner'
  },
  {
    telegram: '@gud0nk',
    role: 'Сopywriter'
  },
]
const verifyEmployee = () => {
  const value = employeeInput.value
      .trim()
      .toLowerCase()
  if (!value) {
    verificationResult.value = {
      success: false,
      message: 'Введите Telegram, Youtube или E-mail'
    }
    return
  }
  const found = employees.find(employee => {
    return (
        employee.telegram?.toLowerCase() === value ||
        employee.email?.toLowerCase() === value ||
        employee.youtube?.toLowerCase() === value
    )
  })
  if (found) {
    verificationResult.value = {
      success: true,
      message: `Сотрудник подтвержден (${found.role})`
    }
  } else {
    verificationResult.value = {
      success: false,
      message: 'Сотрудник не найден'
    }
  }
}
</script>
<style scoped>
.active-link {
  color: #ff4ecb !important;
}
.contacts-page {
  min-height: 100vh;
  padding-top: 150px;
  background:
      radial-gradient(
          circle at top,
          #501144 0%,
          #140012 60%
      );
  color: white;
  overflow-x: hidden;
  position: relative;
  isolation: isolate;
}
.container {
  width: 100%;
  max-width: 1700px;
  margin: 0 auto;
  padding: 0 40px;
}
.contacts {
  padding-bottom: 80px;
}
.contacts-hero {
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
}
.contacts-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  padding: 0 18px;
  border: 1px solid rgba(255,78,203,.25);
  border-radius: 999px;
  background: rgba(255,255,255,.04);
  color: #ff4ecb;
  font-size: 13px;
}
.contacts-hero h1 {
  margin-top: 24px;
  font-size: 64px;
  line-height: 1.1;
}
.contacts-hero p {
  margin-top: 20px;
  color: rgba(255,255,255,.6);
  line-height: 1.6;
}
.contacts-grid {
  margin-top: 70px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
}
.contact-card {
  position: relative;
  overflow: hidden;
  padding: 38px;
  border-radius: 32px;
  border: 1px solid rgba(255,255,255,.08);
  background:
      linear-gradient(
          180deg,
          rgba(255,255,255,.055),
          rgba(255,255,255,.02)
      );
  backdrop-filter: blur(16px);
  transition:
      transform .3s ease,
      border-color .3s ease,
      box-shadow .3s ease;
}
.verification-result {
  padding: 14px 18px;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid transparent;
  animation: fadeUp .25s ease;
}
.verification-result.success {
  background: rgba(52, 199, 89, .12);
  border-color: rgba(52, 199, 89, .35);
  color: #7dff9b;
}
.verification-result.error {
  background: rgba(255, 59, 48, .12);
  border-color: rgba(255, 59, 48, .35);
  color: #ff8d85;
}
.contact-card::before {
  content: "";
  position: absolute;
  top: -40%;
  right: -20%;
  width: 220px;
  height: 220px;
  background:
      radial-gradient(
          circle,
          rgba(255,78,203,.12),
          transparent 70%
      );
  pointer-events: none;
}
.contact-card:hover {
  transform: translateY(-6px);
  border-color: rgba(255,78,203,.4);
  box-shadow:
      0 0 30px rgba(255,78,203,.14);
}
.contact-icon {
  width: 72px;
  height: 72px;
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
      radial-gradient(
          circle,
          rgba(255,78,203,.2),
          rgba(255,78,203,.04)
      );
  border: 1px solid rgba(255,78,203,.4);
  box-shadow:
      0 0 24px rgba(255,78,203,.12);
}
.contact-icon img {
  width: 28px;
  height: 28px;
}
.contact-card h2 {
  margin-top: 26px;
  font-size: 30px;
  font-weight: 700;
  line-height: 1.2;
}
.contact-card p {
  margin-top: 16px;
  color: rgba(255,255,255,.55);
  line-height: 1.8;
  font-size: 15px;
  max-width: 420px;
}
.contact-list {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.contact-list a {
  height: 54px;
  padding: 0 18px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255,255,255,.03);
  border: 1px solid rgba(255,255,255,.06);
  color: rgba(255,255,255,.82);
  text-decoration: none;
  transition:
      transform .25s ease,
      border-color .25s ease,
      background .25s ease;
}
.contact-list a:hover {
  transform: translateX(4px);
  border-color: rgba(255,78,203,.35);
  background: rgba(255,255,255,.05);
  color: #ff4ecb;
}
.contact-list img {
  width: 18px;
  height: 18px;
}
@media(max-width: 900px) {
  .contacts-grid {
    grid-template-columns: 1fr;
  }
}
@media(max-width: 768px) {
  .contact-card {
    padding: 28px;
  }
  .contact-card h2 {
    font-size: 24px;
  }
  .contact-list a {
    height: 50px;
    font-size: 14px;
  }
}
.security-section {
  margin-top: 50px;
}
.security-box {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding: 40px;
  border-radius: 32px;
  border: 1px solid rgba(255,78,203,.16);
  background:
      linear-gradient(
          180deg,
          rgba(255,78,203,.08),
          rgba(255,255,255,.03)
      );
}
.security-mini {
  color: #ff4ecb;
  font-size: 13px;
}
.security-box h2 {
  margin-top: 14px;
  font-size: 42px;
}
.security-box p {
  margin-top: 14px;
  color: rgba(255,255,255,.55);
  line-height: 1.7;
  max-width: 620px;
}
.security-form {
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.security-form input {
  height: 60px;
  padding: 0 22px 0 58px;
  border-radius: 18px;
  border: 2px solid #3C1B37;
  background:
      url('/poisk.png') no-repeat 20px center,
      rgba(255,255,255,.04);
  background-size: 18px;
  color: white;
  outline: none;
  font-size: 15px;
  backdrop-filter: blur(12px);
  transition:
      border-color .25s ease,
      box-shadow .25s ease,
      background .25s ease,
      transform .25s ease;
}
.security-form input::placeholder {
  color: rgba(255,255,255,.45);
}
.security-form input:focus {
  border-color: #ff4ecb;
  background:
      url('/posik.svg') no-repeat 20px center,
      rgba(255,255,255,.06);
  background-size: 18px;
  box-shadow:
      0 0 22px rgba(255,78,203,.25);
  transform: translateY(-1px);
}
.security-form button {
  height: 56px;
  border: none;
  border-radius: 18px;
  background:
      linear-gradient(
          90deg,
          #ff4ecb,
          #7b61ff
      );
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition:
      transform .25s ease,
      box-shadow .25s ease;
}
.security-form button:hover {
  transform: translateY(-2px);
  box-shadow:
      0 0 25px rgba(255,78,203,.22);
}
.bottom-box {
  margin-top: 50px;
}
.support-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 36px;
  border-radius: 32px;
  border: 1px solid rgba(255,78,203,.18);
  background:
      linear-gradient(
          180deg,
          rgba(255,78,203,.10),
          rgba(255,255,255,.03)
      );
}
.support-box h2 {
  font-size: 32px;
}
.support-box p {
  margin-top: 10px;
  color: rgba(255,255,255,.5);
}
.support-box button {
  height: 56px;
  padding: 0 26px;
  border-radius: 18px;
  border: 1px solid rgba(255,78,203,.45);
  background:
      linear-gradient(
          90deg,
          #ff4ecb,
          #7b61ff
      );
  color: white;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition:
      transform .25s ease,
      box-shadow .25s ease;
}
.support-box button:hover {
  transform: translateY(-2px);
  box-shadow:
      0 0 25px rgba(255,78,203,.22);
}
.fade-up {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeUp .8s ease forwards;
}
.delay-1 {
  animation-delay: .15s;
}
.delay-2 {
  animation-delay: .3s;
}
.delay-3 {
  animation-delay: .45s;
}
.delay-4 {
  animation-delay: .6s;
}
@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.line {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  border: 1px solid rgba(255, 255, 255, .06);
  border-radius: 32px;
}
.footer {
  display: flex;
  justify-content: center;
  padding-top: 30px;
}
.footer::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
      circle at top left,
      rgba(255,78,203,.12),
      transparent 35%
  );
  pointer-events: none;
}
.footer-container {
  width: 100%;
  max-width: 1920px;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 70px;
  position: relative;
}
.footer-brand img {
  width: 140px;
  display: block;
  object-fit: contain;
}
.footer-brand p {
  margin-top: 14px;
  color: rgba(255,255,255,.42);
  font-size: 11px;
  line-height: 1.5;
  position: relative;
  bottom: 100px;
  max-width: 170px;
}
.footer-socials {
  margin-top: 24px;
  display: flex;
  gap: 10px;
}
.footer-socials a {
  width: 38px;
  height: 38px;
  position: relative;
  bottom: 100px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,.03);
  border: 1px solid rgba(255,255,255,.08);
  transition: .25s ease;
}
.footer-socials a:hover {
  border-color: #ff4ecb;
  transform: translateY(-2px);
  box-shadow: 0 0 20px rgba(255,78,203,.18);
}
.footer-socials img {
  width: 20px;
  height: 20px;
}
.footer-column {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.footer-column h4 {
  color: #ff4ecb;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 16px;
  letter-spacing: .04em;
}
.footer-column a {
  color: rgba(255,255,255,.45);
  text-decoration: none;
  font-size: 14px;
  transition:
      color .25s ease,
      transform .25s ease;
}
.footer-column a:hover {
  color: #ff4ecb;
  transform: translateY(-1px);
}
.footer-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  max-width: 260px;
}
.footer-selects {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
}
.footer-select {
  height: 40px;
  padding: 0 16px;
  border-radius: 12px;
  border: 1px solid rgba(255,78,203,.45);
  background: rgba(255,255,255,.02);
  color: white;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: .25s ease;
}
.footer-select:hover {
  border-color: #ff4ecb;
}
.footer-right p {
  color: rgba(255,255,255,.45);
  font-size: 10px;
  line-height: 1.6;
  max-width: 260px;
}
.footer-right span {
  margin-top: 3px;
  color: rgba(255,255,255,.45);
  font-size: 11px;
  line-height: 1.6;
  width: 260px;
}
#app > div > footer > div > div.footer-brand > img {
  position: relative;
  bottom: 50px;
}
@media(max-width: 1100px) {
  .footer-container {
    grid-template-columns: repeat(2, 1fr);
  }
  .footer-right {
    align-items: flex-start;
  }
  .footer-right p,
  .footer-right span {
    text-align: left;
  }
}
@media(max-width: 768px) {
  .footer {
    padding: 40px 0;
  }
  .footer-container {
    grid-template-columns: 1fr;
    gap: 35px;
    padding: 0 20px;
  }
  .footer-brand img {
    width: 120px;
  }
  .footer-column h4 {
    font-size: 16px;
  }
  .footer-column a {
    font-size: 13px;
  }
  .footer-right {
    align-items: flex-start;
  }
  .footer-selects {
    flex-wrap: wrap;
  }
}
</style>