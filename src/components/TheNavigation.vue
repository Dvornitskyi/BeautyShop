<template>
  <div id="nav" class="nav">
    <router-link to="/">
      <img class="nav__logo" alt="Vue logo" src="../assets/logo.png" />
    </router-link>
    <!-- <ul class="nav__TheMakeup">
      <li class="nav__active"> -->
    <router-link to="/TheMakeup">Макіяж</router-link>
    <!-- </li>
      <li class="not-active">2</li>
      <li class="not-active">3</li>
    </ul> -->
    <router-link to="/TheHair">Волосся</router-link>
    <router-link to="/TheFace">Обличчя</router-link>
    <router-link to="/TheBody">Тіло</router-link>
    <router-link to="/TheMen">Чоловікам</router-link>
    <router-link to="/TheSets">Набори</router-link>
  </div>
</template>

<script>
export default {
  name: "TheNavigation",
};
</script>

<style scoped lang="scss">
.nav {
  &__logo:hover {
    border-radius: 50%;
    transition: 1s linear;
  }
}
img {
  height: 50px;
  width: 50px;
}
// li {
//   // display: none;
//   visibility: hidden;
// }
// li:first-child {
//   visibility: visible;
// }
// ul:hover li {
//   visibility: visible;
//   // animation-duration: 2s;
//   // transition: 5s linear;
//   animation-delay: 3s;
// }
p {
  font-family: "Montserrat", sans-serif;
}
#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app:hover {
  color: purple;
}
#nav {
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid grey;
  // border-top: 1px solid grey;
  margin-top: 20px;
  #nav:hover {
    border-bottom: 2px solid purple;
  }
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  a:hover {
    color: purple;
  }
}
</style>
