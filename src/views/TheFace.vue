<template>
  <div id="TheFace">
    <div class="TheMakeup">
      <div class="TheMakeup__product">
        <router-link to="/product1">
          <img
            class="TheMakeup__image"
            alt="1"
            src="../images/SliderTop/1.jpg"
          />
        </router-link>
        <p>
          Мини-электрическая очищающая щетка для лица 💜+ гель-мусс для
          умывания= всего 290 грн 🙈
        </p>

        <button
          @click="
            increment();
            sumaSum1();
            nameProduct1();
          "
          class="TheMakeup__button"
        >
          Купити
        </button>
      </div>
      <div class="TheMakeup__product">
        <router-link to="/product3">
          <img
            class="TheMakeup__image"
            alt="3"
            src="../images/SliderTop/3.jpg"
          />
        </router-link>
        <p>
          Роликовый массажер для лица с двумя насадками и вибрацией🌺 +
          Масло-эликсир =всего 250 грн 🙈
        </p>

        <button
          @click="
            increment();
            sumaSum3();
            nameProduct3();
          "
          class="TheMakeup__button"
        >
          Купити
        </button>
      </div>
      <div class="TheMakeup__product">
        <router-link to="/product8">
          <img
            class="TheMakeup__image"
            alt="8"
            src="../images/SliderTop/8.jpg"
          />
        </router-link>
        <p>
          Гель-пилинг для умывания с AHA кислотами предназначен для регулярного
          ухода за сухой, возрастной и УСТАВШЕЙ кожей. 160 грн
        </p>

        <button
          @click="
            increment();
            sumaSum8();
            nameProduct8();
          "
          class="TheMakeup__button"
        >
          Купити
        </button>
      </div>
      <div class="TheMakeup__product">
        <router-link to="/product9">
          <img
            class="TheMakeup__image"
            alt="9"
            src="../images/SliderTop/9.jpg"
          />
        </router-link>
        <p>
          Деликатно удаляет все виды макияжа (в том числе водостойкий) и
          загрязнения с кожи лица и век. 110 грн
        </p>

        <button
          @click="
            increment();
            sumaSum9();
            nameProduct9();
          "
          class="TheMakeup__button"
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
  name: "TheHair",
  components: {},
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
  .TheMakeup {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #TheFace {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
.TheMakeup {
  display: flex;

  justify-content: space-around;
  &__title {
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
  }
  &__product {
    padding: 10px;
    width: 260px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  &__product:hover {
    box-shadow: 0px 0px 5px 5px rgba(34, 60, 80, 0.64);
    transition: 0.2s linear;
  }
  &__product:hover .TheMakeup__button {
    visibility: visible;
  }
  &__button {
    visibility: hidden;
    width: 100%;
    height: 30px;
    background-color: purple;
    color: white;
  }
}
img {
  height: 250px;
  width: 250px;
  overflow: hidden;
}
</style>
