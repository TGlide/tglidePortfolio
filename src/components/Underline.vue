<template>
  <span
    class="underline"
    :class="[color, { anim: anim || active, active: active }]"
    @click="toggleActive"
  >
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "underline",
  props: ["color", "anim"],
  data() {
    return {
      active: false
    };
  },
  methods: {
    toggleActive() {
      if (this.anim) {
        this.active = !this.active;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/styles/theme.scss";
// Components
.underline {
  // text-decoration-line: underline;
  // text-decoration-style: solid;
  // text-decoration-color: black;

  // font-size: 1.05em;
  // font-weight: 600 !important;

  background-size: 100% 10%;
  background-position: center bottom;
  background-repeat: no-repeat;

  &.anim {
    // Animation
    transition: 0.175s ease;
    &:hover,
    &.active {
      background-size: 100% 80%;
      cursor: pointer;
    }
    &.active {
      font-style: italic;
    }
  }

  // Color helpers
  $clr-op: 0.75;
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
</style>
