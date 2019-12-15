<template>
  <div class="tech-carousel">
    <span class="container">
      <img :src="images[currentImage]" :style="currentStyle" />
    </span>
  </div>
</template>

<script>
export default {
  props: ["images", "speed", "delay"],
  data() {
    return {
      currentImage: 0,
      currentStyle: ""
    };
  },
  methods: {
    changeImage() {
      this.currentImage =
        this.currentImage === this.images.length - 1
          ? 0
          : this.currentImage + 1;
      this.currentStyle = { animation: `come ${this.speed}s ease 0s 1` };
    },
    changeImageRepeated() {
      this.currentStyle = {
        animation: `goAway ${this.speed}s ease 0s 1`,
        transform: "translateY(-100%);"
      };
      window.setTimeout(this.changeImage, this.speed * 1000);
      window.setTimeout(
        this.changeImageRepeated,
        this.speed * 2000 + this.delay * 1000
      );
    }
  },
  mounted() {
    window.setTimeout(() => {
      this.changeImageRepeated();
    }, 1000);
  }
};
</script>

<style lang="scss">
// Animations
@keyframes goAway {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-100%);
  }
}

@keyframes come {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0%);
  }
}

.tech-carousel {
  $img-sz: 200px;
  overflow: hidden;
  .container {
    display: block;
    width: $img-sz;
    height: $img-sz;
  }
  img {
    margin: 0 auto;
    display: block;
    max-width: $img-sz;
    max-height: $img-sz;
  }
}
</style>
