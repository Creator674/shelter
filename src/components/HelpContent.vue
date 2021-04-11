<template>
  <section class="help-content">
    <h3 class="help__heading">How you can help</h3>
    <div class="help-container container s--inactive">
      <div class="container__inner">
        <div class="item" v-for="(item, index) in helpSections" :key="index">
          <div class="item__overflow">
            <div class="item__inner">
              <div class="item__bg"></div>
              <div class="item__preview-cont">
                <h2 class="item__heading">{{ item.name }}</h2>
              </div>
              <div class="item__content">
                <div class="item-info-wrapper">
                  <h4 class="item-info__title">{{ item.title }}</h4>
                  <p class="item-info__text">{{ item.text }}</p>
                </div>
                <div class="item__close-btn"></div>
              </div>
            </div>
          </div>
          <div class="item__index">
            <div class="item__index-back">{{ index + 1 }}</div>
            <div class="item__index-front">
              <div class="item__index-overlay" :data-index="index + 1">
                {{ index + 1 }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import helpSections from '../data/helpForm';

export default {
  data() {
    return {
      helpSections,
    };
  },
  mounted() {
    const $cont = document.querySelector('.container');
    const $itemsArr = [].slice.call(document.querySelectorAll('.item'));
    const $closeBtnsArr = [].slice.call(
      document.querySelectorAll('.item__close-btn'),
    );

    setTimeout(() => {
      $cont.classList.remove('s--inactive');
    }, 200);

    $itemsArr.forEach(($item) => {
      $item.addEventListener('click', () => {
        if ($item.classList.contains('s--active')) return;
        $cont.classList.add('s--item-active');
        $item.classList.add('s--active');
      });
    });

    $closeBtnsArr.forEach(($btn) => {
      $btn.addEventListener('click', (e) => {
        e.stopPropagation();
        $cont.classList.remove('s--item-active');
        document.querySelector('.item.s--active').classList.remove('s--active');
      });
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/colors.scss";

.help {
  &__heading {
    margin: 80px auto;
    font-family: Georgia, "Times New Roman", Times, serif;
    font-weight: 400;
    font-size: 55px;
    line-height: 45px;
    color: #545454;
    letter-spacing: 0.06em;
    text-align: center;
  }
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

$vertPad: 100px;
$sidePad: 70px;

$numOfItems: 5;
$itemMrg: 1%;

$initAT: 1s;
$initDelayStep: 0.1s;
$fullInitAT: $initAT + $initDelayStep * ($numOfItems - 1);
$moveAT: 0.6s;
$expandAT: 0.7s;
$expandDelay: 0.1s;
$bgScaleAT: 0.8s;
$fadeoutAT: $moveAT + $expandAT/2;
$indexHoverAT: 0.5s;
$closeBtnAT: 0.3s;
$closeBtnLineDelay: 0.15s;
$fullExpandAT: $moveAT + $expandDelay + $expandAT;
$contentFadeinAT: 0.5s;

@mixin itemHover {
  .item:hover & {
    @content;
  }
}

@mixin itemActive {
  .item.s--active & {
    @content;
  }
}

@mixin containerInactive {
  .container.s--inactive & {
    @content;
  }
}

@mixin containerItemActive {
  .container.s--item-active & {
    @content;
  }
}

.container {
  position: relative;
  overflow: hidden;
  height: 100vh;
  padding: 0px $sidePad $vertPad;

  &__inner {
    position: relative;
    height: 100%;

    &:hover .item__bg:after {
      opacity: 1;
    }
  }
}

.item {
  $itemW: (100% - $itemMrg * ($numOfItems - 1)) / $numOfItems;
  $itemMrgRel: percentage($itemMrg / $itemW);

  position: absolute;
  left: 0;
  top: 0;
  width: $itemW;
  height: 100%;
  background: #252525;
  transition: transform $moveAT $expandAT, width $expandAT,
    opacity $moveAT $expandAT, z-index 0s $moveAT + $expandAT;
  will-change: transform, width, opacity;

  &:not(.s--active) {
    cursor: pointer;
  }

  &__overflow {
    overflow: hidden;
    position: relative;
    height: 100%;
  }

  &__inner {
    overflow: hidden;
    position: relative;
    height: 100%;
    transition: transform $initAT;

    @include containerInactive {
      transform: translate3d(0, 100%, 0);
    }
  }

  &__bg {
    position: relative;
    width: calc(100vw - #{$sidePad * 2});
    height: 100%;
    transition: transform $moveAT $expandAT;
    will-change: transform;

    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: -5%;
      width: 100%;
      height: 110%;
      background-size: cover;
      background-position: center center;
      transition: transform $initAT;
      transform: translate3d(0, 0, 0) scale(1);

      @include containerInactive {
        transform: translate3d(0, -100%, 0) scale(1.2);
      }

      @include itemActive {
        transition: transform $bgScaleAT;
      }
    }

    &:after {
      $opacityAT: 0.5s;

      content: "";
      z-index: 1;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
      opacity: 0;
      transition: opacity $opacityAT;

      @include containerItemActive {
        transition: opacity $opacityAT $fullExpandAT;
        opacity: 1 !important;
      }
    }
  }

  &__preview-cont {
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transition: all 0.3s $fullInitAT - 0.2s;

    @include containerInactive {
      opacity: 0;
      transform: translateY(10px);
    }

    @include containerItemActive {
      opacity: 0;
      transform: translateY(30px);
      transition: all 0.5s;
    }
  }

  &__heading {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 24px;
    text-transform: uppercase;
    color: $color-light-l;
  }

  &__content {
    z-index: -1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 30px;
    opacity: 0;
    pointer-events: none;
    transition: all 0.1s;

    @include itemActive {
      z-index: 2;
      opacity: 1;
      pointer-events: auto;
      transition: all $contentFadeinAT $fullExpandAT;
    }
  }

  &-info {
    &-wrapper {
      padding-top: 40px;
      width: 100%;
      font-family: Arial, Helvetica, sans-serif;
    }
    &__title {
      max-width: 50%;
      font-size: 50px;
      color: $color-light-s;
      font-weight: bold;
    }
    &__text {
      max-width: 45%;
      padding-top: 40px;
      font-size: 30px;
      font-family: Arial, Helvetica, sans-serif;
      line-height: 40px;
      color: $color-dark-s;
    }
  }

  &__close-btn {
    z-index: -1;
    position: absolute;
    right: 10px;
    top: 20px;
    width: 40px;
    height: 20px;
    opacity: 0;
    pointer-events: none;
    transition: all 0s $closeBtnAT + $closeBtnLineDelay;
    cursor: pointer;

    @include itemActive {
      z-index: 5;
      opacity: 1;
      pointer-events: auto;
      transition: all 0s $fullExpandAT;
    }

    &:before,
    &:after {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      width: 100%;
      height: 8px;
      margin-top: -4px;
      background: $color-dark-s;
      opacity: 0;
      transition: opacity 0s;

      @include itemActive {
        opacity: 1;
      }
    }

    &:before {
      transform: rotate(45deg) translateX(100%);

      @include itemActive {
        transition: all $closeBtnAT $fullExpandAT
          cubic-bezier(0.72, 0.09, 0.32, 1.57);
        transform: rotate(45deg) translateX(0);
      }
    }

    &:after {
      transform: rotate(-45deg) translateX(100%);

      @include itemActive {
        transition: all $closeBtnAT $fullExpandAT + $closeBtnLineDelay
          cubic-bezier(0.72, 0.09, 0.32, 1.57);
        transform: rotate(-45deg) translateX(0);
      }
    }
  }

  &__index {
    overflow: hidden;
    position: absolute;
    left: 0;
    bottom: $vertPad * -1;
    width: 100%;
    height: 100%;
    min-height: 250px;
    text-align: center;
    font-size: 90vw / $numOfItems;
    line-height: 0.85;
    font-weight: bold;
    transition: transform $indexHoverAT,
      opacity $moveAT/2 $expandAT + $expandDelay + $moveAT;
    transform: translate3d(0, 1vw, 0);

    @include itemHover {
      transform: translate3d(0, 0, 0);
    }

    @include containerItemActive {
      transition: transform $indexHoverAT, opacity $moveAT/2;
      opacity: 0;
    }

    &-back,
    &-front {
      font-family: Arial, Helvetica, sans-serif;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      color: $color-primary;
    }

    &-back {
      color: $color-light-s;
      font-family: Arial, Helvetica, sans-serif;
      opacity: 0;
      transition: opacity $indexHoverAT/2 $indexHoverAT/2;

      @include itemHover {
        transition: opacity $indexHoverAT/2;
        opacity: 1;
      }
    }

    &-overlay {
      overflow: hidden;
      position: relative;
      transform: translate3d(0, 100%, 0);
      transition: transform $indexHoverAT 0.1s;
      color: transparent;

      &:before {
        content: attr(data-index);
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        color: $color-primary;
        transform: translate3d(0, -100%, 0);
        transition: transform $indexHoverAT 0.1s;
      }

      @include itemHover {
        transform: translate3d(0, 0, 0);

        &:before {
          transform: translate3d(0, 0, 0);
        }
      }
    }
  }

  @for $i from 0 to $numOfItems {
    &:nth-child(#{$i + 1}) {
      $x: (100% + $itemMrgRel) * $i;
      transform: translate3d($x, 0, 0);
      transform-origin: $x + 50% 50%;

      @include containerItemActive {
        &:not(.s--active) {
          transform: scale(0.5) translate3d($x, 0, 0);
          opacity: 0;
          transition: transform $fadeoutAT, opacity $fadeoutAT;
        }
      }

      .item__inner {
        transition-delay: $initDelayStep * $i;
      }

      .item__bg {
        transform: translate3d($itemW * $i * -1, 0, 0);

        &:before {
          transition-delay: 0.1s * $i;
          background-image: url("~@/assets/helpItemBg--#{$i + 1}.jpeg");
        }
      }
    }
  }

  &:hover {
    .item__bg:after {
      opacity: 0;
    }
  }

  &.s--active {
    z-index: 1;
    width: 100%;
    transform: translate3d(0, 0, 0);
    transition: transform $moveAT, width $expandAT $moveAT + $expandDelay,
      z-index 0s;

    .item__bg {
      transform: translate3d(0, 0, 0);
      transition: transform $moveAT;

      &:before {
        transition-delay: $moveAT;
        transform: scale(1.1);
      }
    }
  }
}
</style>
