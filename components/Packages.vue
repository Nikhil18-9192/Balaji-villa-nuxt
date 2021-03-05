<template>
  <div id="packages">
    <div class="title">
      <h1>Packages</h1>
      <img src="title-img2.png" alt="" />
    </div>
    <div class="card-container">
      <PackageCard title="Package 1" price="Rs.2,400 " quantity="PER HEAD">
        <div class="card1">
          <p>Lunch</p>
          <p>Evening Tea</p>
          <p>Dinner</p>
          <p>Stay</p>
          <p>Breakfast</p>
          <p>Veg. / Non Veg.</p>
          <div class="line"></div>
          <p class="bottom-txt">
            Check In : <span style="color: #acacac">12 Noon</span>
          </p>
          <p class="bottom-txt">
            Check Out : <span style="color: #acacac">10 AM</span>
          </p>
        </div>
      </PackageCard>
      <PackageCard title="Package 2" price="Rs. 15,000  " quantity="PER NIGHT">
        <div class="card1">
          <p>
            Accomodation of <br />
            full villa
          </p>
          <div class="line"></div>
          <p>8 Adults + 8 Children</p>
          <p>(below 8 Yrs)</p>
          <p style="color: #acacac; font-size: 18px">OR</p>
          <p>12 Adults</p>
        </div>
      </PackageCard>
      <PackageCard title="Package 3" price="Rs. 55000  " quantity="PER DAY">
        <div class="card1">
          <p>Wedding / Function</p>
          <div class="line"></div>
          <p>250 People</p>
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
  padding: 55px 88px 115px 88px;
  background: #f9f9f9;
  @include for-phone-only {
    padding: 30px;
  }
  @include for-tablet-only {
    padding: 55px 60px 85px 60px;
  }
  .title {
    text-align: center;
    padding-bottom: 70px;
    @include for-phone-only {
      padding-bottom: 30px;
    }
    h1 {
      font-family: 'Tangerine';
      font-weight: normal;
      font-size: 48px;
      line-height: 124.19%;
      letter-spacing: 0.055em;
      text-transform: capitalize;
      color: #515151;
      margin-bottom: 20px;
      @include for-phone-only {
        font-size: 42px;
      }
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
    justify-content: space-around;
  }
  .card1 {
    margin-top: 10px;
    p {
      font-weight: normal;
      font-size: 18px;
      line-height: 178.69%;
      text-align: center;
      letter-spacing: 0.035em;
    }
    .line {
      background: rgb(255, 255, 255);
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 1) 15%,
        rgba(196, 196, 196, 1) 50%,
        rgba(255, 255, 255, 1) 85%
      );
      height: 1px;
      width: 230px;
      margin: 18px auto;
    }
    .bottom-txt {
      font-weight: normal;
      font-size: 14px;
      line-height: 144.39%;
      text-align: center;
      letter-spacing: 0.035em;
    }
  }
}
</style>
