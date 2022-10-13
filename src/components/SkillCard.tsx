import { memo, useMemo } from 'react';
import styled from '@emotion/styled';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { useAppSelector } from '../hooks/useRedux';

const Heading = styled.h1({
  fontSize: '40px',
  textAlign: 'center',
  marginTop: '50px',

  '@media screen and (max-width: 740px)': {
    fontSize: '20px',
  },
});

const Container = styled.div({
  display: 'grid',
  maxWidth: '1140px',
  margin: 'auto',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '50px',
  marginTop: '20px',
  marginBottom: '50px',
  padding: '30px',

  '@media screen and (max-width: 640px)': {
    gridTemplateColumns: '1fr',
  },
});

interface IBox {
  boxShadow: string;
}
const Box = styled.div<IBox>(({ boxShadow }) => ({
  width: '100%',
  borderRadius: '15px',
  padding: '20px',
  boxShadow: `1px 2px 5px ${boxShadow}`,

  '&:hover': {
    background: 'rgba(0,0,0,0.1)',
    color: '#fff',
    transition: '0.3s',
    opacity: '0.5',
  },

  '@media screen and (max-width: 740px)': {
    padding: '10px 20px',
  },
}));

const ImageContainer = styled.div({
  width: '100%',
  height: '120px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px 0px',
});

const Image = styled(LazyLoadImage)(() => ({
  width: '100px',
  objectFit: 'cover',
}));

const CardText = styled.h3({
  fontSize: '20px',
  textAlign: 'center',
  marginTop: '10px',
  marginBottom: '10px',

  '@media screen and (max-width: 740px)': {
    fontSize: '10px',
  },
});

const StyledAnchor = styled.a({});

function SkillCard() {
  const cards = useAppSelector((state) => state.card.posts.data);

  const data = useMemo(
    () =>
      cards &&
      cards.map((item) => item).sort((a, b) => b.proficiency - a.proficiency),
    [cards]
  );

  return (
    <>
      <Heading>Experienced Skills</Heading>

      <Container>
        {data &&
          data.map((item, index) => (
            <Box key={`${index + 1}`} boxShadow={item.shadowColor}>
              <StyledAnchor href={item.url} target="blank">
                <ImageContainer>
                  <Image alt={item.image} effect="blur" src={item.image} />
                </ImageContainer>

                <CardText>{item.title}</CardText>
              </StyledAnchor>
            </Box>
          ))}
      </Container>
    </>
  );
}

export default memo(SkillCard);
