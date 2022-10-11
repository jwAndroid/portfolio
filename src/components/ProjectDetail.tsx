import { memo, useMemo } from 'react';
import styled from '@emotion/styled';
import ReactPlayer from 'react-player/youtube';
import { useLocation } from 'react-router-dom';
import { ProjectEntity } from '../types';

const Container = styled.div({
  display: 'flex',
  paddingTop: '7rem',
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
  const data = useLocation().state as ProjectEntity;

  console.log(data);

  const playerStyle = useMemo<React.CSSProperties>(
    () => ({ marginBottom: '20px', marginTop: '10px' }),
    []
  );

  return (
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
        <Title>타이틀</Title>
        <Text>컨텐츠</Text>
        <Text>비디오</Text>
      </ContentsContainer>
    </Container>
  );
}

export default memo(ProjectDetail);
