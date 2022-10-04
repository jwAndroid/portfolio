import { memo } from 'react';

import { Footer, NavigationBar } from '../components';

function About() {
  return (
    <div>
      <NavigationBar />

      <Footer />
    </div>
  );
}

export default memo(About);
