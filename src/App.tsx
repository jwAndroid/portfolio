import { memo } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import { HelmetProvider } from 'react-helmet-async';

import { store } from './redux/store';
import { AppTheme } from './theme';
import GlobalStyle from './GlobalStyle';
import usePreloadEffect from './hooks/usePreloadEffect';
import Screens from './Screens';

function App() {
  const { preload } = usePreloadEffect();

  return preload ? (
    <Provider store={store}>
      <HelmetProvider>
        <ThemeProvider theme={AppTheme}>
          <GlobalStyle />

          <Screens />
        </ThemeProvider>
      </HelmetProvider>
    </Provider>
  ) : null;
}

export default memo(App);
