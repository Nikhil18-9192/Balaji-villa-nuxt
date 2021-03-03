<template>
  <div id="amenities">
    <img class="bg-img" src="plant.png" alt="" />
    <div class="title">
      <h1>Amenities</h1>
      <img src="title-img2.png" alt="" />
    </div>
    <div class="grid-container">
      <div class="col">
        <div class="item" v-for="(item, i) in col1" :key="i">
          <img :src="item.icon" alt="" />
          <p>{{ item.title }}</p>
        </div>
      </div>
      <div class="col">
        <div class="item" v-for="(item, i) in col2" :key="i">
          <img :src="item.icon" alt="" />
          <p>{{ item.title }}</p>
        </div>
      </div>
      <div class="col">
        <div class="item" v-for="(item, i) in col3" :key="i">
          <img :src="item.icon" alt="" />
          <p>{{ item.title }}</p>
        </div>
      </div>
      <div class="col">
        <div class="item" v-for="(item, i) in col4" :key="i">
          <img :src="item.icon" alt="" />
          <p>{{ item.title }}</p>
        </div>
      </div>
      <div class="col-last">
        <div class="item" v-for="(item, i) in col5" :key="i">
          <img :src="item.icon" alt="" />
          <p>{{ item.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      col1: [
        { title: 'parking', icon: '/car.svg' },
        { title: 'parking', icon: '/car.svg' },
        { title: 'parking', icon: '/car.svg' },
      ],
      col2: [
        { title: 'ramp', icon: '/chair.svg' },
        { title: 'ramp', icon: '/chair.svg' },
        { title: 'ramp', icon: '/chair.svg' },
      ],
      col3: [
        { title: 'ac', icon: '/ac.svg' },
        { title: 'ac', icon: '/ac.svg' },
        { title: 'ac', icon: '/ac.svg' },
      ],
      col4: [
        { title: 'first aid', icon: '/first-aid.svg' },
        { title: 'first aid', icon: '/first-aid.svg' },
        { title: 'first aid', icon: '/first-aid.svg' },
      ],
      col5: [
        { title: 'shower', icon: '/shower.svg' },
        { title: 'shower', icon: '/shower.svg' },
        { title: 'shower', icon: '/shower.svg' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
#amenities {
  position: relative;
  padding: 40px 88px 140px 88px;
  @include for-phone-only {
    padding: 40px 30px 40px 30px;
  }
  .bg-img {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 350px;
    @include for-phone-only {
      right: 0px;
    }
    @include for-tablet-only {
      right: 0px;
    }
  }
  .title {
    text-align: center;
    padding-bottom: 100px;
    @include for-phone-only {
      padding-bottom: 30px;
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
    }
    img {
      object-fit: contain;
      max-width: 235px;
      width: 100%;
    }
  }
  .grid-container {
    display: flex;
    // gap: 60px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .col {
      position: relative;
      padding: 0 80px;
      display: flex;
      flex-wrap: wrap;
      gap: 80px;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      min-height: 470px;
      @include for-phone-only {
        padding: 0 30px;
        gap: 30px;
        min-height: 380px;
      }
      @include for-tablet-only {
        padding: 0 60px;
        min-height: 510px;
      }
      .item {
        min-height: 80px;
        text-align: center;
        img {
          height: 40px;
          width: 40px;
          object-fit: contain;
        }
        p {
          margin-top: 30px;
          font-weight: normal;
          font-size: 14px;
          line-height: 18px;
          text-align: center;
          letter-spacing: 0.155em;
          text-transform: uppercase;
          color: #060606;
        }
      }
      &::after {
        content: '';
        background: radial-gradient(
          1149.27% 50% at 50% 50%,
          #a7996f 0%,
          rgba(255, 255, 255, 0) 99.99%,
          rgba(196, 196, 196, 0) 100%
        );
        width: 2px;
        height: 500px;
        position: absolute;
        right: 0;
        top: 0;
        @include for-phone-only {
          display: none;
        }
      }
    }
    .col-last {
      position: relative;
      padding: 0 80px;
      display: flex;
      flex-wrap: wrap;
      gap: 80px;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      min-height: 470px;
      @include for-phone-only {
        padding: 0 45px;
        gap: 60px;
        flex-direction: row;
        min-height: 250px;
      }
      .item {
        min-height: 80px;
        text-align: center;
        img {
          height: 40px;
          width: 40px;
          object-fit: contain;
        }
        p {
          margin-top: 30px;
          font-weight: normal;
          font-size: 14px;
          line-height: 18px;
          text-align: center;
          letter-spacing: 0.155em;
          text-transform: uppercase;
          color: #060606;
        }
      }
    }
  }
}
</style>
