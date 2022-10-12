import { memo } from 'react';
import { Helmet } from 'react-helmet-async';

import { Footer, Header, Projects } from '../components';

function Project() {
  return (
    <>
      <Helmet title="Project" />

      <Header />

      <Projects />

      <Footer />
    </>
  );
}

export default memo(Project);
