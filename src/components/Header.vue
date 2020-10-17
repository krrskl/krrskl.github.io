<template>
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

        <codersrank-widget username="krrskl" class="coderswidget">
        </codersrank-widget>
      </div>
      <img
        src="./../assets/img/undraw_developer_activity.svg"
        class="animate__animated animate__fadeInUp"
        height="300px"
      />
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  background-image: linear-gradient(
    to top,
    var(--primary) 0%,
    var(--secondary) 100%
  );
  color: var(--text-primary);
}

header,
.text_index,
#particles-js {
  height: calc(100vh - 70px);
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

.coderswidget {
  --header-bg-color: var(--terceary);
  width: 60%;
}

@media screen and (max-width: 425px) {
  .coderswidget {
    display: none;
  }
  header {
    .text_index {
      flex-direction: column;
      .text-welcome {
        margin-top: 7rem;
        margin-right: 0;
        .text-left {
          font-size: xx-large;
        }
        p {
          font-size: large !important;
        }
      }
      img {
        width: 100%;
      }
    }
  }
}
</style>