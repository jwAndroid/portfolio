import { memo } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import { HelmetProvider } from 'react-helmet-async';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from './redux/store';
import { AppTheme } from './theme';
import GlobalStyle from './GlobalStyle';
import Screens from './Screens';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HelmetProvider>
          <ThemeProvider theme={AppTheme}>
            <GlobalStyle />

            <Screens />
          </ThemeProvider>
        </HelmetProvider>
      </PersistGate>
    </Provider>
  );
}

export default memo(App);
