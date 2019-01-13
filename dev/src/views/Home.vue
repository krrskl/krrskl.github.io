<template>
  <div class="home">
    <header>
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
        <h3>
          Hola soy
          <strong>Rubén Carrascal</strong>, bienvenido a mi página personal.
        </h3>

        <p>Estudio Ingeniería de Sistemas y me desempeño desarrollando
          <br>aplicaciones para Android, iOS, y web.
        </p>
        <img src="./../assets/img/undraw_programming_2svr.svg" height="150px">
      </div>
    </header>
    <ul>
      <li>
        <a class="active" href="#home">Inicio</a>
      </li>
      <li>
        <a href="#design">Mis diseños</a>
      </li>
      <li>
        <a href="#jobs">Mis trabajos</a>
      </li>
      <li>
        <a href="#contact">Contacto</a>
      </li>
    </ul>
    <br>
    <br>
    <h3>Estos son unos diseños que he creado para inspiración o utilidad de otros desarrolladores.</h3>
    <div class="row">
      <div v-for="(card, index) in data" v-bind:key="index" class="card">
        <div class="card__title">
          <strong>
            <a :href="card.url" target="_blank">{{card.title}}</a>
          </strong>
          <img src="./../assets/img/arrow-circle-right-solid.svg" width="18px">
        </div>
        <div class="card__content">
          <p>{{card.description}}</p>
        </div>
        <div class="card__footer">
          <span class="label" v-for="label in card.labels" v-bind:key="label.id">
            <img :src="getIcon(label)" height="15px">
            {{label}}
          </span>
        </div>
      </div>
    </div>

    <div class="working">
      <img src="./../assets/img/undraw_monitor_iqpq.svg">
      <h3>Aún sigo construyendo mi sitio...</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      data: require("@/data/posts.json")
    };
  },
  mounted() {
    console.log(this.data);
  },
  methods: {
    getIcon(name) {
      return require("./../assets/icons/file_type_" +
        name.toLowerCase() +
        ".svg");
    }
  }
};
</script>

<style lang="scss" scoped>
.home > h3 {
  margin: 0 1.5rem;
  border-left: 3px solid #104dbf;
  padding-left: 0.5rem;
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
  background-color: var(--secondary);
  width: calc(100% - 1rem);
  height: 200px;
  border-radius: 5px;
  cursor: pointer;
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
    color: var(--text-primary);
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
      z-index: 1;
    }
    a {
      text-decoration: none;
      color: var(--text-primary);
    }
  }
  .card__content {
    padding: 0.5rem;
    color: var(--text-primary);
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
  clip-path: polygon(0 25%, 100% 0, 100% 70%, 0 100%);
  background-image: linear-gradient(90deg, var(--primary) 0, var(--secondary));
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: var(--text-primary);
  margin-bottom: 10rem;
  img {
    height: 200px;
  }
}
header {
  background-image: linear-gradient(90deg, var(--primary) 0, var(--secondary));
  color: var(--text-primary);
}
header p {
  margin-bottom: 7rem;
}
header,
.text_index,
#particles-js {
  height: 92vh;
}
.text_index {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  z-index: 100;
}

li {
  float: left;
}

li a {
  display: block;
  color: var(--text-primary);
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  opacity: 0.2;
}

.active {
  background-color: #f44336;
}
.row {
  height: auto;
  display: grid;
  grid-template-areas: "a a a a";
  grid-gap: 5px;
  grid-auto-columns: calc(((100vw - 3rem) - 20px) / 4);
  width: calc(100vw - 3rem);
  margin: 0 auto;
  margin-top: 1rem;
}

@media screen and (min-width: 1024px) {
  header,
  .text_index,
  #particles-js {
    height: 93vh;
  }
}

@media screen and (max-width: 425px) {
  li a {
    padding: 14px 10px !important;
  }
  header,
  .text_index,
  #particles-js {
    height: 83vh !important;
  }
  .row {
    grid-auto-columns: calc(100vw - 3rem) !important;
    grid-template-areas: "a";
  }
  .card {
    height: 200px !important;
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


