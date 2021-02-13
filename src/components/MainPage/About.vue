<template>
  <section class="about">
    <img src="../../assets/about-pets.png" alt="pets" />
    <div class="about-content">
      <h3 class="about-content__heading">About the shelter “Cozy House”</h3>
      <p class="about-content__description">
        Currently we have 121 dogs and 342 cats on our hands and statistics show that only
        20% of them will find a family. The others will continue to live with us and will
        be waiting for a lucky chance to become dearly loved.
      </p>
      <p class="about-content__description">
        We feed our wards with the best food and make sure that they do not get sick, feel
        comfortable (including psychologically) and well. We are supported by 87
        volunteers and 28 employees of various skill levels. About 12% of the animals are
        taken by the shelter staff. Taking care of the animals, they become attached to
        the pets and would hardly ever leave them alone.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style lang="scss" scoped>
@import '../../styles/colors.scss';

  .about {
    margin: 80px 0 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    &-content {
      margin-left: 120px;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: center;
      &__heading {
        max-width: 350px;
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-weight: 400;
        font-size: 35px;
        line-height: 45px;
        color: $color-dark-l;
        letter-spacing: 0.06em;
    }
      &__description {
        margin-top: 25px;
        max-width: 430px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 15px;
        line-height: 24px;
        color: $color-dark-xl;
      }
    }
  }
</style>
