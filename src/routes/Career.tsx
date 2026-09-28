import { memo } from "react";
import { Helmet } from "react-helmet-async";

import { Projects } from "../components";

function Career() {
  return (
    <>
      <Helmet title="Career" />
      <Projects />
    </>
  );
}

export default memo(Career);
