import { memo } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

const Card = styled.div({
  marginTop: '2rem',
  height: '200px',
  background: 'linear-gradient(to right, #363635, #00171f)',
  borderTopLeftRadius: '10px',
  borderTopRightRadius: '10px',

  '@media screen and (max-width: 740px)': {
    width: '100%',
    height: '80px',
  },
});

const ImageContainer = styled.div({
  display: 'flex',
  height: '60px',
  alignItems: 'center',
  justifyItems: 'center',
  borderRadius: '50%',
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
  flexDirection: 'column',
  width: '300px',
  background: '#131313',
  paddingTop: '4.5rem',
  paddingBottom: '2rem',
  borderBottomLeftRadius: '10px',
  borderBottomRightRadius: '10px',

  '@media screen and (max-width: 740px)': {
    width: '250px',
  },
});

const StyledText = styled.p({
  fontSize: '15px',
  fontWeight: '400',
  padding: '0rem 1rem',
  whiteSpace: 'pre-wrap',

  '@media screen and (max-width: 740px)': {
    fontSize: '12px',
  },
});

function Profile() {
  const theme = useTheme();

  const text =
    'React Native, Android, React \n 를 개발하는 FrontEnd 개발자 \n 최지웅 이라고 합니다.';

  return (
    <Card>
      <ImageContainer>
        <Image src={theme.image.profile} alt="" />
      </ImageContainer>

      <ContentsContainer>
        <StyledText>{text}</StyledText>
      </ContentsContainer>
    </Card>
  );
}

export default memo(Profile);
