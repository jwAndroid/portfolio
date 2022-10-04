import { memo } from 'react';

import { Background, Footer, NavigationBar } from '../components';

function Home() {
  return (
    <div>
      <NavigationBar />

      <Background />

      <Footer />
    </div>
  );
}

export default memo(Home);
