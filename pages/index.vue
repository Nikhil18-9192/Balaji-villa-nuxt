<template>
  <div id="home-page">
    <Hero />
    <Nearby />
    <Amenities />
    <Packages />
  </div>
</template>

<script>
import Amenities from '~/components/Amenities.vue'
export default {
  components: { Amenities },
}
</script>

<style lang="scss" scoped>
#home-page {
}
</style>
