import { memo } from 'react';
import styled from '@emotion/styled';

import ProjectData from '../utils/data';
import WorkCard from './WorkCard';

const ProjectHeading = styled.h1`
  text-align: center;
  padding: 4rem 0 2rem 0;
`;

const ProjectContainer = styled.div`
  display: grid;
  max-width: 1140px;
  margin: auto;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  padding-bottom: 5rem;

  @media screen and (max-width: 740px) {
    max-width: 100%;
    margin: auto;
    grid-template-columns: 1fr;
  }
`;

function Work() {
  return (
    <div>
      <ProjectHeading>Projects</ProjectHeading>

      <ProjectContainer>
        {ProjectData.map((item, index) => (
          <WorkCard
            key={`${index + 1}`}
            src={item.imgsrc}
            text={item.text}
            title={item.title}
            view={item.view}
          />
        ))}
      </ProjectContainer>
    </div>
  );
}

export default memo(Work);
