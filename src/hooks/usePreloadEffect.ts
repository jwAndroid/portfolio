import { useEffect, useState } from 'react';

import { image } from '../theme';

export default function usePreloadEffect() {
  const [preload, setPreload] = useState(false);

  useEffect(() => {
    const img = new Image();

    img.onload = () => {
      setPreload(true);
    };

    Object.values(image).map((image) => {
      img.src = image;
    });
  }, []);

  return {
    preload,
  };
}
