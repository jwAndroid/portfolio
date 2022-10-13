import { memo, useMemo } from 'react';
import styled from '@emotion/styled';

import useWindowEffect from '../hooks/useWindowEffect';
import { useAppSelector } from '../hooks/useRedux';

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
  padding: '30px 0px',
  margin: 'auto',
});

const ChartBar = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: '20px',
});

interface IBar {
  width: string;
  background: string;
}
const Bar = styled.div<IBar>(({ width, background }) => ({
  width,
  padding: '15px',
  background,
  marginLeft: '15px',
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
  width: '90px',
  fontSize: '15px',
  fontWeight: '500',
  color,

  '@media screen and (max-width: 740px)': {
    fontSize: '12px',
  },
}));

const NumberText = styled.h4({
  width: '120px',
  fontSize: '20px',
  fontWeight: '500',
  marginLeft: '10px',
});

function Chart() {
  const cards = useAppSelector((state) => state.card.posts.data);

  const { windowWidth } = useWindowEffect();

  const data = useMemo(
    () =>
      cards &&
      cards.map((item) => item).sort((a, b) => b.proficiency - a.proficiency),
    [cards]
  );

  return (
    <Container>
      <Heading>Chart</Heading>

      <ChartContainer>
        {data &&
          data.map((item, index) => {
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
          })}
      </ChartContainer>
    </Container>
  );
}

export default memo(Chart);
