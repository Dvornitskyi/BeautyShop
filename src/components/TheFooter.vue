<template>
  <div class="footer">
    <div class="footer__top">
      <router-link to="/TheDelivery">Про доставку</router-link>
      <router-link to="/ThePay">Спосіб оплати</router-link>
      <router-link to="/TheProducts">Про продукцию</router-link>
    </div>
    <a
      class="footer__instagram"
      href="https://www.instagram.com/beauty.shop_domka/"
    >
      <p><img alt="Instagram logo" src="../assets/logo-instagram.jpg" /></p>
    </a>
  </div>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style scoped lang="scss">
@media screen and (max-width: 1280px) {
  .footer {
    &__top {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}
p {
  display: flex;
  justify-content: center;
}
img {
  height: 50px;
  width: 50px;
}
.footer {
  &__top {
    display: flex;
    justify-content: space-around;
  }
}
a {
  font-weight: bold;
  color: #2c3e50;

  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>
