<template>
  <div class="notfound-view">
    <Dtext :text='data.message' class="error_heading"/>
    <h4 class="error_text">Something really-reallyy bad happend</h4>
  </div>
</template>

<script>
import Dtext from '../components/Dtext.vue';
import data from '../data/NotFound';

export default {
  components: { Dtext },
  name: 'NotFound',
  data() {
    return {
      data,
    };
  },
};
</script>

<style lang="scss" scoped>
.notfound-view {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/404_background.jpeg");
  background-size: cover;
  background-position-x: 100%;
  background-repeat: no-repeat;
}
.error {
  &_heading {
    color: #e0c8b0;
    font-size: 18rem;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }

  &_text {
    padding-top: 10px;
    padding-right: 20px;
    color: #e8c9b3;
    font-size: 1.75rem;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
}
</style>
