import { memo } from 'react';
import styled from '@emotion/styled';

import ProjectData from '../utils/data';
import ProjectsCard from './ProjectsCard';

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
  paddingBottom: '5rem',

  '@media screen and (max-width: 640px)': {
    gridTemplateColumns: '1fr',
  },
});

function Projects() {
  return (
    <>
      <ProjectHeading>Projects</ProjectHeading>

      <ProjectContainer>
        {ProjectData.map((item, index) => (
          <ProjectsCard key={`${index + 1}`} data={item} />
        ))}
      </ProjectContainer>
    </>
  );
}

export default memo(Projects);
