<template>
  <div id="gallery">
    <div class="route-btn" @click="$router.push('/')">
      <img :src="'/icons/arrow.svg'" alt="" />
      <p>Home</p>
    </div>
    <div class="title">
      <h1>Gallery</h1>
      <img src="title-img2.png" alt="" />
    </div>
    <div class="image-container">
      <div class="image" v-for="(item, i) in images" :key="i">
        <img :src="item" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { images } from '@/utils'
export default {
  name: 'GalleryPage',
  computed: {
    images() {
      return images
    },
  },
}
</script>

<style lang="scss" scoped>
#gallery {
  position: relative;
  width: 100%;
  height: 100%;
  background: url('/gallary-bg1.png') right bottom no-repeat,
    url('/gallary-bg.png') left center no-repeat;
  background-attachment: fixed;
  padding: 60px 155px;
  @include for-phone-only {
    padding: 70px 30px;
  }
  @include for-tablet-only {
    padding: 60px;
  }

  .route-btn {
    display: flex;
    position: fixed;
    top: 110px;
    left: 100px;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    @include for-phone-only {
      top: 25px;
      left: 10px;
    }
    img {
      width: 30px;
      height: 19px;
      object-fit: contain;
    }
    p {
      margin-left: 7px;
      font-weight: normal;
      font-size: 14px;
      line-height: 146.69%;
      text-align: center;
      letter-spacing: 0.12em;
    }
  }
  .title {
    text-align: center;

    h1 {
      font-family: 'Tangerine';
      font-weight: normal;
      font-size: 48px;
      line-height: 124.19%;
      letter-spacing: 0.055em;
      text-transform: capitalize;
      color: #515151;
    }
    img {
      object-fit: contain;
      max-width: 235px;
      width: 100%;
    }
  }
  .image-container {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 60px;
    margin-top: 70px;
    @include for-phone-only {
      grid-template-columns: auto;
      gap: 30px;
    }
    @include for-tablet-only {
      gap: 30px;
    }
    .image {
      width: 100%;
      max-width: 349px;
      height: 193px;
      transition: 0.3s ease all;
      @include for-big-desktop-up {
        max-width: 449px;
        height: 225px;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      &:hover {
        transform: scale(1.08);
        filter: drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.26));
        transition: 0.3s ease all;
      }
    }
  }
}
</style>
