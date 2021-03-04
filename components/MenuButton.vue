<template>
  <div id="menu-btn" @click="$store.commit('toggleMenuState')">
    <span class="bar1" :class="[{ animate: menuState }]"></span>
    <span class="bar2" :class="[{ animate: menuState }]"></span>
  </div>
</template>

<script>
export default {
  name: 'MenuButton',
  components: {},
  data() {
    return {
      menuState: false,
    }
  },
  mounted() {},
  methods: {},
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

<style lang="scss" scoped>
#menu-btn {
  z-index: 2000;
  width: 52px;
  height: 52px;
  position: fixed;
  left: 15px;
  top: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-sizing: border-box;
  padding: 4px;
  background: #fff8e860;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 50%;
  display: none;
  @include for-phone-only {
    right: 15px;
    display: flex;
  }
  .bar1 {
    position: absolute;
    width: 24px;
    height: 2px;
    background: #2c2c2c;
    top: 20px;
    transition: 0.3s ease all;

    &.animate {
      background: #2c2c2c;
      transform: rotate(-40deg);
      width: 20px;
      top: 18px;
    }
  }
  .bar2 {
    position: absolute;
    width: 24px;
    height: 2px;
    top: 30px;
    background: #2c2c2c;
    transition: 0.3s ease all;

    &.animate {
      background: #2c2c2c;
      transform: rotate(40deg);
      top: 30px;
      width: 20px;
    }
  }
}
</style>
