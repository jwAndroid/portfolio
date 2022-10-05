import { memo } from 'react';
import { Helmet } from 'react-helmet-async';

import { Footer, NavigationBar } from '../components';

function Contact() {
  return (
    <>
      <Helmet title="Contact" />

      <NavigationBar />

      <Footer />
    </>
  );
}

export default memo(Contact);