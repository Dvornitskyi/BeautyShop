<template>
  <div id="product4">
    <div class="product">
      <img class="product__image" alt="4" src="../images/SliderTop/4.jpg" />
      <div class="product__text-button">
        "Мицеллярный бальзам с 3D-активом для придания объёма и интенсивного
        увлажнения волос по всей длине. Восстанавливает структуру волос,
        обеспечивает им дополнительную плотность и утолщение стержня. Не
        утяжеляет. *KERATRIX — запатентованная многофункциональная формула,
        содержащая пептиды и свободные аминокислоты из семян рожкового дерева.
        Имеет 3D-структуру, которая обволакивает поверхность волоса и
        «склеивает» его чешуйки. Утолщает стержень волоса, тем самым придает
        дополнительный ощутимый объем. **МУЦИН ГНЕЗД САЛАНГАНА - инновационный
        актив, богатый микроэлементами и аминокислотами, содержит йод, повышает
        иммунитет кожи и регенерацию тканей. ***КОМПЛЕКС КОНДИЦИОНИРУЮЩИХ
        ДОБАВОК придает волосам эластичность, блеск и ухоженный вид.
        Дополнительный объем + эффективная защита волос от высоких температур с
        активным комплексом нового поколения. Спрей эффективен для "домашнего"
        использования (фен, утюжок) при воздействии температуры до 180оС, а так
        же для профессиональных процедур, которые проводятся при температурах до
        300оС (ламинирование и выпрямление). *SILSOFT AX-E предотвращает
        поднятие чешуек кутикулы, формируя на поверхности волоса защитную
        пленку. Придает волосам исключительную гладкость и дополнительный объем
        без утяжеления. Мицеллярный шампунь с уникальным комплексом активных
        компонентов для объема и интенсивного увлажнения волос по всей длине.
        Великолепно растворяет и удаляет остатки мусса, лака, силиконов, масел и
        загрязнений окружающей среды (выхлопы, токсины). *KERATRIX —
        запатентованная многофункциональная формула, содержащая пептиды и
        свободные аминокислоты из семян рожкового дерева. Имеет 3D-структуру,
        которая обволакивает поверхность волоса и «склеивает» его чешуйки.
        Утолщает стержень волоса, тем самым придает дополнительный объем.
        **МУЦИН ГНЕЗД САЛАНГАНА инновационный актив богатый микроэлементами и
        аминокислотами, содержит йод, повышает иммунитет кожи и регенерацию
        тканей. ***КОМПЛЕКС КОНДИЦИОНИРУЮЩИХ ДОБАВОК придает волосам
        эластичность, блеск, ухоженный вид, снимает статическое электричество.
        Цена 1000 грн
        <button
          @click="
            increment();
            sumaSum4();
            nameProduct4();
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
  name: "product4",
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
