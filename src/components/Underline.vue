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

$bg-height: 5%;
@keyframes initialize {
  0% {
    background-size: 0% $bg-height;
    background-position: left bottom;
  }
  25% {
    background-size: 0% $bg-height;
    background-position: left bottom;
  }
  100% {
    background-size: 100% $bg-height;
    background-position: left bottom;
  }
}

.underline {
  animation: initialize 1.5s ease 1;
  padding: 0 0.1em;

  background-size: 100% $bg-height;
  background-position: center bottom;
  background-repeat: no-repeat;

  &.anim {
    // Animation
    transition: 0.25s ease;
    &:hover,
    &.active {
      background-size: 100% 90%;
      cursor: pointer;
    }
    &.active {
      font-style: italic;
    }
  }

  // Color helpers
  $clr-op: 0.75;
  $clr-selec: (
    "yellow": $warning,
    "green": $success,
    "blue": $info,
    "red": $danger
  );

  @each $name, $value in $clr-selec {
    &.#{$name} {
      $color: rgba($value, $clr-op);
      background-image: linear-gradient(to right, $color, $color);

      // Override selection color
      &::selection {
        background: $color;
        color: white;
        /* WebKit/Blink Browsers */
      }

      &::-moz-selection {
        background: $color;
        color: white;
        /* Gecko Browsers */
      }
    }
  }
}
</style>
