<template>
  <div id="TheMen">
    <div class="TheMen">
      <router-link to="/TheMen" class="TheMen__title">
        <!-- <p>
          Для чоловіків
        </p> -->
      </router-link>
      <p class="TheMen__text">Товар очікуеться</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheMen",
};
</script>
<style scoped lang="scss">
.TheMen {
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
