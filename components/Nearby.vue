<template>
  <div id="nearby">
    <div class="title">
      <h1>Nearby Attractions</h1>
      <img src="title-img.png" alt="" />
    </div>
    <client-only>
      <carousel
        class="carousel"
        :per-page="3"
        :loop="true"
        :mouse-drag="true"
        :paginationEnabled="false"
      >
        <slide class="slide" v-for="(slide, i) in slides" :key="i">
          <img class="image" v-if="slide.src" :src="slide.src" alt="" />
          <div class="text" v-else>
            <h4>{{ slide.title }}</h4>
            <hr />
            <p>{{ slide.desc }}</p>
          </div>
        </slide>
      </carousel>
    </client-only>
  </div>
</template>

<script>
import Carousel from 'vue-carousel/src/Carousel.vue'
import Slide from 'vue-carousel/src/Slide.vue'
export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      slides: [
        { src: '/rankala.jpg' },
        {
          title: 'Rankala Lake',
          desc:
            'Rankala Lake is on the western side of Ambabai temple , it is a popular evening spot and recreation centre.',
        },
        { src: '/panhala.jpg' },
        { src: '/mahalaxmi.jpg' },
        { src: '/rankala.jpg' },
        { src: '/panhala.jpg' },
        { src: '/mahalaxmi.jpg' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
#nearby {
  background: #fff8e8;
  position: relative;
  height: 728px;
  padding: 0 88px;
  .title {
    text-align: center;
    padding-top: 48px;
    padding-bottom: 100px;
    h1 {
      font-family: 'Tangerine';
      font-weight: normal;
      font-size: 48px;
      line-height: 124.19%;
      letter-spacing: 0.055em;
      text-transform: capitalize;
      color: #515151;
      margin-bottom: 20px;
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
    .slide {
      width: 100%;
      .image {
        object-fit: contain;
        width: 326px;
        height: 345px;
        clip-path: polygon(61% 0, 100% 51%, 66% 100%, 0 73%, 0 33%);
      }
      .text {
        background: #fbf2dc;
        width: 326px;
        height: 345px;
        clip-path: polygon(61% 0, 100% 51%, 66% 100%, 0 73%, 0 33%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
}
</style>
