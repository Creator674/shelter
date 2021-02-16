<template>
  <footer>
    <section class="footer">
      <Contacts
        v-for="(item, i) in contacts"
        :key="i"
        :contacts="contacts[i]"
        class="footer-item"
      />
      <div class="footer-item image-wrapper">
        <img :src="puppeyImage" alt="puppey" class="footer-item__image" />
      </div>
    </section>
  </footer>
</template>

<script>
import Contacts from './Contacts.vue';
import puppeyImage from '../../assets/footer-puppy.png';
import markerIcon from '../../assets/icons/icon-marker.svg';
import mailIcon from '../../assets/icons/icon-email.svg';
import telIcon from '../../assets/icons/icon-phone.svg';

export default {
  name: 'Footer',
  components: {
    Contacts,
  },
  data() {
    return {
      puppeyImage,
      contacts: [
        {
          heading: 'For questions and suggestions',
          options: [
            {
              icon: mailIcon,
              alt: 'mail',
              text: 'email@shelter.com',
            },
            {
              icon: telIcon,
              alt: 'telephone',
              text: '+13 674 567 75 54',
            },
          ],
        },
        {
          heading: 'We are waiting for your visit',
          options: [
            {
              icon: markerIcon,
              alt: 'marker',
              text: '1 Central Street, Boston (entrance from the store)',
            },
            {
              icon: markerIcon,
              alt: 'marker',
              text: '18 South Park, London ',
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-image: url('../../assets/footer-gradient-background.jpg');
  background-size: 100%;
}
</style>
