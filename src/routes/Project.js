import React, { memo } from 'react';

import { Footer, Navbar } from '../components';

function Project() {
  return (
    <div>
      <Navbar />

      <Footer />
    </div>
  );
}

export default memo(Project);
