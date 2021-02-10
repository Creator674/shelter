<template>
  <button class="btn--primary">
    {{ content }}
  </button>
</template>

<script>
export default {
  props: {
    text: String,
  },
  data() {
    return {
      content: this.text,
    };
  },
};
</script>

<style lang="scss" scoped>
  @import '../styles/colors.scss';

  .btn {
    &--primary {
      border-radius: 100px;
      padding: 15px 45px;
      text-align: center;
      font-family: Georgia, 'Times New Roman', Times, serif;
      font-weight: 400;
      color: $color-dark-3xl;
      line-height: 22px;
      letter-spacing: 0.06em;
      font-size: 17px;
      background-color: $color-primary;
    }
  }
</style>
