<template>
  <section class="pets">
    <h3 class="pets__heading">
      Our friends who<br />
      are looking for a house
    </h3>
    <splide class="pets-slider" :options="options">
      <splide-slide class="pets-slide" v-for="pet in pets" :key="pet.id">
        <div class="pets-slide-wrapper">
          <img :src="pet.image" class="pets-slide__img" :alt="pet.name"/>
        </div>
        <p class="pets-slide__name"> {{ pet.name }}</p>
        <ButtonLearn class="pets-slide__btn" :data-id="pet.id"/>
      </splide-slide>
    </splide>
    <ButtonPrimary text="Get to know the rest" class="pets__btn" />
  </section>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import pets from '../../data/pets';
import ButtonPrimary from '../ButtonPrimary.vue';
import ButtonLearn from '../ButtonLearn.vue';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

export default {
  components: {
    Splide,
    SplideSlide,
    ButtonPrimary,
    ButtonLearn,
  },
  name: 'Pets',
  data() {
    return {
      options: {
        width: 890,
        speed: 500,
        gap: 45,
        perPage: 3,
        perMove: 2,
        pagination: false,
        classes: {
          arrow: 'splide__arrow pets-slider__arrow',
          prev: 'splide__arrow--prev pets-slider__prev',
          next: 'splide__arrow--next pets-slider__next',
        },
      },
      pets,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/colors.scss";

.pets {
  background-color: $color-light-s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &-slider {
    display: flex;
    justify-content: space-evenly;
    margin-top: 60px;
  }
  &-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 270px;
    background-color: $color-light-white;
    border-radius: 20px;
    &__name {
      margin-top: 30px;
      font-family: Georgia, "Times New Roman", Times, serif;
      font-size: 20px;
      line-height: 22px;
      letter-spacing: 0.06em;
      color: $color-dark-l;
    }
    &-wrapper {
      padding-top: 20px;
      width: 270px;
      height: 270px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__btn {
      margin: 30px auto;
    }
    &__img {
      max-width: 270px;
      max-height: 270px;
    }
  }
  &__heading {
    margin-top: 80px;
    max-width: 400px;
    font-family: Georgia, "Times New Roman", Times, serif;
    font-weight: 400;
    font-size: 35px;
    line-height: 45px;
    color: $color-dark-l;
    letter-spacing: 0.06em;
    text-align: center;
  }
  &__btn {
    margin: 60px 0 100px;
  }
}
</style>
