import { memo, useMemo } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { FaGithub } from 'react-icons/fa';

const ProfileContainer = styled.div({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#111827',
});

const Title = styled.h1({
  fontSize: '50px',
  color: '#fff',

  '@media screen and (max-width: 640px)': {
    fontSize: '20px',
  },
});

const SubTitle = styled.h3({
  fontSize: '30px',
  color: '#fff',
  fontWeight: '500',

  '@media screen and (max-width: 640px)': {
    fontSize: '15px',
  },
});

const ProfileImage = styled.img({
  width: '100px',
  height: '100px',
  marginTop: '20px',
  borderRadius: '50%',
  boxShadow: '0px 0px 7px #fff',

  '@media screen and (max-width: 640px)': {
    width: '80px',
    height: '80px',
  },
});

const StyledText = styled.p({
  fontSize: '17px',
  color: '#fff',
  marginTop: '20px',
  whiteSpace: 'pre-wrap',
  textAlign: 'center',

  '@media screen and (max-width: 640px)': {
    fontSize: '14px',
  },
});

function Profile() {
  const theme = useTheme();

  const intro =
    'react-native, React, Android \n 를 개발하고 애용하는 front-end 개발자 \n 최지웅 입니다.';

  const style = useMemo<React.CSSProperties>(
    () => ({
      color: '#fff',
      marginTop: '20px',
      cursor: 'pointer',
    }),
    []
  );

  return (
    <ProfileContainer>
      <Title>Application Developer</Title>

      <SubTitle>JIWOOUNG CHOI</SubTitle>

      <ProfileImage src={theme.image.profile} alt="" />

      <StyledText>{intro}</StyledText>

      <a target="_blank" rel="noreferrer" href="https://github.com/jwAndroid">
        <FaGithub size={50} style={style} />
      </a>
    </ProfileContainer>
  );
}

export default memo(Profile);
