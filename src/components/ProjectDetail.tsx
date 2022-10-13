import { memo, useMemo } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import ReactPlayer from 'react-player/youtube';
import { useLocation } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

import { ProjectEntity } from '../types';
import useWindowEffect from '../hooks/useWindowEffect';

const Heading = styled.h1({
  fontSize: '40px',
  textAlign: 'start',
  marginLeft: '30px',
  paddingTop: '30px',

  '@media screen and (max-width: 740px)': {
    fontSize: '20px',
  },
});

const Container = styled.div({
  display: 'flex',
  padding: '10px 30px',
  marginTop: '10px',
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

  '@media screen and (max-width: 640px)': {
    width: '100%',
    marginLeft: '0px',
  },
});

const TopContainer = styled.div({
  width: '100%',
  flex: 1,
});

interface IButtonContainer {
  isCenter: boolean;
}

const ButtonContainer = styled.div<IButtonContainer>(({ isCenter }) => ({
  display: 'flex',
  width: '100%',
  justifyContent: isCenter ? 'space-between' : 'center',
  alignItems: 'center',
  padding: '0px 20px',

  '@media screen and (max-width: 640px)': {
    marginTop: '70px',
  },
}));

const ButtonBox = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  background: 'white',

  '@media screen and (max-width: 640px)': {
    width: '40px',
    height: '40px',
  },
});

const Button = styled.img({
  width: '37px',
  height: '37px',

  '@media screen and (max-width: 640px)': {
    width: '30px',
    height: '30px',
  },
});

const FlatformContainer = styled.div({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  cursor: 'pointer',

  '&:hover': {
    background: 'rgba(0,0,0,0.1)',
    color: '#fff',
    transition: '0.3s',
    opacity: '0.5',
  },
});

const FlatformText = styled.p({
  fontSize: '10px',
  marginTop: '5px',
  fontWeight: '400',

  '@media screen and (max-width: 640px)': {
    display: 'none',
  },
});

interface IStyledText {
  fontSize?: string;
  color?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
}
const StyledText = styled.p<IStyledText>(
  ({
    fontSize = '15px',
    color = '#fff',
    marginTop = 0,
    marginBottom = 0,
    marginLeft = 0,
  }) => ({
    fontSize,
    marginTop,
    marginBottom,
    marginLeft,
    wordBreak: 'break-all',
    whiteSpace: 'pre-wrap',
    fontWeight: '400',
    color,
  })
);

const StyledAnchor = styled.a({});

function ProjectDetail() {
  const theme = useTheme();

  const { title, content, github } = useLocation().state as ProjectEntity;

  const playerStyle = useMemo<React.CSSProperties>(
    () => ({ marginBottom: '20px', marginTop: '10px' }),
    []
  );

  const { windowWidth } = useWindowEffect();

  const test = content.text;

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

            <StyledText fontSize="13px" marginTop="10px" color="#D3D3D3">
              {content.createdAt}
            </StyledText>

            <StyledText fontSize="15px" marginTop="10px" color="#F2F3F5">
              {test}
            </StyledText>
          </TopContainer>

          <ButtonContainer isCenter={content.published}>
            {content.publishedUrl.android !== '' && (
              <FlatformContainer>
                <StyledAnchor
                  target="_blank"
                  rel="noreferrer"
                  href={content.publishedUrl.android}
                >
                  <ButtonBox>
                    <Button src={theme.image.google_play_store} />
                  </ButtonBox>
                </StyledAnchor>

                <FlatformText>Android</FlatformText>
              </FlatformContainer>
            )}

            {content.publishedUrl.ios !== '' && (
              <FlatformContainer>
                <StyledAnchor
                  target="_blank"
                  rel="noreferrer"
                  href={content.publishedUrl.ios}
                >
                  <ButtonBox>
                    <Button src={theme.image.app_store} />
                  </ButtonBox>
                </StyledAnchor>

                <FlatformText>Apple</FlatformText>
              </FlatformContainer>
            )}

            {github !== '' && (
              <FlatformContainer>
                <StyledAnchor target="_blank" rel="noreferrer" href={github}>
                  <FaGithub size={windowWidth >= 640 ? 50 : 40} color="white" />
                </StyledAnchor>

                <FlatformText>Github</FlatformText>
              </FlatformContainer>
            )}
          </ButtonContainer>
        </ContentsContainer>
      </Container>

      <StyledText
        fontSize="17px"
        color={theme.color.chip}
        marginLeft="30px"
        marginTop="-30px"
      >
        {content.copyright !== ''
          ? `© ${content.copyright} All rights reserved.`
          : undefined}
      </StyledText>
    </>
  );
}

export default memo(ProjectDetail);
