import { memo } from 'react';
import { Helmet } from 'react-helmet-async';

import { Footer, NavigationBar, StackCard } from '../components';

function Experience() {
  return (
    <>
      <Helmet title="Experience" />

      <NavigationBar />

      <StackCard />

      <Footer />
    </>
  );
}

export default memo(Experience);
