<template>
  <button class="btn--primary" :class="{'btn--jump' : isJump}">
    {{ content }}
  </button>
</template>

<script>
export default {
  props: {
    text: String,
    isAnimated: Boolean,
  },
  data() {
    return {
      content: this.text,
      isJump: this.isAnimated,
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
      transition: background-color, color .5s;
      &:hover {
       cursor: pointer;
       background-color: $color-dark-3xl;
       color: $color-primary;
      }
    }
    &--jump {
      animation: .5s jump ease infinite alternate;
    }
  }

  @keyframes jump {
    0% {
      transform: scale(1);
      box-shadow: 0 1px 2px rgba(0,0,0,.15);
    }
    100% {
      transform: scale(1.1);
      box-shadow: 0 4px 20px rgba(0,0,0,.1);
    }
  }

</style>
