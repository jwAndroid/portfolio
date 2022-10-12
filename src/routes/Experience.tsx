import { memo } from 'react';
import { Helmet } from 'react-helmet-async';

import { Chart, Footer, SkillCard } from '../components';

function Experience() {
  return (
    <>
      <Helmet title="Experience" />

      <SkillCard />

      <Chart />

      <Footer />
    </>
  );
}

export default memo(Experience);
