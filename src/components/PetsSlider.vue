<template>
  <splide class="pets-slider" :options="options">
      <splide-slide class="pets-slide" v-for="pet in pets" :key="pet.id">
        <div class="pets-slide-wrapper">
          <img :src="pet.image" class="pets-slide__img" :alt="pet.name"/>
        </div>
        <p class="pets-slide__name"> {{ pet.name }}</p>
        <ButtonLearn class="pets-slide__btn" :data-id="pet.id"/>
      </splide-slide>
    </splide>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import pets from '../data/pets';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

export default {
  name: 'PetsSlider',
  components: {
    Splide,
    SplideSlide,
  },
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

</style>
