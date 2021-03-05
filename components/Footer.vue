<template>
  <div id="footer">
    <div class="footer-text">
      <p class="number">+91 93 7373 1717 | +91 89 7598 8689</p>
      <p class="address">
        C S No 643 Opp Panhala Club, Panhala, Maharashtra 416114
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#footer {
  position: relative;
  background: #f9f9f9;
  padding-bottom: 100px;
  padding-top: 40px;
  .footer-text {
    text-align: center;
    font-weight: normal;
    font-size: 18px;
    line-height: 23px;
    text-align: center;
    letter-spacing: 0.1em;
    @include for-phone-only {
      margin-top: 0;
      font-size: 16px;
    }
    .number {
      color: #000000;
      margin-bottom: 20px;
    }
    .address {
      color: #9c9c9c;
    }
  }
}
</style>
