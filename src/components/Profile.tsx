import { memo } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

const ProfileContainer = styled.div({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '60px',
  background: '#111827',
});

const Title = styled.h1({
  fontSize: '50px',
  color: '#fff',
});

const SubTitle = styled.h3({
  fontSize: '30px',
  color: '#fff',
  fontWeight: '500',
});

const ProfileImage = styled.img({
  width: '100px',
  height: '100px',
  marginTop: '20px',
  borderRadius: '50%',
  boxShadow: '0px 0px 7px #fff',
});

const StyledText = styled.p({
  fontSize: '17px',
  color: '#fff',
  marginTop: '20px',
  whiteSpace: 'pre-wrap',
  textAlign: 'center',
});

function Profile() {
  const theme = useTheme();

  const intro =
    'react-native, React, Android \n 를 개발하고 애용하는 front-end 개발자 \n 최지웅 입니다.';

  return (
    <ProfileContainer>
      <Title>Application Developer</Title>

      <SubTitle>JIWOOUNG CHOI</SubTitle>

      <ProfileImage src={theme.image.profile} alt="" />

      <StyledText>{intro}</StyledText>
    </ProfileContainer>
  );
}

export default memo(Profile);
