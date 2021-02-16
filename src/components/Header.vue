<template>
  <header>
    <div class="logo-wrapper">
      <h2 class="logo__title">Cozy House</h2>
      <p class="logo__subtitle">Shelter for pets in London</p>
    </div>

    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-list__item">
          <a href="#" class="nav-list__link">About the shelter</a>
        </li>
        <li class="nav-list__item">
          <a href="#" class="nav-list__link">Our pets</a>
        </li>
        <li class="nav-list__item">
          <a href="#" class="nav-list__link">Help the shelter</a>
        </li>
        <li class="nav-list__item">
          <a href="#" class="nav-list__link">Contacts</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
@import '../styles/colors.scss';

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
    }
    &__title {
      font-family: Georgia, 'Times New Roman', Times, serif;
      font-weight: 400;
      font-size: 26px;
      line-height: 36px;
      color: $color-primary;
      letter-spacing: 0.06em;
    }
    &__subtitle {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 13px;
      line-height: 15px;
      color: $color-light-xl;
    }
  }
  .nav {
    &-list {
      display: flex;
      &__item {
        padding: 0 16px;
        transition: text-decoration .5s ease;
      }
      &__link {
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 400;
        font-size: 1rem;
        line-height: 24px;
        color: $color-dark-s;
        transition: color .3s ease-in-out;
      }
      &__link:after {
        display:block;
        content: '';
        border-bottom: solid 2px $color-primary;
        transform: scaleX(0);
        transition: transform .3s ease-in-out;
        transform-origin:100% 50%;
      }
      &__link:hover:after {
        transform: scaleX(1);
        transform-origin:0 50%;
      }
      &__link:hover {
        color: $color-light-xl;
      }
    }
  }
</style>
