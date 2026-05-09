<template>
  <div class="app">

    <AppHeader />

    <main class="hero">

      <section class="hero-content">

        <h1>
          Не знаешь реальную цену скина?<br>
          <span>SkinTick</span>
          обновляет рынок каждые 10 минут.
        </h1>

        <p>
          Актуальные цены, графики и аналитика рынка CS2 в реальном времени
        </p>

      </section>

      <section class="features">

        <div class="feature-card">
          ⏱ Обновление цен каждые 10 минут
        </div>

        <div class="feature-card">
          📊 100+ источников
        </div>

        <div class="feature-card">
          📈 Реальные графики
        </div>

        <div class="feature-card">
          🎯 Актуальные float и цены
        </div>

      </section>

      <section class="skins-section">

        <div v-if="loading" class="loading">

          Загрузка скинов...

        </div>

        <SkinSlider
            v-else
            :skins="skins"
        />

      </section>

    </main>

  </div>
</template>

<script setup>

import { onMounted } from 'vue'

import { storeToRefs } from 'pinia'

import { useSkinStore }
  from '@/stores/skinStore'

import AppHeader
  from '@/components/layout/AppHeader.vue'

import SkinSlider
  from '@/components/skins/SkinSlider.vue'

const skinStore = useSkinStore()

const { skins, loading } =
    storeToRefs(skinStore)

onMounted(() => {

  skinStore.startAutoUpdate()

})

</script>

<style scoped>

.app {
  min-height: 100vh;

  background:
      radial-gradient(circle at top, #501144 0%, #140012 60%);

  color: white;

  overflow-x: hidden;
}

.hero {
  padding-top: 140px;
}

.hero-content {
  text-align: center;
}

.hero-content h1 {
  font-size: 54px;
  line-height: 1.2;
  font-weight: 700;
}

.hero-content span {
  color: #ff4ecb;
}

.hero-content p {
  margin-top: 15px;

  color: rgba(255,255,255,0.7);

  font-size: 18px;
}

.features {
  margin-top: 50px;

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

  backdrop-filter: blur(10px);
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
@media(max-width: 768px) {

  .hero-content h1 {
    font-size: 34px;
  }

  .skins-section {
    padding-left: 20px;
  }

}

</style>