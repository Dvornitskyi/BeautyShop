<template>
  <div id="app">
    <TheHeader />
    <router-view />
    <div id="nav" class="nav">
      <router-link to="/">
        <img class="app__logo" alt="Vue logo" src="./assets/logo.png" />
      </router-link>
      <ul class="app__TheMakeup">
        <li class="app__active">
          <router-link to="/TheMakeup">Макіяж</router-link>
        </li>
        <li class="not-active">2</li>
        <li class="not-active">3</li>
      </ul>
      <router-link to="/TheHair">Волосся</router-link>
      <router-link to="/TheFace">Обличчя</router-link>
      <router-link to="/TheBody">Тіло</router-link>
      <router-link to="/TheMen">Чоловікам</router-link>
      <router-link to="/TheSets">Набори</router-link>
    </div>
    <theFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style lang="scss">
.app {
  &__logo {
    height: 50px;
    width: 50px;
  }
}
li {
  display: none;
}
li:first-child {
  display: block;
}
li:hover {
  display: block;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
