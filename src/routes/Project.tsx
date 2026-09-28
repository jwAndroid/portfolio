import { memo } from "react";
import { Helmet } from "react-helmet-async";

import { Projects } from "../components";

function Project() {
  return (
    <>
      <Helmet title="Project" />
      <Projects />
    </>
  );
}

export default memo(Project);
