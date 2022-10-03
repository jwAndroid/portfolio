import React, { memo } from 'react';
import { HeroImg, Navbar } from '../components';

function Home() {
  return (
    <div>
      <Navbar />

      <HeroImg />
    </div>
  );
}

export default memo(Home);
