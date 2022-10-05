import { memo } from 'react';
import { ThemeProvider } from '@emotion/react';
import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { Home, About, Contact, Project } from './routes';
import { AppTheme } from './theme';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={AppTheme}>
        <GlobalStyle />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/project" element={<Project />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default memo(App);
