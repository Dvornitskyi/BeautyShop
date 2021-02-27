<template>
  <div id="nav mobile-none" class="nav">
    <ul>
      <li>
        <router-link to="/" class="mobile-none">
          <img class="nav__logo " alt="Vue logo" src="../assets/logo.png" />
        </router-link>
      </li>
      <!-- <ul class="nav__TheMakeup">
      <li class="nav__active"> -->
      <li>
        <router-link to="/TheMakeup" class="mobile-none">Макіяж</router-link>
      </li>
      <!-- </li>
      <li class="not-active">2</li>
      <li class="not-active">3</li>
    </ul> -->
      <li>
        <router-link to="/TheHair" class="mobile-none">Волосся</router-link>
      </li>
      <li>
        <router-link to="/TheFace" class="mobile-none">Обличчя</router-link>
      </li>
      <li><router-link to="/TheBody" class="mobile-none">Тіло</router-link></li>
      <li>
        <router-link to="/TheSets" class="mobile-none">Набори</router-link>
      </li>
      <li>
        <router-link to="/TheMen" class="mobile-none">Чоловікам</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TheNavigation",
};
</script>

<style scoped lang="scss">
@media screen and (max-width: 1280px) {
  .nav {
    position: absolute;
    z-index: 300;
    top: 0;
    width: 90px;
    overflow: auto;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    // display: none;
  }
  li {
    // display: none;
    visibility: hidden;
  }
  li:first-child {
    visibility: visible;
    // display: block;
  }
  ul:hover li {
    visibility: visible;
    // display: block;
    // animation-duration: 2s;
    // transition: 5s linear;
    animation-delay: 3s;
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
}
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

p {
  font-family: "Montserrat", sans-serif;
}
//#app
ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
a {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  font-size: 16px;
  font-weight: 600;
}

//#app
li:hover {
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
  li {
    &a.router-link-exact-active {
      color: #42b983;
    }
  }
  li:hover {
    color: purple;
  }
}
a:active {
  color: #42b983;
}
</style>
