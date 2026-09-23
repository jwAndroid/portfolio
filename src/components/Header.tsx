import { memo, useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { GiHamburgerMenu } from "react-icons/gi";

import { RouteEntity } from "../types";
import useWindowEffect from "../hooks/useWindowEffect";
import HeaderRoutes from "../routes/routes";

const HeaderContainer = styled.header(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "sticky",
  height: "70px",
  padding: "0 20px",
  top: 0,
  backgroundColor: theme.color.surface,
  zIndex: 1000,
}));

const HeaderTtitle = styled.h1(({ theme }) => ({
  fontSize: "24px",
  color: theme.color.text,
  cursor: "pointer",

  "&:hover": {
    transition: "0.3s",
    opacity: "0.5",
  },

  "@media screen and (max-width: 640px)": {
    fontSize: "15px",
  },
}));

const NavigationContainer = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px 0",
});

const RouteName = styled.h3(({ theme }) => ({
  fontSize: "18px",
  color: theme.color.text,
  padding: "0 10px",
  cursor: "pointer",
  fontWeight: "600",

  "&:hover": {
    transition: "0.3s",
    opacity: "0.5",
  },

  "@media screen and (max-width: 640px)": {
    display: "none",
  },
}));

const Menubox = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  width: "100%",
  height: "40vh",
  top: "70px",
  right: 0,
  paddingTop: "20px",
  background: theme.color.surface,
  boxShadow: `2px 3px 8px ${theme.color.border}`,
}));

const MenuText = styled.h4(({ theme }) => ({
  fontSize: "18px",
  color: theme.color.text,
  padding: "20px 10px",
  cursor: "pointer",
  fontWeight: "600",

  "&:hover": {
    width: "100%",
    transition: "0.3s",
    opacity: "0.2",
    background: theme.color.background,
    color: theme.color.text,
  },
}));

function Header() {
  const navigate = useNavigate();

  const { t } = useTranslation();

  const [isMore, setIsMore] = useState(false);

  const { windowWidth } = useWindowEffect();

  useEffect(() => {
    if (isMore && windowWidth >= 640) {
      setIsMore(false);
    }
  }, [windowWidth, isMore]);

  const onNavigate = useCallback(
    (route: RouteEntity) => () => {
      setIsMore(false);
      navigate(route.routeName);
    },
    [navigate],
  );

  const onClickMenu = useCallback(() => {
    setIsMore((prev) => !prev);
  }, []);

  const onClickH1 = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <HeaderContainer>
      {windowWidth >= 640 ? (
        <HeaderTtitle onClick={onClickH1}>Developer JW</HeaderTtitle>
      ) : (
        <GiHamburgerMenu
          size={20}
          style={{ color: "#fff" }}
          onClick={onClickMenu}
        />
      )}

      <NavigationContainer>
        {HeaderRoutes.map((route) => (
          <RouteName key={route.routeName} onClick={onNavigate(route)}>
            {t(route.name)}
          </RouteName>
        ))}
      </NavigationContainer>

      {isMore ? (
        <Menubox>
          {HeaderRoutes.map((route) => (
            <MenuText key={route.routeName} onClick={onNavigate(route)}>
              {t(route.name)}
            </MenuText>
          ))}
        </Menubox>
      ) : null}
    </HeaderContainer>
  );
}

export default memo(Header);
