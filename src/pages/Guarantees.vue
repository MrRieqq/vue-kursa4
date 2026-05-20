<template>
  <div class="guarantee-page">
    <AppHeader />

    <main class="guarantee-container">
      <section class="hero fade-up">
        <span class="faq-badge">
            <img src="/shield.svg" alt="">
            ГАРАНТИИ / НАДЕЖНОСТЬ
        </span>
        <h1>
          Гарантии <span>SkinTick</span>
        </h1>

        <p>
          Мы гарантируем точность аналитики, стабильную работу платформы
          и прозрачность данных рынка CS2.
        </p>
      </section>

      <section class="guarantees-grid">
        <div class="guarantee-card fade-up delay-1">
          <div class="icon-box">
            <img src="/update.svg" alt="">
          </div>

          <h3>Обновление каждые 10 минут</h3>

          <p>
            Сервис автоматически обновляет стоимость скинов,
            чтобы вы видели актуальные рыночные цены.
          </p>
        </div>

        <div class="guarantee-card fade-up delay-2">
          <div class="icon-box">
            <img src="/server.svg" alt="">
          </div>

          <h3>100+ источников</h3>

          <p>
            Мы собираем данные с популярных маркетов,
            бирж и торговых площадок CS2.
          </p>
        </div>

        <div class="guarantee-card fade-up delay-3">
          <div class="icon-box">
            <img src="/fire.svg" alt="">
          </div>

          <h3>Точная аналитика</h3>

          <p>
            Алгоритмы SkinTick анализируют историю продаж,
            тренды и колебания рынка в реальном времени.
          </p>
        </div>

        <div class="guarantee-card fade-up delay-4">
          <div class="icon-box">
            <img src="/shield.svg" alt="">
          </div>

          <h3>Стабильная работа</h3>

          <p>
            Платформа работает круглосуточно,
            обеспечивая быстрый доступ к данным рынка.
          </p>
        </div>
      </section>

      <section class="info-section fade-up">
        <div class="info-card">
          <div class="info-left">
            <h2>
              Почему пользователи доверяют SkinTick?
            </h2>

            <p>
              Мы не продаем скины и не вмешиваемся
              в сделки пользователей.
              Наша задача — предоставлять максимально
              точную информацию о рынке CS2.
            </p>

            <div class="info-list">
              <div class="info-item">
                <img src="/check.svg" alt="">
                Прозрачная аналитика рынка
              </div>

              <div class="info-item">
                <img src="/check.svg" alt="">
                Автоматический сбор данных
              </div>

              <div class="info-item">
                <img src="/check.svg" alt="">
                Защищенное соединение
              </div>

              <div class="info-item">
                <img src="/check.svg" alt="">
                Стабильная инфраструктура
              </div>
            </div>
          </div>

          <div class="info-right">
            <div class="mini-stat">
              <span>Обновлений за сутки</span>
              <h3>8.6M+</h3>
            </div>

            <div class="mini-stat">
              <span>Источников данных</span>
              <h3>100+</h3>
            </div>

            <div class="mini-stat">
              <span>Отслеживаемых скинов</span>
              <h3>1.2M+</h3>
            </div>
          </div>
        </div>
      </section>

      <section class="support-section fade-up">
        <div class="support-card">
          <div>
            <h2>Нужна помощь?</h2>

            <p>
              Наша поддержка готова ответить
              на любые вопросы по работе платформы.
            </p>
          </div>

          <button
              class="support-btn"
              @click="showSupportModal = true"
          >
            Связаться с поддержкой
          </button>
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
            <button class="footer-select">
              <img src="/usd.svg" alt="usd">
              USD
            </button>

            <button class="footer-select">
              <img src="/ru.svg" alt="ru">
              RU
            </button>
          </div>

          <p>
            Веб-сайт SkinTick управляется компанией
            Ин-Гейм Солюшн ЛТД.
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
</script>

<style scoped>
.guarantee-page {
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

.guarantee-container {
  width: 100%;
  max-width: 1700px;
  margin: 0 auto;
  padding: 150px 40px 80px;
}

.hero {
  text-align: center;
  max-width: 850px;
  margin: 0 auto;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  border-radius: 999px;
  background: rgba(255,255,255,.05);
  border: 1px solid rgba(255,255,255,.08);
  backdrop-filter: blur(12px);
  color: rgba(255,255,255,.8);
  font-size: 14px;
}

.hero-badge img {
  width: 16px;
  height: 16px;
}

.hero h1 {
  margin-top: 28px;
  font-size: 62px;
  line-height: 1;

}

.hero h1 span {
  color: #ff4ecb;
}

.hero p {
  margin-top: 20px;
  font-size: 15px;
  line-height: 1.7;
  color: rgba(255,255,255,.55);
}

.guarantees-grid {
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.guarantee-card {
  position: relative;
  padding: 30px;
  border-radius: 28px;
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.06);
  backdrop-filter: blur(16px);
  transition:
      transform .3s ease,
      border-color .3s ease,
      box-shadow .3s ease;
  overflow: hidden;
}

.guarantee-card::before {
  content: "";
  position: absolute;
  top: -30%;
  right: -20%;
  width: 180px;
  height: 180px;
  background: radial-gradient(
      circle,
      rgba(255,78,203,.14),
      transparent 70%
  );
}

.guarantee-card:hover {
  transform: translateY(-6px);
  border-color: rgba(255,78,203,.5);
  box-shadow: 0 0 35px rgba(255,78,203,.14);
}

.icon-box {
  width: 62px;
  height: 62px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
      radial-gradient(
          circle,
          rgba(255,78,203,.2),
          rgba(255,78,203,.05)
      );
  border: 1px solid rgba(255,78,203,.45);
}

.icon-box img {
  width: 26px;
  height: 26px;
}

.guarantee-card h3 {
  margin-top: 24px;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.3;
}

.guarantee-card p {
  margin-top: 14px;
  color: rgba(255,255,255,.5);
  line-height: 1.7;
  font-size: 15px;
}

.info-section {
  margin-top: 50px;
}

.info-card {
  display: flex;
  justify-content: space-between;
  gap: 40px;
  padding: 40px;
  border-radius: 32px;
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.06);
  backdrop-filter: blur(18px);
}

.info-left {
  max-width: 700px;
}

.info-left h2 {
  font-size: 42px;
  line-height: 1.2;
}

.info-left p {
  margin-top: 20px;
  color: rgba(255,255,255,.55);
  line-height: 1.8;
  font-size: 16px;
}

.info-list {
  margin-top: 35px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
}

.info-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 18px;
  border-radius: 18px;
  background: rgba(255,255,255,.03);
  border: 1px solid rgba(255,255,255,.05);
  color: rgba(255,255,255,.85);
}

.info-item img {
  width: 18px;
  height: 18px;
}

.info-right {
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 260px;
}

.mini-stat {
  padding: 24px;
  border-radius: 22px;
  background: rgba(255,255,255,.03);
  border: 1px solid rgba(255,255,255,.06);
}

.mini-stat span {
  color: rgba(255,255,255,.45);
  font-size: 14px;
}

.mini-stat h3 {
  margin-top: 12px;
  font-size: 38px;
  color: #ff4ecb;
}

.support-section {
  margin-top: 50px;
}

.support-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  padding: 40px;
  border-radius: 30px;
  background:
      linear-gradient(
          135deg,
          rgba(255,78,203,.18),
          rgba(255,255,255,.03)
      );
  border: 1px solid rgba(255,255,255,.08);
}

.support-card h2 {
  font-size: 38px;
}

.support-card p {
  margin-top: 10px;
  color: rgba(255,255,255,.55);
  line-height: 1.7;
}

.support-btn {
  height: 56px;
  padding: 0 30px;
  border: none;
  border-radius: 18px;
  background: linear-gradient(90deg, #ff4ecb, #7b61ff);
  color: white;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition:
      transform .25s ease,
      box-shadow .25s ease;
}

.support-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 30px rgba(255,78,203,.35);
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
  gap: 10px;
  img {
    width: 18px;
    height: 18px;
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
@media(max-width: 1200px) {
  .guarantees-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .info-card {
    flex-direction: column;
  }

  .info-right {
    flex-direction: row;
  }
}

@media(max-width: 768px) {
  .guarantee-container {
    padding: 120px 20px 60px;
  }

  .hero h1 {
    font-size: 42px;
  }

  .hero p {
    font-size: 15px;
  }

  .guarantees-grid {
    grid-template-columns: 1fr;
  }

  .info-left h2 {
    font-size: 30px;
  }

  .info-list {
    grid-template-columns: 1fr;
  }

  .info-right {
    flex-direction: column;
  }

  .support-card {
    flex-direction: column;
    align-items: flex-start;
  }

  .support-card h2 {
    font-size: 30px;
  }

  .support-btn {
    width: 100%;
  }
}
</style>
