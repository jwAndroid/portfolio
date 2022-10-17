import { memo } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Contact, Detail, Experience, Home, Project } from './routes';
import useProjectLoadEffect from './hooks/useProjectLoadEffect';
import { useAppSelector } from './hooks/useRedux';
import { NotFoundPage, ScrollToTop, ScrollToTopButton } from './components';
import useCardLoadEffect from './hooks/useCardLoadEffect';

function Screens() {
  const state = useAppSelector((state) => state.route);

  useProjectLoadEffect();

  useCardLoadEffect();

  return (
    <Router>
      <ScrollToTop />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route
          path={`/project/detail/${state.routeName}`}
          element={<Detail />}
        />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <ScrollToTopButton />
    </Router>
  );
}

export default memo(Screens);
