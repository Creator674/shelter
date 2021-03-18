<template>
  <section class="pets">
    <h3 class="pets__heading">
      Our friends who<br />
      are looking for a house
    </h3>

    <carousel :items-to-show="3" class="pets-slider" :wrapAround="true" :transition="500">
      <slide class="pets-slide" v-for="pet in pets" :key="pet.id">
        <div class="pets-slide-wrapper">
          <img :src="pet.image" class="pets-slide__img" :alt="pet.name"/>
        </div>
        <p class="pets-slide__name"> {{ pet.name }}</p>
        <ButtonLearn class="pets-slide__btn" :data-id="pet.id"/>
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>

    <ButtonPrimary text="Get to know the rest" class="pets__btn" />
  </section>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import {
  Carousel, Slide, Pagination, Navigation,
} from 'vue3-carousel';

import pets from '../../data/pets';
import ButtonPrimary from '../ButtonPrimary.vue';
import ButtonLearn from '../ButtonLearn.vue';

export default {
  components: {
    ButtonPrimary,
    ButtonLearn,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  name: 'Pets',
  data() {
    return {
      pets,
    };
  },
};
</script>

<style lang="scss">
@import "../../styles/colors.scss";
@import "../../styles/slider.scss";

.pets {
  background-color: $color-light-s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &-slider {
    width: 930px;
    justify-content: space-evenly;
    margin-top: 60px;
  }
  &-slide {
    margin: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 270px;
    background-color: $color-light-xl;
    border-radius: 20px;
    user-select: none;
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
    &__img {
      max-width: 270px;
      max-height: 270px;
      pointer-events: none;
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
