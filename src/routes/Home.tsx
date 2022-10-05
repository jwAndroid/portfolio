import { memo } from 'react';
import { Helmet } from 'react-helmet-async';

import { Background, Footer, NavigationBar, Work } from '../components';

function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <NavigationBar />

      <Background />

      <Work />

      <Footer />
    </>
  );
}

export default memo(Home);
