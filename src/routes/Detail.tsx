import { memo } from 'react';
import { Helmet } from 'react-helmet-async';

import { Footer, NavigationBar } from '../components';

function Detail() {
  return (
    <>
      <Helmet title="Detail" />

      <NavigationBar />

      <Footer />
    </>
  );
}

export default memo(Detail);
