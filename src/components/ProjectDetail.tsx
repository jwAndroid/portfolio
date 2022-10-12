import { memo, useMemo } from 'react';
import styled from '@emotion/styled';
import ReactPlayer from 'react-player/youtube';
import { useLocation } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

import { ProjectEntity } from '../types';
import useWindowEffect from '../hooks/useWindowEffect';

const Heading = styled.h1({
  fontSize: '40px',
  textAlign: 'center',
  paddingTop: '30px',

  '@media screen and (max-width: 740px)': {
    fontSize: '20px',
  },
});

const Container = styled.div({
  display: 'flex',
  padding: '10px 30px',
  marginTop: '20px',
  paddingBottom: '50px',

  '@media screen and (max-width: 740px)': {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const ContentsContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '430px',
  alignItems: 'start',
  padding: '20px',
  marginTop: '10px',
  marginBottom: '20px',
  background: '#1e2937',
  borderRadius: '15px',
  marginLeft: '30px',

  '@media screen and (max-width: 740px)': {
    width: '100%',
    marginLeft: '0px',
  },
});

const TopContainer = styled.div({
  width: '100%',
  flex: 1,
});

const BottomContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  padding: '10px 20px',
  cursor: 'pointer',
});

interface IStyledText {
  fontSize?: string;
  color?: string;
  marginTop?: string;
  marginBottom?: string;
}
const StyledText = styled.p<IStyledText>(
  ({ fontSize = '15px', color = '#fff', marginTop = 0, marginBottom = 0 }) => ({
    fontSize,
    marginTop,
    marginBottom,
    wordBreak: 'break-all',
    whiteSpace: 'pre-wrap',
    fontWeight: '400',
    color,
  })
);

const StyledAnchor = styled.a({
  '&:hover': {
    background: 'rgba(0,0,0,0.1)',
    color: '#fff',
    transition: '0.3s',
    opacity: '0.5',
  },
});

function ProjectDetail() {
  const { title, content, github } = useLocation().state as ProjectEntity;

  const playerStyle = useMemo<React.CSSProperties>(
    () => ({ marginBottom: '20px', marginTop: '10px' }),
    []
  );

  const { windowWidth } = useWindowEffect();

  return (
    <>
      <Heading>{title}</Heading>

      <Container>
        {content.videoUrl !== '' ? (
          <ReactPlayer
            url={content.videoUrl}
            width="100%"
            height={windowWidth >= 640 ? '700px' : '400px'}
            style={playerStyle}
            controls
            muted
          />
        ) : null}

        <ContentsContainer>
          <TopContainer>
            <StyledText fontSize="30px">{title}</StyledText>

            <StyledText fontSize="15px" marginTop="10px">
              {content.text}
            </StyledText>
          </TopContainer>

          <BottomContainer>
            <StyledAnchor target="_blank" rel="noreferrer" href={github}>
              <FaGithub size={50} color="white" />
            </StyledAnchor>

            <StyledText>{title}</StyledText>
          </BottomContainer>
        </ContentsContainer>
      </Container>
    </>
  );
}

export default memo(ProjectDetail);
