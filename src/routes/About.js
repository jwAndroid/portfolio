import React, { memo } from 'react';

import { AboutContent, Footer, HeroImg2, Navbar } from '../components';

function About() {
  return (
    <div>
      <Navbar />

      <HeroImg2 heading="ABOUT" text="this is myself" />

      <AboutContent />

      <Footer />
    </div>
  );
}

export default memo(About);
