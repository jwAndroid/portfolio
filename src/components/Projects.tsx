import { memo } from 'react';
import styled from '@emotion/styled';

import ProjectsCard from './ProjectsCard';
import { useAppSelector } from '../hooks/useRedux';

const ProjectHeading = styled.h1({
  textAlign: 'center',
  padding: '30px 0px',
});

const ProjectContainer = styled.div({
  display: 'grid',
  maxWidth: '1140px',
  margin: 'auto',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '40px',

  '@media screen and (max-width: 640px)': {
    gridTemplateColumns: '1fr',
    paddingBottom: '30px',
  },
});

function Projects() {
  const projects = useAppSelector((state) => state.project.posts);

  return (
    <>
      <ProjectHeading>Projects</ProjectHeading>

      <ProjectContainer>
        {projects.data &&
          projects.data.map((item, index) => (
            <ProjectsCard key={`${index + 1}`} data={item} />
          ))}
      </ProjectContainer>
    </>
  );
}

export default memo(Projects);
