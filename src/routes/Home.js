import React, { memo } from 'react';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default memo(Home);
