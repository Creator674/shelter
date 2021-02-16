<template>
  <div class="contacts-item">
    <div class="icon-wrapper">
      <img :src="options.icon" :alt="options.alt" class="contacts-item__icon">
    </div>
    <p class="contacts-item__text"> {{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    options: Object,
  },
  data() {
    return {
      text: this.options.text,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/colors.scss';

.contacts-item {
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  &__icon {
    height: 32px;
  }
  &__text {
    margin-left: 32px;
    color: $color-primary;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.06em;
  }
}
</style>
