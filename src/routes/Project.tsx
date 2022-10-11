import { useTheme } from '@emotion/react';
import { memo } from 'react';
import { Helmet } from 'react-helmet-async';

import { Background, Footer, NavigationBar, Projects } from '../components';

function Project() {
  const theme = useTheme();

  return (
    <>
      <Helmet title="Project" />

      <NavigationBar />

      <Background backgroundSource={theme.image.project} />

      <Projects />

      <Footer />
    </>
  );
}

export default memo(Project);
