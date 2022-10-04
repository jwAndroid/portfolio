import React, { memo } from 'react';

import { Footer, HeroImg, Navbar, Work } from '../components';

function Home() {
  return (
    <div>
      <Navbar />

      <HeroImg />

      <Work />

      <Footer />
    </div>
  );
}

export default memo(Home);
