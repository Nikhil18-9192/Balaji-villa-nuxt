<template>
  <div id="nearby">
    <div class="title">
      <h1>Nearby Attractions</h1>
      <img src="title-img.png" alt="" />
    </div>
    <client-only>
      <carousel
        ref="slider"
        v-model="currentPage"
        class="carousel"
        :perPageCustom="[
          [320, 1],
          [375, 1],
          [768, 2],
          [1200, 3],
          [1800, 4],
        ]"
        :loop="true"
        :autoplay="true"
        :autoplayTimeout="10000"
        :mouse-drag="true"
        :paginationEnabled="false"
      >
        <slide
          class="slide"
          v-for="(slide, i) in slides"
          :key="slide.title + i"
        >
          <div
            class="slide-content"
            @mouseenter="hoverEvent(i)"
            @mouseleave="outEvent"
          >
            <transition name="image">
              <img
                v-if="!hover || i !== index"
                class="image"
                :style="{ clipPath: shapes[i % shapes.length] }"
                :src="slide.src"
                alt=""
              />
            </transition>
            <transition name="text">
              <div
                class="text"
                :style="{ clipPath: shapes[i % shapes.length] }"
                v-if="hover && i === index"
              >
                <h4>{{ slide.title }}</h4>
                <hr />
                <p>{{ slide.desc }}</p>
              </div>
            </transition>
          </div>
        </slide>
      </carousel>
    </client-only>
    <div class="control-btn">
      <img src="/right.svg" alt="" @click="next" />
      <img src="/left.svg" alt="" @click="prev" />
    </div>
  </div>
</template>

<script>
import Carousel from 'vue-carousel/src/Carousel.vue'
import Slide from 'vue-carousel/src/Slide.vue'
import { slides } from '@/utils'
export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      hover: false,
      index: -1,
      currentPage: 0,
      shapes: [
        'polygon(61% 0, 100% 51%, 66% 100%, 0 73%, 0 33%)',
        'polygon(10% 14%, 53% 1%, 100% 44%, 72% 91%, 15% 94%, 0% 50%)',
        'polygon(41% 0, 100% 32%, 95% 89%, 51% 99%, 5% 78%, 0 31%)',
        'polygon(23% 8%, 82% 4%, 100% 53%, 72% 91%, 15% 95%, 0 40%)',
      ],
      randomIndex: 0,
    }
  },
  mounted() {},

  methods: {
    hoverEvent(i) {
      this.index = i
      this.hover = true
    },
    outEvent() {
      this.index = -1
      this.hover = false
    },
    next() {
      this.currentPage < this.$refs.slider.pageCount - 1
        ? this.currentPage++
        : (this.currentPage = 0)
    },
    prev() {
      this.currentPage <= 0
        ? (this.currentPage = this.$refs.slider.pageCount - 1)
        : this.currentPage--
    },
  },
  computed: {
    slides() {
      return slides
    },
  },
}
</script>

<style lang="scss" scoped>
#nearby {
  background: #fff8e8;
  position: relative;
  height: 728px;
  padding: 0 88px;
  @include for-phone-only {
    padding: 0 30px;
    height: 600px;
  }
  .title {
    text-align: center;
    padding-top: 48px;
    padding-bottom: 100px;
    @include for-phone-only {
      padding: 30px 0;
    }
    h1 {
      font-family: 'Tangerine';
      font-weight: normal;
      font-size: 48px;
      line-height: 124.19%;
      letter-spacing: 0.055em;
      text-transform: capitalize;
      color: #515151;
      margin-bottom: 20px;
      @include for-phone-only {
        font-size: 42px;
      }
    }
    img {
      object-fit: contain;
      max-width: 359px;
      width: 100%;
    }
  }
  .carousel {
    width: 100%;
    position: relative;
    .slide-content {
      width: 326px;
      height: 345px;
      overflow: hidden;
    }
    .slide {
      width: 100%;
      cursor: pointer;
      .image {
        object-fit: cover;
        width: 100%;
        height: 100%;
        // clip-path: polygon(23% 8%, 82% 4%, 100% 53%, 72% 91%, 15% 95%, 0 40%);
      }
      .text {
        background: #fbf2dc;
        width: 100%;
        height: 100%;
        // clip-path: polygon(61% 0, 100% 51%, 66% 100%, 0 73%, 0 33%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-left: 8px;
        h4 {
          color: #515151;
          font-weight: normal;
          font-size: 18px;
          line-height: 124.19%;
          letter-spacing: 0.415em;
          text-transform: uppercase;
          width: 253px;
        }
        hr {
          background: #515151;
          width: 33px;
          height: 1px;
          margin: 20px auto 25px 35px;
        }
        p {
          font-weight: normal;
          font-size: 14px;
          line-height: 146.69%;
          letter-spacing: 0.12em;
          color: #686868;
          width: 253px;
        }
      }
    }
  }
  .control-btn {
    margin-top: 20px;
    img {
      height: 20px;
      width: 30px;
      cursor: pointer;
      float: right;
    }
  }
}

.image-enter-active,
.image-leave-active {
  transition: opacity 0.3s;
}
.image-enter,
.image-leave-to {
  opacity: 0;
}

.text-enter-active,
.text-leave-active {
  transition: opacity 0.3s;
}
.text-enter,
.text-leave-to {
  opacity: 0;
}
</style>
