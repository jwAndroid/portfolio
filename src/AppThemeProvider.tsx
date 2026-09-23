import { ThemeProvider } from "@emotion/react";

import { BlackTheme, LightTheme } from "./theme";
import { useAppSelector } from "./hooks/useRedux";

function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const themeMode = useAppSelector((state) => state.app.mode);

  const theme = themeMode === "dark" ? BlackTheme : LightTheme;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default AppThemeProvider;
