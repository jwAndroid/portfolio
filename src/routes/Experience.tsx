import { memo } from 'react';
import { Helmet } from 'react-helmet-async';

import { Footer, NavigationBar } from '../components';

function Experience() {
  return (
    <>
      <Helmet title="Experience" />

      <NavigationBar />

      <Footer />
    </>
  );
}

export default memo(Experience);
