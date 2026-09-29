import { memo } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Career, Contact, Detail, Home, Skills } from "./routes";
import { useAppSelector } from "./hooks/useRedux";
import { PageNotFound, ScrollToTop, ScrollToTopButton } from "./components";
import MainLayout from "./MainLayout";

function Screens() {
  const state = useAppSelector((state) => state.route);

  return (
    <Router>
      <ScrollToTop />

      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/career" element={<Career />} />
          <Route
            path={`/career/detail/${state.routeName}`}
            element={<Detail />}
          />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <ScrollToTopButton />
    </Router>
  );
}

export default memo(Screens);
