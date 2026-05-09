<template>

  <header class="navbar">

    <div class="logo">

      <img src="/logo.png" alt="logo">

    </div>

    <nav class="nav-links">

      <a href="#">Рынок</a>
      <a href="#">Скины</a>
      <a href="#">Аналитика</a>
      <a href="#">Графики</a>
      <a href="#">FAQ</a>

    </nav>

    <div class="nav-right">

      <input
          type="text"
          placeholder="Поиск скина..."
      >
      <button>Войти</button>
      <button class="gradient">Регистрация</button>
    </div>

  </header>

</template>

<style scoped>

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;


  background: rgba(20,0,20,0.75);

  backdrop-filter: blur(14px);

  border-bottom:
      1px solid rgba(255,255,255,0.08);

}

.logo img {
  margin-top: 10px;
  width: 170px;
}

.nav-links {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin-right: 600px;
}

.nav-links a {
  color: white;

  text-decoration: none;

  transition: .3s;
}

.nav-links a:hover {
  color: #ff4ecb;
}

.nav-right {
  display: flex;
  gap: 15px;
}

.nav-right input {
  width: 250px;
  height: 44px;

  border: none;
  outline: none;

  border-radius: 12px;

  padding: 0 15px;

  background: rgba(255,255,255,0.08);

  color: white;
}

.nav-right button {
  height: 44px;

  padding: 0 20px;

  border: none;

  border-radius: 12px;

  background:
      linear-gradient(90deg,#3C1B37,#A24994);

  color: white;

  cursor: pointer;
}
.gradient {
  background:
      linear-gradient(180deg,#3C1B37,#A24994);

}

@media(max-width: 900px) {

  .nav-links {
    display: none;
  }

  .nav-right input {
    width: 180px;
  }

}

</style>
<script setup lang="ts">
</script>