<template>
  <div class="home">
    <scrollactive class="menu" active-class="active" :offset="70">
      <div class="name">
        <a href="#home"> Rubén Carrascal </a>
      </div>
      <div class="links">
        <a href="#home" class="scrollactive-item">Inicio</a>
        <a href="#designs" class="scrollactive-item">Mis diseños</a>
        <a href="#jobs" class="scrollactive-item">Mis trabajos</a>
        <a href="#contact" class="scrollactive-item">Contacto</a>
      </div>
    </scrollactive>

    <header id="home">
      <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="100"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="0"
        :lineLinked="true"
        :lineOpacity="0"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      ></vue-particles>

      <div class="text_index">
        <div class="text-welcome">
          <h1 class="text-left">
            Hola, <br />
            soy
            <strong>Rubén Carrascal</strong>
          </h1>

          <p class="text-left">
            📙 Estudio Ingeniería de Sistemas y me desempeño desarrollando
            <br />aplicaciones para 🤖 Android, 🍏 iOS, y 🖥️ web.
          </p>

          <codersrank-widget
            username="krrskl"
            style="--header-bg-color: #104dbf; width: 60%"
          ></codersrank-widget>
        </div>
        <img
          src="./../assets/img/undraw_developer_activity.svg"
          height="300px"
        />
      </div>
    </header>

    <div id="designs">
      <br /><br />
      <h1 class="title">Diseños</h1>
      <h3 class="subtitle">
        Estos son unos diseños que he creado para inspiración o utilidad de
        otros desarrolladores.
      </h3>
      <div class="row">
        <div
          v-for="(card, index) in data.posts"
          v-bind:key="index"
          class="card"
        >
          <div class="card__title">
            <strong>
              <a :href="card.url" target="_blank">{{ card.title }}</a>
            </strong>
            <img
              src="./../assets/img/arrow-circle-right-solid.svg"
              width="18px"
            />
          </div>
          <div class="card__content">
            <p>{{ card.description }}</p>
          </div>
          <div class="card__footer">
            <span
              class="label"
              v-for="label in card.labels"
              v-bind:key="label.id"
            >
              <img :src="getIcon(label)" height="15px" />
              {{ label }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="jobs" id="jobs">
      <br /><br />
      <h1 class="title">Mis trabajos</h1>
      <h3 class="subtitle">
        Estos son parte de los proyectos en los que he trabajado.
      </h3>
      <div class="row">
        <div v-for="(card, index) in data.jobs" v-bind:key="index" class="card">
          <div class="card__title">
            <strong>
              <a :href="card.url" target="_blank">{{ card.title }}</a>
            </strong>
            <a :href="card.url" target="_blank">
              <img
                src="./../assets/img/arrow-circle-right-solid.svg"
                width="18px"
              />
            </a>
          </div>
          <div class="card__content">
            <p>{{ card.description }}</p>
          </div>
          <div class="card__footer">
            <span
              class="label"
              v-for="label in card.labels"
              v-bind:key="label.id"
            >
              <img :src="getIcon(label)" height="15px" />
              {{ label }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div class="contact" id="contact">
      <h2>
        ¿Quieres saludarme o seguirme en mis redes? <br />aquí te las dejo.
      </h2>
      <div class="icons">
        <li class="list-inline-item">
          <a href="https://github.com/krrskl" target="_blank">
            <span>
              <i class="fab fa-github"></i>
            </span>
          </a>
        </li>

        <li class="list-inline-item">
          <a href="https://gitlab.com/krrskl" target="_blank">
            <span>
              <i class="fab fa-gitlab"></i>
            </span>
          </a>
        </li>

        <li class="list-inline-item">
          <a
            href="https://stackoverflow.com/users/8599849/krrskl"
            target="_blank"
          >
            <span>
              <i class="fab fa-stack-overflow"></i>
            </span>
          </a>
        </li>

        <li class="list-inline-item">
          <a href="https://www.linkedin.com/in/krrskl" target="_blank">
            <span>
              <i class="fab fa-linkedin"></i>
            </span>
          </a>
        </li>

        <li class="list-inline-item">
          <a href="https://dribbble.com/krrskl" target="_blank">
            <span>
              <i class="fab fa-dribbble"></i>
            </span>
          </a>
        </li>

        <li class="list-inline-item">
          <a href="mailto:krrskl97@gmail.com" target="_blank">
            <span>
              <i class="fas fa-envelope"></i>
            </span>
          </a>
        </li>

        <li class="list-inline-item">
          <a href="https://www.facebook.com/krrskl" target="_blank">
            <span>
              <i class="fab fa-facebook-f"></i>
            </span>
          </a>
        </li>

        <li class="list-inline-item">
          <a href="https://twitter.com/krrskl_dev" target="_blank">
            <span>
              <i class="fab fa-twitter"></i>
            </span>
          </a>
        </li>

        <li class="list-inline-item">
          <a href="https://www.instagram.com/krrskl.dev" target="_blank">
            <span>
              <i class="fab fa-instagram"></i>
            </span>
          </a>
        </li>
      </div>

      <br />

      <div class="recruiter">
        <h2>
          ¿Eres reclutador IT?
          <br />
          descarga mi curriculum vitae aquí:
        </h2>

        <div class="">
          <a href="https://bit.ly/curriculum-RC" target="_blank">Descargar</a>
        </div>
      </div>
      <div class="parallax_contact"></div>
    </div>

    <div class="working" id="element">
      <img src="./../assets/img/undraw_monitor_iqpq.svg" />
      <h3>Aún sigo construyendo mi sitio...</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      data: require("@/data/posts.json"),
      moveNav: false,
    };
  },
  mounted() {},
  methods: {
    getIcon(name) {
      return require("./../assets/icons/file_type_" +
        name.toLowerCase() +
        ".svg");
    },
    getImage(name) {
      return require(`./../assets/img/${name}`);
    },
    handleScroll: function (event) {
      if (
        document.getElementsByClassName("text_index")[0].clientHeight >= scrollY
      )
        return (this.moveNav = false);
      return (this.moveNav = true);
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
.contact {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  flex-direction: column;
  animation: pulse 5s infinite ease;
  clip-path: polygon(0 0, 100% 0, 100% 82%, 0 100%);
  margin-bottom: -6rem;
  margin-top: 3rem;
  padding: 1rem;
  text-align: center;
  h3,
  h2 {
    color: var(--text-primary);
    z-index: 2;
  }
  position: relative;
  .icons {
    display: flex;
    z-index: 2;
    li {
      list-style: none;
      margin-right: 2.5rem;
      &:last-child {
        margin-right: 0;
      }
      a {
        text-decoration: none;
        font-size: 2em;
        color: var(--text-primary);
        &:hover {
          opacity: 0.3;
        }
      }
    }
  }
  .recruiter {
    margin-bottom: 5rem;
    z-index: 2;
    a {
      padding: 0.7rem 3rem;
      background: red;
      text-decoration: none;
      color: var(--text-primary);
      border-radius: 25px;
      cursor: pointer;
    }
  }
  .parallax_contact {
    background-image: url("./../assets/img/undraw_contact_us_15o2.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 1;
    opacity: 0.2;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
  }
}

.text-left {
  text-align: left;
}

@keyframes pulse {
  0% {
    background-color: rgba(29, 33, 33, 0.95);
  }

  50.0% {
    background-color: rgba(29, 33, 33, 0.7);
  }

  50.5% {
    background-color: rgba(29, 33, 33, 0.95);
  }

  51.0% {
    background-color: rgba(29, 33, 33, 0.5);
  }

  51.5% {
    background-color: rgba(29, 33, 33, 0.9);
  }

  52.0% {
    background-color: rgba(29, 33, 33, 0.7);
  }

  90.5% {
    background-color: rgba(29, 33, 33, 0.85);
  }

  91.0% {
    background-color: rgba(29, 33, 33, 0.65);
  }

  91.5% {
    background-color: rgba(29, 33, 33, 0.85);
  }

  100.0% {
    background-color: rgba(29, 33, 33, 0.95);
  }
}

.title,
.subtitle {
  margin: 0 1.5rem;
  border-left: 3px solid #104dbf;
  padding-left: 0.5rem;
}

.title {
  margin-top: 2rem;
}

.card {
  &:hover,
  &:focus {
    &:before,
    &:before {
      animation: 0.5s forwards hover-v linear;
      animation-fill-mode: forwards;
    }
    .card__title {
      a {
        mask-image: linear-gradient(
          -75deg,
          rgba(0, 0, 0, 0.6) 20%,
          #000 50%,
          rgba(0, 0, 0, 0.6) 60%
        );
        mask-size: 300%;
        animation: shine 1s infinite;
      }
      img {
        animation: showLink 1s ease forwards;
      }
    }
  }
  padding: 3px 0.5rem;
  position: relative;
  background-color: var(--white);
  width: calc(100% - 1rem);
  height: 200px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 3px 6px #3333333d;
  &:before {
    content: "";
    background: #f34636;
    position: absolute;
    width: calc(100% - 1rem);
    top: 0;
    height: 5px;
    border-radius: 5px;
    transform: scaleX(0);
    animation: 1.4s forwards no-hover-v linear;
    animation-fill-mode: forwards;
    z-index: 1;
  }
  .card__title {
    text-align: center;
    padding: 0.5rem;
    color: var(--text-dark);
    font-weight: bold;
    border-bottom: 0.5px solid;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      visibility: hidden;
      transition: all 1s ease;
    }
    * {
      z-index: 5;
    }
    a {
      text-decoration: none;
      color: var(--text-dark);
    }
  }
  .card__content {
    padding: 0.5rem;
    color: var(--text-dark);
    z-index: 1;
    position: absolute;
    top: 0;
    height: 200px;
    width: calc(100% - 1rem);
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: justify;
  }
  .card__footer {
    z-index: 1;
    display: flex;
    position: absolute;
    bottom: 0px;
    left: 0.5rem;
    border-top: 0.5px solid var(--text-primary);
    width: calc(100% - 2rem);
    padding: 0.5rem;
    .label {
      background: #333333;
      border-radius: 25px;
      color: var(--text-primary);
      padding: 0 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 100px;
      margin-right: 2px;
    }
  }
}

@keyframes showLink {
  0% {
    opacity: 0.8;
    transform: translateX(-10rem);
  }
  100% {
    visibility: visible;
    opacity: 1;
    transform: translateX(1rem);
    transform: rotateZ(-35deg);
  }
}

@keyframes shine {
  from {
    -webkit-mask-position: 150%;
  }

  to {
    -webkit-mask-position: -50%;
  }
}

.working {
  clip-path: polygon(0 16%, 100% 0, 100% 100%, 0 100%);
  background-image: linear-gradient(90deg, var(--primary) 0, var(--secondary));
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: var(--text-primary);
  img {
    height: 200px;
  }
}

header {
  background-image: linear-gradient(90deg, var(--primary) 0, var(--secondary));
  color: var(--text-primary);
}

header,
.text_index,
#particles-js {
  height: calc(100vh - 70px);
}

h1 {
  font-size: xxx-large;
}

.text_index {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 6rem);
  padding: 0 3rem;
  text-align: center;
  strong {
    mask-image: linear-gradient(
      -75deg,
      rgba(0, 0, 0, 0.6) 30%,
      #000 50%,
      rgba(0, 0, 0, 0.6) 70%
    );
    mask-size: 300%;
    animation: shine 1s infinite;
  }
  .text-welcome {
    margin-right: 2rem;
    p {
      font-size: x-large;
    }
  }
}

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

.row {
  height: auto;
  display: grid;
  grid-template-areas: "a a a a";
  grid-gap: 20px;
  grid-auto-columns: calc(((100vw - 3rem) - 60px) / 4);
  width: calc(100vw - 3rem);
  margin: 0 auto;
  margin-top: 1rem;
}

@media screen and (max-width: 425px) {
  .menu li a {
    padding: 14px 10px !important;
  }

  .row {
    grid-auto-columns: calc(100vw - 3rem) !important;
    grid-template-areas: "a";
  }
  .card {
    height: 200px !important;
  }
  .working {
    clip-path: polygon(0 18%, 100% 0, 100% 100%, 0 100%);
  }
}

@keyframes hover-v {
  0% {
    transform: scaleX(0);
    height: 5px;
  }
  45% {
    transform: scaleX(1.05);
    height: 5px;
  }
  55% {
    height: 5px;
  }
  100% {
    transform: scaleX(1.05);
    height: 100%;
  }
}

@keyframes no-hover-v {
  0% {
    transform: scaleX(1.05);
    height: 100%;
  }
  45% {
    height: 5px;
  }
  55% {
    transform: scaleX(1.05);
    height: 5px;
    opacity: 1;
  }

  100% {
    transform: scaleX(0);
    height: 5px;
    opacity: 0.02;
  }
}
</style>


