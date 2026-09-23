import { memo } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Contact, Detail, Experience, Home, Project } from "./routes";
import { useAppSelector } from "./hooks/useRedux";
import { PageNotFound, ScrollToTop, ScrollToTopButton } from "./components";

// test page
import Poc from "./routes/Poc";

function Screens() {
  const state = useAppSelector((state) => state.route);

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

        <Route path="/poc" element={<Poc />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <ScrollToTopButton />
    </Router>
  );
}

export default memo(Screens);
