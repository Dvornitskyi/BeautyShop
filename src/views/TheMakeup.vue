<template>
  <div id="TheMakeup">
    <router-link to="/TheMakeup" class="TheMakeup__title">
      <!-- <p>
        Макіяж
      </p> -->
    </router-link>
    <div class="TheMakeup">
      <div class="TheMakeup__product">
        <router-link to="/product5">
          <img
            class="TheMakeup__image"
            alt="5"
            src="../images/SliderTop/5.jpg"
          />
        </router-link>
        <p>
          Мицеллярная пенка для умывания BioWorld для жирной и комбинированной
          кожи, 165 мл🌺 100грн
        </p>

        <button
          @click="
            increment();
            sumaSum5();
            nameProduct5();
          "
          class="TheMakeup__button"
        >
          Купити
        </button>
      </div>
      <div class="TheMakeup__product">
        <router-link to="/product6">
          <img
            class="TheMakeup__image"
            alt="6"
            src="../images/SliderTop/6.jpg"
          />
        </router-link>
        <p>
          Мицеллярная пенка для умывания BioWorld для сухой и чувствительной
          кожи, 165 мл 100 грн
        </p>

        <button
          @click="
            increment();
            sumaSum6();
            nameProduct6();
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
      <div class="TheMakeup__product">
        <router-link to="/product10">
          <img
            class="TheMakeup__image"
            alt="10"
            src="../images/SliderTop/10.jpg"
          />
        </router-link>
        <p>
          Мицеллярная вода 5 в 1. 120 грн
        </p>

        <button
          @click="
            increment();
            sumaSum10();
            nameProduct10();
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
