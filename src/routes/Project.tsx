import { useTheme } from '@emotion/react';
import { memo } from 'react';
import { Helmet } from 'react-helmet-async';

import { Background, Footer, NavigationBar, Work } from '../components';

function Project() {
  const theme = useTheme();

  return (
    <>
      <Helmet title="Project" />

      <NavigationBar />

      <Background
        backgroundSource={theme.image.project}
        title="Project"
        subTtitle="Project"
      />

      <Work />

      <Footer />
    </>
  );
}

export default memo(Project);
