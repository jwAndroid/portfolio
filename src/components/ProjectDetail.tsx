import { memo, useMemo } from 'react';
import styled from '@emotion/styled';
import ReactPlayer from 'react-player/youtube';
import { useLocation } from 'react-router-dom';
import { ProjectEntity } from '../types';
import useWindowEffect from '../hooks/useWindowEffect';

const Heading = styled.h1({
  fontSize: '40px',
  textAlign: 'center',
  paddingTop: '5rem',

  '@media screen and (max-width: 740px)': {
    fontSize: '20px',
  },
});

const Container = styled.div({
  display: 'flex',
  padding: '10px 30px',
  marginTop: '20px',
  paddingBottom: '50px',
  background: 'orange',

  '@media screen and (max-width: 740px)': {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const ContentsContainer = styled.div({
  display: 'flex',
  width: '430px',
  alignItems: 'start',
  flexDirection: 'column',
  padding: '20px',
  marginTop: '10px',
  marginBottom: '20px',
  background: '#1a1919',
  marginLeft: '20px',

  '@media screen and (max-width: 740px)': {
    width: '100%',
    marginRight: '20px',
  },
});

function ProjectDetail() {
  const { title, content, videoUrl } = useLocation().state as ProjectEntity;

  console.log(videoUrl);

  const playerStyle = useMemo<React.CSSProperties>(
    () => ({ marginBottom: '20px', marginTop: '10px' }),
    []
  );

  const { windowWidth } = useWindowEffect();

  return (
    <>
      <Heading>{title}</Heading>

      <Container>
        <ReactPlayer
          url={videoUrl}
          width="100%"
          height={windowWidth >= 740 ? '700px' : '400px'}
          style={playerStyle}
          controls
          light
        />

        <ContentsContainer>
          <h3>{title}</h3>
          <p>{content}</p>
          <p>{videoUrl}</p>
        </ContentsContainer>
      </Container>
    </>
  );
}

export default memo(ProjectDetail);
