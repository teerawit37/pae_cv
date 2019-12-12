<template>
  <div class="tk-slide-showcase">
    <div class="position-relative">
      <div v-swiper:slideShowcase="swiperOption">
        <div class="swiper-wrapper">
          <div
            v-for="item in data"
            :key="item.id"
            class="swiper-slide"
          >
            <img class="tk-slide-showcase__image swiper-lazy" :src="item.url" alt="showcase image">
          </div>
        </div>
      </div>
      <div
        v-show="showNavigation"
        class="tk-slide-showcase__prev"
        :data-name="name"
      ></div>
      <div
        v-show="showNavigation"
        class="tk-slide-showcase__next"
        :data-name="name"
      ></div>
    </div>
    <div
      v-show="showPagination"
      class="tk-slide-showcase__pagination"
      :data-name="name"
    ></div>
  </div>
</template>

<script>
import get from 'lodash/get'
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    customOption: {
      type: Object,
      required: true,
    },
    showNavigation: {
      type: Boolean,
      default: true,
    },
    showPagination: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isClient: process.client,
    }
  },
  computed: {
    swiperOption() {
      const defaultOption = {
        init: false,
        spaceBetween: 16,
        slidesPerView: 1,
        simulateTouch: true,
        speed: 250,
        freeMode: false,
        watchOverflow: true,
        resistance: true,
        centeredSlides: true,
        navigation: {
          nextEl: `.tk-slide-showcase__next[data-name="${this.name}"]`,
          prevEl: `.tk-slide-showcase__prev[data-name="${this.name}"]`,
        },
        pagination: {
          el: `.tk-slide-showcase__pagination[data-name="${this.name}"]`,
          clickable: true,
        },
        breakpointsInverse: true,
      }

      return { ...defaultOption, ...this.customOption }
    },
  },
  mounted() {
    if (this.isClient) {
      setTimeout(() => {
        this.slideShowcase.init()
        const paginationBullets = get(this.slideShowcase, 'pagination.bullets')
        if (paginationBullets) {
          paginationBullets.each((i, el) => {
            if (!el) {
              return
            }
            el.removeAttribute('role')
          })
        }
      }, 1000)
    }
  },
}
</script>
<style lang="scss">
@import '~swiper/dist/css/swiper';
</style>

<style lang="scss" scoped>
%navigation {
  display: none;
  position: absolute;
  width: 40px;
  height: 40px;
  line-height: 40px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 50%;
  background-color: $--color-white;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  color: $--color-grey-2;
  font-size: 20px;
  z-index: 10;
  &[aria-disabled='false'] {
    cursor: pointer;
    color: $--color-primary;
  }
  &:focus {
    outline: none;
  }
  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @include media-breakpoint-up(lg) {
    display: block;
  }
}
@include block(slide-showcase) {
  position: relative;

  @include element(next) {
    @extend %navigation;
    right: -20px;
    &::after {
      @include icon(st-arrow-right);
    }
  }

  @include element(prev) {
    @extend %navigation;
    left: -20px;
    &::after {
      @include icon(st-arrow-left);
    }
  }
  @include element('image') {
    width: 100%;
    height: 100%;
  }

  @include element(pagination) {
    text-align: center;
    &::v-deep .swiper-pagination-bullet {
      opacity: 1;
      margin: 0 4px;
      width: 8px;
      height: 8px;
      background-color: $--color-grey;
      transform-origin: center;
      transition: width 150ms ease-in-out, background 100ms ease-in-out;
      -webkit-transition: width 150ms ease-in-out, background 100ms ease-in-out;
      border-radius: 30px;
      cursor: pointer;

      &:hover {
        background-color: $--color-black-3;
      }

      &:focus {
        outline: none;
      }

      &-active {
        width: 16px;
        background-color: $--color-primary;
        pointer-events: none;
        outline: none;

        &:hover {
          background-color: $--color-primary;
        }
      }
    }
  }
}
</style>
<style lang="scss">
@include block('swiper-tour') {
  .swiper-slide {
    margin-right: 16px;
    padding: 0;

    &:last-child {
      margin-right: 0px;
    }
  }
}
</style>
