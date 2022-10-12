import { memo } from 'react';
import { Helmet } from 'react-helmet-async';

import { Footer, Projects } from '../components';

function Project() {
  return (
    <>
      <Helmet title="Project" />

      <Projects />

      <Footer />
    </>
  );
}

export default memo(Project);
