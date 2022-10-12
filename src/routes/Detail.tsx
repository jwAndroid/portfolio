import { memo } from 'react';
import { Helmet } from 'react-helmet-async';

import { Footer, Header, ProjectDetail } from '../components';

function Detail() {
  return (
    <>
      <Helmet title="Detail" />

      <Header />

      <ProjectDetail />

      <Footer />
    </>
  );
}

export default memo(Detail);
