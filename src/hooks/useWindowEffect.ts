import { useEffect, useState } from 'react';

export default function useWindowEffect() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));

    return () => {
      window.removeEventListener('resize', () => {
        return setWindowWidth(window.innerWidth);
      });
    };
  }, [windowWidth]);

  return {
    windowWidth,
  };
}
