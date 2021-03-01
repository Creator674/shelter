<template>
  <section class="pets-content">
    <h3 class="pets-content-heading">
      Our friends who are looking for a house
    </h3>
    <PetsList />
  </section>
</template>

<script>
import PetsList from './PetsList.vue';

export default {
  components: { PetsList },
  name: 'PetsContent',
};
</script>

<style lang="scss" scoped>
@import "../styles/colors.scss";

.pets-content {
  &-heading {
    margin: 80px auto 60px;
    max-width: 400px;
    font-family: Georgia, "Times New Roman", Times, serif;
    font-weight: 400;
    font-size: 35px;
    line-height: 45px;
    color: $color-dark-l;
    letter-spacing: 0.06em;
    text-align: center;
  }
}
</style>
