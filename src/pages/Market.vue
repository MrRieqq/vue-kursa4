<template>
  <div class="market-page">

    <AppHeader />

    <main class="market container">

      <!-- HERO -->

      <section class="market-hero fade-up">

        <div class="hero-badge">
          SKINTICK MARKET
        </div>

        <h1>
          Рынок CS2
        </h1>

        <p>
          Следите за движением цен, объёмами продаж,
          топовыми предметами и рыночной активностью.
        </p>

        <!-- STATS -->

        <div class="market-stats">

          <div class="stat-card">
            <span>Оборот за 24ч</span>
            <strong>$ 1.28M</strong>
          </div>

          <div class="stat-card">
            <span>Продано предметов</span>
            <strong>84 231</strong>
          </div>

          <div class="stat-card">
            <span>Рост рынка</span>
            <strong class="green">+12.8%</strong>
          </div>

        </div>

      </section>

      <!-- TOOLBAR -->

      <section class="market-toolbar fade-up delay-1">

        <div class="toolbar-search">

          <div class="search-box">

            <img
                src="/poisk.png"
                alt="search"
            >

            <input
                v-model="search"
                type="text"
                placeholder="Поиск предмета..."
            >

          </div>

        </div>

        <!-- FILTERS -->

        <div class="toolbar-filters">

          <button
              v-for="category in categories"
              :key="category"
              class="category-btn"
              :class="{ active: selectedCategory === category }"
              @click="selectedCategory = category"
          >
            {{ category }}
          </button>

        </div>

        <!-- SORT -->

        <div class="toolbar-sort">

          <select v-model="selectedSort">

            <option value="volume">
              По объёму
            </option>

            <option value="price-high">
              Цена: дорогие
            </option>

            <option value="price-low">
              Цена: дешёвые
            </option>

            <option value="growth">
              Лидеры роста
            </option>

          </select>

        </div>

      </section>

      <!-- MARKET GRID -->

      <section class="market-grid">

        <article
            v-for="(item, index) in filteredItems"
            :key="item.id"
            class="market-card fade-up"
            :style="{
            animationDelay: `${index * .05}s`
          }"
        >

          <div class="market-card-bg"></div>

          <!-- TOP -->

          <div class="market-top">

            <div class="item-info">

              <h2>
                {{ item.name }}
              </h2>

              <p>
                {{ item.skin }}
              </p>

            </div>

            <div
                class="trend-badge"
                :class="item.trend"
            >
              {{ item.change > 0 ? '+' : '' }}{{ item.change }}%
            </div>

          </div>

          <!-- IMAGE -->

          <div class="market-image">

            <img
                :src="item.image"
                :alt="item.name"
            >

          </div>

          <!-- MARKET DATA -->

          <div class="market-data">

            <div class="data-row">

              <span>Текущая цена</span>

              <strong>
                $ {{ item.price }}
              </strong>

            </div>

            <div class="data-row">

              <span>Объём продаж</span>

              <strong>
                {{ item.volume }}
              </strong>

            </div>

            <div class="data-row">

              <span>Редкость</span>

              <strong class="rarity">
                {{ item.rarity }}
              </strong>

            </div>
            <div class="data-row">

              <span>Качество</span>

              <strong class="quality">
                {{ item.quality }}
              </strong>

            </div>
          </div>

          <!-- BUTTON -->

          <a
              :href="item.inspect"
              target="_blank"
              class="details-btn"
          >
            Смотреть на рынке
          </a>

        </article>

      </section>

    </main>

  </div>
</template>

<script setup>
import {
  computed,
  ref,
  onMounted
} from 'vue'

import { getMarketItems } from '@/api/market'

import AppHeader from '@/components/layout/AppHeader.vue'

const search = ref('')

const selectedCategory = ref('Все')

const selectedSort = ref('volume')

const marketItems = ref([])

const categories = [
  'Все',
  'Ножи',
  'Винтовки',
  'Пистолеты',
  'Перчатки'
]

onMounted(async () => {

  try {

    marketItems.value =
        await getMarketItems()

  } catch(error) {

    console.log(error)
  }
})

const filteredItems = computed(() => {

  let result = [...marketItems.value]

  if (
      selectedCategory.value !== 'Все'
  ) {

    result = result.filter(
        item =>
            item.category ===
            selectedCategory.value
    )
  }

  if (search.value) {

    result = result.filter(item => {

      const fullName =
          `${item.name} ${item.skin}`

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

    case 'growth':

      result.sort(
          (a, b) =>
              b.change - a.change
      )

      break

    default:

      result.sort(
          (a, b) =>
              b.volume - a.volume
      )
  }

  return result
})

function getCategory(name) {

  if (
      name.includes('Karambit') ||
      name.includes('Butterfly') ||
      name.includes('Bayonet')
  ) {
    return 'Ножи'
  }

  if (
      name.includes('Sport Gloves') ||
      name.includes('Driver Gloves')
  ) {
    return 'Перчатки'
  }

  if (
      name.includes('USP-S') ||
      name.includes('Glock') ||
      name.includes('Deagle')
  ) {
    return 'Пистолеты'
  }

  return 'Винтовки'
}
</script>

<style scoped>
.market-page {
  min-height: 100vh;
  background:
      radial-gradient(
          circle at top,
          #3f0b38 0%,
          #120011 65%
      );
  color: white;
  overflow-x: hidden;
}

.market {
  padding-top: 140px;
  padding-bottom: 80px;
}

.container {
  width: 100%;
  max-width: 1700px;
  margin: 0 auto;
  padding: 0 40px;
}

/* HERO */

.market-hero {
  text-align: center;
  max-width: 950px;
  margin: 0 auto;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  padding: 0 18px;
  border-radius: 999px;
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,78,203,.25);
  color: #ff4ecb;
  font-size: 13px;
}

.market-hero h1 {
  margin-top: 90px;
  font-size: 68px;
}

.market-hero p {
  margin-top: 20px;
  color: rgba(255,255,255,.6);
  line-height: 1.7;
}

.market-stats {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 22px;
  margin-top: 60px;
}

.stat-card {
  padding: 28px;
  border-radius: 26px;
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.08);
  backdrop-filter: blur(12px);
}

.stat-card span {
  display: block;
  color: rgba(255,255,255,.5);
  font-size: 14px;
}

.stat-card strong {
  display: block;
  margin-top: 12px;
  font-size: 36px;
}

.green {
  color: #36ffb2;
}

/* TOOLBAR */

.market-toolbar {
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: 40px;
  margin-top: 60px;
}

.search-box {
  position: relative;
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
  backdrop-filter: blur(12px);
}

.toolbar-filters {
  display: flex;
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
}

.category-btn:hover,
.category-btn.active {
  border-color: rgba(255,78,203,.4);
  background: rgba(255,78,203,.12);
  color: white;
}

.toolbar-sort {
  min-width: 250px;
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
}

/* GRID */

.market-grid {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 24px;
  margin-top: 55px;
}

.market-card {
  position: relative;
  overflow: hidden;
  border-radius: 30px;
  border: 1px solid rgba(255,255,255,.08);
  background: #140014;
  padding: 26px;
  transition: .35s ease;
}

.market-card:hover {
  transform: translateY(-6px);
  border-color: rgba(255,78,203,.35);
  box-shadow: 0 0 30px rgba(255,78,203,.18);
}

.market-card-bg {
  position: absolute;
  inset: 0;
  background:
      radial-gradient(
          circle at center,
          rgba(255,0,153,.16),
          transparent 65%
      );
}

.market-top {
  position: relative;
  z-index: 2;

  display: flex;
  justify-content: space-between;
  gap: 14px;
}

.item-info h2 {
  font-size: 24px;
}

.item-info p {
  color: rgba(255,255,255,.5);
}

.trend-badge {
  min-width: 70px;
  height: 42px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
}

.trend-badge.up {
  background: rgba(0,255,140,.12);
  color: #36ffb2;
}

.trend-badge.down {
  background: rgba(255,90,90,.12);
  color: #ff7a7a;
}

.market-image {
  position: relative;
  z-index: 2;
  height: 200px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.market-image img {
  width: 70%;
  object-fit: contain;
  transition: .35s ease;
}

.market-card:hover img {
  transform: scale(1.08);
}

.market-data {
  position: relative;
  z-index: 2;

  display: flex;
  flex-direction: column;
  gap: 16px;
}

.data-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.data-row span {
  color: rgba(255,255,255,.5);
}

.data-row strong {
  font-size: 18px;
}

.quality {
  color: #ff4ecb;
}

.details-btn {
  position: relative;
  z-index: 2;

  width: 100%;
  height: 56px;
  margin-top: 24px;
  border-radius: 18px;

  display: flex;
  align-items: center;
  justify-content: center;

  background:
      linear-gradient(
          90deg,
          #ff4ecb,
          #7b61ff
      );

  color: white;
  font-weight: 700;
  text-decoration: none;

  transition: .3s ease;
}

.details-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 24px rgba(255,78,203,.35);
}

/* ANIMATIONS */

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

/* RESPONSIVE */

@media(max-width: 1400px) {

  .market-grid {
    grid-template-columns: repeat(3,1fr);
  }

  .market-toolbar {
    grid-template-columns: 1fr;
  }
}

@media(max-width: 1000px) {

  .market-grid {
    grid-template-columns: repeat(2,1fr);
  }

  .market-stats {
    grid-template-columns: 1fr;
  }
}

@media(max-width: 700px) {

  .container {
    padding: 0 20px;
  }

  .market-grid {
    grid-template-columns: 1fr;
  }

  .market-hero h1 {
    font-size: 42px;
  }

  .toolbar-filters {
    overflow-x: auto;
    padding-bottom: 10px;
  }
}
</style>