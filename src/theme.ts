import { Theme } from '@emotion/react';

export const image = {
  app_store: require('../src/assets/image/app_store.png'),
  google_play_store: require('../src/assets/image/google_play_store.png'),
  profile_image: require('../src/assets/image/profile_image.jpeg'),
  profile: require('../src/assets/image/profile.jpg'),
};

export const AppTheme: Theme = {
  image,
  color: {
    white: '#fff',
    gray: '#333333',
    yellow: '#FFDC5E',
    card: '#1e2937',
    chip: '#24ddb9',
  },
};
