<template>
  <div id="app">
    <TheHeader />
    <TheNavigation />
    <router-view />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheNavigation from "@/components/TheNavigation.vue";
import TheFooter from "@/components/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheNavigation,
    TheFooter,
  },
};
</script>

<style lang="scss">
// @import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap");
html {
  padding: 20px;
}
p,
button,
ul,
li,
a,
textarea,
div,
input {
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 16px;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}
a:hover {
  color: purple;
}
</style>
