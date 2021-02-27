<template>
  <div id="ThePay">
    <div class="ThePay">
      <router-link to="/ThePay" class="ThePay__title">
        <!-- <p>
          Для чоловіків
        </p> -->
      </router-link>
      <img src="../assets/ThePay.jpg" alt="ThePay" />
      <p class="ThePay__text">Працюємо тільки через накладений платіж</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "ThePay",
};
</script>
<style scoped lang="scss">
@media screen and (max-width: 1280px) {
}
img {
  margin: 0 auto;
  width: 70%;
  height: 70%;
  overflow: hidden;
}
.ThePay {
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
