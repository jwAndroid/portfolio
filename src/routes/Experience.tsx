import { memo } from 'react';
import { Helmet } from 'react-helmet-async';

import {
  Chart,
  Divider,
  Footer,
  NavigationBar,
  SkillCard,
} from '../components';

function Experience() {
  return (
    <>
      <Helmet title="Experience" />

      <NavigationBar />

      <SkillCard />

      <Divider />

      <Chart />

      <Footer />
    </>
  );
}

export default memo(Experience);
