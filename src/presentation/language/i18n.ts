import { createI18n } from "vue-i18n";
import tr from "./tr";
import en from "./en";

const messages = {
  tr: tr,
  en: en,
};

const i18n = createI18n({
  legacy: false,
  locale: "tr",
  globalInjection: true,
  messages,
});

export default i18n;
