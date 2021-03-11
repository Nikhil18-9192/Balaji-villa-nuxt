<template>
  <div id="footer">
    <div class="footer-text">
      <p class="number">
        <img class="wtsapp" src="/whatsapp.png" alt="" /><a
          target="_blank"
          href="https://api.whatsapp.com/send?phone=9373731717"
          rel="noreferrer"
          >+91 93 7373 1717
        </a>
        |
        <a
          target="_blank"
          href="https://api.whatsapp.com/send?phone=9373731717"
          rel="noreferrer"
        >
          +91 89 7598 8689</a
        >
      </p>
      <p class="address">
        C S No 643 Opp Panhala Club, Panhala, Maharashtra 416114
      </p>
    </div>
    <div class="social-icon">
      <a target="_blank" href="#" rel="noreferrer"
        ><img src="/facebook.svg" alt=""
      /></a>
      <a target="_blank" href="#" rel="noreferrer"
        ><img src="/instagram.svg" alt=""
      /></a>
    </div>
    <div class="branding">
      <h4>
        Designed with 💙 by
        <a target="_blank" href="https://www.formecmedia.com" rel="noreferrer"
          >Formec Media</a
        >
      </h4>
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
  padding-bottom: 20px;
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
      display: flex;
      justify-content: center;
      align-items: center;
      .wtsapp {
        width: 30px;
        height: 30px;
        object-fit: contain;
        margin-right: 15px;
      }
      a {
        color: #000000;
        text-decoration: none;
      }
    }
    .address {
      color: #9c9c9c;
    }
  }
  .social-icon {
    text-align: center;
    padding: 35px 0;
    a {
      text-decoration: none;
      img {
        width: 22px;
        height: 22px;
        margin-right: 10px;
      }
    }
  }
  .branding {
    position: relative;
    width: 100%;
    text-align: center;
    color: rgba(0, 0, 0, 0.575);

    a {
      opacity: 1;
      color: rgb(17, 17, 17);
    }
  }
}
</style>
