<template>
  <div class="skins-page">
    <AppHeader />
    <main class="skins container">
      <section class="skins-hero fade-up">
        <div class="hero-badge">{{t('skinsBadge')}}</div>
        <h1>{{t('skinsTitle')}}</h1>
        <p>{{t('skinsDesc')}}</p>
      </section>
      <section class="skins-toolbar fade-up delay-1">
        <div class="toolbar-search">
          <div class="search-box">
            <img src="/posik.svg" alt="search">
            <input v-model="search" type="text" :placeholder="t('searchSkin')">
          </div>
        </div>
        <div class="toolbar-filters">
          <button
              v-for="category in categories"
              :key="category"
              class="category-btn"
              :class="{
              active: selectedCategory === category
            }"
              @click="selectedCategory = category"
          >
            {{ t(category) }}
          </button>
        </div>
        <div class="toolbar-sort">
          <select v-model="selectedSort">
            <option value="popular">{{t('sortPopular')}}</option>
            <option value="price-high">{{t('sortExpensive')}}</option>
            <option value="price-low">{{t('sortCheap')}}</option>
            <option value="change">{{t('sortGrowth')}}</option>
          </select>
        </div>
      </section>
      <section class="skins-grid">
        <article
            v-for="(skin, index) in filteredSkins"
            :key="skin.id"
            class="skin-card fade-up"
            :style="{
            animationDelay: `${index * 0.05}s`
          }">
          <div class="skin-card-bg"></div>
          <div class="skin-top">
            <div class="skin-info">
              <h2>{{ skin.name }}</h2>
              <p class="skin-name">
                {{ skin.skin }}
              </p>
            </div>
            <div class="quality-badge">
              {{ skin.quality }}
            </div>
          </div>
          <div class="skin-image">
            <img :src="skin.image" :alt="skin.name">
          </div>
          <div class="skin-bottom">
            <div class="price-block">
              <strong>{{ formatPrice(skin.price) }}</strong>
              <div class="price-change" :class="skin.trend">
                {{ skin.change > 0 ? '+' : '' }}{{ skin.change }}%
              </div>
            </div>
            <a :href="skin.inspect" target="_blank" class="buy-btn">{{t('buyLink')}}</a>
          </div>
        </article>
      </section>
    </main>
    <div class="line">
    </div>
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
              <button class="footer-select" @click="showLanguage = !showLanguage">
                <img :src="language === 'RU' ? '/ru.svg' : '/en.svg'" alt="">
                {{ language }}
              </button>

              <div v-if="showLanguage" class="currency-menu">
                <button class="currency-item" @click="changeLanguage('RU')">
                  <img src="/ru.svg">
                  RU
                </button>

                <button class="currency-item" @click="changeLanguage('EN')">
                  <img src="/en.svg">
                  EN
                </button>
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
  computed,
  ref,
  onMounted
} from 'vue'
import axios from 'axios'
import AppHeader from '@/components/layout/AppHeader.vue'
import { useCurrency } from '@/stores/useCurrency.js'
import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n()
const {
  currency,
  changeCurrency: setCurrency,
  formatPrice
} = useCurrency()
const search = ref('')
const selectedCategory = ref('all')
const selectedSort = ref('popular')
const skins = ref([])
const showCurrency = ref(false)
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
function changeCurrency(val) {
  setCurrency(val)
  showCurrency.value = false
}
const categories = [
  'all',
  'rifles',
  'pistols',
  'snipers',
  'shotguns'
]
onMounted(async () => {
  try {
    const { data } = await axios.get(
        'http://localhost:3001/api/skins'
    )
    skins.value = data
        .slice(0, 20)
        .map(item => ({
          ...item,
          category: getCategory(item.name),
          change: Number(
              item.percent.replace('%', '')
          ),
          trend:
              item.percent.includes('-')
                  ? 'down'
                  : 'up'
        }))
  } catch(error) {
    console.log(error)
  }
})
const filteredSkins = computed(() => {
  let result = [...skins.value]
  if (selectedCategory.value !== 'all') {
    result = result.filter(
        skin =>
            skin.category === selectedCategory.value
    )
  }
  if (search.value) {
    result = result.filter(skin => {
      const fullName =
          `${skin.name} ${skin.skin}`
      return fullName
          .toLowerCase()
          .includes(search.value.toLowerCase())
    })
  }
  switch(selectedSort.value) {
    case 'price-high':
      result.sort(
          (a, b) =>
              Number(b.price) - Number(a.price)
      )
      break
    case 'price-low':
      result.sort(
          (a, b) =>
              Number(a.price) - Number(b.price)
      )
      break
    case 'change':
      result.sort(
          (a, b) =>
              b.change - a.change
      )
      break
    default:
      result.sort(
          (a, b) =>
              (b.volume || 0) - (a.volume || 0)
      )

  }
  return result
})
function getCategory(name) {
  const rifles = [
    'AK-47',
    'M4A4',
    'M4A1-S',
    'FAMAS',
    'Galil AR',
    'AUG',
    'SG 553'
  ]
  const pistols = [
    'USP-S',
    'Glock-18',
    'Desert Eagle',
    'P250',
    'Five-SeveN',
    'Tec-9',
    'CZ75-Auto',
    'Dual Berettas',
    'R8 Revolver'
  ]
  const snipers = [
    'AWP',
    'SSG 08',
    'SCAR-20',
    'G3SG1'
  ]
  const smgAndShotguns = [
    'MP7',
    'MP9',
    'MAC-10',
    'UMP-45',
    'P90',
    'PP-Bizon',
    'Nova',
    'XM1014',
    'MAG-7',
    'Sawed-Off',
    'Negev',
    'M249'
  ]
  if (
      rifles.some(weapon =>
          name.includes(weapon)
      )
  ) {
    return 'rifles'
  }
  if (
      pistols.some(weapon =>
          name.includes(weapon)
      )
  ) {
    return 'pistols'
  }
  if (
      snipers.some(weapon =>
          name.includes(weapon)
      )
  ) {
    return 'snipers'
  }
  if (
      smgAndShotguns.some(weapon =>
          name.includes(weapon)
      )
  ) {
    return 'shotguns'
  }
  return 'rifles'
}
</script>
<style scoped>
.skins-page {
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
.skins {
  padding-bottom: 80px;
}
.container {
  width: 100%;
  max-width: 1700px;
  margin: 0 auto;
  padding: 0 40px;
}
.skins-hero {
  max-width: 850px;
  margin: 0 auto;
  text-align: center;
}
.quality-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
}
.hero-badge {
  display:inline-flex;
  align-items:center;
  justify-content:center;
  height:38px;
  padding:0 18px;
  border:1px solid rgba(255,78,203,.25);
  border-radius:999px;
  background:rgba(255,255,255,.04);
  color:#ff4ecb;
  font-size:13px;
}
.skins-hero h1 {
  margin-top: 24px;
  font-size: 68px;
  line-height: 1.1;
}
.skins-hero p {
  margin-top: 20px;
  color: rgba(255,255,255,.6);
  line-height: 1.6;
}
.skins-toolbar {
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: 40px;
  margin-top: 60px;
}
.toolbar-search {
  width: 100%;
}
.toolbar-filters,
.price-block,
.footer-selects,
.footer-socials {
  display: flex;
  align-items: center;
  gap: 14px;
}
.toolbar-sort {
  min-width: 260px;
}
.search-box {
  position: relative;
  width: 100%;
}
.search-box img {
  position: absolute;
  top: 50%;
  left: 22px;
  width: 18px;
  transform: translateY(-50%);
  transition: .25s ease;
}
.search-box:focus-within img {
  filter:
      drop-shadow(0 0 6px rgba(255,78,203,.7));
  transform:
      translateY(-50%) scale(1.08);
}
.search-box input,
.toolbar-sort select {
  width: 100%;
  height: 62px;
  border-radius: 18px;
  background: rgba(255,255,255,.04);
  color: white;
  outline: none;
}
.search-box input {
  padding: 0 22px 0 58px;
  border: 2px solid #3C1B37;
  font-size: 15px;
  backdrop-filter: blur(12px);
  transition:
      border-color .25s ease,
      box-shadow .25s ease,
      background .25s ease;
}
.search-box input::placeholder {
  color: rgba(255,255,255,.45);
}
.search-box input:focus {
  border-color: #ff4ecb;
  background: rgba(255,255,255,.06);
  box-shadow:
      0 0 20px rgba(255,78,203,.25);
}
.category-btn {
  height: 46px;
  padding: 0 22px;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,.08);
  background: rgba(255,255,255,.03);
  color: rgba(255,255,255,.7);
  white-space: nowrap;
  cursor: pointer;
  transition: .25s ease;
}
.category-btn:hover,
.category-btn.active {
  border-color: rgba(255,78,203,.4);
  background: rgba(255,78,203,.12);
  color: white;
}
.toolbar-sort select {
  padding: 0 18px;
  border: 1px solid rgba(255,255,255,.08);
  cursor: pointer;
}
.toolbar-sort select option {
  background: #220022;
  color: white;
}
.skins-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-top: 55px;
  margin-bottom: 50px;
}
.skin-card {
  position: relative;
  overflow: hidden;
  padding: 24px;
  border-radius: 28px;
  border: 1px solid rgba(255,255,255,.08);
  background: #120015;
  transition: .35s ease;
}
.skin-card:hover {
  transform: translateY(-6px);
  border-color: rgba(255,78,203,.35);
  box-shadow:
      0 0 30px rgba(255,78,203,.18);
}
.skin-card-bg {
  position: absolute;
  inset: 0;
  background:
      radial-gradient(
          circle at center,
          rgba(255,0,153,.18),
          transparent 60%
      );
}
.skin-top,
.skin-image,
.skin-bottom {
  position: relative;
  z-index: 2;
}
.skin-top {
  display: flex;
  justify-content: space-between;
  gap: 14px;
}
.skin-info h2 {
  font-size: 24px;
  font-weight: 700;
}
.skin-name {
  color: rgba(255,255,255,.5);
}
.quality-badge {
  min-width: 46px;
  height: 46px;
  padding: 0 14px;
  border: 1px solid rgba(255,255,255,.12);
  background: rgba(255,255,255,.05);
  color: #ff4ecb;
  font-size: 13px;
  font-weight: 700;
}
.skin-image {
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.skin-image img {
  width: 60%;
  object-fit: contain;
  transition: .35s ease;
}
.skin-card:hover img {
  transform: scale(1.08);
}
.price-block strong {
  font-size: 42px;
}
.price-change {
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 700;
}
.price-change.up {
  background: rgba(0,255,140,.12);
  color: #36ffb2;
}
.price-change.down {
  background: rgba(255,90,90,.12);
  color: #ff7a7a;
}
.buy-btn,
.footer-select {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .25s ease;
}
.buy-btn {
  width: 100%;
  height: 56px;
  margin-top: 20px;
  border-radius: 18px;
  background:
      linear-gradient(
          90deg,
          #ff4ecb,
          #7b61ff
      );
  color: white;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
}
.buy-btn:hover {
  transform: translateY(-2px);
  box-shadow:
      0 0 25px rgba(255,78,203,.35);
}
.nav-links a:hover,
.footer-column a:hover {
  color: #ff4ecb;
  transform: translateY(-1px);
}
.active-link {
  color: #ff4ecb !important;
}
.line {
  width: 100%;
  max-width: 1920px;
  margin: 20px auto 0;
  border: 1px solid rgba(255,255,255,.06);
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
  position: relative;
  width: 100%;
  max-width: 1920px;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 70px;
}
.footer-brand img {
  display: block;
  width: 140px;
  object-fit: contain;
}
#app > div > footer > div > div.footer-brand > img {
  position: relative;
  bottom: 50px;
}
.footer-brand p,
.footer-socials a {
  position: relative;
  bottom: 100px;
}
.footer-brand p {
  max-width: 170px;
  margin-top: 14px;
  color: rgba(255,255,255,.42);
  font-size: 11px;
  line-height: 1.5;
}
.footer-socials {
  margin-top: 24px;
  gap: 10px;
}
.footer-socials a {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255,255,255,.08);
  border-radius: 12px;
  background: rgba(255,255,255,.03);
  transition: .25s ease;
}
.footer-socials a:hover {
  transform: translateY(-2px);
  border-color: #ff4ecb;
  box-shadow:
      0 0 20px rgba(255,78,203,.18);
}
.footer-socials img {
  width: 20px;
  height: 20px;
}
.footer-column,
.footer-right {
  display: flex;
  flex-direction: column;
}
.footer-column {
  gap: 5px;
}
.footer-column h4 {
  margin-bottom: 16px;
  color: #ff4ecb;
  font-size: 15px;
  font-weight: 600;
  letter-spacing: .04em;
}
.footer-column a {
  color: rgba(255,255,255,.45);
  font-size: 14px;
  text-decoration: none;
  transition:
      color .25s ease,
      transform .25s ease;
}
.footer-right {
  align-items: flex-end;
  max-width: 260px;
}
.footer-right p,
.footer-right span {
  max-width: 260px;
  color: rgba(255,255,255,.45);
  line-height: 1.6;
}
.footer-right p {
  font-size: 10px;
}
.footer-right span {
  width: 260px;
  margin-top: 3px;
  font-size: 11px;
}
.footer-selects {
  margin-bottom: 24px;
  gap: 12px;
}
.footer-select {
  height: 40px;
  padding: 0 16px;
  gap: 8px;
  border: 1px solid rgba(255,78,203,.45);
  border-radius: 12px;
  background: rgba(255,255,255,.02);
  color: white;
  font-size: 13px;
  cursor: pointer;
}
.footer-select:hover {
  border-color: #ff4ecb;
}
.fade-up {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeUp .8s ease forwards;
}
.delay-1 {
  animation-delay: .15s;
}
@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@media(max-width: 1400px) {
  .skins-toolbar {
    grid-template-columns: 1fr;
  }
  .toolbar-filters {
    flex-wrap: wrap;
  }
  .skins-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media(max-width: 1100px) {
  .footer-right {
    align-items: flex-start;
  }
  .footer-right p,
  .footer-right span {
    text-align: left;
  }
}
@media(max-width: 1000px) {
  .skins-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .footer-container {
    flex-wrap: wrap;
  }
}
@media(max-width: 768px) {
  .footer {
    padding: 40px 0;
  }
  .footer-container {
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
  .skins-grid {
    grid-template-columns: 1fr;
  }
  .skins-hero h1 {
    font-size: 42px;
  }
  .toolbar-filters {
    width: 100%;
    overflow-x: auto;
    padding-bottom: 10px;
  }
  .footer-container {
    flex-direction: column;
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