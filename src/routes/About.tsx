import { memo } from 'react';
import { Helmet } from 'react-helmet-async';

import { Footer, NavigationBar } from '../components';

function About() {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>

      <NavigationBar />

      <Footer />
    </>
  );
}

export default memo(About);
