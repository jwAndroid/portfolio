import { memo } from 'react';
import { Helmet } from 'react-helmet-async';

import { Footer, Form, NavigationBar } from '../components';

function Contact() {
  return (
    <>
      <Helmet title="Contact" />

      <NavigationBar />

      <Form />

      <Footer />
    </>
  );
}

export default memo(Contact);
