import { Theme } from '@emotion/react';

export const font = {};

export const image = {
  keyboard: require('../src/assets/image/keyboard.jpg'),
  project: require('../src/assets/image/project.jpg'),
};

export const icon = {};

export const AppTheme: Theme = {
  name: 'lightTheme',
  image,
  icon,
  color: {
    black: '#000',
    white: '#fff',
    red: '#EB4250',
    gray: '#878787',
    yellow: '#FFDC5E',
    sky_100: '#97c4f8',
    sky_200: '#85bbf7',
    sky_300: '#74b1f6',
    sky_400: '#529EF4',
    divider: '#cccccc',
    text: '#303030',
    icon: '#303030',
    shadow: '#878787',
    card: '#1a1919',
    chip: '#24ddb9',
    background: '#F9F9F9',
    pin: '#0A0A0A',
    bar: '#ebebeb',
    placeholder: '#cccccc',
  },
};
