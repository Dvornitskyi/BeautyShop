<template>
  <div id="product6">
    <div class="product">
      <img class="product__image" alt="6" src="../images/SliderTop/6.jpg" />
      <div class="product__text-button">
        Hydromanil (Испания) повышает увлажненность кожи на 31% за 30 минут.
        Нydrovance (Швеция) – мощный природный увлажняющий компонент. Цена
        100грн
        <button
          @click="
            increment();
            sumaSum6();
            nameProduct6();
          "
          class="product__button"
        >
          Купити
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "product6",
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["count", "suma", "nameProduct"]),
  },
  methods: {
    ...mapActions([
      "increment",
      "decrement",
      "reset",
      "sumaSum1",
      "sumaSum2",
      "sumaSum3",
      "sumaSum4",
      "sumaSum5",
      "sumaSum6",
      "sumaSum7",
      "sumaSum8",
      "sumaSum9",
      "sumaSum10",
      "nameProduct1",
      "nameProduct2",
      "nameProduct3",
      "nameProduct4",
      "nameProduct5",
      "nameProduct6",
      "nameProduct7",
      "nameProduct8",
      "nameProduct9",
      "nameProduct10",
    ]),
  },
};
</script>
<style scoped lang="scss">
@media screen and (max-width: 1280px) {
  .product {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.product {
  display: flex;
  justify-content: space-around;
  padding: 20px;
  &__image {
    width: 300px;
    height: 300px;
  }
  &__text-button {
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &__button {
    margin-top: 20px;
    width: 100%;
    height: 30px;
    background-color: purple;
    color: white;
  }
  &__button:hover {
    background-color: green;
  }
}
</style>
