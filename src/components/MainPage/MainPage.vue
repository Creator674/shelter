<template>
  <Landing />
  <About />
  <Pets />
  <main>
    <div>
      <p>Hello</p>
    </div>
  </main>
  <Footer />
</template>

<script>
import Landing from './Landing.vue';
import Footer from '../Footer.vue';
import About from './About.vue';
import Pets from './Pets.vue';

export default {
  name: 'MainPage',
  components: {
    Landing,
    Footer,
    About,
    Pets,
  },
};
</script>

<style lang="scss" scoped>

</style>
