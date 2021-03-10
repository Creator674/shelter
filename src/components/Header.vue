<template>
  <header :class="{ 'header--mode--light': lightMode }">
    <div class="logo-wrapper"
    :class="{ 'logo-wrapper--mode--light': lightMode }">
      <!-- <h2
        class="logo__title"
        :class="{ 'logo__title--mode--light': lightMode }"
      >
        Cozy House
      </h2> -->
      <JumpingText :word="'Cozy house'"/>
      <p
        class="logo__subtitle"
        :class="{ 'logo__subtitle--mode--light': lightMode }"
      >
        Shelter for pets in London
      </p>
    </div>

    <nav class="nav">
      <ul class="nav-list">
        <li
          v-for="(item, i) in navListItems"
          :key="i"
          class="nav-list__item"
          :class="{ 'nav-list__item--mode--light': lightMode }"
        >
          <router-link
            :to="{ name: item.name }"
            class="nav-list__link"
            :class="{ 'nav-list__link--mode--light': lightMode }"
            >{{item.text}}</router-link
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import navListItems from '../data/navList';
import JumpingText from './JumpingText.vue';

export default {
  props: {
    lightMode: Boolean,
  },
  components: {
    JumpingText,
  },
  name: 'Header',
  data() {
    return {
      navListItems,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/colors.scss";

header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.logo {
  &-wrapper {
    display: flex;
    flex-direction: column;
    &--mode--light {
      margin-left: 40px;
    }
  }
  &__title {
    font-family: Georgia, "Times New Roman", Times, serif;
    font-weight: 400;
    font-size: 26px;
    line-height: 36px;
    color: $color-primary;
    letter-spacing: 0.06em;
    &--mode--light {
      color: $color-dark-l;
    }
  }
  &__subtitle {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 13px;
    line-height: 15px;
    color: $color-light-xl;
    &--mode--light {
      color: $color-dark-3xl;
    }
  }
}
.nav {
  &-list {
    display: flex;
    &__item {
      padding: 0 16px;
      transition: text-decoration 0.5s ease;
    }
    &__link {
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 24px;
      color: $color-dark-s;
      transition: color 0.3s ease-in-out;
      &-mode--light {
        color: $color-dark-l;
      }
    }
    &__link:after {
      display: block;
      content: "";
      border-bottom: solid 2px $color-primary;
      transform: scaleX(0);
      transition: transform 0.3s ease-in-out;
      transform-origin: 100% 50%;
    }
    &__link:hover:after {
      transform: scaleX(1);
      transform-origin: 0 50%;
    }
    &__link:hover {
      color: $color-light-xl;
    }
  }
}
.header--mode--light {
  min-height: 100px;
  background-color: $color-light-xl;
}
.nav-list__link--mode--light:hover {
  color: $color-dark-3xl;
}
</style>
