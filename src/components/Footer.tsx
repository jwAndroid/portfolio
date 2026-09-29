import { memo } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { FaGithub } from "react-icons/fa";
import { MdMail } from "react-icons/md";

import Mark from "./Mark";

const about =
  "Software Developer & Builder\nBuilding applications and services. \n\nBroad Experience.\nFrom Ideas to Execution.";

const Container = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "30px 30px 30px 30px",
  backgroundColor: theme.color.surface,

  "@media screen and (max-width: 640px)": {
    padding: 30,
  },
}));

interface IStyledText {
  marginTop?: number;
  isCursor?: boolean;
  fontSize?: number;
}
const StyledText = styled.p<IStyledText>(
  ({ marginTop = 0, isCursor = false, fontSize }) => ({
    fontSize,
    whiteSpace: "pre-wrap",
    marginTop,
    cursor: isCursor ? "pointer" : undefined,

    "@media screen and (max-width: 640px)": {
      fontSize: "13px",
    },
  }),
);

interface IStyledDivider {
  marginTop?: number;
}
const StyledDivider = styled.div<IStyledDivider>(({ theme, marginTop }) => ({
  width: "100%",
  height: "0.1px",
  background: theme.color.divider,
  opacity: 0.2,
  marginTop,

  "@media screen and (max-width: 640px)": {
    display: "none",
  },
}));

const MailIcon = styled(MdMail)(({ theme }) => ({
  color: theme.color.text,
  fontSize: 24,
  marginLeft: 14,
  cursor: "grabbing",
}));

const GithubIcon = styled(FaGithub)(({ theme }) => ({
  color: theme.color.text,
  fontSize: 24,
  cursor: "grabbing",
}));

const ActionContainer = styled.div({
  display: "flex",
  marginTop: 24,
  flexDirection: "row",
});

function Footer() {
  const nav = useNavigate();

  return (
    <Container>
      <Mark fontSize={20}>JW</Mark>

      <StyledText marginTop={8}>{about}</StyledText>

      <ActionContainer>
        <a target="_blank" rel="noreferrer" href="https://github.com/jwAndroid">
          <GithubIcon />
        </a>

        <MailIcon
          onClick={() => {
            nav("/contact");
          }}
        />
      </ActionContainer>

      <StyledDivider marginTop={30} />
      <StyledText marginTop={30}>© 2026 JW</StyledText>
    </Container>
  );
}

export default memo(Footer);
