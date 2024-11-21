<template> 
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent} from "vue";

export default defineComponent({
  name: "layout",
  setup() {
  },
});
</script>

<style>
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}</style>