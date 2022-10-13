import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

import { RouteEntity } from '../types';
import useWindowEffect from '../hooks/useWindowEffect';
import HeaderRoutes from '../routes/routes';

interface IHeaderContainer {
  isScroll: boolean;
}
const HeaderContainer = styled.header<IHeaderContainer>(({ isScroll }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'sticky',
  height: '70px',
  padding: '0px 20px',
  top: 0,
  backgroundColor: isScroll ? 'rgba(31,41,55,0.8)' : undefined,
  opacity: isScroll ? '0.9' : undefined,
  transition: '0.3s',
}));

const HeaderTtitle = styled.h1({
  fontSize: '30px',
  color: '#E5E7E9',
  cursor: 'pointer',

  '&:hover': {
    transition: '0.3s',
    opacity: '0.5',
  },

  '@media screen and (max-width: 640px)': {
    fontSize: '15px',
  },
});

const NavigationContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px 0px',
});

const RouteName = styled.h3({
  fontSize: '18px',
  color: '#E5E7E9',
  padding: '0px 10px',
  cursor: 'pointer',
  fontWeight: '600',

  '&:hover': {
    transition: '0.3s',
    opacity: '0.5',
  },

  '@media screen and (max-width: 640px)': {
    display: 'none',
  },
});

const Menubox = styled.div({
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  width: '100%',
  height: '40vh',
  top: 60,
  right: 0,
  paddingTop: '20px',
  background: '#1F2937',
  boxShadow: '2px 3px 8px #000',
});

const MenuText = styled.h4({
  fontSize: '18px',
  color: '#E5E7E9',
  padding: '20px 10px',
  cursor: 'pointer',
  fontWeight: '600',

  '&:hover': {
    width: '100%',
    transition: '0.3s',
    opacity: '0.2',
    background: '#fff',
    color: '#000',
  },
});

function Header() {
  const navigate = useNavigate();

  const [isMore, setIsMore] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const { windowWidth } = useWindowEffect();

  useEffect(() => {
    if (isMore && windowWidth >= 640) {
      setIsMore(false);
    }
  }, [windowWidth, isMore]);

  const style = useMemo<React.CSSProperties>(
    () => ({
      color: '#fff',
    }),
    []
  );

  const changeColor = useCallback(() => {
    if (window.scrollY >= 100) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  }, []);

  window.addEventListener('scroll', changeColor);

  const onNavigate = useCallback(
    (route: RouteEntity) => () => {
      if (isMore) {
        setIsMore(false);

        navigate(route.routeName);
      } else {
        navigate(route.routeName);
      }
    },
    [navigate, setIsMore, isMore]
  );

  const onClickMenu = useCallback(() => {
    setIsMore((prev) => !prev);
  }, []);

  const onClickH1 = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <HeaderContainer isScroll={isScroll}>
      {windowWidth >= 640 ? (
        <HeaderTtitle onClick={onClickH1}>JW Portfoilo</HeaderTtitle>
      ) : (
        <GiHamburgerMenu size={20} style={style} onClick={onClickMenu} />
      )}

      <NavigationContainer>
        {HeaderRoutes.map((route, index) => (
          <RouteName key={`${index + 1}`} onClick={onNavigate(route)}>
            {route.name}
          </RouteName>
        ))}
      </NavigationContainer>

      {isMore ? (
        <Menubox>
          {HeaderRoutes.map((route, index) => (
            <MenuText key={`${index + 1}`} onClick={onNavigate(route)}>
              {route.name}
            </MenuText>
          ))}
        </Menubox>
      ) : null}
    </HeaderContainer>
  );
}

export default memo(Header);
