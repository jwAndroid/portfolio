import { memo } from 'react';
import { ThemeProvider } from '@emotion/react';
import { Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { Home, Experience, Contact, Project, Detail } from './routes';
import { AppTheme } from './theme';
import GlobalStyle from './GlobalStyle';

// a

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider theme={AppTheme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default memo(App);
