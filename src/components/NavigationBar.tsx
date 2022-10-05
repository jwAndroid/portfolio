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
  backgroundColor: isScroll ? 'rgba(19,19,19,0.8)' : undefined,
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
    transition: '0.5s',
    background: 'rgba(19,19,19,0.8)',
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

const data = [
  {
    to: '/',
    title: 'Home',
  },
  {
    to: '/project',
    title: 'Project',
  },
  {
    to: '/experience',
    title: 'Experience',
  },
  {
    to: '/contact',
    title: 'Contact',
  },
];

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
      <Link to="/">
        <h1>JW Portfolio.</h1>
      </Link>

      <NavMenu isActive={click}>
        {data.map((item, index) => (
          <List key={`${index + 1}`}>
            <Link to={item.to}>{item.title}</Link>
          </List>
        ))}
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
