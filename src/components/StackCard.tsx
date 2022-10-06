import { memo } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

const Heading = styled.h1({
  textAlign: 'center',
  paddingTop: '8rem',
});

const Container = styled.div({
  display: 'grid',
  maxWidth: '1500px',
  margin: 'auto',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '50px',
  paddingTop: '5rem',

  '@media screen and (max-width: 740px)': {
    maxWidth: '100%',
    margin: 'auto',
    gridTemplateColumns: '1fr',
  },
});

const Box = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'vh',
  borderRadius: '15px',
  boxShadow: '1px 2px 5px #F4AAB9',
  padding: '1rem 2rem',

  '@media screen and (max-width: 740px)': {
    padding: '2rem 3rem',
  },
});

const Image = styled.img({
  width: '100px',
  height: '90px',
  marginTop: '1rem',
});

const OutlineBox = styled.div({
  boxShadow: '-1px -2px 5px #878787',
  borderRadius: '15px',
});

const ChartContainer = styled.div({
  display: 'flex',
  height: '400px',
  paddingTop: '5rem',

  '@media screen and (max-width: 740px)': {
    padding: '2rem 3rem',
  },
});

const CardText = styled.h3({
  fontSize: '20px',
  margin: '1rem 1rem',
});

function StackCard() {
  const theme = useTheme();

  return (
    <>
      <Heading>Stack</Heading>

      <Container>
        <OutlineBox>
          <Box>
            <Image src={theme.image.react} alt="true" />

            <CardText>React</CardText>
          </Box>
        </OutlineBox>

        <OutlineBox>
          <Box>
            <Image src={theme.image.react} alt="true" />

            <CardText>React-Native</CardText>
          </Box>
        </OutlineBox>

        <OutlineBox>
          <Box>
            <Image src={theme.image.redux} alt="true" />

            <CardText>Redux</CardText>
          </Box>
        </OutlineBox>

        <OutlineBox>
          <Box>
            <Image src={theme.image.project} alt="true" />

            <CardText>Github</CardText>
          </Box>
        </OutlineBox>
      </Container>

      <Heading>Stack</Heading>

      <ChartContainer>
        <p>차트</p>
      </ChartContainer>
    </>
  );
}

export default memo(StackCard);
