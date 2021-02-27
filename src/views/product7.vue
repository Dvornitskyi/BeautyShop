<template>
  <div id="product7">
    <div class="product">
      <img class="product__image" alt="7" src="../images/SliderTop/7.jpg" />
      <div class="product__text-button">
        Обладает мягким отшелушивающим эффектом и антисептическим действием.
        Выравнивает поверхность кожи, повышает проницаемость эпидермиса для
        косметических активов. Активные компоненты: -Бета-гидрокислота (BHA)
        глубоко очищает поры, растворяя жир изнутри, успешно нормализует
        деятельность сальных желез, предотвращает появление акне и снимает
        воспаление -Альфа-гидрокислоты (AHA) эффективно обновляют и разглаживают
        кожу лица, отлично отшелушивают, стимулируют регенерацию кожи, прекрасно
        повышают упругость и эластичность, сокращают морщины, помогают уменьшить
        гиперпигментацию -Экстракты мяты и ревеня обеспечивают освежающее,
        антисептическое, успокаивающее и сужающее поры действие. Цена 150грн.
        <button
          @click="
            increment();
            sumaSum7();
            nameProduct7();
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
  name: "product7",
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
