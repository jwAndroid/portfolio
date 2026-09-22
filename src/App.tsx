import { memo } from "react";
import { ThemeProvider } from "@emotion/react";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { I18nextProvider } from "react-i18next";

import GlobalStyle from "./GlobalStyle";
import { I18n } from "./i18n";
import { persistor, store } from "./redux/store";
import Screens from "./Screens";
import { AppTheme } from "./theme";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <HelmetProvider>
          <ThemeProvider theme={AppTheme}>
            <I18nextProvider i18n={I18n}>
              <GlobalStyle />
              <Screens />
            </I18nextProvider>
          </ThemeProvider>
        </HelmetProvider>
      </PersistGate>
    </Provider>
  );
}

export default memo(App);
