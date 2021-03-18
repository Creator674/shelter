<template>
  <section class="true-love-content">
    <h3 class="true-love__heading">
      Shelter pets are a little bit of a lot of things, but they’re all pure
      love.
    </h3>

    <SlidingText :words="['Love', 'Save', 'Rescue', 'Adopt']" />

    <div class="stroies-wrapper">
      <div
        class="story"
        v-for="(story, i) in stories"
        :key="i"
        :class="{ 'background--color--gray': i % 2 == 1 }"
      >
        <div class="story-content">
          <h4 class="story-content__title">{{ story.title }}</h4>
          <p class="story-content__text">{{ story.text }}</p>
        </div>
        <div class="story-video-wrapper">
          <iframe
            class="story-video"
            :src="story.video"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import stories from '../data/love';
import SlidingText from './SlidingText.vue';

export default {
  components: { SlidingText },
  data() {
    return {
      stories,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/colors.scss";

.true-love {
  &__heading {
    margin: 80px auto 60px;
    max-width: 60vw;
    font-family: Georgia, "Times New Roman", Times, serif;
    font-weight: 400;
    font-size: 35px;
    line-height: 45px;
    color: #545454;
    letter-spacing: 0.06em;
    text-align: center;
  }
  &-content {
    background-color: $color-light-xl;
  }
}
.story {
  padding: 60px 0;
  display: flex;
  justify-content: center;
  background-color: $color-light-xl;
  &-content {
    width: 35vw;
    margin-right: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &__title {
      font-family: Georgia, "Times New Roman", Times, serif;
      font-weight: 400;
      color: $color-dark-xl;
      font-size: 25px;
      line-height: 35px;
      letter-spacing: 0.06rem;
    }
    &__text {
      padding-top: 20px;
      max-width: 460px;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 15px;
      line-height: 24px;
      color: $color-dark-m;
    }
  }
  &-video {
    width: 500px;
    height: 300px;
    border-radius: 20px;
    &-wrapper {
      height: fit-content;
    }
  }
}
.background--color--gray {
  background-color: $color-light-l;
}
</style>
