import { memo } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import { HelmetProvider } from 'react-helmet-async';

import { store } from './redux/store';
import { AppTheme } from './theme';
import GlobalStyle from './GlobalStyle';
import Screens from './Screens';

function App() {
  return (
    <Provider store={store}>
      <HelmetProvider>
        <ThemeProvider theme={AppTheme}>
          <GlobalStyle />

          <Screens />
        </ThemeProvider>
      </HelmetProvider>
    </Provider>
  );
}

export default memo(App);
