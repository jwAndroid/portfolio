import { memo } from "react";
import { Helmet } from "react-helmet-async";

import { ProjectDetail } from "../components";

function Detail() {
  return (
    <>
      <Helmet title="Detail" />

      <ProjectDetail />
    </>
  );
}

export default memo(Detail);
