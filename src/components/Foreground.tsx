import { memo } from "react";
import styled from "@emotion/styled";

const Container = styled.div({
  display: "flex",
  flex: 1,
  width: "100%",
  flexDirection: "column",
  alignItems: "center",
  gap: "8px",
});

const Title = styled.h1(({ theme }) => ({
  margin: 0,
  fontSize: "60px",
  lineHeight: 1,
  color: theme.color.text,

  "@media screen and (max-width: 640px)": {
    fontSize: "20px",
  },
}));

const SubTitle = styled.h2(({ theme }) => ({
  margin: 0,
  fontSize: "40px",
  lineHeight: 1.1,
  color: theme.color.text,
  fontWeight: "400",

  "@media screen and (max-width: 640px)": {
    fontSize: "15px",
  },
}));

function Foreground() {
  return (
    <Container>
      <Title>Application Developer</Title>
      <SubTitle>JIWOOUNG CHOI</SubTitle>
    </Container>
  );
}

export default memo(Foreground);
