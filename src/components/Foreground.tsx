import { memo } from 'react';
import styled from '@emotion/styled';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100vh',
  background: 'orange',
});

const Contents = styled.div({
  flex: 1,
  background: 'skyblue',
});

function Foreground() {
  return (
    <Container>
      <p>Title</p>

      <Contents>
        <p>contents</p>
      </Contents>
    </Container>
  );
}

export default memo(Foreground);
