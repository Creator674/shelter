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
import Donation from '@/components/MainPage/Donation.vue';
import Landing from '@/components/MainPage/Landing.vue';
import Footer from '@/components/Footer/Footer.vue';
import About from '@/components/MainPage/About.vue';
import Pets from '@/components/MainPage/Pets.vue';
import Help from '@/components/MainPage/Help.vue';

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
