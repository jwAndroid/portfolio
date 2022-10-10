import { memo, useEffect, useState } from 'react';
import styled from '@emotion/styled';

import CardData from '../utils/card';

const Container = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

const Heading = styled.h2(() => ({
  fontSize: '40px',
  textAlign: 'center',

  '@media screen and (max-width: 740px)': {
    fontSize: '20px',
  },
}));

const ChartContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  margin: 'auto',
  padding: '2rem 0rem',
});

const ChartBar = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: '1rem',
});

interface IBar {
  width: string;
  background: string;
}
const Bar = styled.div<IBar>(({ width, background }) => ({
  width,
  padding: '1rem',
  background,
  marginLeft: '1rem',
  borderTopRightRadius: '10px',
  borderBottomRightRadius: '10px',
  justifyItems: 'center',
  alignItems: 'center',
  opacity: '0.8',

  '@media screen and (max-width: 740px)': {
    display: 'none',
  },
}));

interface ITitle {
  color: string;
}
const Title = styled.h4<ITitle>(({ color }) => ({
  width: '130px',
  fontSize: '20px',
  fontWeight: '500',
  color,

  '@media screen and (max-width: 740px)': {
    fontSize: '10px',
  },
}));

const NumberText = styled.h4({
  width: '120px',
  fontSize: '20px',
  fontWeight: '500',
  marginLeft: '1rem',
});

function Chart() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));

    return () => {
      window.removeEventListener('resize', () => {
        return setWindowWidth(window.innerWidth);
      });
    };
  }, [windowWidth]);

  return (
    <Container>
      <Heading>Chart</Heading>

      <ChartContainer>
        {CardData.sort((a, b) => b.proficiency - a.proficiency).map(
          (item, index) => {
            if (item.proficiency !== 0) {
              return (
                <ChartBar key={`${index + 1}`}>
                  <Title color={item.shadowColor}>{item.title}</Title>

                  {windowWidth >= 740 ? (
                    <Bar
                      width={`${String(item.proficiency)}px`}
                      background={item.shadowColor}
                    />
                  ) : (
                    <NumberText color={item.shadowColor}>
                      {`${item.proficiency}.`}
                    </NumberText>
                  )}
                </ChartBar>
              );
            }

            return null;
          }
        )}
      </ChartContainer>
    </Container>
  );
}

export default memo(Chart);
