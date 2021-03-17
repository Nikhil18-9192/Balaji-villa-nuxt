<template>
  <div id="packages">
    <div class="title">
      <h1>Packages</h1>
      <img src="title-img2.png" alt="" />
    </div>
    <div class="card-container">
      <PackageCard
        title="Package 1"
        price="Rs.2,200"
        :terms="conditionOne"
        quantity="PER HEAD"
      >
        <div class="card1">
          <p>Lunch</p>
          <p>Hi Tea</p>
          <p>Dinner</p>
          <p>Stay</p>
          <p>Breakfast</p>
          <p>Veg. / Non Veg.</p>
          <div class="line"></div>
          <p class="bottom-txt">
            Check In : <span style="color: #acacac">1 Noon</span>
          </p>
          <p class="bottom-txt">
            Check Out : <span style="color: #acacac">10 AM</span>
          </p>
        </div>
      </PackageCard>
      <PackageCard
        title="Package 2"
        price="Rs. 15,000"
        :terms="conditionTwo"
        quantity="PER NIGHT"
      >
        <div class="card1">
          <p>
            Accomodation of <br />
            full villa
          </p>
          <div class="line"></div>
          <p>8 Adults + 8 Children</p>
          <p>(below 12 Yrs)</p>
          <p style="color: #acacac; font-size: 18px">OR</p>
          <p>12 Adults</p>
        </div>
      </PackageCard>
      <PackageCard
        title="Package 3"
        price="Rs. 50000"
        :terms="conditionThree"
        quantity="PER DAY"
      >
        <div class="card1">
          <p>Wedding</p>
          <p>Office parties</p>
          <p>Corporate functions</p>
          <p>Other family functions</p>
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
    return {
      conditionOne: [
        'Free Upto 6 years',
        '8 years to 12 years 1650 rs per head',
        'ID compulsory',
        'Check in 1 PM',
        'check out 10 AM',
        'Extra charges applicable for any damages',
        'Loud music not allowed after 11 PM',
      ],
      conditionTwo: [
        'Childrens Upto 12 years',
        'Extra person charge 1000 rs per head',
        'ID compulsory',
        'Check in 1pm',
        'check out 10am',
        'Extra charges applicable for any damages',
        'Loud music not allowed after 11pm',
      ],
      conditionThree: [
        '2 days package 75000 rs for wedding',
        '7 AM to 5 PM (1 day)',
        '4 AM to 4 PM (2 days)',
        'Accommodation for 20 people (2 days)',
        'Extra charges applicable for any damages',
        'Loud music not allowed after 11pm',
      ],
    }
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
      height: 100%;
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
