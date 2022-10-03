import React, { memo } from 'react';

import { Footer, HeroImg2, Navbar } from '../components';

function Contact() {
  return (
    <div>
      <Navbar />

      <HeroImg2 heading="Contact" text="this is Contact" />

      <Footer />
    </div>
  );
}

export default memo(Contact);
