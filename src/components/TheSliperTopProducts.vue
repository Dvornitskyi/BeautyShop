<template>
  <div class="slidertop">
    <div id="app">
      <p class="slidertop__title">Хіти продажу</p>
      <vue-glide
        class="slidertop__slider"
        type="carousel"
        :perView="4"
        :autoplay="3000"
      >
        <vue-glide-slide class="slidertop__slid">
          <div class="slidertop__area">
            <router-link to="/Product1">
              <img class="image" alt="1" src="../images/SliderTop/1.jpg" />
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
              class="slidertop__hover"
            >
              Купити
            </button>
          </div>
        </vue-glide-slide>
        <vue-glide-slide class="slidertop__slid">
          <div class="slidertop__area">
            <router-link to="/product2">
              <img class="image" alt="2" src="../images/SliderTop/2.jpg" />
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
              class="slidertop__hover"
            >
              Купити
            </button>
          </div>
        </vue-glide-slide>
        <vue-glide-slide class="slidertop__slid">
          <div class="slidertop__area">
            <router-link to="/product3">
              <img class="image" alt="3" src="../images/SliderTop/3.jpg" />
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
              class="slidertop__hover"
            >
              Купити
            </button>
          </div>
        </vue-glide-slide>
        <vue-glide-slide class="slidertop__slid">
          <div class="slidertop__area">
            <router-link to="/product4">
              <img class="image" alt="4" src="../images/SliderTop/4.jpg" />
            </router-link>
            <p>
              Мицеллярный бальзам с 3D-активом для придания объёма и
              интенсивного увлажнения волос по всей длине. 1000грн
            </p>

            <button
              @click="
                increment();
                sumaSum4();
                nameProduct4();
              "
              class="slidertop__hover"
            >
              Купити
            </button>
          </div>
        </vue-glide-slide>
        <vue-glide-slide class="slidertop__slid">
          <div class="slidertop__area">
            <router-link to="/product5">
              <img class="image" alt="5" src="../images/SliderTop/5.jpg" />
            </router-link>
            <p>
              Мицеллярная пенка для умывания BioWorld для жирной и
              комбинированной кожи, 165 мл🌺 100грн
            </p>

            <button
              @click="
                increment();
                sumaSum5();
                nameProduct5();
              "
              class="slidertop__hover"
            >
              Купити
            </button>
          </div>
        </vue-glide-slide>
        <vue-glide-slide class="slidertop__slid">
          <div class="slidertop__area">
            <router-link to="/product6">
              <img class="image" alt="6" src="../images/SliderTop/6.jpg" />
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
              class="slidertop__hover"
            >
              Купити
            </button>
          </div>
        </vue-glide-slide>
        <vue-glide-slide class="slidertop__slid">
          <div class="slidertop__area">
            <router-link to="/product7">
              <img class="image" alt="7" src="../images/SliderTop/7.jpg" />
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
              class="slidertop__hover"
            >
              Купити
            </button>
          </div>
        </vue-glide-slide>
        <vue-glide-slide class="slidertop__slid">
          <div class="slidertop__area">
            <router-link to="/product8">
              <img class="image" alt="8" src="../images/SliderTop/8.jpg" />
            </router-link>
            <p>
              Гель-пилинг для умывания с AHA кислотами предназначен для
              регулярного ухода за сухой, возрастной и УСТАВШЕЙ кожей. 160 грн
            </p>

            <button
              @click="
                increment();
                sumaSum8();
                nameProduct8();
              "
              class="slidertop__hover"
            >
              Купити
            </button>
          </div>
        </vue-glide-slide>
        <vue-glide-slide class="slidertop__slid">
          <div class="slidertop__area">
            <router-link to="/product9">
              <img class="image" alt="9" src="../images/SliderTop/9.jpg" />
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
              class="slidertop__hover"
            >
              Купити
            </button>
          </div>
        </vue-glide-slide>
        <vue-glide-slide class="slidertop__slid">
          <div class="slidertop__area">
            <router-link to="/product10">
              <img class="image" alt="10" src="../images/SliderTop/10.jpg" />
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
              class="slidertop__hover"
            >
              Купити
            </button>
          </div>
        </vue-glide-slide>
      </vue-glide>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { Glide, GlideSlide } from "vue-glide-js";

export default {
  components: {
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide,
  },
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
.slidertop {
  width: 100%;
  &__title {
    display: flex;
    justify-content: center;
  }
  &__slid {
    margin: 10px;
  }
  &__slid:hover {
    box-shadow: 0px 0px 5px 5px rgba(34, 60, 80, 0.64);
    transition: 0.2s linear;
  }
  &__area {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__area:hover .slidertop__hover {
    visibility: visible;
  }
  &__hover {
    visibility: hidden;
    width: 100%;
    height: 30px;
    background-color: purple;
    color: white;
  }
}
img {
  height: 200px;
  width: 200px;
  // width: 100%;
  // height: 80%;
  overflow: hidden;
}
</style>
