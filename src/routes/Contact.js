import React, { memo } from 'react';

import { Footer, Form, HeroImg2, Navbar } from '../components';

function Contact() {
  return (
    <div>
      <Navbar />

      <HeroImg2 heading="Contact" text="this is Contact" />

      <Form />

      <Footer />
    </div>
  );
}

export default memo(Contact);
