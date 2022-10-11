import { memo } from 'react';
import styled from '@emotion/styled';

import ProjectData from '../utils/data';
import ProjectsCard from './ProjectsCard';

const ProjectHeading = styled.h1({
  textAlign: 'center',
  padding: '4rem 0 2rem 0',
});

const ProjectContainer = styled.div({
  display: 'grid',
  maxWidth: '1140px',
  margin: 'auto',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '40px',
  paddingBottom: '5rem',

  '@media screen and (max-width: 740px)': {
    maxWidth: '100%',
    margin: 'auto',
    gridTemplateColumns: '1fr',
  },
});

function Projects() {
  return (
    <>
      <ProjectHeading>Projects</ProjectHeading>

      <ProjectContainer>
        {ProjectData.map((item, index) => (
          <ProjectsCard
            key={`${index + 1}`}
            src={item.imgsrc}
            text={item.text}
            title={item.title}
            github={item.github}
            stack={item.stack}
          />
        ))}
      </ProjectContainer>
    </>
  );
}

export default memo(Projects);
