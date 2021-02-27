<template>
  <div id="TheDelivery">
    <div class="TheDelivery">
      <router-link to="/TheDelivery" class="TheDelivery__title">
        <!-- <p>
          Для чоловіків
        </p> -->
      </router-link>
      <img src="../assets/TheDelivery.png" alt="TheDelivery" />
      <p class="TheDelivery__text">Нова пошта, накладний платіж(обов'язково)</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheDelivery",
};
</script>
<style scoped lang="scss">
@media screen and (max-width: 1300px) {
}

img {
  margin: 0 auto;
  width: 70%;
  height: 70%;
  overflow: hidden;
}
.TheDelivery {
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
