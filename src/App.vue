<template>
  <div>
    <h1 v-if="$root.loading">Creepe</h1>
    <router-view v-else v-slot="{ Component }">
      <transition name="scale" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style lang="scss">
@import "./styles/reset.scss";
@import "./styles/colors.scss";

.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
}
</style>
