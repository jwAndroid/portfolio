import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import { error as enError, main as enMain } from "./locales/en";
import { error as jpError, main as jpMain } from "./locales/jp";
import { error as koError, main as koMain } from "./locales/ko";

type Language = "ko" | "en" | "jp";

const getLanguage = (): Language => {
  const savedLanguage = localStorage.getItem("language");

  if (
    savedLanguage === "ko" ||
    savedLanguage === "en" ||
    savedLanguage === "jp"
  ) {
    return savedLanguage;
  }

  const browserLanguage = window.navigator.language.split("-")[0];

  switch (browserLanguage) {
    case "en":
      return "en";

    case "ja":
      return "jp";

    case "ko":
    default:
      return "ko";
  }
};

const languageResources = {
  ko: {
    main: koMain,
    error: koError,
  },
  en: {
    main: enMain,
    error: enError,
  },
  jp: {
    main: jpMain,
    error: jpError,
  },
};

const savedLanguage = localStorage.getItem("language");

i18next.use(initReactI18next).init({
  lng: savedLanguage || getLanguage(),
  fallbackLng: "en",
  resources: languageResources,
  ns: ["main", "error"],
  defaultNS: "main",
  nsSeparator: ":",
  keySeparator: ".",
});

export const I18n = i18next;
