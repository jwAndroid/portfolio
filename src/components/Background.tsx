import { memo } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import iman6 from '../assets/iman6.jpg';

const Container = styled.div({
  width: '100%',
  height: '100%',
});

const Mask = styled.div({
  width: '100%',
  height: '100vh',
  position: 'relative',
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

function Background() {
  return (
    <Container>
      <Mask>
        <Image src={iman6} alt="iman6" />
      </Mask>

      <Content>
        <p>Developer JW</p>

        <h1>React, React-Native, Android Developer</h1>

        <Link to="/project">Projects</Link>

        <Link to="/contact">Contact</Link>
      </Content>
    </Container>
  );
}

export default memo(Background);
