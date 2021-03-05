<template>
  <div id="gallery-modal" @click="$emit('dismiss')">
    <div class="images-container" @click.stop="">
      <div
        class="image"
        v-for="(item, i) in images"
        v-show="i == currentSlide"
        :key="i"
      >
        <img :src="item" alt="" />
      </div>
      <div class="control-btn">
        <button class="btn" @click="prev">prev</button>
        <button class="btn" @click="next">next</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GalleryModal',
  props: ['index', 'images'],
  data() {
    return {
      currentSlide: 0,
    }
  },
  mounted() {
    this.currentSlide = this.index
  },
  methods: {
    prev() {
      this.currentSlide--
      if (this.currentSlide < 0) {
        this.currentSlide = 0
      }
    },
    next() {
      this.currentSlide++
      if (this.currentSlide > this.images.length - 1) {
        this.currentSlide = this.images.length - 1
      }
    },
  },
}
</script>

<style lang="scss" scoped>
#gallery-modal {
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.616);
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .images-container {
    width: 80%;
    height: 80%;
    @include for-phone-only {
      width: 95%;
      height: 350px;
    }
    .image {
      width: 100%;
      height: 100%;
      border: 10px solid #fff8e8;
      border-radius: 4px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .control-btn {
    padding-top: 20px;
    text-align: center;
    .btn {
      background: #fff8e8;
      border: none;
      height: 35px;
      width: 65px;
      border-radius: 4px;
      font-size: 14px;
      text-transform: uppercase;
      margin-right: 20px;
      cursor: pointer;
      outline: none;
    }
  }
}
</style>
