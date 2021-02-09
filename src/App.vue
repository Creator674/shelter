<template>
  <MainPage />
</template>

<script>
import MainPage from './components/MainPage/MainPage.vue';

export default {
  name: 'App',
  components: {
    MainPage,
  },
};
</script>

<style lang="scss">
@import './styles/reset.scss';
@import './styles/body.scss';
</style>
