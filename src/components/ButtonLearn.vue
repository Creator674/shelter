<template>
  <button class="btn--learn">
    Learn more
  </button>
</template>

<script>
export default {
  name: 'ButtonLearn',
};
</script>

<style lang="scss" scoped>
  @import '../styles/colors.scss';

  .btn {
    &--learn {
      border-radius: 100px;
      border: 2px solid $color-primary;
      padding: 15px 45px;
      text-align: center;
      font-family: Georgia, 'Times New Roman', Times, serif;
      font-weight: 400;
      color: $color-dark-3xl;
      line-height: 22px;
      letter-spacing: 0.06em;
      font-size: 17px;
      background-color: $color-light-white;
    }
  }
</style>
