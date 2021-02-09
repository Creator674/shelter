<template>
  <Header />
  <main>
    <div>
      <p>Hello</p>
    </div>
  </main>
  <Footer />
</template>

<script>
import Header from '../Header.vue';
import Footer from '../Footer.vue';

export default {
  name: 'MainPage',
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped>

</style>
