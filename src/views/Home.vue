<template>
  <div>
    <!-- Hero -->
    <section class="hero">
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

    <Divider />

    <!-- About -->
    <section class="section" id="about">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-3">
            <div class="header-card has-background-danger has-text-right">
              About
            </div>
          </div>
          <div class="column is-9">
            <p class="description">
              I aim to create solutions with
              <span class="has-text-primary"
                >technology
                <span class="icon"><faIcon icon="laptop-code"/></span
              ></span>
              to
              <underline :anim="true" color="red">improve</underline> everyday
              <span class="has-text-success"
                >life <span class="icon"><faIcon icon="leaf"/></span
              ></span>
            </p>

            <div class="tech-steps">
              <TechCarousel
                :images="[
                  require('@/assets/icons/vue.png'),
                  require('@/assets/icons/bulma.png'),
                  require('@/assets/icons/python.png')
                ]"
                :speed="0.75"
                :delay="2"
              />
              <span class="icon is-large">
                <faIcon icon="plus" class="fa-6x" />
              </span>
              <span class="icon is-large has-text-danger">
                <faIcon icon="heart" class="fa-7x" />
              </span>
              <span class="icon is-large">
                <faIcon icon="equals" class="fa-6x" />
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
            <div class="header-card has-background-info has-text-left">
              Worked with
            </div>
          </div>
        </div>
      </div>
    </section>
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
  background-color: white;
  min-height: 100vh;
  height: 100%;
}

// Animations
@keyframes floating {
  0% {
    transform: translateY(0%);
  }
  50% {
    transform: translateY(2.5%);
  }
  100% {
    transform: translateY(0%);
  }
}

.initial {
  font-size: 2.25em;
  font-weight: 600 !important;
  opacity: 1;
}

.header-card {
  padding: 4rem 2rem;

  font-size: 4rem;
  font-weight: 600;
  font-family: "Josefin Sans", sans-serif;

  color: white;
}

//Sections
.hero {
  // background-image: url("../assets/tglide_bg_plane.png");
  // background-repeat: no-repeat;
  // background-size: contain;
  // background-position: center 5%;
  // overflow: visible;

  .image {
    animation: floating 3.5s ease-in-out 0s infinite;
    max-width: 50%;
    margin: 0 2rem 0 auto;

    position: relative;
    top: 3rem;
  }

  .profile-desc {
    display: flex;
    flex-direction: row;
    align-items: center;

    p {
      font-size: 2.5rem;
      color: rgba(0, 0, 0, 0.8);
      font-weight: 400;
    }
  }
}

#about {
  .description {
    font-size: 2rem;
    color: rgba(0, 0, 0, 0.8);
  }

  .tech-steps {
    display: flex;
    flex-direction: row;
    align-items: center;
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
