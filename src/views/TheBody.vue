<template>
  <div id="TheBody">
    <router-link to="/TheBody" class="TheMakeup__title">
      <!-- <p>
        Волосся
      </p> -->
    </router-link>
    <div class="TheMakeup">
      <div class="TheMakeup__product">
        <router-link to="/product7">
          <img
            class="TheMakeup__image"
            alt="7"
            src="../images/SliderTop/7.jpg"
          />
        </router-link>
        <p>
          Гель-пилинг предназначен для регулярного ухода за комбинированной,
          жирной, пористой и проблемной кожей. 150 грн
        </p>

        <button
          @click="
            increment();
            sumaSum7();
            nameProduct7();
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
  name: "TheBody",
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
