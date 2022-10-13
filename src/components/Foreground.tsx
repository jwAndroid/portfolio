import { memo } from 'react';
import styled from '@emotion/styled';

import Profile from './Profile';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100vh',
});

function Foreground() {
  return (
    <Container>
      <Profile />
    </Container>
  );
}

export default memo(Foreground);
