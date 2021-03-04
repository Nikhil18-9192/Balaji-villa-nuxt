<template>
  <div id="toolbar">
    <div class="menu" v-for="menu in menuItems" :key="menu.name">
      <nuxt-link
        :to="menu.url"
        :class="scrollPosition >= 500 ? 'black' : 'white'"
      >
        {{ menu.name }}</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: 0,
      menuItems: [
        {
          name: 'Home',
          url: '#hero',
        },
        {
          name: 'Nearby Attractions',
          url: '#nearby',
        },
        {
          name: 'Amenities',
          url: '#amenities',
        },
        {
          name: 'Packages',
          url: '#packages',
        },
      ],
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      this.scrollPosition = window.pageYOffset
    },
  },
}
</script>

<style lang="scss" scoped>
#toolbar {
  position: fixed;
  top: 273px;
  left: 88px;
  z-index: 1000;
  @include for-phone-only {
    display: none;
  }
  .menu {
    position: relative;
    margin-bottom: 30px;
    a {
      transition: 0.3s ease all;
    }
  }
  .black {
    color: #000;
    text-decoration: none;
    font-weight: normal;
    font-size: 14px;
    line-height: 146.69%;
    letter-spacing: 0.12em;
    &.nuxt-link-exact-active {
      &::after {
        content: '';
        width: 9px;
        position: absolute;
        height: 9px;
        background: #000;
        left: -20px;
        top: 7px;
        border-radius: 50%;
      }
    }
  }
  .white {
    color: #fff;
    text-decoration: none;
    font-weight: normal;
    font-size: 14px;
    line-height: 146.69%;
    letter-spacing: 0.12em;
    &.nuxt-link-exact-active {
      &::after {
        content: '';
        width: 9px;
        position: absolute;
        height: 9px;
        background: #fff;
        left: -20px;
        top: 7px;
        border-radius: 50%;
      }
    }
  }
}
</style>
