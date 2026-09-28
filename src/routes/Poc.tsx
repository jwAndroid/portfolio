import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";

import { useAppDispatch } from "../hooks/useRedux";
import { toggleTheme } from "../redux/app/slice";

const Card = styled.article({
  position: "relative",
  width: "360px",
  minHeight: "420px",
  padding: "32px",
  overflow: "hidden",
  borderRadius: "32px",

  background: "linear-gradient(145deg, #a78bfa 0%, #8b5cf6 45%, #6d28d9 100%)",

  boxShadow:
    "18px 18px 35px rgba(55, 35, 110, 0.35), " +
    "-12px -12px 30px rgba(255, 255, 255, 0.18), " +
    "inset 2px 2px 4px rgba(255, 255, 255, 0.2), " +
    "inset -3px -3px 8px rgba(60, 20, 120, 0.25)",

  color: "#fff",
});

const IconBox = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "64px",
  height: "64px",

  borderRadius: "20px",

  background: "rgba(255, 255, 255, 0.12)",

  boxShadow:
    "6px 6px 12px rgba(55, 35, 110, 0.25), " +
    "-5px -5px 10px rgba(255, 255, 255, 0.12), " +
    "inset 2px 2px 4px rgba(255, 255, 255, 0.15)",

  backdropFilter: "blur(10px)",
});

const CodeIcon = styled.span({
  fontSize: "20px",
  fontWeight: 700,
  letterSpacing: "-1px",
});

const Content = styled.div({
  position: "relative",
  zIndex: 1,
  marginTop: "64px",
});

const Category = styled.span({
  display: "block",
  marginBottom: "14px",

  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "2px",

  opacity: 0.65,
});

const Title = styled.h2({
  fontSize: "36px",
  fontWeight: 800,
  lineHeight: 1.08,
  letterSpacing: "-1.5px",
});

const Description = styled.p({
  marginTop: "24px",

  fontSize: "14px",
  lineHeight: 1.7,

  color: "rgba(255, 255, 255, 0.7)",
});

const ArrowButton = styled.button({
  position: "absolute",
  right: "28px",
  bottom: "28px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "54px",
  height: "54px",

  border: 0,
  borderRadius: "50%",

  background: "rgba(255, 255, 255, 0.12)",
  color: "#fff",

  boxShadow:
    "6px 6px 12px rgba(55, 35, 110, 0.3), " +
    "-4px -4px 10px rgba(255, 255, 255, 0.12), " +
    "inset 1px 1px 3px rgba(255, 255, 255, 0.15)",

  cursor: "pointer",

  transition: "transform 0.2s ease",

  "&:hover": {
    transform: "translateX(4px)",
  },

  "& span": {
    fontSize: "24px",
  },
});

function PurpleNeumorphismCard() {
  return (
    <Card>
      <IconBox>
        <CodeIcon>&lt;/&gt;</CodeIcon>
      </IconBox>

      <Content>
        <Category>FULL STACK DEVELOPER</Category>
        <Title>
          Build something
          <br />
          meaningful.
        </Title>
        <Description>
          <h2>앱과 서버를 연결하고 더 나은 사용자 경험을 만듭니다.</h2>
        </Description>
      </Content>

      <ArrowButton>
        <span>→</span>
      </ArrowButton>
    </Card>
  );
}

function Poc() {
  const { i18n } = useTranslation();

  const dispatch = useAppDispatch();

  return (
    <div>
      <PurpleNeumorphismCard />
      <button
        type="button"
        onClick={() => {
          dispatch(toggleTheme());
        }}
      >
        dispatch
      </button>
      <button
        type="button"
        onClick={async () => {
          await i18n.changeLanguage("ko");
          localStorage.setItem("language", "ko");
        }}
      >
        한국어
      </button>
      <button
        type="button"
        onClick={async () => {
          await i18n.changeLanguage("en");
          localStorage.setItem("language", "en");
        }}
      >
        English
      </button>
      <button
        type="button"
        onClick={async () => {
          await i18n.changeLanguage("jp");
          localStorage.setItem("language", "jp");
        }}
      >
        日本語222
      </button>
      <button
        type="button"
        onClick={() => {
          const len = localStorage.getItem("language");
          console.log(len);
        }}
      >
        getget!
      </button>
    </div>
  );
}

export default Poc;
