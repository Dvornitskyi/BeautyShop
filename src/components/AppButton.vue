<template>
  <button @click="(e) => $emit('click', e)" class="AppButton">
    <icon-arrow class="AppButton__arrow" v-if="arrow" />
    <span class="AppButton__text">
      <slot />
    </span>
  </button>
</template>

<script>
import IconArrow from "../components/icons/IconArrow";
export default {
  name: "AppButton",
  components: {
    IconArrow,
  },
  props: {
    arrow: Boolean,
  },
};
</script>

<style lang="scss"></style>
