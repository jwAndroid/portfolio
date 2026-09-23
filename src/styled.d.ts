import "@emotion/react";

import { image } from "./theme";

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";

declare module "@emotion/react" {
  export interface Theme {
    image: typeof image;
    color: {
      background: string;
      surface: string;
      text: string;
      textSecondary: string;
      border: string;
      yellow: string;
      chip: string;
    };
  }
}
