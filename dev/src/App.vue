<template>
  <div id="app">
    <router-view></router-view>
    <footer>
      <div>
        Hecho con
        <span class="heart">&#9829;</span> por
        <a
          href="https://www.gitlab.com/krrskl97"
          title="front end developer"
          target="_blank"
        >Rubén Carrascal</a>
      </div>
    </footer>
    <a href id="rocketmeluncur" class="showrocket">
      <i></i>
    </a>
  </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    handleScroll(event) {}
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: var(--primary);
  border: 2px solid #ffffff;
}
::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #ffffff;
}
:root {
  --text-primary: #fff;
  --primary: #4d84f4;
  --secondary: #003fbf;
  --terceary: #00308f;
  --gray: #f0f0f0;
}
* {
  font-family: "Dosis", sans-serif;
  user-select: none;
}

#rocketmeluncur {
  position: fixed;
  bottom: 50px;
  z-index: 7;
  display: none;
  visibility: hidden;
  width: 26px;
  height: 48px;
  right: 25px;
  background: url("./assets/img/rocket.png") no-repeat 50% 0;
  opacity: 0;
  -webkit-transition: visibility 0.6s cubic-bezier(0.6, 0.04, 0.98, 0.335),
    opacity 0.6s cubic-bezier(0.6, 0.04, 0.98, 0.335),
    -webkit-transform 0.6s cubic-bezier(0.6, 0.04, 0.98, 0.335);
  -moz-transition: visibility 0.6s cubic-bezier(0.6, 0.04, 0.98, 0.335),
    opacity 0.6s cubic-bezier(0.6, 0.04, 0.98, 0.335),
    -moz-transform 0.6s cubic-bezier(0.6, 0.04, 0.98, 0.335);
  transition: visibility 0.6s cubic-bezier(0.6, 0.04, 0.98, 0.335),
    opacity 0.6s cubic-bezier(0.6, 0.04, 0.98, 0.335),
    transform 0.6s cubic-bezier(0.6, 0.04, 0.98, 0.335);
}

#rocketmeluncur i {
  display: block;
  margin-top: 48px;
  height: 14px;
  background: url("./assets/img/rocket.png") no-repeat 50% -48px;
  opacity: 0.5;
  -webkit-transition: -webkit-transform 0.2s;
  -moz-transition: -moz-transform 0.2s;
  transition: transform 0.2s;
  -webkit-transform-origin: 50% 0;
  -moz-transform-origin: 50% 0;
  transform-origin: 50% 0;
}

#rocketmeluncur:hover {
  background-position: 50% -62px;
}

#rocketmeluncur.showrocket {
  visibility: visible;
  opacity: 1;
}

#rocketmeluncur.launchrocket {
  background-position: 50% -62px;
  opacity: 0;
  -webkit-transform: translateY(-800px);
  -moz-transform: translateY(-800px);
  -ms-transform: translateY(-800px);
  transform: translateY(-800px);
  pointer-events: none;
}

#rocketmeluncur.launchrocket i {
  background-position: 50% 100%;
  -webkit-transform: scale(1.4, 3.2);
  -moz-transform: scale(1.4, 3.2);
  transform: scale(1.4, 3.2);
}
</style>

<style lang="scss" scoped>
footer {
  background-image: linear-gradient(90deg, var(--primary) 0, var(--secondary));
  margin: 0;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid var(--text-primary);
  div {
    font-family: "Dosis";
    font-weight: bold;
    color: #ffffff;
    text-align: center;
    margin-top: 20px;
    a {
      color: #ffffff;
      text-decoration: none;
      border-bottom: 1px dashed #555;
    }
  }
  .heart {
    color: rgb(199, 59, 84);
  }
}
</style>

