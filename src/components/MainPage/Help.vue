<template>
  <section class="help">
    <h3 class="help__heading">How you can help<br> our shelter</h3>
    <div class="help-content">
      <div class="help-item" v-for="(item, i) in items" :key="i">
        <div class="help-item-icon-wrapper">
          <img :src="item.image" :alt="item.alt" class="help-item__icon">
        </div>
        <p class="help-item__name"> {{ item.text }} </p>
      </div>
    </div>
  </section>
</template>

<script>
import helpItems from '../../data/help';

export default {
  name: 'Help',
  data() {
    return {
      items: helpItems,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/colors.scss';
  .help {
    &__heading {
      text-align: center;
      margin-top: 80px;
      font-family: Georgia, 'Times New Roman', Times, serif;
      font-weight: 400;
      font-size: 35px;
      line-height: 45px;
      color: $color-dark-l;
      letter-spacing: 0.06em;
    }
    &-content {
      margin: 30px 85px 100px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }
    &-item {
      min-width: 150px;
      margin: 50px 50px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transition: filter .2s ease-in-out;
      &__name {
        margin-top: 30px;
        font-family: Georgia, 'Times New Roman', Times, serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: $color-dark-l;
        letter-spacing: 0.06em;
      }
    }
    &-item:hover {
      cursor: pointer;
      filter: invert(86%) sepia(14%) saturate(56%) hue-rotate(339deg) contrast(100%);
    }
  }
</style>
