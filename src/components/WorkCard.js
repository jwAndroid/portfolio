import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

import './WorkCardStyles.css';

function WorkCard({ imgsrc, title, text, view }) {
  return (
    <div className="project-card">
      <img src={imgsrc} alt="iman3" className="project-img" />

      <h2 className="project-title">{title}</h2>

      <div className="pro-details">
        <div className="text-container">
          <p>{text}</p>
        </div>

        <div className="pro-btns">
          <NavLink to={view} className="btn">
            View
          </NavLink>

          <NavLink to="url.com" className="btn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default memo(WorkCard);
