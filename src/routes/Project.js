import React, { memo } from 'react';

import { Footer, HeroImg2, Navbar, PricingCard, Work } from '../components';

function Project() {
  return (
    <div>
      <Navbar />

      <HeroImg2 heading="PROJECTS." text="my most recent works" />

      <Work />

      <PricingCard />

      <Footer />
    </div>
  );
}

export default memo(Project);
