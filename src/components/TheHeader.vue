<template>
  <div class="header mobile-none">
    <a href="https://www.instagram.com/beauty.shop_domka/">
      <img
        class="header__instagram mobile-none"
        alt="Instagram"
        src="../assets/BeautyShopDomkaInstagram.jpg"
      />
    </a>
    <router-link to="/">
      <img
        class="header__BeautyShop-logo mobile-none"
        alt="BeautyShop logo"
        src="../assets/logo.jpg"
      />
    </router-link>

    <div>
      <router-link to="/TheBasket">
        <img
          class="header__shopping-cart mobile-none"
          alt="shopping cart"
          src="../assets/shopping-cart.png"
        />
      </router-link>
      <span class="mobile mobile-none">{{ count }}</span>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "TheHeader",
  computed: {
    ...mapState(["count", "suma", "nameProduct"]),
  },
  methods: {
    ...mapActions(["increment", "decrement", "reset", "sumaSum"]),
  },
};
</script>

<style scoped lang="scss">
@media screen and (max-width: 1280px) {
  .mobile {
    display: none;
  }
  .header {
    display: none;
    &__instagram {
      display: none;
    }
    &__BeautyShop-logo {
      display: none;
    }
    // &__shopping-cart {
    //   position: absolute;
    //   top: -30px;
    //   right: 0px;
    //   z-index: 999;
    // }
    &__shopping-cart {
      display: none;
    }
  }
}
.mobile {
  position: absolute;
  top: -20px;
  right: 45px;
  color: purple;
  z-index: 4;
}
.header {
  position: relative;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__instagram {
    cursor: pointer;
  }

  &__instagram:hover {
    opacity: 1;
    -webkit-animation: flash 1.5s;
    animation: flash 1.5s;
  }
  @-webkit-keyframes flash {
    0% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes flash {
    0% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
  &__BeautyShop-logo {
    border-radius: 50%;
    position: relative;
    z-index: 2;
    cursor: pointer;
    transition: 3s linear;
  }
  &__BeautyShop-logo:hover {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
  &__shopping-cart {
    cursor: pointer;
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
  }
  &__shopping-cart:hover {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }
}
img {
  height: 100px;
  width: 100px;
}
</style>
