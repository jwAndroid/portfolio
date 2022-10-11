import { memo } from 'react';
import { Helmet } from 'react-helmet-async';

import { Footer, NavigationBar, ProjectDetail } from '../components';

function Detail() {
  return (
    <>
      <Helmet title="Detail" />

      <NavigationBar />

      <ProjectDetail />

      <Footer />
    </>
  );
}

export default memo(Detail);
