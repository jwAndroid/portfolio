import { memo } from 'react';
import { ThemeProvider } from '@emotion/react';
import { HelmetProvider } from 'react-helmet-async';

import { AppTheme } from './theme';
import GlobalStyle from './GlobalStyle';
import { Screens } from './components';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={AppTheme}>
        <GlobalStyle />

        <Screens />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default memo(App);
