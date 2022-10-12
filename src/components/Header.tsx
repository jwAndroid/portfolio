import styled from '@emotion/styled';
import { memo } from 'react';

const Container = styled.div({
  display: 'flex',
  width: '100%',
  height: '60px',
  background: 'gray',
});

function Header() {
  return (
    <Container>
      <p>header</p>
    </Container>
  );
}

export default memo(Header);
