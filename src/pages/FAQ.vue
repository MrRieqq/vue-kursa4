<script setup>
import { ref } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import SupportModal from '@/components/ui/SupportModal.vue'
const faqItems = ref([
  {
    question: 'Как часто обновляются цены?',
    answer: 'SkinTick обновляет рыночные данные каждые 10 минут с более чем 100 площадок.',
    open: true
  },
  {
    question: 'Откуда берутся данные?',
    answer: 'Мы агрегируем цены из Steam Market, Buff, CSFloat и других популярных маркетплейсов.',
    open: false
  },
  {
    question: 'Можно ли настроить уведомления?',
    answer: 'Да, вы можете установить уведомления о росте или падении цены определённого скина.',
    open: false
  },
  {
    question: 'Есть ли API?',
    answer: 'Да, SkinTick предоставляет API для получения цен, графиков и аналитики.',
    open: false
  },
  {
    question: 'Как работает авторизация через Steam?',
    answer: 'Авторизация происходит через официальный Steam OpenID без передачи пароля вашему сайту.',
    open: false
  },
  {
    question: 'Можно ли отслеживать редкие предметы?',
    answer: 'Да, вы можете добавить любой скин в избранное и следить за его динамикой.',
    open: false
  }
])
const showSupportModal = ref(false)
const toggle = (index) => {
  faqItems.value[index].open = !faqItems.value[index].open
}
</script>
<template>
    <AppHeader />
    <main class="faq container">
      <section class="faq-hero">
        <span class="faq-badge">
          FAQ / ПОМОЩЬ
        </span>
        <h1>
          Часто задаваемые вопросы
        </h1>
        <p>
          Всё что нужно знать о работе SkinTick,
          покупке, продаже и аналитике скинов CS2.
        </p>
      </section>
      <section class="faq-search">
        <input
            type="text"
            placeholder="Поиск вопроса..."
        >
      </section>
      <section class="faq-grid">
        <div class="faq-card" v-for="(item, index) in faqItems" :key="index">
          <button
              class="faq-question"
              @click="toggle(index)"
          >
            <span>{{ item.question }}</span>
            <div
                class="faq-icon"
                :class="{ active: item.open }"
            >
              +
            </div>
          </button>
          <transition name="faq">
            <div
                v-if="item.open"
                class="faq-answer"
            >
              {{ item.answer }}
            </div>
          </transition>
        </div>
      </section>
      <section class="faq-bottom">
        <div class="support-box">
          <div>
            <h2>
              Не нашли ответ?
            </h2>
            <p>
              Наша поддержка поможет решить любой вопрос.
            </p>
          </div>
          <button @click="showSupportModal = true">
            Написать в поддержку
          </button>
        </div>
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
        <a href="https://lis-skins.com/ru/cs2/">Продать скины CS2</a>
        <a href="https://lis-skins.com/ru/market/cs2/">Купить скины CS2</a>
        <a href="https://cs.money/ru/csgo/trade/">Обменять скины CS2</a>
      </div>
      <div class="footer-column">
        <h4>ПОМОЩЬ</h4>
        <router-link to="/faq" class="nav-link" active-class="active-link">FAQ</router-link>
        <a href="#">Как продать все скины CS2 в стиме сразу</a>
        <a href="#">Как это работает</a>
        <a href="#">Гарантии</a>
        <a href="#">Контакты</a>
      </div>
      <div class="footer-column">
        <h4>ПОЛЕЗНОЕ</h4>
        <a href="#">Блог</a>
        <a href="#">Отзывы о нас</a>
        <a href="#">Пользовательское соглашение</a>
        <a href="#">Политика конфиденциальности</a>
        <a href="#">API</a>
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
  <SupportModal v-model="showSupportModal" />
</template>
<style scoped>
.nav-links a:hover {
  color: #ff4ecb;
  transform: translateY(-1px);
}
.active-link {
  color: #ff4ecb !important;
}
.faq-page {
  min-height: 100vh;
  background: radial-gradient(circle at center, #5f1b56 0%, #140012 65%);
  color: white;
}
.line {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  border: 1px solid rgba(255, 255, 255, .06);
  border-radius: 32px;
}
.faq {
  padding: 150px 0 80px;
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
  letter-spacing: .08em;
}
.faq-hero h1 {
  margin-top: 24px;
  font-size: 58px;
  line-height: 1.1;
  font-weight: 700;
}
.faq-hero p {
  margin-top: 18px;
  color: rgba(255,255,255,.55);
  font-size: 17px;
  line-height: 1.6;
}
.faq-search {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}
.faq-search {
  display: flex;
  justify-content: center;
  margin-top: 50px;
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
  border: 1px solid rgba(255,255,255,.06);
  border-radius: 28px;
  background: linear-gradient(
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
  transform: translateY(-2px);
  border-color: rgba(255,78,203,.35);
  box-shadow: 0 0 25px rgba(255,78,203,.12);
}
.faq-question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 28px 30px;
  border: none;
  background: transparent;
  color: white;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
}
.faq-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  min-width: 34px;
  border: 1px solid rgba(255,78,203,.3);
  border-radius: 50%;
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
  border: 1px solid rgba(255,78,203,.18);
  border-radius: 32px;
  background: linear-gradient(
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
  border: 1px solid rgba(255,78,203,.45);
  border-radius: 18px;
  background: linear-gradient(
      180deg,
      rgba(255,78,203,.18),
      rgba(255,78,203,.08)
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
  box-shadow: 0 0 25px rgba(255,78,203,.22);
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
  .faq {
    padding-top: 120px;
  }
  .faq-hero h1 {
    font-size: 40px;
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
</style>