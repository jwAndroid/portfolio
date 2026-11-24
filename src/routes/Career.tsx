import { memo } from "react";
import { Helmet } from "react-helmet-async";

import Progress from "../components/Progress";

function Career() {
  return (
    <>
      <Helmet title="Career" />
      {/* <Projects /> */}
      <Progress />
    </>
  );
}

export default memo(Career);
