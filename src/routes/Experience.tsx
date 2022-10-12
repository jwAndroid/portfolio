import { memo } from 'react';
import { Helmet } from 'react-helmet-async';

import { Chart, Footer, Header, SkillCard } from '../components';

function Experience() {
  return (
    <>
      <Helmet title="Experience" />

      <Header />

      <SkillCard />

      <Chart />

      <Footer />
    </>
  );
}

export default memo(Experience);
