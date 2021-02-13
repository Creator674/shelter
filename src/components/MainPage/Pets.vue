<template>
  <section class="pets">
    <h3 class="pets__heading">
      Our friends who<br />
      are looking for a house
    </h3>
    <splide class="pets-slider" :options="options">

      <splide-slide class="pets-slide">
        <div class="pets-slide-wrapper">
          <img src="../../assets/pet-dog-kira.png" class="pets-slide__img"/>
        </div>
        <p class="pets-slide__name">Kira</p>
        <ButtonLearn class="pets-slide__btn" />
      </splide-slide>

      <splide-slide class="pets-slide">
        <div class="pets-slide-wrapper">
          <img src="../../assets/pet-cat-zoe.png" class="pets-slide__img"/>
        </div>
        <p class="pets-slide__name">Zoe</p>
        <ButtonLearn class="pets-slide__btn" />
      </splide-slide>

      <splide-slide class="pets-slide">
        <div class="pets-slide-wrapper">
          <img src="../../assets/pet-dog-schlat.png" class="pets-slide__img"/>
        </div>
        <p class="pets-slide__name">Schlat</p>
        <ButtonLearn class="pets-slide__btn" />
      </splide-slide>

      <splide-slide class="pets-slide">
        <div class="pets-slide-wrapper">
          <img src="../../assets/pet-cat-cleo.png" class="pets-slide__img"/>
        </div>
        <p class="pets-slide__name">Cleo</p>
        <ButtonLearn class="pets-slide__btn" />
      </splide-slide>

      <splide-slide class="pets-slide">
        <div class="pets-slide-wrapper">
          <img src="../../assets/pet-dog-mone.png" class="pets-slide__img"/>
        </div>
        <p class="pets-slide__name">Mone</p>
        <ButtonLearn class="pets-slide__btn" />
      </splide-slide>

      <splide-slide class="pets-slide">
        <div class="pets-slide-wrapper">
          <img src="../../assets/pet-dog-shepard.png" class="pets-slide__img"/>
        </div>
        <p class="pets-slide__name">Shepard</p>
        <ButtonLearn class="pets-slide__btn" />
      </splide-slide>

      <splide-slide class="pets-slide">
        <div class="pets-slide-wrapper">
          <img src="../../assets/pet-dog-scoopy.png" class="pets-slide__img"/>
        </div>
        <p class="pets-slide__name">Scoopy</p>
        <ButtonLearn class="pets-slide__btn" />
      </splide-slide>

      <splide-slide class="pets-slide">
        <div class="pets-slide-wrapper">
          <img src="../../assets/pet-dog-bella.png" class="pets-slide__img"/>
        </div>
        <p class="pets-slide__name">Bella</p>
        <ButtonLearn class="pets-slide__btn" />
      </splide-slide>

      <splide-slide class="pets-slide">
        <div class="pets-slide-wrapper">
          <img src="../../assets/pet-dog-luna.png" class="pets-slide__img"/>
        </div>
        <p class="pets-slide__name">Luna</p>
        <ButtonLearn class="pets-slide__btn" />
      </splide-slide>

      <splide-slide class="pets-slide">
        <div class="pets-slide-wrapper">
          <img src="../../assets/pet-dog-mambo-jambo.png" class="pets-slide__img"/>
        </div>
        <p class="pets-slide__name">Mambo & Jambo</p>
        <ButtonLearn class="pets-slide__btn" />
      </splide-slide>

      <splide-slide class="pets-slide">
        <div class="pets-slide-wrapper">
          <img src="../../assets/pet-ferret-shrink.png" class="pets-slide__img"/>
        </div>
        <p class="pets-slide__name">Shrink</p>
        <ButtonLearn class="pets-slide__btn" />
      </splide-slide>

      <splide-slide class="pets-slide">
        <div class="pets-slide-wrapper">
          <img src="../../assets/pet-rat-kamycho.png" class="pets-slide__img"/>
        </div>
        <p class="pets-slide__name">Kamycho</p>
        <ButtonLearn class="pets-slide__btn" />
      </splide-slide>

      <splide-slide class="pets-slide">
        <div class="pets-slide-wrapper">
          <img src="../../assets/pet-dog-timote.png" class="pets-slide__img"/>
        </div>
        <p class="pets-slide__name">Timote</p>
        <ButtonLearn class="pets-slide__btn" />
      </splide-slide>

      <splide-slide class="pets-slide">
        <div class="pets-slide-wrapper">
          <img src="../../assets/pet-cat-stormy.png" class="pets-slide__img"/>
        </div>
        <p class="pets-slide__name">Stormy</p>
        <ButtonLearn class="pets-slide__btn" />
      </splide-slide>

      <splide-slide class="pets-slide">
        <div class="pets-slide-wrapper">
          <img src="../../assets/pet-cat-kacey.png" class="pets-slide__img"/>
        </div>
        <p class="pets-slide__name">Kacey</p>
        <ButtonLearn class="pets-slide__btn" />
      </splide-slide>

      <splide-slide class="pets-slide">
        <div class="pets-slide-wrapper">
          <img src="../../assets/pet-cat-will.png" class="pets-slide__img"/>
        </div>
        <p class="pets-slide__name">Will</p>
        <ButtonLearn class="pets-slide__btn" />
      </splide-slide>

      <splide-slide class="pets-slide">
        <div class="pets-slide-wrapper">
          <img src="../../assets/pet-dog-teddy.png" class="pets-slide__img"/>
        </div>
        <p class="pets-slide__name">Teddy</p>
        <ButtonLearn class="pets-slide__btn" />
      </splide-slide>

      <splide-slide class="pets-slide">
        <div class="pets-slide-wrapper">
          <img src="../../assets/pet-dog-coco.png" class="pets-slide__img"/>
        </div>
        <p class="pets-slide__name">Coco</p>
        <ButtonLearn class="pets-slide__btn" />
      </splide-slide>

      <splide-slide class="pets-slide">
        <div class="pets-slide-wrapper">
          <img src="../../assets/pet-beaver-butango.png" class="pets-slide__img"/>
        </div>
        <p class="pets-slide__name">Butango</p>
        <ButtonLearn class="pets-slide__btn" />
      </splide-slide>

      <splide-slide class="pets-slide">
        <div class="pets-slide-wrapper">
          <img src="../../assets/pet-hedgehog-aquila.png" class="pets-slide__img"/>
        </div>
        <p class="pets-slide__name">Aquila</p>
        <ButtonLearn class="pets-slide__btn" />
      </splide-slide>

      <splide-slide class="pets-slide">
        <div class="pets-slide-wrapper">
          <img src="../../assets/pet-dog-woody.png" class="pets-slide__img"/>
        </div>
        <p class="pets-slide__name">Woody</p>
        <ButtonLearn class="pets-slide__btn" />
      </splide-slide>

      <splide-slide class="pets-slide">
        <div class="pets-slide-wrapper">
          <img src="../../assets/pet-panda-tonaku.png" class="pets-slide__img"/>
        </div>
        <p class="pets-slide__name">Tonaku</p>
        <ButtonLearn class="pets-slide__btn" />
      </splide-slide>

      <splide-slide class="pets-slide">
        <div class="pets-slide-wrapper">
          <img src="../../assets/pet-dog-oscar.png" class="pets-slide__img"/>
        </div>
        <p class="pets-slide__name">Oscar</p>
        <ButtonLearn class="pets-slide__btn" />
      </splide-slide>

      <splide-slide class="pets-slide">
        <div class="pets-slide-wrapper">
          <img src="../../assets/pet-squirrel-jamya.png" class="pets-slide__img"/>
        </div>
        <p class="pets-slide__name">Jamya</p>
        <ButtonLearn class="pets-slide__btn" />
      </splide-slide>

      <splide-slide class="pets-slide">
        <div class="pets-slide-wrapper">
          <img src="../../assets/pet-bear-grizz.png" class="pets-slide__img"/>
        </div>
        <p class="pets-slide__name">Grizz</p>
        <ButtonLearn class="pets-slide__btn" />
      </splide-slide>

    </splide>
    <ButtonPrimary text="Get to know the rest" class="pets__btn" />
  </section>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
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
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/colors.scss";

.pets {
  background-color: $color-light-white;
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
    background-color: $color-light-s;
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
