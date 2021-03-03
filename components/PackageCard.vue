<template>
  <div class="card-wrap">
    <h4>{{ title }}</h4>
    <div class="card-element">
      <div class="card">
        <div class="top">
          <h1>{{ price }}</h1>
          <p>{{ quantity }}</p>
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'price', 'quantity'],
}
</script>

<style lang="scss" scoped>
.card-wrap {
  position: relative;
  @include for-phone-only {
    margin-bottom: 65px;
  }
  h4 {
    font-weight: normal;
    font-size: 18px;
    line-height: 124.19%;
    letter-spacing: 0.415em;
    text-transform: uppercase;
    color: #515151;
    text-align: center;
    margin-bottom: 30px;
  }
  .card-element {
    position: relative;
    filter: drop-shadow(18px 25px 0px rgba(0, 0, 0, 0.09));
  }
  .card {
    height: 463px;
    width: 279px;
    background: #fff;
    clip-path: polygon(100% 0, 100% 80%, 50% 100%, 0 80%, 0 0);
    border: 1px solid #c8c8c8;
    .top {
      background: #fff8e8;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 115px;
      width: 100%;
      border-bottom: 1px solid #c8c8c8;
      h1 {
        font-weight: normal;
        font-size: 32px;
        line-height: 40px;
        text-align: center;
        letter-spacing: 0.035em;
        margin-bottom: 7px;
      }
      p {
        font-weight: normal;
        font-size: 18px;
        line-height: 23px;
        text-align: center;
        letter-spacing: 0.035em;
      }
    }
  }
}
</style>
