import { memo, useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

interface IHeader {
  isScroll: boolean;
}

const Header = styled.div<IHeader>(({ isScroll }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  position: 'fixed',
  width: '100%',
  height: '90px',
  zIndex: 10,
  backgroundColor: isScroll ? 'rgba(0,0,0,0.85)' : undefined,
  transition: isScroll ? '0.5s' : undefined,
}));

interface IUnorderedList {
  isActive: boolean;
}
const NavMenu = styled.ul<IUnorderedList>(({ isActive }) => ({
  display: 'flex',

  '@media screen and (max-width: 1040px)': {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    position: 'absolute',
    top: 0,
    left: isActive ? 0 : '-100%',
    zIndex: -3,
    transition: '0.3s',
    background: 'rgba(0,0,0,0.9)',
  },
}));

const List = styled.li(() => ({
  padding: '1rem',
  fontSize: '1.5rem',
  fontWeight: 'bold',

  '@media screen and (max-width: 1040px)': {
    fontSize: '2.5rem',
  },
}));

const Hamburger = styled.div(() => ({
  display: 'none',

  '@media screen and (max-width: 1040px)': {
    display: 'initial',
  },
}));

function NavigationBar() {
  const [isScroll, setIsScroll] = useState(false);
  const [click, setClick] = useState(false);

  const changeColor = useCallback(() => {
    if (window.scrollY >= 100) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  }, []);

  const handleClick = useCallback(() => {
    setClick(!click);
  }, [click]);

  window.addEventListener('scroll', changeColor);

  return (
    <Header isScroll={isScroll}>
      <Link to="/project">
        <h1>JW Portfolio.</h1>
      </Link>

      <NavMenu isActive={click}>
        <List>
          <Link to="/">Home</Link>
        </List>

        <List>
          <Link to="/project">Project</Link>
        </List>

        <List>
          <Link to="/about">About</Link>
        </List>

        <List>
          <Link to="/contact">Contact</Link>
        </List>
      </NavMenu>

      <Hamburger onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: '#fff' }} />
        ) : (
          <FaBars size={20} style={{ color: '#fff' }} />
        )}
      </Hamburger>
    </Header>
  );
}

export default memo(NavigationBar);
