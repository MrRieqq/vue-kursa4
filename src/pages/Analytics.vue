<template>
  <div class="analytics-page">
    <AppHeader />
    <main class="analytics container">
      <section class="analytics-hero fade-up">
        <div class="hero-badge">
          LIVE MARKET ANALYTICS / ЖИВАЯ АНАЛИТИКА РЫНКА
        </div>
        <h1>Аналитика рынка CS2</h1>
        <p>
          Отслеживайте динамику цен,
          объёмы продаж и рыночные тренды
          в реальном времени.
        </p>
      </section>
      <section class="overview-grid fade-up delay-1">
        <div class="overview-card">
          <div class="overview-top">
            <img src="/graph.svg" alt=""><span>Объём рынка</span>
          </div>
          <h2>$2.8B</h2>
          <p>
            Общая капитализация
          </p>
        </div>
        <div class="overview-card">
          <div class="overview-top">
            <img src="/fire.svg" alt=""><span>Сделок за 24ч</span>
          </div>
          <h2>142K</h2>
          <p>
            Активные продажи
          </p>
        </div>
        <div class="overview-card">
          <div class="overview-top">
            <img src="/update.svg" alt=""><span>Средний рост</span>
          </div>
          <h2 class="green">+4.2%</h2>
          <p>
            За последние 7 дней
          </p>
        </div>
        <div class="overview-card">
          <div class="overview-top">
            <img src="/server.svg" alt=""><span>Волатильность</span>
          </div>
          <h2>ВЫСОКИЙ</h2>
          <p>
            Рынок очень активен
          </p>
        </div>
      </section>
      <section class="chart-section fade-up delay-2">
        <div class="chart-card">
          <div class="chart-header">
            <div>
              <span class="chart-label">Обзор рынка</span>
              <h3>Глобальная динамика рынка</h3>
            </div>
            <div class="chart-tabs">
              <button :class="{ active: period === '24H' }" @click="period = '24H'">24H</button>
              <button :class="{ active: period === '7D' }" @click="period = '7D'">7D</button>
              <button :class="{ active: period === '30D' }" @click="period = '30D'">30D</button>
            </div>
          </div>
          <div class="real-chart">
            <Line
                :data="chartData"
                :options="chartOptions"/>
          </div>
        </div>
      </section>
      <section class="market-grid fade-up delay-3">
        <div class="market-card">
          <div class="market-header">
            <h3><img src="/graph.svg"> Максимальный рост</h3>
            <span>
              Лучший рост
            </span>
          </div>
          <div class="market-item">
            <div>
              <strong>
                AWP | Dragon Lore
              </strong>
              <p>
                Прямо с завода
              </p>
            </div>
            <div class="positive">
              +24%
            </div>
          </div>
          <div class="market-item">
            <div>
              <strong>
                AK-47 | Vulcan
              </strong>
              <p>
                Немного поношенный
              </p>
            </div>
            <div class="positive">
              +18%
            </div>
          </div>
          <div class="market-item">
            <div>
              <strong>
                M4A4 | Howl
              </strong>
              <p>
               После полевых испытаний
              </p>
            </div>
            <div class="positive">
              +14%
            </div>
          </div>
        </div>
        <div class="market-card">
          <div class="market-header">
            <h3><img src="/drop_graph.svg"> Самое большое падение</h3>
            <span>
              Сильный упадок
            </span>
          </div>
          <div class="market-item">
            <div>
              <strong>
                Glock | Fade
              </strong>
              <p>
                Прямо с завода
              </p>
            </div>
            <div class="negative">
              -12%
            </div>
          </div>
          <div class="market-item">
            <div>
              <strong>
                USP-S | Kill Confirmed
              </strong>
              <p>
                Немного поношенный
              </p>
            </div>
            <div class="negative">
              -9%
            </div>
          </div>
          <div class="market-item">
            <div>
              <strong>
                Desert Eagle | Blaze
              </strong>
              <p>
                После полевых испытаний
              </p>
            </div>
            <div class="negative">
              -7%
            </div>
          </div>
        </div>
      </section>
      <section class="heatmap-section fade-up delay-4">
        <div class="section-title">
          <h2>Динамика категорий</h2>
          <p>
            Текущее состояние рынка
          </p>
        </div>
        <div class="heatmap-grid">
          <div class="heat-card green">
            <span>Винтовки</span>
            <strong>+12%</strong>
          </div>
          <div class="heat-card red">
            <span>Пистолеты</span>
            <strong>-4%</strong>
          </div>
          <div class="heat-card green">
            <span>Ножи</span>
            <strong>+21%</strong>
          </div>
          <div class="heat-card green">
            <span>Перчатки</span>
            <strong>+9%</strong>
          </div>
          <div class="heat-card red">
            <span>Дробовики и ПП</span>
            <strong>-2%</strong>
          </div>
          <div class="heat-card green">
            <span>Наклейки</span>
            <strong>+15%</strong>
          </div>
        </div>
      </section>
      <section class="ai-section fade-up delay-5">
        <div class="ai-card">
          <div class="ai-glow"></div>
          <span>ИИ Предсказание</span>
          <h2>Ожидается рост цен на ножи и AWP в течение 7 дней</h2>
          <p>
            Анализ основан на:
            Steam Market,
            Buff163 и объёмах продаж.
          </p>
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
            <button class="footer-select"><img src="/public/rub.svg" alt="rub">RUB</button>
            <button class="footer-select"><img src="/public/ru.svg" alt="ru">RU</button>
          </div>
          <p>
            Веб-сайт SkinTick управляется компанией
            Ин-Гейм Солюшн ЛТД.
          </p>
          <span>
            © 2017-2026 SkinTick,
            все права защищены<br>
            Powered by Steam.
            Not affiliated with Valve Corp.
          </span>
        </div>
      </div>
    </footer>
  </div>
</template>
<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'

import {
  Line
} from 'vue-chartjs'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
} from 'chart.js'

import {
  ref,
  onMounted,
  computed
} from 'vue'
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler
)
const skins = ref([])
const chartData = computed(() => {
  if (!skins.value.length) {
    return {
      labels: [],
      datasets: []
    }
  }
  let points = 7
  if (period.value === '24H') {
    points = 4
  }
  if (period.value === '7D') {
    points = 7
  }
  if (period.value === '30D') {
    points = 12
  }
  const avgGraph =
      Array(points).fill(0)
  skins.value.forEach(item => {
    const base =
        Number(item.median_price)
    const generatedGraph =
        Array.from(
            { length: points },
            (_, i) => {
              const volatility =
                  Math.sin(i * .8) * 0.04
              const random =
                  (Math.random() - .5)
                  * 0.03
              return Number(
                  (
                      base *
                      (
                          1 +
                          volatility +
                          random
                      )
                  ).toFixed(2)
              )
            }
        )
    generatedGraph.forEach(
        (value, index) => {
          avgGraph[index] += value
        }
    )
  })
  const finalGraph =
      avgGraph.map(
          value =>
              (
                  value /
                  skins.value.length
              ).toFixed(2)
      )
  return {
    labels:
        Array.from(
            { length: points },
            (_, i) => i + 1
        ),
    datasets: [
      {
        data: finalGraph,
        borderColor: '#ff4ecb',
        backgroundColor:
            'rgba(255,78,203,.15)',
        fill: true,
        tension: .45,
        borderWidth: 4,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: '#ff4ecb',
        pointHoverBorderWidth: 0
      }
    ]
  }
})
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    intersect: false,
    mode: 'index'
  },
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      enabled: true,
      backgroundColor: '#140012',
      borderColor: '#ff4ecb',
      borderWidth: 1,
      padding: 12,
      displayColors: false,
      titleColor: '#ffffff',
      bodyColor: '#ffffff',
      callbacks: {
        label(context) {
          return `$${context.parsed.y}`
        }
      }
    }
  },
  scales: {
    x: {
      grid: {
        display: false
      },
      ticks: {
        color: 'rgba(255,255,255,.4)'
      }
    },
    y: {
      min: 0.03,
      grid: {
        color: 'rgba(255,255,255,.05)'
      },
      ticks: {
        color: 'rgba(255,255,255,.45)',
        callback(value) {
          return `$${value}`
        }
      }
    }
  }
}
onMounted(async () => {
  try {
    const response =
        await fetch(
            'http://localhost:3001/api/skins'
        )
    skins.value =
        await response.json()
  } catch(error) {
    console.log(error)
  }
})
const period = ref('30D')
</script>
<style scoped>
.analytics-page {
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
.container {
  width: 100%;
  max-width: 1700px;
  margin: 0 auto;
  padding: 0 40px;
}
.analytics {
  padding-top: 150px;
  padding-bottom: 100px;
}
.analytics-hero {
  text-align: center;
  max-width: 850px;
  margin: 0 auto;
}
.hero-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  padding: 0 18px;
  border-radius: 999px;
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,78,203,.3);
  color: #ff4ecb;
  font-size: 13px;
}
.analytics-hero h1 {
  margin-top: 35px;
  font-size: 68px;
  line-height: 1.1;
}
.analytics-hero p {
  margin-top: 20px;
  color: rgba(255,255,255,.6);
  line-height: 1.7;
  font-size: 17px;
}
.overview-grid {
  margin-top: 70px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.overview-card {
  padding: 28px;
  border-radius: 28px;
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.08);
  backdrop-filter: blur(14px);
  transition: .35s ease;
}
.overview-card:hover {
  transform: translateY(-5px);
  border-color: rgba(255,78,203,.4);
  box-shadow: 0 0 30px rgba(255,78,203,.18);
}
.overview-top {
  display: flex;
  align-items: center;
  gap: 10px;
}
.overview-top img {
  width: 18px;
}
.overview-top span {
  color: rgba(255,255,255,.65);
}
.overview-card h2 {
  margin-top: 24px;
  font-size: 52px;
}
.overview-card p {
  margin-top: 8px;
  color: rgba(255,255,255,.45);
}
.green {
  color: #36ffb2;
}
.chart-section {
  margin-top: 50px;
}
.chart-card {
  padding: 34px;
  border-radius: 32px;
  background: rgba(255,255,255,.03);
  border: 1px solid rgba(255,255,255,.08);
}
.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.chart-label {
  color: #ff4ecb;
  font-size: 13px;
}
.chart-header h3 {
  margin-top: 10px;
  font-size: 32px;
}
.chart-tabs {
  display: flex;
  gap: 12px;
}
.chart-tabs button {
  height: 44px;
  padding: 0 18px;
  border-radius: 14px;
  border: 1px solid rgba(255,255,255,.08);
  background: rgba(255,255,255,.03);
  color: rgba(255,255,255,.7);
  cursor: pointer;
  transition: .25s ease;
}
.chart-tabs button.active,
.chart-tabs button:hover {
  background: rgba(255,78,203,.14);
  border-color: rgba(255,78,203,.4);
  color: white;
}
.real-chart {
  margin-top: 40px;
  height: 340px;
  border-radius: 24px;
  overflow: hidden;
  padding: 20px;
  background:
      linear-gradient(
          180deg,
          rgba(255,78,203,.12),
          rgba(255,78,203,0)
      );
}
.market-grid {
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}
.market-card {
  padding: 30px;
  border-radius: 28px;
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.08);
}
.market-header {
  margin-bottom: 30px;
}
.market-header span {
  color: rgba(255,255,255,.45);
  font-size: 14px;
}
.market-header h3 img {
  width: 18px;
  height: 18px;
  vertical-align: middle;
  margin-right: 8px;
  position: relative;
  top: -2px;
}
.market-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 0;
  border-bottom: 1px solid rgba(255,255,255,.06);
}
.market-item p {
  color: rgba(255,255,255,.45);
  font-size: 13px;
  margin-top: 4px;
}
.positive {
  color: #36ffb2;
  font-weight: 700;
}
.negative {
  color: #ff7a7a;
  font-weight: 700;
}
.heatmap-section {
  margin-top: 60px;
}
.section-title h2 {
  font-size: 42px;
}
.section-title p {
  margin-top: 10px;
  color: rgba(255,255,255,.5);
}
.heatmap-grid {
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}
.heat-card {
  padding: 30px;
  border-radius: 24px;
  border: 1px solid rgba(255,255,255,.08);
}
.heat-card.green {
  background: rgba(0,255,140,.08);
}
.heat-card.red {
  background: rgba(255,90,90,.08);
}
.heat-card span {
  color: rgba(255,255,255,.6);
}
.heat-card strong {
  display: block;
  margin-top: 16px;
  font-size: 38px;
}
.ai-section {
  margin-top: 60px;
}
.ai-card {
  position: relative;
  overflow: hidden;
  padding: 50px;
  border-radius: 32px;
  background:
      linear-gradient(
          135deg,
          rgba(255,78,203,.16),
          rgba(123,97,255,.12)
      );
  border: 1px solid rgba(255,255,255,.08);
}
.ai-glow {
  position: absolute;
  top: -100px;
  right: -100px;
  width: 300px;
  height: 300px;
  background:
      radial-gradient(
          circle,
          rgba(255,78,203,.35),
          transparent 70%
      );
}
.ai-card span {
  color: #ff4ecb;
  font-size: 14px;
}
.ai-card h2 {
  position: relative;
  margin-top: 20px;
  font-size: 48px;
  max-width: 900px;
  line-height: 1.2;
}
.ai-card p {
  position: relative;
  margin-top: 20px;
  color: rgba(255,255,255,.65);
  max-width: 700px;
  line-height: 1.7;
}
.fade-up {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeUp .8s ease forwards;
}
.delay-1 {
  animation-delay: .1s;
}
.delay-2 {
  animation-delay: .2s;
}
.delay-3 {
  animation-delay: .3s;
}
.delay-4 {
  animation-delay: .4s;
}
.delay-5 {
  animation-delay: .5s;
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
@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@media(max-width: 1200px) {
  .overview-grid,
  .market-grid,
  .heatmap-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media(max-width: 768px) {
  .container {
    padding: 0 20px;
  }
  .analytics-hero h1 {
    font-size: 42px;
  }
  .overview-grid,
  .market-grid,
  .heatmap-grid {
    grid-template-columns: 1fr;
  }
  .chart-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
  .ai-card {
    padding: 30px;
  }
  .ai-card h2 {
    font-size: 32px;
  }
  .overview-card h2 {
    font-size: 38px;
  }
  .section-title h2 {
    font-size: 32px;
  }
}
</style>