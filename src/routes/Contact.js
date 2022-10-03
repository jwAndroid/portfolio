import React, { memo } from 'react';

import { Footer, Navbar } from '../components';

function Contact() {
  return (
    <div>
      <Navbar />

      <Footer />
    </div>
  );
}

export default memo(Contact);
