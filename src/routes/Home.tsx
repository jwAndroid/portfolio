import { memo } from 'react';
import { Helmet } from 'react-helmet-async';

import { Footer, Header } from '../components';
import Foreground from '../components/Foreground';

function Home() {
  return (
    <>
      <Helmet title="Home" />

      <Header />

      <Foreground />

      <Footer />
    </>
  );
}

export default memo(Home);
