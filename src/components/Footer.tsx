import { memo } from 'react';
import styled from '@emotion/styled';

const Container = styled.div({
  display: 'flex',
  width: '100%',
  height: '40vh',
  backgroundColor: '#131313',
});

function Footer() {
  return (
    <Container>
      <p>footer</p>
    </Container>
  );
}

export default memo(Footer);
