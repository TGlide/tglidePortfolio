<template>
  <div>
    <!-- Hero -->
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-4">
              <figure class="image">
                <img src="@/assets/tglide_plane.svg" alt="" srcset="" />
              </figure>
            </div>
            <div class="column is-8 profile-desc">
              <p class="title">
                <span class="initial">Hi!</span> I'm Thomas.
                <br />
                I'm a
                <span class="underline yellow">full-stack</span> developer, with
                a great interest in <span class="underline green">data</span>,
                <span class="underline blue">design</span>, and
                <span class="underline red">open-source</span>
                projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tiles -->
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
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

// Helpers
.underline {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-color: black;

  background-size: 100% 30%;
  background-position: center bottom;
  background-repeat: no-repeat;

  // Animation
  transition: 0.175s ease;
  &:hover {
    background-size: 100% 80%;
    cursor: pointer;
  }

  // Color helpers
  $clr-op: 0.6;
  &.yellow {
    $color: rgba($warning, $clr-op);
    background-image: linear-gradient(to right, $color, $color);
  }
  &.green {
    $color: rgba($success, $clr-op);
    background-image: linear-gradient(to right, $color, $color);
  }
  &.red {
    $color: rgba($danger, $clr-op);
    background-image: linear-gradient(to right, $color, $color);
  }
  &.blue {
    $color: rgba($info, $clr-op);
    background-image: linear-gradient(to right, $color, $color);
  }
}

.initial {
  font-size: 5rem;
  font-weight: 600 !important;
  opacity: 1;
}

// Hero
.hero {
  // background-image: url("../assets/tglide_bg_plane.png");
  // background-repeat: no-repeat;
  // background-size: contain;
  // background-position: center 5%;
  // overflow: visible;

  .image {
    animation: floating 3.5s ease-in-out 0s infinite;
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
</style>
