<template>
  <div id="toolbar">
    <div class="menu" v-for="menu in menuItems" :key="menu.name">
      <nuxt-link :to="menu.url">{{ menu.name }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
}
</script>

<style lang="scss" scoped>
#toolbar {
  position: fixed;
  top: 273px;
  left: 88px;
  z-index: 1000;
  .menu {
    position: relative;
    margin-bottom: 30px;
    a {
      color: #fff;
      text-decoration: none;
      font-weight: normal;
      font-size: 14px;
      line-height: 146.69%;
      letter-spacing: 0.12em;
      text-shadow: 1px 1px #0c0b0b7e;
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
}
</style>
