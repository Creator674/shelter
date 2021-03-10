<template>
  <h1>
    <span v-for="(letter, i) in splitWord(word)" :key="i">{{ letter }}</span>
  </h1>
</template>

<script>
export default {
  props: {
    word: String,
  },
  methods: {
    splitWord(text) {
      return text.split('');
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/colors.scss";

h1 {
  cursor: default;
  width: 100%;
  height: 55px;
  margin: auto;
  text-align: center;
}

h1 span {
  position: relative;
  top: 10px;
  animation: bounce .5s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite alternate;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: 400;
  font-size: 27px;
  line-height: 36px;
  color: $color-primary;
  letter-spacing: 0.07em;
  text-shadow: 0 1px 0 rgb(172, 118, 118), 0 2px 0 rgb(172, 118, 118),
    0 3px 0 rgb(172, 118, 118), 0 4px 0 rgb(172, 118, 118), 0 5px 0 rgb(172, 118, 118),
    0 6px 0 transparent , 0 7px 0 transparent, 0 8px 0 transparent,
    0 9px 0 transparent, 0 10px 10px rgba(0, 0, 0, 0.4);
}

h1 span:nth-child(2) {
  animation-delay: 0.1s;
}

h1 span:nth-child(3) {
  animation-delay: 0.2s;
}

h1 span:nth-child(4) {
  animation-delay: 0.3s;
}

h1 span:nth-child(5) {
  animation-delay: 0.4s;
}

h1 span:nth-child(6) {
  animation-delay: 0.5s;
}

h1 span:nth-child(7) {
  animation-delay: 0.6s;
}

h1 span:nth-child(8) {
  animation-delay: 0.7s;
}

h1 span:nth-child(9) {
  animation-delay: 0.8s;
}

h1 span:nth-child(10) {
  animation-delay: 0.9s;
}

h1 span:nth-child(11) {
  animation-delay: 1s;
}

h1 span:nth-child(12) {
  animation-delay: 1.1s;
}

h1 span:nth-child(13) {
  animation-delay: 1.2s;
}

h1 span:nth-child(14) {
  animation-delay: 1.3s;
}

@keyframes bounce {
  100% {
    top: -10px;
    text-shadow: 0 50px 25px rgba(0, 0, 0, 0.2);
  }
}
</style>
