import { memo } from 'react';
import styled from '@emotion/styled';

import CardData from '../utils/card';

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
    padding: '0.5rem 2rem',
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

const Image = styled.img(() => ({
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

function SkillCard() {
  return (
    <>
      <Heading>Experienced Skills</Heading>

      <Container>
        {CardData.map((item, index) => (
          <Box key={`${index + 1}`} boxShadow={item.shadowColor}>
            <a href={item.url} target="blank">
              <ImageContainer>
                <Image src={item.image} alt="true" />
              </ImageContainer>
              <CardText>{item.title}</CardText>
            </a>
          </Box>
        ))}
      </Container>
    </>
  );
}

export default memo(SkillCard);
