<template>
  <section class="donation">
    <div class="donation">
      <div class="image-wrapper">
        <img :src="DonationDogImage" alt="dog" class="donation__image" />
      </div>

      <div class="donation-info">
        <h3 class="donation-info__heading">You can also make a donation</h3>
        <p class="donation-info__description">Name of the bank / Type of bank account</p>
        <div class="donation-info-card card">
          <div class="card-image-wrapper">
            <img :src="CreditCardIcon" alt="card" class="card__icon" />
          </div>
          <p class="card__number">{{ cardNumber }}</p>
        </div>
        <p class="donation-info__information">
          Legal information and lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Maecenas a ipsum at libero sagittis dignissim sed ac diam. Praesent ultrices
          maximus tortor et vulputate. Interdum et malesuada fames ac ante ipsum primis in
          faucibus.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
const CreditCardIcon = require('../../assets/icons/icon-credit-card.svg');
const DonationDogImage = require('../../assets/donation-dog.png');

export default {
  name: 'Donation',
  data() {
    return {
      cardNumber: '1932 9385 3457 2666 7830',
      DonationDogImage,
      CreditCardIcon,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/colors.scss';

.donation {
  padding: 80px 0 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: $color-light-l;
  &-info {
    margin-left: 30px;
    &__heading {
      max-width: 300px;
      font-family: Georgia, 'Times New Roman', Times, serif;
      font-weight: 400px;
      font-size: 35px;
      line-height: 45px;
      letter-spacing: 0.06rem;
      color: $color-dark-l;
    }
    &__description {
      margin-top: 15px;
      font-family: Georgia, 'Times New Roman', Times, serif;
      font-size: 15px;
      line-height: 16px;
      letter-spacing: 0.06em;
      color: $color-dark-l;
    }
    &-card {
      margin-top: 15px;
      max-width: 315px;
      padding: 10px 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: $color-primary;
      border-radius: 10px;
    }
    &__information {
      margin-top: 10px;
      max-width: 380px;
      font-family: Arial, Helvetica, sans-serif;
      font-style: italic;
      font-size: 12px;
      line-height: 18px;
      color: $color-dark-m;
    }
  }
}
.card__number {
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.06rem;
  color: $color-dark-l;
}
</style>
