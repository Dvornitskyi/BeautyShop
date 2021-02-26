<template>
  <div id="TheProducts">
    <div class="TheProducts">
      <router-link to="/TheProducts" class="TheProducts__title">
        <!-- <p>
          Для чоловіків
        </p> -->
      </router-link>
      <img src="../assets/TheProducts.jpg" alt="TheProducts" />
      <p class="TheProducts__text">Вся продукція була перевірена на собі</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheProducts",
};
</script>
<style scoped lang="scss">
img {
  margin: 0 auto;
  width: 600px;
  height: 400px;
  overflow: hidden;
}
.TheProducts {
  display: flex;
  flex-direction: column;
  justify-content: center;
  &__title {
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
  }
  &__text {
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    font-size: 24px;
    font-weight: 600;
  }
}
</style>
