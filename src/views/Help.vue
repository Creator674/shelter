<template>
  <div class="help-view">
    <Header :lightMode="true" />
    <HelpContent />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import HelpContent from '../components/HelpContent.vue';
import Footer from '../components/Footer/Footer.vue';

export default {
  components: {
    Header,
    HelpContent,
    Footer,
  },
  name: 'Help',

};
</script>

<style lang="scss" scoped>

</style>
