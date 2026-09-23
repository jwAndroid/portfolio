import { Theme } from "@emotion/react";

export const image = {
  app_store: require("../src/assets/image/app_store.png"),
  google_play_store: require("../src/assets/image/google_play_store.png"),
  profile: require("../src/assets/image/profile.jpg"),
};

const commonTheme = {
  image,
};

export const BlackTheme: Theme = {
  ...commonTheme,
  color: {
    background: "#09090B",
    surface: "#18181B",
    text: "#FAFAFA",
    textSecondary: "#A1A1AA",
    border: "#27272A",
    yellow: "#FACC15",
    chip: "#2DD4BF",
  },
};

export const LightTheme: Theme = {
  ...commonTheme,
  color: {
    background: "#FFFFFF",
    surface: "#F8FAFC",
    text: "#18181B",
    textSecondary: "#71717A",
    border: "#E4E4E7",
    yellow: "#EAB308",
    chip: "#0D9488",
  },
};

export const AppTheme = BlackTheme;
