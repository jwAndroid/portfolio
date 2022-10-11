import { memo } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { useAppSelector } from '../hooks/useRedux';
import { Contact, Detail, Experience, Home, Project } from '../routes';

function Screens() {
  const state = useAppSelector((state) => state.route);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route
          path={`/project/detail/${state.routeName}`}
          element={<Detail />}
        />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default memo(Screens);
