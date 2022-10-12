import { memo } from 'react';
import { Helmet } from 'react-helmet-async';

import { Footer, Form } from '../components';

function Contact() {
  return (
    <>
      <Helmet title="Contact" />

      <Form />

      <Footer />
    </>
  );
}

export default memo(Contact);
