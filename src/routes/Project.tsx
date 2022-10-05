import { memo } from 'react';
import { Helmet } from 'react-helmet-async';

import { Footer, NavigationBar, ProjectBackground, Work } from '../components';

function Project() {
  return (
    <>
      <Helmet>
        <title>Project</title>
      </Helmet>

      <NavigationBar />

      <ProjectBackground />

      <Work />

      <Footer />
    </>
  );
}

export default memo(Project);
