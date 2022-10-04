import { memo } from 'react';

import { Footer, NavigationBar } from '../components';

function Contact() {
  return (
    <div>
      <NavigationBar />

      <Footer />
    </div>
  );
}

export default memo(Contact);
