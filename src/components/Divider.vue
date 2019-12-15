<template>
  <section class="section">
    <div class="container">
      <div class="divider columns is-centered">
        <div class="column"></div>
        <div class="column ic ">
          <img src="@/assets/icons/tglide_plane_sketch.svg" alt="" />
        </div>
        <div class="column "></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.divider {
  align-items: center;
  > :first-child,
  > :last-child {
    flex-grow: 10;
    $color: rgba(gray, 0.3);
    background-image: linear-gradient(to right, $color, $color);
    background-position: center;
    background-size: 100% 2px;
    background-repeat: no-repeat;
  }

  .ic {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    img {
      width: 2.5rem;
      height: auto;
    }
  }
}
</style>
