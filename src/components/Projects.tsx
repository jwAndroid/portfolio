import { memo, useMemo } from "react";
import styled from "@emotion/styled";

import ProjectsCard from "./ProjectsCard";
import { useAppSelector } from "../hooks/useRedux";

// const ProjectHeading = styled.h1({
//   textAlign: "center",
//   padding: "30px 0px",
// });

const ProjectContainer = styled.div({
  display: "grid",
  maxWidth: "1140px",
  margin: "0 auto",
  padding: "0 20px",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: "40px",
  marginTop: 40,

  "@media screen and (max-width: 900px)": {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  },

  "@media screen and (max-width: 640px)": {
    gridTemplateColumns: "1fr",
    paddingBottom: "30px",
  },
});

function Projects() {
  const projects = useAppSelector((state) => state.project.posts.data);

  console.log(JSON.stringify(projects, null, 2));

  const data = useMemo(
    () => projects?.toSorted((a, b) => a.index - b.index),
    [projects],
  );

  return (
    <ProjectContainer>
      {data?.map((item) => (
        <ProjectsCard key={item.route} data={item} />
      ))}
    </ProjectContainer>
  );
}

export default memo(Projects);
