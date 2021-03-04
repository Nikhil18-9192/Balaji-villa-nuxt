<template>
  <div>
    <Toolbar v-if="$route.path !== '/gallary'" />
    <MenuButton v-if="$route.path !== '/gallary'" />
    <div
      v-if="menuState"
      class="menuModal"
      @click="$store.commit('toggleMenuState')"
    ></div>
    <transition name="slide">
      <PhoneMenu v-if="menuState" />
    </transition>
    <Nuxt />
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuState: false,
    }
  },
  computed: {
    storeMenuState: function () {
      return this.$store.getters.getMenuState
    },
  },
  watch: {
    storeMenuState: function (newState) {
      this.menuState = newState
    },
  },
}
</script>
<style lang="scss">
* {
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
body {
  font-family: 'Marcellus', serif;
  margin: 0;
  padding: 0;
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-track {
    background: #f9f9f9;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
  }
}
h1,
h2,
h3,
h4,
h5,
p {
  padding: 0;
  margin: 0;
}

.menuModal {
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 100;
  background: transparent;
  top: 0;
  left: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.5, 1);
}
.slide-enter,
.slide-leave-to {
  transform: translateX(-100%);
}

.my-page-enter-active,
.my-page-leave-active {
  transition: all 0.3s ease;
}
.my-page-enter,
.my-page-leave-active {
  opacity: 0;
  transform: translateX(-10px);
}
</style>
