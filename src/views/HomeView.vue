<template>
  <div class="app">
    <AppHeader />
    <main class="hero container">
      <section class="hero-content fade-up">
        <h1>{{ t('heroTitle1') }}<br><span>SkinTick</span> {{ t('heroTitle2') }}</h1>
        <p>{{ t('heroDesc') }}</p>
      </section>
      <section class="features fade-up delay-1">
        <div class="feature-card">
          <img src="/hours.svg">   {{ t('updatePrices') }}
        </div>
        <div class="feature-card">
          <img src="/bd.svg"> {{ t('platforms') }}
        </div>
        <div class="feature-card">
          <img src="/fire.svg"> {{ t('analytics') }}
        </div>
        <div class="feature-card">
          <img src="/graph.svg"> {{ t('history') }}
        </div>
      </section>
      <section class="skins-section fade-up delay-2">
        <div v-if="loading" class="loading">
          {{ t('loading') }}
        </div>
        <SkinSlider v-else :skins="skins"/>
      </section>
      <section class="stats-section fade-up delay-3">
        <div class="stats-grid">
          <div class="stat-card fade-up delay-1">
            <div class="stat-top">
              <img src="/graph.svg" alt="">
              <span>{{ t('marketSummary') }}</span>
            </div>
            <h2>{{ formatPrice(2847653) }}</h2>
            <p>{{ t('marketVolume') }}</p>
          </div>
          <div class="stat-card fade-up delay-2">
            <div class="stat-top">
              <img src="/box.svg" alt="">
              <span>{{ t('activeSkins') }}</span>
            </div>
            <h2>1,245,672</h2>
            <p>{{ t('tracked') }}</p>
          </div>
          <div class="stat-card fade-up delay-3">
            <div class="stat-top">
              <img src="/update.svg" alt="">
              <span>{{ t('todayUpdates') }}</span>
            </div>
            <h2>8,642,112</h2>
            <p>{{ t('lastUpdate') }}</p>
          </div>
          <div class="stat-card fade-up delay-4">
            <div class="stat-top">
              <img src="/server.svg" alt="">
              <span>{{ t('platformsTitle') }}</span>
            </div>
            <h2>100+</h2>
            <p>{{ t('dataSources') }}</p>
          </div>
        </div>
        <div class="bottom-features">
          <div class="feature-box fade-up delay-1">
            <div class="feature-icon">
              <img src="/fire.svg" alt="">
            </div>
            <div>
              <h3>{{ t('accurateData') }}</h3>
              <p>{{ t('accurateDataDesc') }}</p>
            </div>
          </div>
          <div class="divider"></div>
          <div class="feature-box fade-up delay-1">
            <div class="feature-icon">
              <img src="/update.svg">
            </div>
            <div>
              <h3>{{ t('fastUpdates') }}</h3>
              <p>{{ t('fastUpdatesDesc') }}</p>
            </div>
          </div>
          <div class="divider"></div>
          <div class="feature-box fade-up delay-1">
            <div class="feature-icon">
              <img src="/graph.svg" alt="">
            </div>
            <div>
              <h3>{{ t('chartsAnalytics') }}</h3>
              <p>{{ t('chartsAnalyticsDesc') }}</p>
            </div>
          </div>
          <div class="divider"></div>
          <div class="feature-box fade-up delay-1">
            <div class="feature-icon">
              <img src="/kolokol.svg" alt="">
            </div>
            <div>
              <h3>{{ t('notifications') }}</h3>
              <p>{{ t('notificationsDesc') }}</p>
            </div>
          </div>
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
  </div>
</template>
<script setup>
import {
  onMounted,
  ref,
} from 'vue'
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import { useSkinStore }
  from '@/stores/skinStore'
import AppHeader
  from '@/components/layout/AppHeader.vue'
import SkinSlider
  from '@/components/skins/SkinSlider.vue'
const skinStore = useSkinStore()
const { t, locale } = useI18n()
const { skins, loading } =
    storeToRefs(skinStore)
import { useCurrency }
  from '@/stores/useCurrency.js'
const {
  currency,
  changeCurrency: setCurrency,
  formatPrice
} = useCurrency()
const showCurrency = ref(false)
function changeCurrency(val) {
  setCurrency(val)
  showCurrency.value = false
}
onMounted(async () => {
  skinStore.startAutoUpdate()
})
const language = ref(locale.value.toUpperCase())
const showLanguage = ref(false)
function changeLanguage(val) {
  language.value = val
  locale.value = val.toLowerCase()
  localStorage.setItem(
      'lang',
      val.toLowerCase()
  )
  showLanguage.value = false
}
</script>
<style scoped>
.line {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  border: 1px solid rgba(255, 255, 255, .06);
  border-radius: 32px;
}
.stats-section {
  padding: 40px;
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.stat-card {
  position: relative;
  padding: 24px;
  border-radius: 24px;
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.06);
  backdrop-filter: blur(12px);
  transition:
      transform .3s ease,
      border-color .3s ease,
      box-shadow .3s ease;
}
.stat-card:hover {
  transform: translateY(-4px);
  border-color: #ff4ecb;
  box-shadow: 0 0 30px rgba(255,78,203,.18);
}
.stat-top {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
}
.stat-top img {
  width: 18px;
  height: 18px;
}
.stat-top span {
  color: rgba(255,255,255,.85);
  font-size: 15px;
}
.stat-card h2 {
  font-size: 44px;
  font-weight: 700;
  color: white;
  line-height: 1;
}
.stat-card p {
  margin-top: 8px;
  color: rgba(255,255,255,.45);
  font-size: 16px;
}
.bottom-features {
  margin-top: 42px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}
.feature-box {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px;
  border-radius: 20px;
  background: linear-gradient(
      180deg,
      rgba(255,255,255,.045),
      rgba(255,255,255,.02)
  );
  border: 1px solid rgba(255,255,255,.06);
  backdrop-filter: blur(14px);
  transition:
      transform .3s ease,
      border-color .3s ease,
      box-shadow .3s ease;
  overflow: hidden;
}
.feature-box:hover {
  transform: translateY(-3px);
  border-color: rgba(255,78,203,.45);
  box-shadow: 0 0 25px rgba(255,78,203,.12);
}
.feature-box::before {
  content: "";
  position: absolute;
  top: -40%;
  left: -20%;
  width: 180px;
  height: 180px;
  background: radial-gradient(
      circle,
      rgba(255,78,203,.08),
      transparent 70%
  );
  pointer-events: none;
}
.feature-icon {
  width: 54px;
  height: 54px;
  min-width: 54px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255,78,203,.55);
  background: radial-gradient(
      circle,
      rgba(255,78,203,.18),
      rgba(255,78,203,.05)
  );
  box-shadow: 0 0 20px rgba(255,78,203,.15);
}
.feature-icon img {
  width: 22px;
  height: 22px;
}
.feature-box h3 {
  color: white;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
}
.feature-box p {
  margin-top: 6px;
  color: rgba(255,255,255,.45);
  font-size: 13px;
  line-height: 1.5;
}
.divider {
  display: none;
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
.app {
  min-height: 100vh;
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
.hero {
  padding-top: 140px;
}
.hero-content {
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}
.hero-content h1 {
  font-size: 35px;
  line-height: 1.2;
  font-weight: 700;
}
.hero-content span {
  color: #ff4ecb;
}
.hero-content p {
  margin-top: 15px;
  color: rgba(255,255,255,0.7);
  font-size: 14px;
}
.features {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}
.feature-card {
  padding: 18px 24px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 18px;
  display: flex;
  align-items: center;
  gap: 10px;
  backdrop-filter: blur(10px);
}
.feature-card img {
  margin-bottom: 2px;
  width: 15px;
  height: 15px;
}
.skins-section {
  margin-top: 70px;
}
.loading {
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: rgba(255,255,255,.7);
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
@media(max-width: 768px) {
  .hero-content h1 {
    font-size: 34px;
  }
  .skins-section {
    padding-left: 20px;
  }
}
@media(max-width: 1200px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .bottom-features {
    flex-wrap: wrap;
  }
  .divider {
    display: none;
  }
}
@media(max-width: 768px) {
  .stats-section {
    padding: 20px;
  }
  .stats-grid {
    grid-template-columns: 1fr;
  }
  .bottom-features {
    flex-direction: column;
    align-items: flex-start;
  }
  .stat-card h2 {
    font-size: 34px;
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