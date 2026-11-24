import { memo } from "react";
import { Helmet } from "react-helmet-async";

import Progress from "../components/Progress";

function Skills() {
  return (
    <>
      <Helmet title="Skills" />
      {/* <SkillCard /> */}

      <Progress />
    </>
  );
}

export default memo(Skills);
