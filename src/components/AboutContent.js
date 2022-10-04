import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import './AboutContentStyles.css';
import iman5 from '../assets/iman5.jpg';
import iman6 from '../assets/iman6.jpg';

function AboutContent() {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I</h1>

        <p>Im react-native, Android Developer</p>

        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={iman5} className="img" alt="true" />
          </div>

          <div className="img-stack bottom">
            <img src={iman6} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(AboutContent);
