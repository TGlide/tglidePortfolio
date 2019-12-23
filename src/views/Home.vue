<template>
  <div class="fade-in" v-if="loaded">
    <!-- Hero -->
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-4 logo">
              <figure class="image">
                <img src="@/assets/icons/tglide_plane.svg" alt="" srcset="" />
              </figure>
            </div>
            <!-- Initial description -->
            <div class="column is-8 profile-desc">
              <!-- pt-BR -->
              <p class="title" v-if="lang == 'pt-BR'">
                <span class="initial">Oi!</span> Eu sou o Thomas.
                <br />
                Sou um desenvolvedor
                <underline color="yellow" :anim="true">full-stack</underline>
                com interesse em
                <underline :anim="true" color="blue">design</underline>,
                <underline :anim="true" color="green">dados</underline>,
                <underline :anim="true" color="red">sites e apps</underline>, e
                mais!
              </p>

              <!-- en -->
              <p class="title" v-if="lang == 'en'">
                <span class="initial">Hi!</span> I'm Thomas.
                <br />
                I'm a
                <underline color="yellow" :anim="true">full-stack</underline>
                developer, with an interest in
                <underline :anim="true" color="blue">design</underline>,
                <underline :anim="true" color="green">data</underline>, and
                <underline :anim="true" color="red">open-source</underline>
                projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Divider -->
    <h1 class="has-text-centered has-text-grey-light title">...</h1>

    <!-- About -->
    <section class="section" id="about">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-3">
            <div class="header-card has-text-right has-text-success">
              <span v-if="lang == 'en'">About</span>
              <span v-if="lang == 'pt-BR'">Sobre</span>
            </div>
          </div>

          <div class="column is-9">
            <!-- pt-BR -->
            <p class="description has-text-centered" v-if="lang == 'pt-BR'">
              Eu projeto soluções com tecnologia para auxiliar o
              <span class="has-text-success"
                >dia-a-dia <span class="icon"><faIcon icon="leaf"/></span
              ></span>
            </p>
            <!-- en -->
            <p class="description has-text-centered" v-if="lang == 'en'">
              I create solutions with technology to improve everyday
              <span class="has-text-success"
                >life <span class="icon"><faIcon icon="leaf"/></span
              ></span>
            </p>

            <div class="tech-steps">
              <TechCarousel
                :images="[
                  require('@/assets/icons/vue.png'),
                  require('@/assets/icons/bulma.png'),
                  require('@/assets/icons/python.png'),
                  require('@/assets/icons/flutter.png'),
                  require('@/assets/icons/node.png'),
                  require('@/assets/icons/heroku.png')
                ]"
                :speed="0.75"
                :delay="2"
              />
              <span class="icon is-large">
                <faIcon icon="plus" class="fa-4x" />
              </span>
              <span class="icon is-large has-text-pastel-red">
                <faIcon icon="heart" class="fa-5x" />
              </span>
              <span class="icon is-large">
                <faIcon icon="equals" class="fa-4x" />
              </span>
              <span class="icon is-large">
                <img src="@/assets/icons/happy.svg" alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What I do -->
    <section class="section" id="what-i-do">
      <div class="container">
        <div class="columns is-centered">
          <!-- Items grid -->
          <div class="column is-9">
            <div class="columns is-centered items">
              <div class="column is-one-third">
                <div class="item">
                  <span>
                    <interIcon :icon="require('@/assets/icons/desktop.svg')" />
                  </span>
                  <span>Sites</span>
                </div>
                <div class="item">
                  <span
                    ><interIcon
                      :icon="require('@/assets/icons/mobile-alt.svg')"
                    />
                  </span>
                  <span>Apps</span>
                </div>
              </div>

              <div class="column is-one-third">
                <div class="item">
                  <span>
                    <interIcon
                      :icon="require('@/assets/icons/hat-wizard.svg')"
                    />
                  </span>
                  <span>Mágica</span>
                </div>
                <div class="item">
                  <interIcon :icon="require('@/assets/icons/cogs.svg')" />
                  <span>Automação</span>
                </div>
              </div>
              <div class="column is-one-third">
                <div class="item">
                  <span
                    ><interIcon
                      :icon="require('@/assets/icons/laptop-code.svg')"
                    />
                  </span>
                  <span>Programas</span>
                </div>
                <div class="item">
                  <span
                    ><interIcon
                      :icon="require('@/assets/icons/ice-cream.svg')"
                    />
                  </span>
                  <span>Comer doce</span>
                </div>
              </div>
            </div>
          </div>

          <div class="column is-3">
            <div class="header-card has-text-left has-text-amour">
              <span v-if="lang == 'en'">What I do</span>
              <span v-if="lang == 'pt-BR'">O que faço</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Worked with -->
    <section class="section" id="worked-with">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-3">
            <div class="header-card has-text-info has-text-right">
              <span v-if="lang == 'en'">Worked with</span>
              <span v-if="lang == 'pt-BR'">Clientes e Trabalho</span>
            </div>
          </div>
          <div class="column is-9 companies">
            <figure class="image">
              <img src="@/assets/companies/stone.png" alt="" />
            </figure>
          </div>
        </div>
      </div>
    </section>

    <Divider />
  </div>
</template>

<script>
// Components
import Divider from "@/components/Divider";
import TechCarousel from "@/components/TechCarousel";
import underline from "@/components/Underline";
import interIcon from "@/components/InteractiveIcon";

export default {
  name: "home",
  components: { Divider, TechCarousel, underline, interIcon },
  data() {
    return {
      loaded: false,
      lang: "pt-BR"
      // lang: "en"
    };
  },
  mounted() {
    this.loaded = true;
  }
};
</script>

<style lang="scss">
@import "@/styles/theme.scss";
body {
  background-color: $white;
  min-height: 100vh;
  height: 100%;
}

// Animations
@keyframes floating {
  $amplitude: 3%;
  0% {
    transform: translateY(-$amplitude);
  }
  50% {
    transform: translateY($amplitude);
  }
  100% {
    transform: translateY(-$amplitude);
  }
}

// Components
.header-card {
  padding: 4rem 0rem;

  font-size: 3rem;
  font-weight: 600;
  font-family: "Josefin Sans", sans-serif;

  &.has-text-left {
    border-left: 2px rgba($grey-light, 0.5) solid;
    padding-left: 2rem;
  }
  &.has-text-right {
    border-right: 2px rgba($grey-light, 0.5) solid;
    padding-right: 2rem;
  }
}

// Sections
.hero {
  .hero-body {
    padding-top: 0;
    padding-bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 90vh;
    font-family: "Montserrat", sans-serif;

    .initial {
      font-size: 2.25em;
      font-weight: 600 !important;
      opacity: 1;
    }
    .image {
      animation: floating 3s ease-in-out 0s infinite;
      max-width: 45%;
      margin: 0 2rem 0 auto;

      position: relative;
      top: 3rem;
    }

    .profile-desc {
      display: flex;
      flex-direction: row;
      align-items: center;

      p {
        font-size: 2rem;
        color: rgba(0, 0, 0, 0.8);
        font-weight: 400;
      }
    }
  }
}

#about {
  .description {
    font-size: 1.5rem;
    font-family: "Montserrat", sans-serif;
    color: rgba(0, 0, 0, 0.8);
  }

  .tech-steps {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
  }
}

#what-i-do {
  .items {
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    .column {
      height: 100%;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        :nth-child(1) {
          $icon-size: 3rem;
          width: $icon-size;
          height: $icon-size;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        :nth-child(2) {
          font-size: 1.5rem;
          font-family: "Montserrat", sans-serif;
        }
      }
    }
  }
}

#worked-with {
  .companies {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .image {
      width: 15rem;
      opacity: 0.8;
      transition: 0.25s ease;

      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>
