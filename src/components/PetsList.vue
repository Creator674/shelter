<template>
  <div class="pet-list">
    <div class="pet-item" v-for="pet in pets" :key="pet.id">
      <div class="pet-wrapper">
        <img :src="pet.image" class="pet-item__img" :alt="pet.name" />
      </div>
      <p class="pet-item__name">{{ pet.name }}</p>
      <ButtonLearn class="pet-item__btn" :data-id="pet.id" />
    </div>
  </div>
</template>

<script>
import pets from '../data/pets';
import ButtonLearn from './ButtonLearn.vue';

export default {
  name: 'PetList',
  components: {
    ButtonLearn,
  },
  data() {
    return {
      pets,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/colors.scss";

.pet {
  background-color: $color-light-l;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin: 60px;
  }
  &-item {
    margin: 40px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 270px;
    background-color: $color-light-s;
    border-radius: 20px;
    &__name {
      margin-top: 10px;
      font-family: Georgia, "Times New Roman", Times, serif;
      font-size: 20px;
      line-height: 22px;
      letter-spacing: 0.06em;
      color: $color-dark-l;
      text-align: center;
    }

    &__btn {
      margin: 30px auto;
    }
    &__img {
      max-width: 270px;
      max-height: 270px;
    }
  }
  &-wrapper {
    padding-top: 20px;
    width: 270px;
    height: 270px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
