<template>
  <div class="love-wrapper">
    <Header :lightMode="true" />
    <TrueLoveContent />
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer/Footer.vue';
import Header from '../components/Header.vue';
import TrueLoveContent from '../components/TrueLoveContent.vue';

export default {
  components: {
    Footer,
    Header,
    TrueLoveContent,
  },
  name: 'TrueLove',
};

</script>

<style lang="scss" scoped>

</style>
