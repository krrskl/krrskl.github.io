<template>
  <div class="home">
    <nav-component />

    <header-component />

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
          v-on:click="openLink(card.url)"
        >
          <div class="card__title">
            <strong>
              {{ card.title }}
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
        <div
          v-for="(card, index) in data.jobs"
          v-bind:key="index"
          class="card"
          v-on:click="openLink(card.url)"
        >
          <div class="card__title">
            <strong>
              {{ card.title }}
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

    <div class="videos" id="videos">
      <br /><br />
      <h1 class="title">Mis vídeos</h1>
      <h3 class="subtitle">
        En ciertos momentos de mis tiempos libres suelo crear vídeos para
        compartir conocimiento junto al equipo de
        <a href="https://noemec.net">NoEMEC</a>
      </h3>

      <div class="row">
        <div
          v-for="(card, index) in data.videos"
          v-bind:key="index"
          class="card no-animate"
          v-bind:style="{ 'background-image': 'url(' + card.image + ')' }"
          v-on:click="openLink(card.url)"
        >
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

        <div class="animate__animated animate__fadeInUp">
          <a href="https://bit.ly/curriculum-RC" target="_blank">Descargar</a>
        </div>
      </div>
      <div class="parallax_contact"></div>
    </div>

    <div class="working" id="element">
      <img src="./../assets/img/undraw_monitor_iqpq.svg" />
      <h2>Aún sigo construyendo mi sitio...</h2>
    </div>
  </div>
</template>

<script>
import NavComponent from "./../components/Nav.vue";
import HeaderComponent from "./../components/Header.vue";

export default {
  name: "home",
  data() {
    return {
      data: require("@/data/posts.json"),
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
    openLink(url) {
      window.open(url, "_blank");
    },
  },
  components: { NavComponent, HeaderComponent },
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

.working {
  clip-path: polygon(0 16%, 100% 0, 100% 100%, 0 100%);
  background-image: linear-gradient(
    to top,
    var(--primary) 0%,
    var(--secondary) 100%
  );
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
</style>


