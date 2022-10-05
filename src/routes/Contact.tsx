import { memo } from 'react';
import { Helmet } from 'react-helmet-async';

import { Footer, NavigationBar } from '../components';

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>

      <NavigationBar />

      <Footer />
    </>
  );
}

export default memo(Contact);
