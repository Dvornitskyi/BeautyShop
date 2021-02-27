<template>
  <div id="product10">
    <div class="product">
      <img class="product__image" alt="10" src="../images/SliderTop/10.jpg" />
      <div class="product__text-button">
        Очищает, увлажняет, успокаивает, смягчает, тонизирует. Цена 120грн
        <button
          @click="
            increment();
            sumaSum10();
            nameProduct10();
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
  name: "product10",
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

<style lang="scss">
// .product {
//   display: flex;
//   justify-content: space-around;
//   padding: 20px;
//   &__image {
//     width: 400px;
//     height: 400px;
//   }
//   &__text-button {
//     width: 400px;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//   }
//   &__button {
//     margin-top: 20px;
//     width: 100%;
//     height: 30px;
//     background-color: purple;
//     color: white;
//   }
// }
</style>
