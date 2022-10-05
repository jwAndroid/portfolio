import { memo } from 'react';
import styled from '@emotion/styled';

const Background = styled.div`
  width: 100%;
  height: 80vh;
  position: relative;
  background: rgba(0, 0, 0, 0.5);

  &:before {
    content: '';
    background: url('https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80');
    background-size: cover;
    background-position: center top;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

const HeadingContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeadingText = styled.h1`
  font-size: 2.4rem;

  @media screen and (max-width: 640px) {
    font-size: 2rem;
  }
`;

const Text = styled.p`
  font-size: 1.4rem;
  text-align: center;
`;

function ProjectBackground() {
  return (
    <Background>
      <HeadingContainer>
        <HeadingText>PROJECTS</HeadingText>

        <Text>my most recent works</Text>
      </HeadingContainer>
    </Background>
  );
}

export default memo(ProjectBackground);
