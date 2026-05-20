<template>
  <div class="faq-page">
    <AppHeader />
    <main class="faq container">
      <section class="faq-hero fade-up">
        <span class="faq-badge">{{ t('faqBadge') }}</span>
        <h1>{{ t('faqTitle') }}</h1>
        <p>{{ t('faqDesc') }}</p>
      </section>
      <section class="faq-search fade-up delay-1">
        <input type="text" :placeholder="t('faqSearch')">
      </section>
      <section class="faq-grid fade-up delay-2">
        <div
            class="faq-card fade-up"
            v-for="(item, index) in faqItems"
            :key="index"
            :style="{
            animationDelay: `${index * 0.08}s`
          }">
          <button class="faq-question" @click="toggle(index)">
            <span>{{ item.question }}</span>
            <div class="faq-icon" :class="{ active: item.open }">
              +
            </div>
          </button>
          <transition name="faq">
            <div
                v-if="item.open"
                class="faq-answer">
              {{ item.answer }}
            </div>
          </transition>
        </div>
      </section>
      <section class="faq-bottom fade-up delay-3">
        <div class="support-box">
          <div>
            <h2>{{ t('faqSupportTitle') }}</h2>
            <p>{{ t('faqSupportDesc') }}</p>
          </div>
          <button @click="showSupportModal = true">{{ t('faqSupportBtn') }}</button>
        </div>
      </section>
    </main>
    <div class="line"></div>
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-brand">
          <img src="/logo.svg" alt="SkinTick">
          <p>{{ t('footerDesc') }}</p>
          <div class="footer-socials">
            <a href="https://www.tiktok.com/@lolke17">
              <img src="/tiktok.svg" alt="">
            </a>
            <a href="https://www.youtube.com/@lol-iz1rs">
              <img src="/youtube.svg" alt="">
            </a>
            <a href="https://vk.com/kripo43k">
              <img src="/vk.svg" alt="">
            </a>
            <a href="https://t.me/invo_bankai">
              <img src="/tg.svg" alt="">
            </a>
          </div>
        </div>
        <div class="footer-column">
          <h4>{{ t('footerMarket') }}</h4>
          <a href="https://lis-skins.com/ru/cs2/">{{ t('sellSkins') }}</a>
          <a href="https://lis-skins.com/ru/market/cs2/">{{ t('buySkins') }}</a>
          <a href="https://cs.money/ru/csgo/trade/">{{ t('tradeSkins') }}</a>
        </div>
        <div class="footer-column">
          <h4>{{ t('footerHelp') }}</h4>
          <router-link to="/faq" class="nav-link" active-class="active-link">{{ t('faq') }}</router-link>
          <a href="https://lis-skins.com/ru/prodat-veshi-stim/srazu-mnogo/">{{ t('sellAll') }}</a>
          <a href="https://lis-skins.com/ru/how-it-works/">{{ t('howItWorks') }}</a>
          <router-link to="/guarantees" class="nav-link" active-class="active-link">{{ t('guarantees') }}</router-link>
          <router-link to="/contacts" class="nav-link" active-class="active-link">{{ t('contacts') }}</router-link>
        </div>
        <div class="footer-column">
          <h4>{{ t('footerUseful') }}</h4>
          <a href="https://lis-skins.com/ru/blog/">{{ t('blog') }}</a>
          <a href="https://lis-skins.com/ru/reviews/">{{ t('reviews') }}</a>
          <a href="https://lis-skins.com/ru/oferta/">{{ t('agreement') }}</a>
          <a href="https://lis-skins.com/ru/privacy_policy/">{{ t('privacy') }}</a>
          <a href="https://lis-skins.com/ru/profile/api/">{{ t('api') }}</a>
        </div>
        <div class="footer-right">
          <div class="footer-selects">
            <div class="currency-dropdown">
              <button class="footer-select" @click="showCurrency = !showCurrency">
                <img :src="currency === 'USD' ? '/usd.svg' : '/rub.svg'" alt="">{{ currency }}
              </button>
              <div v-if="showCurrency" class="currency-menu">
                <button class="currency-item" @click="changeCurrency('USD')"><img src="/usd.svg">USD</button>
                <button class="currency-item" @click="changeCurrency('RUB')"><img src="/rub.svg">RUB</button>
              </div>
            </div>
            <div class="currency-dropdown">
              <button class="footer-select" @click="showLanguage = !showLanguage"><img :src="language === 'RU' ? '/ru.svg' : '/en.svg'" alt="">{{ language }}</button>
              <div v-if="showLanguage" class="currency-menu">
                <button class="currency-item" @click="changeLanguage('RU')"><img src="/ru.svg">RU</button>
                <button class="currency-item" @click="changeLanguage('EN')"><img src="/en.svg">EN</button>
              </div>
            </div>
          </div>
          <p>{{ t('footerCompany') }}</p>
          <span>{{ t('footerRights') }}<br>{{ t('footerRights2') }}</span>
        </div>
      </div>
    </footer>
    <SupportModal v-model="showSupportModal" />
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import AppHeader from '@/components/layout/AppHeader.vue'
import SupportModal from '@/components/ui/SupportModal.vue'
const { t, tm, locale } = useI18n()
const showSupportModal = ref(false)
const language = ref(
    locale.value.toUpperCase()
)
const showLanguage = ref(false)
const showCurrency = ref(false)
const currency = ref(
    localStorage.getItem('currency') || 'USD'
)
function changeLanguage(val) {
  language.value = val
  locale.value = val.toLowerCase()
  localStorage.setItem(
      'lang',
      val.toLowerCase()
  )
  showLanguage.value = false
}
function changeCurrency(val) {
  currency.value = val
  localStorage.setItem(
      'currency',
      val
  )
  showCurrency.value = false
}
const faqItems = ref([])
const loadFaq = () => {
  faqItems.value = tm('faqItems').map(item => ({
    ...item,
    open: false
  }))
}
loadFaq()
watch(locale, () => {
  loadFaq()
})
const toggle = (index) => {
  faqItems.value[index].open =
      !faqItems.value[index].open
}
</script>
<style scoped>
.faq-page {
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
}
.container {
  width: 100%;
  max-width: 1700px;
  margin: 0 auto;
  padding: 0 40px;
}
.faq {
  padding-bottom: 80px;
}
.faq-hero {
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
}
.faq-badge {
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
.faq-hero h1 {
  margin-top: 24px;
  font-size: 64px;
  line-height: 1.1;
}
.faq-hero p {
  margin-top: 20px;
  color: rgba(255,255,255,.6);
  line-height: 1.6;
}
.faq-search {
  display: flex;
  justify-content: center;
  margin-top: 55px;
}
.faq-search input {
  width: 100%;
  max-width: 620px;
  height: 62px;
  padding: 0 24px 0 58px;
  border: 2px solid #3C1B37;
  border-radius: 22px;
  background:
      url('/poisk.png') no-repeat 20px center,
      rgba(255,255,255,.04);
  background-size: 18px;
  color: white;
  font-size: 15px;
  outline: none;
  backdrop-filter: blur(12px);
  transition:
      border-color .25s ease,
      box-shadow .25s ease,
      background .25s ease,
      transform .25s ease;
}
.faq-search input::placeholder {
  color: rgba(255,255,255,.45);
}
.faq-search input:focus {
  border-color: #ff4ecb;
  background:
      url('/poisk.png') no-repeat 20px center,
      rgba(255,255,255,.06);
  background-size: 18px;
  box-shadow:
      0 0 22px rgba(255,78,203,.25);
  transform: translateY(-1px);
}
.faq-grid {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 60px;
}
.faq-card {
  overflow: hidden;
  border-radius: 28px;
  border: 1px solid rgba(255,255,255,.08);
  background:
      linear-gradient(
          180deg,
          rgba(255,255,255,.05),
          rgba(255,255,255,.02)
      );
  backdrop-filter: blur(14px);
  transition:
      border-color .25s ease,
      transform .25s ease,
      box-shadow .25s ease;
}
.faq-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255,78,203,.35);
  box-shadow:
      0 0 25px rgba(255,78,203,.12);
}
.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 30px;
  border: none;
  background: transparent;
  color: white;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
}
.faq-icon {
  width: 34px;
  height: 34px;
  min-width: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid rgba(255,78,203,.3);
  color: #ff4ecb;
  transition:
      transform .25s ease,
      background .25s ease;
}
.faq-icon.active {
  transform: rotate(45deg);
  background: rgba(255,78,203,.12);
}
.faq-answer {
  padding: 0 30px 28px;
  color: rgba(255,255,255,.58);
  font-size: 15px;
  line-height: 1.7;
}
.faq-enter-active,
.faq-leave-active {
  transition: all .25s ease;
}
.faq-enter-from,
.faq-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
.faq-bottom {
  margin-top: 70px;
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
  background:
      radial-gradient(
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
  box-shadow:
      0 0 20px rgba(255,78,203,.18);
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
.nav-links a:hover {
  color: #ff4ecb;
  transform: translateY(-1px);
}
.active-link {
  color: #ff4ecb !important;
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
@media(max-width: 700px) {
  .container {
    padding: 0 20px;
  }
  .faq-hero h1 {
    font-size: 42px;
  }
  .faq-question {
    padding: 22px;
    font-size: 15px;
  }
  .faq-answer {
    padding: 0 22px 22px;
  }
  .support-box {
    flex-direction: column;
    align-items: flex-start;
  }
  .support-box h2 {
    font-size: 26px;
  }
  .support-box button {
    width: 100%;
  }
}
.currency-dropdown {
  position: relative;
}
.currency-menu {
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  background: #1b0b17;
  border: 1px solid rgba(255,78,203,.3);
  border-radius: 14px;
  overflow: hidden;
  z-index: 999;
}
.currency-item {
  width: 100%;
  height: 42px;
  border: none;
  background: transparent;
  color: white;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 14px;
  cursor: pointer;
  transition: .2s;
}
.currency-item img {
  width: 18px;
  height: 18px;
}
.currency-item:hover {
  background: rgba(255,78,203,.15);
}
</style>