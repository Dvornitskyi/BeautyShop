<template>
  <div class="footer">
    <div class="footer__top">
      <router-link to="./TheDelivery">Про доставку</router-link>
      <router-link to="./ThePay">Спосіб оплати</router-link>
      <router-link to="./TheProducts">Про продукцию</router-link>
    </div>
    <a
      class="footer__instagram"
      href="https://www.instagram.com/beauty.shop_domka/"
    >
      <img alt="Instagram logo" src="../assets/logo-instagram.jpg" />
    </a>
  </div>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style scoped lang="scss">
img {
  height: 50px;
  width: 50px;
  margin: 30px auto;
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
