<template>
  <div id="packages">
    <div class="title">
      <h1>Packages</h1>
      <img src="title-img2.png" alt="" />
    </div>
    <div class="card-container">
      <PackageCard title="Package 1" price="Rs.2,400 " quantity="PER HEAD">
        <div class="card1">
          <p>Lunch Evening Tea Dinner Stay Breakfast Veg. / Non Veg.</p>
          <hr />
          <p>Check In : 12 Noon Check Out : 10 AM</p>
        </div>
      </PackageCard>
      <PackageCard title="Package 2" price="Rs. 15,000  " quantity="PER NIGHT">
        <div class="card1">
          <p>Lunch Evening Tea Dinner Stay Breakfast Veg. / Non Veg.</p>
          <hr />
          <p>Check In : 12 Noon Check Out : 10 AM</p>
        </div>
      </PackageCard>
      <PackageCard title="Package 3" price="Rs. 55000  " quantity="PER DAY">
        <div class="card1">
          <p>Lunch Evening Tea Dinner Stay Breakfast Veg. / Non Veg.</p>
          <hr />
          <p>Check In : 12 Noon Check Out : 10 AM</p>
        </div>
      </PackageCard>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
#packages {
  position: relative;
  padding: 55px 88px 200px 88px;
  background: #f9f9f9;
  .title {
    text-align: center;
    padding-bottom: 100px;
    h1 {
      font-family: 'Tangerine';
      font-weight: normal;
      font-size: 48px;
      line-height: 124.19%;
      letter-spacing: 0.055em;
      text-transform: capitalize;
      color: #515151;
      margin-bottom: 20px;
    }
    img {
      object-fit: contain;
      max-width: 235px;
      width: 100%;
    }
  }
  .card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .card1 {
    hr {
      background: radial-gradient(
        1149.27% 50% at 50% 50%,
        #000000 0%,
        rgba(255, 255, 255, 0) 99.99%,
        rgba(196, 196, 196, 0) 100%
      );
      height: 1px;
      width: 200px;
    }
  }
}
</style>
