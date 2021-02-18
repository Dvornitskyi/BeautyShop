<template>
  <div class="header">
    <img alt="Instagram" src="../assets/BeautyShopDomkaInstagram.jpg" />
    <img alt="Vue logo" src="../assets/logo.jpg" />
    <img alt="Vue logo" src="../assets/shopping-cart.png" />
  </div>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style scoped lang="scss">
.header {
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
img {
  height: 100px;
  width: 100px;
}
</style>
