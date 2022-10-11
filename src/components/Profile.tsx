import { memo } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

const ImageContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyItems: 'center',
  transform: 'translate(110px, 30px)',

  '@media screen and (max-width: 740px)': {
    transform: 'translate(90px, 30px)',
  },
});

const Image = styled.img({
  height: '80px',
  borderRadius: '50%',
  boxShadow: '0px 0px 10px 1px #fff',

  '@media screen and (max-width: 740px)': {
    height: '70px',
  },
});

const ContentsContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '300px',
  paddingTop: '3rem',

  '@media screen and (max-width: 740px)': {
    width: '250px',
  },
});

const StyledText = styled.p({
  fontSize: '16px',
  whiteSpace: 'pre-wrap',

  '@media screen and (max-width: 740px)': {
    fontSize: '12px',
  },
});

function Profile() {
  const theme = useTheme();

  const text =
    'react-native, Android, React \n 를 개발하는 FrontEnd 개발자 \n 최지웅 입니다.';

  return (
    <div>
      <ImageContainer>
        <Image src={theme.image.profile} alt="" />
      </ImageContainer>

      <ContentsContainer>
        <StyledText>{text}</StyledText>
      </ContentsContainer>
    </div>
  );
}

export default memo(Profile);
