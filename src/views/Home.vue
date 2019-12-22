<template>
  <div>
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
            <div class="column is-8 profile-desc">
              <p class="title">
                <span class="initial">Hi!</span> I'm Thomas.
                <br />
                I'm a
                <underline color="yellow" :anim="true">full-stack</underline>
                developer, with a great interest in
                <underline :anim="true" color="green">data</underline>,
                <underline :anim="true" color="blue">design</underline>, and
                <underline :anim="true" color="red">open-source</underline>
                projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <h1 class="has-text-centered has-text-grey-light title">...</h1>

    <!-- About -->
    <section class="section" id="about">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-3">
            <div class="header-card has-text-right has-text-success">
              About
            </div>
          </div>
          <div class="column is-9">
            <p class="description has-text-centered">
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

    <!-- Worked with -->
    <section class="section" id="worked-with">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-9 companies">
            <figure class="image">
              <img src="@/assets/companies/stone.png" alt="" />
            </figure>
          </div>
          <div class="column is-3">
            <div class="header-card has-text-info has-text-left">
              Worked with
            </div>
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

export default {
  name: "home",
  components: { Divider, TechCarousel, underline }
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
  padding: 4rem 2rem;

  font-size: 3.5rem;
  font-weight: 600;
  font-family: "Josefin Sans", sans-serif;

  &.has-text-left {
    border-left: 2px rgba($grey-light, 0.5) solid;
  }
  &.has-text-right {
    border-right: 2px rgba($grey-light, 0.5) solid;
  }
}

// Sections
.hero {
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
