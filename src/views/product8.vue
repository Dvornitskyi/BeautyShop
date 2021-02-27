<template>
  <div id="product8">
    <div class="product">
      <img class="product__image" alt="8" src="../images/SliderTop/8.jpg" />
      <div class="product__text-button">
        Гель-пилинг для умывания с AHA кислотами предназначен для регулярного
        ухода за сухой, возрастной и УСТАВШЕЙ кожей.", text: "У этого средства
        нет возрастных ограничений, ведь уставшей может быть и молодая кожа.
        Гель-пилинг обладает мягким отшелушивающим, осветляющим и выравнивающим
        тон действием. Улучшает структуру кожи и повышает проницаемость
        эпидермиса для косметических активов. Гель-пилинг для умывания с AHA
        кислотами предназначен для регулярного ухода за сухой, возрастной и
        УСТАВШЕЙ кожей. У этого средства нет возрастных ограничений, ведь
        уставшей может быть и молодая кожа. Гель-пилинг для умывания с AHA
        кислотами предназначен для регулярного ухода за сухой, возрастной и
        УСТАВШЕЙ кожей. У этого средства нет возрастных ограничений, ведь
        уставшей может быть и молодая кожа. Гель-пилинг обладает мягким
        отшелушивающим, осветляющим и выравнивающим тон действием. Улучшает
        структуру кожи и повышает проницаемость эпидермиса для косметических
        активов. Комплекс натуральных кислот (гликолевая ,молочная, лимонная,
        яблочная, салициловая) комбинация a и b гидроксильных кислот
        растительного происхождения с различной молекулярной массой и
        физиологическими свойствами. Оказывает эффект мягкого химического
        пилинга кожи, освобождая ее от слоя ороговевших клеток и способствуя
        быстрой регенерации, осветляет пигментацию и выравнивает цвет кожи.
        Экстракты лимона и ревеня - оказывают легкое отбеливающее, освежающее и
        успокаивающее действие. Цена 160грн
        <button
          @click="
            increment();
            sumaSum8();
            nameProduct8();
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
  name: "product8",
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
