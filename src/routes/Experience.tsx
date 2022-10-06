import { memo } from 'react';
import { Helmet } from 'react-helmet-async';

import {
  Chart,
  Divider,
  Footer,
  NavigationBar,
  StackCard,
} from '../components';

function Experience() {
  return (
    <>
      <Helmet title="Experience" />

      <NavigationBar />

      <StackCard />

      <Divider />

      <Chart />

      <Footer />
    </>
  );
}

export default memo(Experience);
