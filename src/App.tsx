import { memo } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { I18nextProvider } from "react-i18next";

import GlobalStyle from "./GlobalStyle";
import { I18n } from "./i18n";
import { persistor, store } from "./redux/store";
import Screens from "./Screens";
import AppThemeProvider from "./AppThemeProvider";
import AppInitializer from "./AppInitializer";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <HelmetProvider>
          <AppThemeProvider>
            <I18nextProvider i18n={I18n}>
              <AppInitializer>
                <GlobalStyle />
                <Screens />
              </AppInitializer>
            </I18nextProvider>
          </AppThemeProvider>
        </HelmetProvider>
      </PersistGate>
    </Provider>
  );
}

export default memo(App);
