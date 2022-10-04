import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';

import { Home, About, Contact, Project } from './routes';
import { AppTheme } from './theme';
import { GlobalStyled } from './components';

function App() {
  return (
    <ThemeProvider theme={AppTheme}>
      <GlobalStyled />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </ThemeProvider>
  );
}

export default memo(App);
