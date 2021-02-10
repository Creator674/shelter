<template>
  <Landing />
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

export default {
  name: 'MainPage',
  components: {
    Landing,
    Footer,
  },
};
</script>

<style lang="scss" scoped>

</style>
