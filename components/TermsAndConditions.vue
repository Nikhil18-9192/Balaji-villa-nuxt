<template>
  <div id="terms-conditions" @click="$emit('dismiss')">
    <div class="conditions" @click.stop="">
      <h4>Terms And Conditions</h4>
      <ul>
        <li v-for="(item, i) in terms" :key="i">- {{ item }}</li>
      </ul>
      <button @click="$emit('dismiss')">Done</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TermsAndConditions',
  props: ['terms'],
}
</script>

<style lang="scss" scoped>
#terms-conditions {
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.616);
  top: 0;
  left: 0;

  .conditions {
    position: relative;
    background: #f3f3f3;
    border-radius: 13px;
    width: 100%;
    max-width: 370px;
    max-height: 650px;
    margin: 35px auto;
    border-radius: 10px;
    padding: 25px 25px 50px 25px;
    h4 {
      font-weight: normal;
      font-size: 24px;
      line-height: 40px;
      text-align: center;
      letter-spacing: 0.035em;
      margin-bottom: 7px;
    }
    ul {
      list-style: none;
      padding: 0;
      li {
        font-weight: normal;
        font-size: 16px;
        line-height: 23px;
        letter-spacing: 0.035em;
        margin-bottom: 12px;
      }
    }
    button {
      position: absolute;
      right: 25px;
      bottom: 15px;
      border: 1px solid rgb(75, 75, 75);
      width: 125px;
      height: 35px;
      border-radius: 30px;
      cursor: pointer;
      outline: none;
      font-size: 14px;
    }
  }
}
</style>
