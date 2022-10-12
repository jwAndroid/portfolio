import { memo } from 'react';
import { Helmet } from 'react-helmet-async';

import { Footer, Form, Header } from '../components';

function Contact() {
  return (
    <>
      <Helmet title="Contact" />

      <Header />

      <Form />

      <Footer />
    </>
  );
}

export default memo(Contact);
