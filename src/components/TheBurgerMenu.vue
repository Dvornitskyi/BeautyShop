<template>
  <div id="TheBurgerMenu mobile-none" class="burger">
    <!-- <img
      class="menu__close"
      alt="menu__close"
      src="../assets/menu-delete.png"
    /> -->

    <!-- <a class="log" href="/"><span class="logo">Cahee</span></a> -->
    <label class="menu mobile-none">
      <input class="menu__input mobile-none" type="checkbox" />
      <router-link to="/" class="log mobile-none">
        <img
          class="logo-image logo mobile-none"
          alt="Vue logo"
          src="../assets/logo.png"
        />
      </router-link>
      <span class="menu__burger burger mobile-none">
        <img
          id="revers"
          class="burger__image mobile-none"
          src="../assets/menu-list.png"
          alt="burger"
        />
      </span>
      <!-- MENU LIST -->
      <span class="menu__box mobile-none">
        <span class="menu__list mobile-none">
          <span class="menu__item mobile-none">
            <router-link to="/TheMakeup" class="menu__link mobile-none"
              >Макіяж</router-link
            >
          </span>
          <span class="menu__item mobile-none">
            <router-link to="/TheHair" class="menu__link mobile-none"
              >Волосся</router-link
            >
          </span>
          <span class="menu__item mobile-none">
            <router-link to="/TheFace" class="menu__link mobile-none"
              >Обличчя</router-link
            >
          </span>
          <span class="menu__item mobile-none">
            <router-link to="/TheBody" class="menu__link mobile-none"
              >Тіло</router-link
            >
          </span>
          <span class="menu__item mobile-none">
            <router-link to="/TheSets" class="menu__link mobile-none"
              >Набори</router-link
            >
          </span>
          <span class="menu__item mobile-none">
            <router-link to="/TheMen" class="menu__link mobile-none"
              >Чоловікам</router-link
            >
          </span>
        </span>
      </span>
    </label>
  </div>
</template>

<script>
export default {
  name: "TheBurgerMenu",
};
</script>

<style scoped lang="scss">
.mobile-none {
  display: none;
}
@media screen and (max-width: 1280px) {
  .mobile-none {
    display: block;
  }
  $style: menu;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  // .menu__images {
  //   width: 100%;
  //   display: flex;
  //   justify-content: space-around;
  //   align-items: center;
  // }
  .burger {
  }
  .logo-image {
    height: 27px;
    width: 27px;
  }
  .#{$style} {
    height: 100%;
    display: flex;
    // flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
    background-color: white;
    /*@include media {
    display: none;
  }*/
    top: -110px;
    left: 0;
    z-index: 9;
    &__input {
      position: absolute;
      z-index: -1;
      left: 4px;
      top: 4px;
      visibility: hidden;
      opacity: 0;
      &:checked ~ .#{$style}__box {
        visibility: visible;
        // display: block;
        background-color: rgba(black, 0.5);
        .#{$style}__list {
          transform: translateX(0);
        }
      }
    }
    &__burger {
      //align-self: center;
      cursor: pointer;
      position: relative;
      z-index: 9991;
    }
    &__box {
      top: 100%;
      right: 0;
      left: 0;
      top: 71px;
      bottom: 0;
      position: fixed;
      width: 100%;
      background-color: transparent;
      visibility: hidden;
      // display: none;
      // @include transition(visibility, opacity, background-color);
      transition-duration: 1s;
      // animation-name: fadeIn;
      // animation-duration: 1s;
      // animation-timing-function: ease;
    }
    &__list {
      padding: 24px 0;
      transform: translateX(200%);
      background-color: white;
      width: 100%;
      display: flex;
      flex-direction: column;
      // @include transition(transform);
    }
    &__item {
      width: 100%;
      &:not(:last-of-type) {
        margin-bottom: 14px;
      }
    }
    &__link {
      width: 100%;
      padding: 12px 24px;
    }
  }
  .burger__image {
    width: 30px;
    height: 30px;
  }
  .log {
    //@include flex(center, flex-start);
    float: left;
    padding-top: 5px;
    //@include flex(center, center);
  }
  .logo {
    //   font-family: $base-font-log;
    font-size: 30px;
    font-weight: 400;
    color: black;
  }
  .menu__color {
    color: black;
  }
  /*.menu__burger {
  @include flex(center, center);
}*/
  .nav {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    height: 72px;
    width: 100%;
    background-color: white;
    box-shadow: 0 2px 10px 0 rgba(black, 0.42);
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 5;
  }
}
</style>
