import { memo } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Contact, Detail, Experience, Home, Project } from '../routes';

function Screens() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/detail/covid" element={<Detail />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default memo(Screens);
