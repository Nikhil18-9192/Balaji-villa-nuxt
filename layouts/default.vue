<template>
  <div>
    <Toolbar />
    <MenuButton />
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
<style>
html {
  scroll-behavior: smooth;
}
body {
  font-family: 'Marcellus', serif;
  margin: 0;
  padding: 0;
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
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.9s cubic-bezier(0.16, 1, 0.5, 1);
}
.slide-enter,
.slide-leave-active {
  transform: translateX(-100%);
}
</style>
