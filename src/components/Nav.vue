<template>
  <scrollactive class="menu" active-class="active" :offset="70">
    <div class="name">
      <a href="#home"> Rubén Carrascal </a>
    </div>
    <div class="links">
      <a href="#home" class="scrollactive-item">Inicio</a>
      <a href="#designs" class="scrollactive-item">Mis diseños</a>
      <a href="#jobs" class="scrollactive-item">Mis trabajos</a>
      <a href="#videos" class="scrollactive-item">Mis vídeos</a>
      <a href="#contact" class="scrollactive-item">Contacto</a>
    </div>
  </scrollactive>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.menu {
  position: sticky;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  z-index: 100;
  top: 0;
  height: 70px;
  .name {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      font-size: xx-large;
      padding: 0;
      height: auto;
    }
  }
  .links {
    width: calc(70% - 7rem);
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 7rem;
  }
  a {
    color: var(--text-primary);
    text-decoration: none;
    padding: 0.5rem 2rem;
    height: 30px;
    border-radius: 25px;
    line-height: 30px;
    font-size: larger;
  }
}

.active {
  background-color: #f44336;
}

@media screen and (max-width: 425px) {
  .menu {
    .name {
      width: 100%;
    }
    .links {
      display: none !important;
    }
  }
}
</style>