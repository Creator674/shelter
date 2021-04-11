<template>
  <div id="div_but">
    <button class="but" id="sit">Sit</button>
    <button class="but" id="sleep">Sleep</button>
    <button class="but" id="strech">Strech</button>
    <button class="but" id="bone">Bone</button>
    <button class="but" id="jump">Jump</button>
    <button class="but" id="walk">Walk</button>
  </div>
  <div id="svgContainer"></div>
</template>

<script>
export default {
  name: 'Loading',
};
</script>

<style lang="scss" scoped>
#svgContainer {
  margin-top: 20px;
  max-width: 500px;
  margin: auto;
}

.but {
  width: 80px;
  color: #000;
  &:hover {
    background-color: darken(#219ada, 10%);
  }
}

#div_but {
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
}
</style>
