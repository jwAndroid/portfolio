import { memo } from 'react';
import styled from '@emotion/styled';

import CardData from '../utils/card';

const Heading = styled.h1({
  fontSize: '40px',
  textAlign: 'center',
  paddingTop: '6rem',
});

const Container = styled.div({
  display: 'grid',
  maxWidth: '1500px',
  margin: 'auto',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '50px',
  marginTop: '3rem',
  marginBottom: '3rem',

  '@media screen and (max-width: 740px)': {
    maxWidth: '100%',
    margin: 'auto',
    gridTemplateColumns: '1fr',
  },
});

interface IBox {
  boxShadow: string;
}
const Box = styled.div<IBox>(({ boxShadow }) => ({
  width: '100%',
  height: 'vh',
  borderRadius: '15px',
  boxShadow: `1px 2px 5px ${boxShadow}`,

  '&:hover': {
    background: 'rgba(0,0,0,0.1)',
    color: '#fff',
    transition: '0.3s',
    opacity: '0.5',
  },

  '@media screen and (max-width: 740px)': {
    padding: '2rem 3rem',
  },
}));

const ImageContainer = styled.div({
  width: '100%',
  height: '150px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const Image = styled.img(() => ({
  width: '100px',
  objectFit: 'cover',
}));

const CardText = styled.h3({
  fontSize: '20px',
  textAlign: 'center',
  marginTop: '0.5rem',
  marginBottom: '1rem',
});

function StackCard() {
  return (
    <>
      <Heading>Experienced Stack</Heading>

      <Container>
        {CardData.map((item, index) => (
          <Box key={`${index + 1}`} boxShadow={item.shadowColor}>
            <ImageContainer>
              <Image src={item.image} alt="true" />
            </ImageContainer>

            <CardText>{item.title}</CardText>
          </Box>
        ))}
      </Container>
    </>
  );
}

export default memo(StackCard);