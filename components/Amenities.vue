<template>
  <div id="amenities">
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
        { title: 'Parking', icon: '/icons/parking.svg' },
        { title: 'Ramp', icon: '/icons/ramp.svg' },
        { title: 'AC', icon: '/icons/ac.svg' },
      ],
      col2: [
        { title: 'first aid', icon: '/icons/first-aid.svg' },
        { title: 'shower', icon: '/icons/shower.svg' },
        { title: 'Tata Sky', icon: '/icons/tata_sky.svg' },
      ],
      col3: [
        {
          title: 'Equipped Kitchen',
          icon: '/icons/kitchen.svg',
        },
        { title: 'cctv', icon: '/icons/cctv.svg' },
        { title: 'bbq', icon: '/icons/grill.svg' },
      ],
      col4: [
        { title: 'Bonfire', icon: '/icons/fire.svg' },
        {
          title: 'In-house games',
          icon: '/icons/puzzle.svg',
        },
        { title: 'pet friendly', icon: '/icons/pet.svg' },
      ],
      col5: [
        { title: 'Flat screen TV', icon: '/icons/tv.svg' },
        { title: 'Free WIFI spot', icon: '/icons/wifi.svg' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
#amenities {
  position: relative;
  padding: 40px 88px 140px 88px;
  background-image: url('/plant.png');
  background-repeat: no-repeat;
  background-position: right bottom;
  background-attachment: fixed;
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
      @include for-phone-only {
        font-size: 42px;
      }
    }
    img {
      object-fit: contain;
      max-width: 235px;
      width: 100%;
      height: 100%;
    }
  }
  .grid-container {
    display: flex;
    justify-content: center;
    align-items: center;
    @include for-phone-only {
      flex-direction: column;
      flex-wrap: wrap;
    }
    @include for-tablet-only {
      flex-wrap: wrap;
    }
    .col {
      position: relative;
      padding: 0 30px;
      display: flex;
      flex-wrap: wrap;
      gap: 45px;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      min-height: 470px;
      @include for-phone-only {
        flex-direction: row;
        padding: 0;
        gap: 20px;
        min-height: 170px;
        flex-wrap: nowrap;
      }
      @include for-tablet-only {
        padding: 0 30px;
        min-height: 530px;
      }
      .item {
        height: 125px;
        text-align: center;
        width: 125px;
        padding: 10px;
        border-radius: 8px;
        transition: 0.3s ease all;
        cursor: pointer;
        @include for-phone-only {
          height: 145px;
          width: 90px;
        }
        @include for-tablet-only {
          width: 125px;
        }
        img {
          height: 40px;
          width: 40px;
          object-fit: contain;
        }
        p {
          margin-top: 25px;
          font-weight: normal;
          font-size: 14px;
          line-height: 18px;
          text-align: center;
          letter-spacing: 0.155em;
          text-transform: uppercase;
          color: #060606;
        }
        &:hover {
          box-shadow: 0px 2px 16px rgba(0, 0, 0, 0.109);
          transform: translateY(-4px);
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
        height: 515px;
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
      padding: 0 30px;
      display: flex;
      flex-wrap: wrap;
      gap: 45px;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      min-height: 470px;
      @include for-phone-only {
        flex-direction: row;
        padding: 0;
        gap: 30px;
        min-height: 170px;
      }
      .item {
        height: 125px;
        text-align: center;
        width: 125px;
        padding: 10px;
        border-radius: 8px;
        transition: 0.3s ease all;
        cursor: pointer;
        @include for-phone-only {
          height: 145px;
          width: 90px;
          padding: 10px;
        }
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
          @include for-phone-only {
            margin-top: 20px;
          }
        }
        &:hover {
          box-shadow: 0px 2px 11px -1px rgba(0, 0, 0, 0.2);
          -webkit-box-shadow: 0px 2px 11px -1px rgba(0, 0, 0, 0.2);
          -moz-box-shadow: 0px 2px 11px -1px rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
}
</style>
