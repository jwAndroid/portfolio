import { memo } from "react";
import { Helmet } from "react-helmet-async";

import { SkillCard } from "../components";

function Skills() {
  return (
    <>
      <Helmet title="Skills" />
      <SkillCard />
    </>
  );
}

export default memo(Skills);
