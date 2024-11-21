import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import router from "./presentation/router";
import store from "./presentation/store";
import i18n from "./presentation/language/i18n";
import { STORE } from "./core/constants/Store";
import axios from "axios";

const app = createApp(App);

app.config.globalProperties.$axios = axios;  // Axios'u global olarak tanımla

app.use(store);
app.use(router);
app.use(i18n);

app.mount("#app");
store.dispatch(STORE.CONTROLLERS);
