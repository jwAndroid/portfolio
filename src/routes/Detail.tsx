import { memo } from 'react';
import { Helmet } from 'react-helmet-async';

import { Footer, ProjectDetail } from '../components';

function Detail() {
  return (
    <>
      <Helmet title="Detail" />

      <ProjectDetail />

      <Footer />
    </>
  );
}

export default memo(Detail);
