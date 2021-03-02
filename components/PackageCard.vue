<template>
  <div class="card-wrap">
    <h4>{{ title }}</h4>
    <div class="card">
      <div class="top">
        <h1>{{ price }}</h1>
        <p>{{ quantity }}</p>
      </div>
      <slot></slot>
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
  .card {
    height: 463px;
    width: 279px;
    background: #fff;
    box-shadow: 18px 25px 2px rgba(0, 0, 0, 0.09);
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
    }
  }
}
</style>
