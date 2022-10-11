import { memo, useMemo } from 'react';
import styled from '@emotion/styled';
import ReactPlayer from 'react-player/youtube';
import { useLocation } from 'react-router-dom';
import { ProjectEntity } from '../types';

const Heading = styled.h1({
  fontSize: '40px',
  textAlign: 'center',
  paddingTop: '6rem',

  '@media screen and (max-width: 740px)': {
    fontSize: '20px',
    paddingTop: '6.5rem',
  },
});

const Container = styled.div({
  display: 'flex',
  marginBottom: '2rem',
});

const ContentsContainer = styled.div({
  display: 'flex',
  width: '500px',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '20px 40px',
});

const Title = styled.h3({
  fontSize: '24px',
});

const Text = styled.p({
  fontSize: '16px',
});

function ProjectDetail() {
  const { title, content, video } = useLocation().state as ProjectEntity;

  const playerStyle = useMemo<React.CSSProperties>(
    () => ({ marginBottom: '20px', marginTop: '10px' }),
    []
  );

  return (
    <>
      <Heading>Experienced Skills</Heading>

      <Container>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=eb05R1XN6NA"
          width="100%"
          height="700px"
          style={playerStyle}
          controls
          light
        />

        <ContentsContainer>
          <Title>{title}</Title>
          <Text>{content}</Text>
          <Text>{video}</Text>
        </ContentsContainer>
      </Container>
    </>
  );
}

export default memo(ProjectDetail);
