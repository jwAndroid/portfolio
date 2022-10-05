import { useTheme } from '@emotion/react';
import { memo } from 'react';
import { Helmet } from 'react-helmet-async';

import { Background, Footer, NavigationBar } from '../components';

function Home() {
  const theme = useTheme();

  return (
    <>
      <Helmet title="Home" />

      <NavigationBar />

      <Background
        backgroundSource={theme.image.keyboard}
        title="Application Developer"
        subTtitle="JI WOOUNG CHOI"
      />

      <Footer />
    </>
  );
}

export default memo(Home);
