import React, { memo } from 'react';

import { Footer, HeroImg, Navbar } from '../components';

function Home() {
  return (
    <div>
      <Navbar />

      <HeroImg />

      <Footer />
    </div>
  );
}

export default memo(Home);
