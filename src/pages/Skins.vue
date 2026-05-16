<template>
  <div class="skins-page">

    <AppHeader />

    <main class="skins container">

      <section class="skins-hero fade-up">

        <div class="hero-badge">
          SKINTICK MARKET
        </div>

        <h1>
          Каталог скинов CS2
        </h1>

        <p>
          Отслеживайте актуальные цены, тренды,
          объёмы продаж и динамику рынка в реальном времени.
        </p>

      </section>

      <!-- TOOLBAR -->

      <section class="skins-toolbar fade-up delay-1">

        <!-- SEARCH -->

        <div class="toolbar-search">

          <div class="search-box">

            <img
                src="/poisk.png"
                alt="search"
            >

            <input
                v-model="search"
                type="text"
                placeholder="Поиск скина..."
            >

          </div>

        </div>

        <!-- FILTERS -->

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
            {{ category }}
          </button>

        </div>

        <!-- SORT -->

        <div class="toolbar-sort">

          <select v-model="selectedSort">

            <option value="popular">
              По популярности
            </option>

            <option value="price-high">
              Цена: дорогие
            </option>

            <option value="price-low">
              Цена: дешёвые
            </option>

            <option value="change">
              По росту цены
            </option>

          </select>

        </div>

      </section>

      <!-- GRID -->

      <section class="skins-grid">

        <article
            v-for="(skin, index) in filteredSkins"
            :key="skin.id"
            class="skin-card fade-up"
            :style="{
            animationDelay: `${index * 0.05}s`
          }"
        >

          <div class="skin-card-bg"></div>

          <div class="skin-top">

            <div class="skin-info">

              <h2>
                {{ skin.name }}
              </h2>

              <p class="skin-name">
                {{ skin.skin }}
              </p>

            </div>

            <div class="quality-badge">
              {{ skin.quality }}
            </div>

          </div>

          <div class="skin-image">

            <img
                :src="skin.image"
                :alt="skin.name"
            >

          </div>

          <div class="skin-bottom">

            <div class="price-block">

              <strong>
                $ {{ skin.price }}
              </strong>

              <div
                  class="price-change"
                  :class="skin.trend"
              >
                {{ skin.change > 0 ? '+' : '' }}{{ skin.change }}%
              </div>

            </div>

            <a
                :href="skin.inspect"
                target="_blank"
                class="buy-btn"
            >
              Перейти к покупке
            </a>

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

          <p>
            Актуальные цены, графики
            и аналитика рынка CS2
            в реальном времени
          </p>

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

          <h4>МАРКЕТ</h4>

          <a href="https://lis-skins.com/ru/cs2/">
            Продать скины CS2
          </a>

          <a href="https://lis-skins.com/ru/market/cs2/">
            Купить скины CS2
          </a>

          <a href="https://cs.money/ru/csgo/trade/">
            Обменять скины CS2
          </a>

        </div>

        <div class="footer-column">

          <h4>ПОМОЩЬ</h4>

          <router-link
              to="/faq"
              class="nav-link"
              active-class="active-link"
          >
            FAQ
          </router-link>

          <a href="#">
            Как продать все скины CS2 в стиме сразу
          </a>

          <a href="#">
            Как это работает
          </a>

          <a href="#">
            Гарантии
          </a>

          <a href="#">
            Контакты
          </a>

        </div>

        <div class="footer-column">

          <h4>ПОЛЕЗНОЕ</h4>

          <a href="#">Блог</a>

          <a href="#">
            Отзывы о нас
          </a>

          <a href="#">
            Пользовательское соглашение
          </a>

          <a href="#">
            Политика конфиденциальности
          </a>

          <a href="#">
            API
          </a>

        </div>

        <div class="footer-right">

          <div class="footer-selects">

            <button class="footer-select">
              <img src="/rub.svg" alt="rub">
              RUB
            </button>

            <button class="footer-select">
              <img src="/ru.svg" alt="ru">
              RU
            </button>

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

const search = ref('')

const selectedCategory = ref('Все')

const selectedSort = ref('popular')

const skins = ref([])

const categories = [
  'Все',
  'Винтовки',
  'Пистолеты',
  'Снайперские',
  'Дробовики и ПП'
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

  if (selectedCategory.value !== 'Все') {

    result = result.filter(
        skin =>
            skin.category ===
            selectedCategory.value
    )
  }

  if (search.value) {

    result = result.filter(skin => {

      const fullName =
          `${skin.name} ${skin.skin}`

      return fullName
          .toLowerCase()
          .includes(
              search.value.toLowerCase()
          )
    })
  }

  switch(selectedSort.value) {

    case 'price-high':

      result.sort(
          (a, b) =>
              Number(b.price) -
              Number(a.price)
      )

      break

    case 'price-low':

      result.sort(
          (a, b) =>
              Number(a.price) -
              Number(b.price)
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
              (b.volume || 0) -
              (a.volume || 0)
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
    return 'Винтовки'
  }

  if (
      pistols.some(weapon =>
          name.includes(weapon)
      )
  ) {
    return 'Пистолеты'
  }

  if (
      snipers.some(weapon =>
          name.includes(weapon)
      )
  ) {
    return 'Снайперские'
  }

  if (
      smgAndShotguns.some(weapon =>
          name.includes(weapon)
      )
  ) {
    return 'Дробовики и ПП'
  }

  return 'Винтовки'
}
</script>

<style scoped>
.skins-page {
  min-height: 100vh;
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
  padding-top: 140px;
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

.hero-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  padding: 0 18px;
  border-radius: 999px;
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,78,203,.3);
  color: #ff4ecb;
  font-size: 13px;
}

.skins-hero h1 {
  margin-top: 90px;
  font-size: 64px;
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
}

.search-box input {
  width: 100%;
  height: 62px;
  border-radius: 18px;
  border: 1px solid rgba(255,255,255,.08);
  background: rgba(255,255,255,.04);
  color: white;
  padding: 0 22px 0 58px;
  outline: none;
  font-size: 15px;
  backdrop-filter: blur(12px);
}

.search-box input::placeholder {
  color: rgba(255,255,255,.45);
}

.toolbar-filters {
  display: flex;
  align-items: center;
  gap: 14px;
}

.category-btn {
  height: 46px;
  padding: 0 22px;
  border-radius: 16px;
  border: 1px solid rgba(255,255,255,.08);
  background: rgba(255,255,255,.03);
  color: rgba(255,255,255,.7);
  cursor: pointer;
  transition: .25s ease;
  white-space: nowrap;
}

.category-btn:hover,
.category-btn.active {
  border-color: rgba(255,78,203,.4);
  background: rgba(255,78,203,.12);
  color: white;
}

.toolbar-sort {
  min-width: 260px;
}

.toolbar-sort select {
  width: 100%;
  height: 62px;
  border-radius: 18px;
  border: 1px solid rgba(255,255,255,.08);
  background: rgba(255,255,255,.04);
  color: white;
  padding: 0 18px;
  outline: none;
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
  border-radius: 28px;
  border: 1px solid rgba(255,255,255,.08);
  background: #120015;
  padding: 24px;
  transition: .35s ease;
}

.skin-card:hover {
  transform: translateY(-6px);
  border-color: rgba(255,78,203,.35);
  box-shadow: 0 0 30px rgba(255,78,203,.18);
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

.skin-top {
  position: relative;
  z-index: 2;

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
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,.05);
  border: 1px solid rgba(255,255,255,.12);
  color: #ff4ecb;
  font-size: 13px;
  font-weight: 700;
}

.skin-image {
  position: relative;
  z-index: 2;
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

.skin-bottom {
  position: relative;
  z-index: 2;
}

.price-block {
  display: flex;
  align-items: center;
  gap: 14px;
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

  display: flex;
  align-items: center;
  justify-content: center;

  transition: .3s ease;
}

.buy-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 25px rgba(255,78,203,.35);
}

.line {
  width: 100%;
  border: 1px solid rgba(255,255,255,.06);
  margin-top: 20px;
}

/* FOOTER */
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

.line {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  border: 1px solid rgba(255, 255, 255, .06);
  border-radius: 32px;
}

/* FOOTER */

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
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 70px;
  width: 100%;
  max-width: 1920px;
  padding: 0 40px;
}

.footer-brand img {
  display: block;
  width: 140px;
  object-fit: contain;
}

#app > footer > div > div.footer-brand > img {
  position: relative;
  bottom: 50px;
}

.footer-brand p {
  position: relative;
  bottom: 100px;
  max-width: 170px;
  margin-top: 14px;
  color: rgba(255,255,255,.42);
  font-size: 11px;
  line-height: 1.5;
}

.footer-socials {
  display: flex;
  gap: 10px;
  margin-top: 24px;
}

.footer-socials a {
  position: relative;
  bottom: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border: 1px solid rgba(255,255,255,.08);
  border-radius: 12px;
  background: rgba(255,255,255,.03);
  transition: .25s ease;
}

.footer-socials a:hover {
  transform: translateY(-2px);
  border-color: #ff4ecb;
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
  display: flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 0 16px;
  border: 1px solid rgba(255,78,203,.45);
  border-radius: 12px;
  background: rgba(255,255,255,.02);
  color: white;
  font-size: 13px;
  cursor: pointer;
  transition: .25s ease;
}

.footer-select:hover {
  border-color: #ff4ecb;
}

.footer-right p,
.footer-right span {
  color: rgba(255,255,255,.45);
  line-height: 1.6;
  max-width: 260px;
}

.footer-right p {
  font-size: 10px;
}

.footer-right span {
  width: 260px;
  margin-top: 3px;
  font-size: 11px;
}

@media (max-width: 1100px) {

  .footer-right {
    align-items: flex-start;
  }

  .footer-right p,
  .footer-right span {
    text-align: left;
  }
}

@media (max-width: 768px) {

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

@media(max-width: 1000px) {

  .skins-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-container {
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
    overflow-x: auto;
    width: 100%;
    padding-bottom: 10px;
  }

  .footer-container {
    flex-direction: column;
  }
}
</style>