<template>
  <div id="hero" :style="{ 'background-image': `url(${images[activeIndex]})` }">
    <div class="overlay"></div>
    <div class="content">
      <div class="logo">
        <img src="logo.png" alt="" />
        <h1>BALAJI VILLA</h1>
      </div>
      <p class="para">
        Balaji Villa is one of the famous luxurious 4 bedrooms bunglow in
        Panhala, Kolhapur. We provide Luxurious Bunglow Booking On Rent For
        Events , Functions ,Celebrations , Family Holiday. 4 A/C Master Bedrooms
        With Attach Toilets can accommodate up-to 25 people with Extra beds.
        Fully Equipped kitchen available. Provision for Party up-to 200 people
        in Garden area.
      </p>
      <h4 class="title">:: Contact Us ::</h4>
      <p class="text">+91 93 7373 1717 | +91 89 7598 8689</p>
      <button class="gallery-btn" @click="$router.push('/gallery')">
        VIEW GALLERY
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
      images: [
        '/gallery/3.jpg',
        '/gallery/8.jpg',
        '/gallery/25.jpg',
        '/gallery/21.jpg',
      ],
      activeIndex: 0,
      imageUrl: '',
    }
  },
  mounted() {
    this.bgImage()
  },
  methods: {
    bgImage() {
      setInterval(() => {
        this.activeIndex < this.images.length - 1
          ? this.activeIndex++
          : (this.activeIndex = 0)
      }, 4000)
    },
  },
}
</script>

<style lang="scss" scoped>
#hero {
  position: relative;
  width: 100%;
  height: 90vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: 1s ease all;
  .overlay {
    background: rgba(0, 0, 0, 0.493);
    position: absolute;
    width: 100%;
    height: 100%;
  }
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  iframe {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  .content {
    position: absolute;
    left: 50%;
    top: 142px;
    text-align: center;
    transform: translate(-50%, 0);
    font-weight: normal;
    font-size: 14px;
    line-height: 146.69%;
    letter-spacing: 0.12em;
    color: #fff;

    .logo {
      img {
        width: 90px;
        height: 90px;
        object-fit: contain;
      }
      h1 {
        font-weight: normal;
        font-size: 36px;
        line-height: 41px;
        letter-spacing: 0.21em;
        color: #ffffff;
        padding: 10px 0 40px 0;
      }
    }
    .para {
      width: 781px;
      @include for-phone-only {
        width: 350px;
      }
      @include for-tablet-only {
        width: 600px;
      }
    }
    .title {
      margin: 52px 0 17px 0;
    }
    .text {
      font-size: 18px;
      letter-spacing: 0.1em;
      margin-bottom: 52px;
    }
    .gallery-btn {
      border: 1px solid #fff;
      padding: 8px 24px;
      border-radius: 25px;
      color: #fff;
      background-color: transparent;
      text-decoration: none;
      cursor: pointer;
      outline: none;
    }
  }
}
</style>
