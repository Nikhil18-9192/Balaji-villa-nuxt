<template>
  <div id="home-page">
    <Hero />
    <Nearby />
    <Amenities />
    <Packages />
    <Map />
  </div>
</template>

<script>
import Amenities from '~/components/Amenities.vue'
export default {
  components: { Amenities },
}
</script>

<style lang="scss" scoped></style>
