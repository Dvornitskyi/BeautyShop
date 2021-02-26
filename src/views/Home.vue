<template>
  <div class="home">
    <TheSliperTopProducts />
    <TheSliperNewsProducts />
  </div>
</template>

<script>
// @ is an alias to /src
import TheSliperTopProducts from "../components/TheSliperTopProducts.vue";
import TheSliperNewsProducts from "../components/TheSliperNewsProducts.vue";

export default {
  name: "Home",
  components: {
    TheSliperTopProducts,
    TheSliperNewsProducts,
  },
};
</script>
<style scoped lang="scss"></style>
