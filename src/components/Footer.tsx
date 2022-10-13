import { memo, useCallback, useMemo } from 'react';
import styled from '@emotion/styled';
import { FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { RouteEntity } from '../types';
import HeaderRoutes from '../routes/routes';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100vh',
  padding: '200px 120px 80px',
  // backgroundColor: '#1E2937',
  backgroundColor: '#111827',
  '@media screen and (max-width: 640px)': {
    padding: '30px',
  },
});

const Top = styled.div({
  display: 'flex',
  flex: 1,
  width: '100%',

  '@media screen and (max-width: 640px)': {
    display: 'initial',
  },
});

const Bottom = styled.div({
  width: '100%',
  height: '100px',
});

const AboutContainer = styled.div({
  flex: 1,
});

const NavigationContainer = styled.div({
  padding: '0px 40px',

  '@media screen and (max-width: 640px)': {
    padding: '80px 0px',
  },
});

const MarkContainer = styled.div({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',

  '@media screen and (max-width: 640px)': {
    alignItems: 'start',
  },
});

const SectionTitle = styled.h2({
  fontSize: '22px',
  fontWeight: '700',

  '@media screen and (max-width: 640px)': {
    fontSize: '16px',
  },
});

interface IStyledText {
  marginTop?: string;
  isCursor?: boolean;
}
const StyledText = styled.p<IStyledText>(
  ({ marginTop = 0, isCursor = false }) => ({
    fontSize: '16px',
    whiteSpace: 'pre-wrap',
    marginTop,
    cursor: isCursor ? 'pointer' : undefined,

    '@media screen and (max-width: 640px)': {
      fontSize: '13px',
    },
  })
);

interface IStyledDivider {
  marginBottom?: string;
}
const StyledDivider = styled.div<IStyledDivider>(({ marginBottom = 0 }) => ({
  display: 'flex',
  height: '0.1px',
  background: 'white',
  opacity: '0.3',
  marginBottom,

  '@media screen and (max-width: 640px)': {
    display: 'none',
  },
}));

function Footer() {
  const navigate = useNavigate();

  const about =
    'JI Wooung Choi Portfoilo\n- \n성함:  최지웅 (ji wooung choi) \n이메일:  cjd9408abcd@gmail.com \n주소:  인천시 계양구\n -';

  const style = useMemo<React.CSSProperties>(
    () => ({
      color: '#fff',
      cursor: 'pointer',
    }),
    []
  );

  const onNavigate = useCallback(
    (route: RouteEntity) => () => {
      navigate(route.routeName);
    },
    [navigate]
  );

  return (
    <Container>
      <StyledDivider marginBottom="50px" />

      <Top>
        <AboutContainer>
          <SectionTitle>ABOUT.</SectionTitle>

          <StyledText marginTop="20px">{about}</StyledText>
        </AboutContainer>

        <NavigationContainer>
          <SectionTitle>NAVIGATION.</SectionTitle>

          {HeaderRoutes.map((route, index) => (
            <StyledText
              marginTop="15px"
              key={`${index + 1}`}
              onClick={onNavigate(route)}
              isCursor
            >
              {route.name}
            </StyledText>
          ))}
        </NavigationContainer>

        <MarkContainer>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/jwAndroid"
          >
            <FaGithub size={50} style={style} />
          </a>

          <StyledText marginTop="25px">Learning Delvelop.</StyledText>

          <StyledText>jwandroid.</StyledText>
        </MarkContainer>
      </Top>

      <Bottom>
        <StyledDivider />

        <StyledText marginTop="30px">
          © 2022 JI WOOUNG CHOI. All rights reserved.
        </StyledText>
      </Bottom>
    </Container>
  );
}

export default memo(Footer);
