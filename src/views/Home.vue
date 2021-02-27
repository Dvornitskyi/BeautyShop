<template>
  <div class="home">
    <TheSliperTopProducts />
    <TheSliperNewsProducts />
    <TheSliderMobile />
  </div>
</template>

<script>
// @ is an alias to /src
import TheSliperTopProducts from "../components/TheSliperTopProducts.vue";
import TheSliperNewsProducts from "../components/TheSliperNewsProducts.vue";
import TheSliderMobile from "../components/TheSliderMobile.vue";

export default {
  name: "Home",
  components: {
    TheSliperTopProducts,
    TheSliperNewsProducts,
    TheSliderMobile,
  },
};
</script>
<style scoped lang="scss"></style>
