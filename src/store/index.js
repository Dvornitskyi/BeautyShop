import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    suma:0,
    nameProduct:""
  },
  mutations: {
    setCount(state, payload) {
      state.count = payload;
    },
    setSuma(state, payload) {
      state.suma = payload;
    },
    setNameProduct(state, payload) {
      state.nameProduct = payload;
    }
  },
  actions: {
    increment({ commit, state }) {
      commit("setCount", state.count + 1);
    },
    decrement({ commit, state }) {
      commit("setCount", state.count - 1);
    },
    reset({ commit }) {
      commit("setCount", 0);
    },
    sumaSum1({ commit, state }) {
      commit("setSuma", state.suma + 290);
    },
    sumaSum2({ commit, state }) {
      commit("setSuma", state.suma + 310);
    },
    sumaSum3({ commit, state }) {
      commit("setSuma", state.suma + 250);
    },
    sumaSum4({ commit, state }) {
      commit("setSuma", state.suma + 1000);
    },
    sumaSum5({ commit, state }) {
      commit("setSuma", state.suma + 100 );
    },
    sumaSum6({ commit, state }) {
      commit("setSuma", state.suma + 100 );
    },
    sumaSum7({ commit, state }) {
      commit("setSuma", state.suma + 150 );
    },
    sumaSum8({ commit, state }) {
      commit("setSuma", state.suma + 160);
    },
    sumaSum9({ commit, state }) {
      commit("setSuma", state.suma + 110);
    },
    sumaSum10({ commit, state }) {
      commit("setSuma", state.suma + 120);
    },
    nameProduct1({ commit, state }) {
      commit("setNameProduct", state.nameProduct + " Мини-электрическая очищающая щетка для лица 💜+ гель-мусс для умывания");
    },
    nameProduct2({ commit, state }) {
      commit("setNameProduct", state.nameProduct + " Набор +плюшевая повязка");
    },
    nameProduct3({ commit, state }) {
      commit("setNameProduct", state.nameProduct + " Набор +плюшевая повязка");
    },
    nameProduct4({ commit, state }) {
      commit("setNameProduct", state.nameProduct + " Набор");
    },
    nameProduct5({ commit, state }) {
      commit("setNameProduct", state.nameProduct + " Мицеллярная пенка для умывания BioWorld для жирной и комбинированной кожи, 165 мл🌺");
    },
    nameProduct6({ commit, state }) {
      commit("setNameProduct", state.nameProduct + " Мицеллярная пенка для умывания BioWorld для сухой и чувствительной кожи, 165 мл");
    },
    nameProduct7({ commit, state }) {
      commit("setNameProduct", state.nameProduct + " Гель-пилинг предназначен для регулярного ухода за комбинированной, жирной, пористой и проблемной кожей.");
    },
    nameProduct8({ commit, state }) {
      commit("setNameProduct", state.nameProduct + " Гель-пилинг для умывания с AHA кислотами предназначен  для регулярного ухода за сухой, возрастной и УСТАВШЕЙ кожей.");
    },
    nameProduct9({ commit, state }) {
      commit("setNameProduct", state.nameProduct + " Гель-мус с гиалуруновой кислотой.");
    },
    nameProduct10({ commit, state }) {
      commit("setNameProduct", state.nameProduct + " Мицеллярная вода 5 в 1.");
    },
  },
  modules: {}
});
