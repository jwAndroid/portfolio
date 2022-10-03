import React, { memo } from 'react';

import { Footer, HeroImg2, Navbar } from '../components';

function About() {
  return (
    <div>
      <Navbar />

      <HeroImg2 heading="ABOUT" text="this is myself" />

      <Footer />
    </div>
  );
}

export default memo(About);
