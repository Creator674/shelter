<template>
  <div class="pets-view">
    <Header :lightMode="true"/>
    <PetsContent />
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer/Footer.vue';
import Header from '../components/Header.vue';
import PetsContent from '../components/PetsContent.vue';

export default {
  name: 'PetsPage',
  components: {
    Header,
    Footer,
    PetsContent,
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/colors.scss';
.pets-view {
  background-color: $color-light-l;
}
</style>
