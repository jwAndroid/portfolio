import { memo } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import iman6 from '../assets/iman6.jpg';
import StyledButton from './StyledButton';

const Container = styled.div({
  width: '100%',
  height: '100%',
});

const Mask = styled.div({
  width: '100%',
  height: '90vh',
  position: 'relative',
  opacity: 0.25,
  backgroundColor: '#000',
});

const Image = styled.img({
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  objectFit: 'cover',
});

const Content = styled.div({
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  top: '50%',
  left: '50%',
  textAlign: 'center',
});

const Title = styled.h1(() => ({
  fontSize: 25,
  fontWeight: '400',

  '@media screen and (max-width: 740px)': {
    fontSize: 15,
    fontWeight: '400',
  },
}));

const SubTitle = styled.p({
  fontSize: 50,
  fontWeight: '600',

  '@media screen and (max-width: 740px)': {
    fontSize: 25,
    fontWeight: '600',
  },
});

const ButtonContainer = styled.div(() => ({
  marginTop: '1rem',
}));

function Background() {
  return (
    <Container>
      <Mask>
        <Image src={iman6} alt="iman6" />
      </Mask>

      <Content>
        <Title>Developer JW</Title>

        <SubTitle>Application Developer</SubTitle>

        <ButtonContainer>
          <StyledButton>
            <Link to="/project">Projects</Link>
          </StyledButton>

          <StyledButton isLight>
            <Link to="/contact">Contact</Link>
          </StyledButton>
        </ButtonContainer>
      </Content>
    </Container>
  );
}

export default memo(Background);
