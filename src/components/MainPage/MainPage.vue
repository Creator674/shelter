<template>
  <Landing />
  <main>
    <About />
    <Pets />
    <Help />
    <Donation />
  </main>
  <Footer />
</template>

<script>
import Landing from './Landing.vue';
import Footer from '../Footer/Footer.vue';
import About from './About.vue';
import Pets from './Pets.vue';
import Help from './Help.vue';
import Donation from './Donation.vue';

export default {
  name: 'MainPage',
  components: {
    Landing,
    Footer,
    About,
    Pets,
    Help,
    Donation,
  },
};
</script>

<style lang="scss" scoped>

</style>
