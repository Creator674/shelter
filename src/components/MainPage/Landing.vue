<template>
  <section class="landing">
    <Header />
    <div class="landing-content">
      <div class="landing-content-wrapper">
        <h2 class="landing-content__heading">Not only people need a house</h2>
        <p class="landing-content__description">
          We offer to give a chance to a little and nice puppy with an extremely
          wide and open heart. He or she will love you more than anybody else in
          the world, you will see!
        </p>
        <ButtonPrimary text="Make a friend" class="landing-content__btn"/>
      </div>
      <img
        src="../../assets/landing-puppy.png"
        alt="puppy"
      />
    </div>
  </section>
</template>

<script>
import ButtonPrimary from '../ButtonPrimary.vue';
import Header from '../Header.vue';

export default {
  name: 'Landing',
  components: {
    Header,
    ButtonPrimary,
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/colors.scss';
.landing {
  padding: 15px 60px 0;
  background-image: url('~@/assets/landing-bg.jpg');
  background-size: 100%;
  &-content {
    margin-top: 40px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    &__heading{
      margin-bottom: 40px;
      max-width: 310px;
      font-family: Georgia, 'Times New Roman', Times, serif;
      font-weight: 400;
      color: $color-light-xl;
      font-size: 44px;
      line-height: 57px;
    }
    &__description {
      margin-bottom: 40px;
      max-width: 460px;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 15px;
      line-height: 24px;
      color: $color-dark-s;
    }
    &__btn {
      margin-bottom: 245px;
    }
  }
}
</style>
