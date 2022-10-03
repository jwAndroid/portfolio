import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import './HeroImgStyles.css';
import IntroImg from '../assets/iman6.jpg';

function HeroImg() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>

      <div className="content">
        <p>Developer JW</p>

        <h1>React, React-Native, Android Developer</h1>

        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>

          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default memo(HeroImg);
