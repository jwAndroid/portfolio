import { memo } from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { FaGithub } from "react-icons/fa";

const intro = "react-native, React, Android \n front-end developer";

const Container = styled.div(({ theme }) => ({
  display: "flex",
  flex: 1,
  width: "100%",
  flexDirection: "column",
  alignItems: "center",
  background: theme.color.surface,
}));

const Title = styled.h1({
  fontSize: "60px",
  color: "#fff",

  "@media screen and (max-width: 640px)": {
    fontSize: "20px",
  },
});

const SubTitle = styled.h3({
  fontSize: "40px",
  color: "#fff",
  fontWeight: "500",

  "@media screen and (max-width: 640px)": {
    fontSize: "15px",
  },
});

const ProfileImage = styled.img({
  width: "100px",
  height: "100px",
  marginTop: "20px",
  borderRadius: "50%",
  boxShadow: "0px 0px 7px #fff",

  "@media screen and (max-width: 640px)": {
    width: "80px",
    height: "80px",
  },
});

const StyledText = styled.p({
  fontSize: "17px",
  color: "#fff",
  marginTop: "20px",
  whiteSpace: "pre-wrap",
  textAlign: "center",
  fontWeight: "500",

  "@media screen and (max-width: 640px)": {
    fontSize: "14px",
  },
});

function Foreground() {
  const theme = useTheme();

  return (
    <Container>
      <Title>Application Developer</Title>

      <SubTitle>JIWOOUNG CHOI</SubTitle>

      <StyledText>{intro}</StyledText>

      <ProfileImage src={theme.image.profile} alt="" />

      <a target="_blank" rel="noreferrer" href="https://github.com/jwAndroid">
        <FaGithub
          size={50}
          style={{
            color: "#fff",
            marginTop: "25px",
            cursor: "pointer",
          }}
        />
      </a>
    </Container>
  );
}

export default memo(Foreground);
