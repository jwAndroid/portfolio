import React, { memo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home, About, Contact, Project } from './routes';
import './index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default memo(App);
