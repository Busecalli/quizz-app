<template>
  <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
  
  <router-view />
</template>

<style lang="scss">
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "index-page",
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
body {
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
