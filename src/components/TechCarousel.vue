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
      this.currentStyle = { animation: `come ${this.speed + 0.2}s ease 0s 1` };
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
$img-sz: 175px;
// Animations
@keyframes goAway {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-$img-sz);
  }
}

@keyframes come {
  0% {
    transform: translateY($img-sz + 10px);
  }
  100% {
    transform: translateY(0%);
  }
}

.tech-carousel {
  overflow: hidden;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: $img-sz;
    height: $img-sz;
  }
  img {
    margin: auto auto;
    display: block;
    max-width: $img-sz;
    max-height: $img-sz;
  }
}
</style>
