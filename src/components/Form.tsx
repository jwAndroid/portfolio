import styled from '@emotion/styled';
import { memo } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 1rem;
  margin: auto;
  max-width: 600px;
`;

const Label = styled.label`
  color: #fff;
  margin-bottom: 0.5rem;
`;

function Form() {
  return (
    <Container>
      <form>
        <Label>Your Name</Label>
      </form>
    </Container>
  );
}

export default memo(Form);
