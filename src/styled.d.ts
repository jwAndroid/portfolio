import '@emotion/react';

import { image } from './theme';

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare module '@emotion/react' {
  export interface Theme {
    name: string;
    image: typeof image;
    color: {
      black: string;
      white: string;
      red: string;
      gray: string;
      yellow: string;
      sky_100: string;
      sky_200: string;
      sky_300: string;
      sky_400: string;
      divider: string;
      text: string;
      icon: string;
      shadow: string;
      card: string;
      chip: string;
      background: string;
      pin: string;
      bar: string;
      placeholder: string;
    };
  }
}
