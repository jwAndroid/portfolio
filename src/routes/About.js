import React, { memo } from 'react';

import { Footer, Navbar } from '../components';

function About() {
  return (
    <div>
      <Navbar />

      <Footer />
    </div>
  );
}

export default memo(About);
