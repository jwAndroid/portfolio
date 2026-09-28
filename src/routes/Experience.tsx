import { memo } from "react";
import { Helmet } from "react-helmet-async";

import { SkillCard } from "../components";

function Experience() {
  return (
    <>
      <Helmet title="Experience" />

      <SkillCard />
    </>
  );
}

export default memo(Experience);
