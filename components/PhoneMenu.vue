<template>
  <div id="menu">
    <div
      class="menu-list"
      v-for="menu in menuItems"
      :key="menu.name"
      @click="$store.commit('toggleMenuState')"
    >
      <nuxt-link :to="menu.url"> {{ menu.name }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhoneMenu',
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
#menu {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 175px;
  height: 100vh;
  background: #fff8e8;
  z-index: 100;
  padding: 95px 15px 0 35px;
  border-radius: 4px;
  .menu-list {
    margin-bottom: 40px;
    position: relative;
    a {
      color: #000;
      text-decoration: none;
      font-size: 16px;
      &.nuxt-link-exact-active {
        &::after {
          content: '';
          width: 7px;
          position: absolute;
          height: 7px;
          background: #000;
          left: -20px;
          top: 7px;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
