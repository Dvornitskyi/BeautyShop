<template>
  <div id="TheSets">
    <router-link to="/TheSets" class="TheMakeup__title">
      <!-- <p>
        Набори
      </p> -->
    </router-link>
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
        <router-link to="/product2">
          <img
            class="TheMakeup__image"
            alt="2"
            src="../images/SliderTop/2.jpg"
          />
        </router-link>
        <p>
          Набор +плюшевая повязка 310 грн ❤️
        </p>

        <button
          @click="
            increment();
            sumaSum2();
            nameProduct2();
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
        <router-link to="/product4">
          <img
            class="TheMakeup__image"
            alt="4"
            src="../images/SliderTop/4.jpg"
          />
        </router-link>
        <p>
          Мицеллярный бальзам с 3D-активом для придания объёма и интенсивного
          увлажнения волос по всей длине. 1000грн
        </p>

        <button
          @click="
            increment();
            sumaSum4();
            nameProduct4();
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
  name: "TheMakeup",
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
@media screen and (max-width: 1300px) {
  .TheMakeup {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  img {
    height: 150px;
    width: 150px;
    overflow: hidden;
  }
  &__product {
    width: 160px;
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
