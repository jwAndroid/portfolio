import React, { memo } from 'react';

import './WorkCardStyles.css';
import WorkCard from './WorkCard';
import WorkCardData from './WorkCardData';

function Work() {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>

      <div className="project-container">
        {WorkCardData.map((data, index) => {
          return (
            <WorkCard
              key={index}
              imgsrc={data.imgsrc}
              text={data.text}
              title={data.title}
              view={data.view}
            />
          );
        })}
      </div>
    </div>
  );
}

export default memo(Work);
