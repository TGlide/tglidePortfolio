<template>
  <span><img :src="icon" @click="animate" :class="cls"/></span>
</template>

<script>
export default {
  name: "interIcon",
  props: ["icon"],
  data() {
    return {
      cls: undefined
    };
  },
  methods: {
    animate() {
      if (this.cls !== undefined) {
        let num = parseInt(this.cls.substring(this.cls.length - 1));
        this.cls = `spin-${Math.abs(num - 1)}`;
      } else this.cls = "spin-1";
    }
  }
};
</script>

<style lang="scss" scoped>
span {
  cursor: pointer;
}

// Trick to allow repetition of animation
@for $i from 0 through 2 {
  @keyframes spin-#{$i} {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .spin-#{$i} {
    animation: spin-#{$i} 1s ease 1;
  }
}
</style>
