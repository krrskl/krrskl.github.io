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

    <div class="row">
      <div v-for="(card, index) in data" v-bind:key="index" class="card">
        <div class="card__title">
          <strong>{{card.title}}</strong>
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
.card {
  padding: 3px 0.5rem;
  position: relative;
  background-color: var(--secondary);
  width: calc(100% - 1rem);
  height: 300px;
  border-radius: 5px;
  cursor: pointer;
  .card__title {
    text-align: center;
    padding: 0.5rem;
    color: var(--text-primary);
    font-weight: bold;
    border-bottom: 0.5px solid;
  }
  .card__content {
    padding: 0.5rem;
    color: var(--text-primary);
  }
  .card__footer {
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
</style>


<style scoped>
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
}
</style>


