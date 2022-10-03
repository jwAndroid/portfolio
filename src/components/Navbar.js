import React, { memo, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

import './NavbarStyles.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  const changeColor = useCallback(() => {
    window.scrollY >= 100 ? setColor(true) : setColor(false);
  }, []);

  const handleClick = useCallback(() => {
    setClick(!click);
  }, [click]);

  window.addEventListener('scroll', changeColor);

  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <Link to="/">
        <h1>JW Portfolio.</h1>
      </Link>

      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: '#fff' }} />
        ) : (
          <FaBars size={20} style={{ color: '#fff' }} />
        )}
      </div>
    </div>
  );
}

export default memo(Navbar);
