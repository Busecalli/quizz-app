<template> 
  <div class="language-switch cursor-pointer">
    <img
      src="/images/turkey.png"
      alt="TR"
      class="flag"
      @click="changeLanguage('tr')"
    />
    <img
      src="/images/england.png"
      alt="EN"
      class="flag"
      @click="changeLanguage('en')"
    />
  </div>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "Layout",
  setup() {
    const { locale } = useI18n();

    const changeLanguage = (lang: string) => {
      locale.value = lang; 
      localStorage.setItem("preferredLanguage", lang); 
    };

    if (localStorage.getItem("preferredLanguage")) {
      locale.value = localStorage.getItem("preferredLanguage")!;
    }

    return {
      changeLanguage,
    };
  },
});
</script>

<style>
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}

.language-switch {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.language-switch img {
  width: 56px;
  height: auto;
  margin: 0 2px;
  cursor: pointer;
  transition: transform 0.2s;
}

.language-switch img:hover {
  transform: scale(1.1);
}
</style>