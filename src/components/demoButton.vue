<template>
  <button v-on:click="count++">Счётчик кликов — {{ count }}</button>
</template>

<script>
export default {
  name: "demoButton",
  data: function() {
    return {
      count: 0,
    };
  },
};
</script>

<style lang="scss"></style>
