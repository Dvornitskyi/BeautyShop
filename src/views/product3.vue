<template>
  <div id="product3">
    <div class="product">
      <img class="product__image" alt="3" src="../images/SliderTop/3.jpg" />
      <div class="product__text-button">
        Роликовый массажер для лица с двумя насадками и вибрацией🌺 ⠀Лицевой
        ролик: роликовый валик для лица, стимулирует кровообращение, выработку
        коллагена и уменьшает появление тонких линий и морщин. Пресс-насадка для
        массажа вокруг глаз: помогает снять припухлость глаз и темные круги.
        Перед использованием, пресс-насадку необходимо охлаждать, чтобы улучшить
        действие и уменьшить припухлость вокруг глаз. ДОВЕРЯЙ ТОЛЬКО ПРИРОДЕ!
        уплотняет и подтягивает кожу формирует контур лица уменьшает количество
        морщин стимулирует регенерацию клеток снимает признаки усталости 100%
        натуральный состав для молодости кожи. Уникальное сочетание масел
        обеспечивает роскошный уход и питание для зрелой и «уставшей» кожи,
        возвращает ей тонус и упругость. Ночью эликсир запускает природный
        механизм регенерации клеток, стирая признаки возрастных изменений кожи.
        SOS-продукт в любой стрессовой ситуации для кожи: воздействие УФ-лучей,
        синее излучение, переутомление, авиаперелеты. Цена 250 грн
        <button
          @click="
            increment();
            sumaSum3();
            nameProduct3();
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
  name: "product3",
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
