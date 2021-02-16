<template>
  <div class="contacts">
    <h3 class="contacts__heading"> {{ heading }}</h3>
    <ContentItem v-for="(option, i) in options" :key="i" :options="option"/>
  </div>
</template>

<script>
import ContentItem from './ContactsItem.vue';

export default {
  props: {
    contacts: Object,
  },
  name: 'Contacts',
  components: {
    ContentItem,
  },
  data() {
    return {
      heading: this.contacts.heading,
      options: this.contacts.options,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/colors.scss';

.contacts {
  max-width: 310px;
  &__heading {
      font-family: Georgia, 'Times New Roman', Times, serif;
      font-weight: 400;
      font-size: 35px;
      line-height: 45px;
      color: $color-light-xl;
      letter-spacing: 0.06em;
  }
}
</style>
