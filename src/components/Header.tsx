import { memo, useCallback, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdBrightness3, MdBrightness4, MdArrowDropDown } from "react-icons/md";

import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { usePointerDownOutside, useWindowEffect } from "../hooks";
import HeaderRoutes from "../routes/routes";
import { toggleTheme } from "../redux/app/slice";
import { en, jp, ko, Language } from "../i18n";
import Mark from "./Mark";

const HeaderContainer = styled.header<{ isVisible: boolean }>(
  ({ theme, isVisible }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "sticky",
    height: "70px",
    padding: "0 20px",
    top: 0,
    zIndex: 1000,
    background: theme.color.surface,

    transform: isVisible ? "translateY(0)" : "translateY(-100%)",
    transition: "transform 0.3s ease",
  }),
);

const NavigationContainer = styled.nav({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px 0",
});

const NavigationItem = styled(Link)(({ theme }) => ({
  fontSize: "18px",
  color: theme.color.text,
  padding: "0 10px",
  cursor: "pointer",
  fontWeight: 600,
  textDecoration: "none",

  "&:hover": {
    opacity: 0.5,
    transition: "0.3s",
  },

  "@media screen and (max-width: 640px)": {
    display: "none",
  },
}));

const MenuButton = styled(GiHamburgerMenu)(({ theme }) => ({
  color: theme.color.text,
  cursor: "pointer",
}));

const MenuBox = styled.div(({ theme }) => ({
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

const MenuText = styled(Link)(({ theme }) => ({
  fontSize: "18px",
  color: theme.color.text,
  padding: "20px 10px",
  cursor: "pointer",
  fontWeight: 600,
  textDecoration: "none",

  "&:hover": {
    width: "100%",
    opacity: 0.2,
    transition: "0.3s",
    background: theme.color.background,
  },
}));

const ActionContainer = styled.div({
  display: "flex",
  margin: "0px 0px 0px 10px",
});

const ButtonContainer = styled.div<{
  marginRight?: string;
}>(({ marginRight }) => ({
  display: "flex",
  marginRight,
  alignItems: "center",
  marginTop: "5px",
  marginBottom: "5px",
  cursor: "pointer",

  "&:hover": {
    opacity: 0.5,
    transition: "0.3s",
  },
}));

const Sun = styled(MdBrightness4)(({ theme }) => ({
  color: theme.color.text,
  cursor: "pointer",
  fontSize: "20px",
}));

const Luna = styled(MdBrightness3)(({ theme }) => ({
  color: theme.color.text,
  cursor: "pointer",
  fontSize: "20px",
}));

const LanguageText = styled.h2({
  fontSize: "12px",
  caretColor: "transparent",
});

const LanguageWrapper = styled.div({
  position: "relative",
});

const LanguageMenu = styled.div<{ isOpen: boolean }>(({ theme, isOpen }) => ({
  position: "absolute",
  top: "calc(100% + 8px)",
  right: 0,
  minWidth: "80px",
  padding: "6px",
  borderRadius: "8px",
  backgroundColor: theme.color.surface,
  boxShadow: `0 4px 12px ${theme.color.border}`,

  opacity: isOpen ? 1 : 0,
  transform: isOpen ? "translateY(0)" : "translateY(-6px)",
  visibility: isOpen ? "visible" : "hidden",
  pointerEvents: isOpen ? "auto" : "none",

  transition: "opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease",

  zIndex: 1001,
}));

const LanguageItem = styled.button(({ theme }) => ({
  display: "block",
  width: "100%",
  padding: "8px 12px",
  border: "none",
  borderRadius: "6px",
  backgroundColor: "transparent",
  color: theme.color.text,
  fontSize: "12px",
  textAlign: "left",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: theme.color.background,
  },
}));

function Header() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { windowWidth } = useWindowEffect();

  const mode = useAppSelector((state) => state.app.mode);

  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isMore, setIsMore] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [language, setLanguage] = useState(
    () => localStorage.getItem("language") ?? "ko",
  );

  const languageRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        setIsHeaderVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      if (currentScrollY > lastScrollY.current) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  usePointerDownOutside(languageRef, () => {
    setIsLanguageOpen(false);
  });

  useEffect(() => {
    if (windowWidth >= 640) {
      setIsMore(false);
    }
  }, [windowWidth]);

  const onClickMenu = useCallback(() => {
    setIsMore((prev) => !prev);
  }, []);

  const onToggleTheme = useCallback(() => {
    dispatch(toggleTheme());
  }, [dispatch]);

  const onChangeLanguage = useCallback(
    async (language: Language) => {
      try {
        await i18n.changeLanguage(language);
        localStorage.setItem("language", language);
        setLanguage(language);
        setIsLanguageOpen(false);
      } catch (error) {
        console.error("changing language error");
      }
    },
    [i18n],
  );

  return (
    <HeaderContainer isVisible={isHeaderVisible}>
      {windowWidth >= 640 ? (
        <Mark fontSize={30} onClick={() => navigate("/")}>
          JW
        </Mark>
      ) : (
        <MenuButton size={20} onClick={onClickMenu} />
      )}

      <NavigationContainer>
        {HeaderRoutes.map((route) => (
          <NavigationItem key={route.routeName} to={route.routeName}>
            {t(route.name)}
          </NavigationItem>
        ))}
      </NavigationContainer>

      <ActionContainer>
        <ButtonContainer marginRight="16px" onClick={onToggleTheme}>
          {mode === "dark" ? <Sun /> : <Luna />}
        </ButtonContainer>

        <LanguageWrapper ref={languageRef}>
          <ButtonContainer onClick={() => setIsLanguageOpen((prev) => !prev)}>
            <LanguageText>{language.toUpperCase()}</LanguageText>
            <MdArrowDropDown />
          </ButtonContainer>

          <LanguageMenu isOpen={isLanguageOpen}>
            <LanguageItem onClick={() => onChangeLanguage("ko")}>
              {ko.toUpperCase()}
            </LanguageItem>

            <LanguageItem onClick={() => onChangeLanguage("en")}>
              {en.toUpperCase()}
            </LanguageItem>

            <LanguageItem onClick={() => onChangeLanguage("jp")}>
              {jp.toUpperCase()}
            </LanguageItem>
          </LanguageMenu>
        </LanguageWrapper>
      </ActionContainer>

      {isMore && (
        <MenuBox>
          {HeaderRoutes.map((route) => (
            <MenuText
              key={route.routeName}
              to={route.routeName}
              onClick={() => setIsMore(false)}
            >
              {t(route.name)}
            </MenuText>
          ))}
        </MenuBox>
      )}
    </HeaderContainer>
  );
}

export default memo(Header);
