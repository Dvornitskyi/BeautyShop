<template>
  <div id="product1">
    <div class="product">
      <img class="product__image" alt="1" src="../images/SliderTop/1.jpg" />
      <div class="product__text-button">
        Мини-электрическая очищающая щетка для лица и гель-мусс для умывания
        всего 290 грн Мини-электрическая очищающая щетка для лица Эта умная
        силиконовая очищающая щетка для лица уменьшает морщины и глубоко очищает
        кожу. Уменьшает мешки под глазами, отечность, темные круги Гель мусс
        деликатно удаляет все виды макияжа (в том числе водостойкий) и
        загрязнения с кожи лица и век. Не раздражает слизистую оболочку глаз.
        Цена 290 грн
        <button
          @click="
            increment();
            sumaSum1();
            nameProduct1();
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
  name: "product1",
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
.product {
  display: flex;
  justify-content: space-around;
  padding: 20px;
  &__image {
    width: 400px;
    height: 400px;
  }
  &__text-button {
    width: 400px;
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
}
</style>
