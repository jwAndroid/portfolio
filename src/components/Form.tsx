import { memo } from 'react';
import styled from '@emotion/styled';

import StyledButton from './StyledButton';

const StyledForm = styled.form({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: 'auto',
  maxWidth: '800px',
  height: '80vh',

  '@media screen and (max-width: 740px)': {
    padding: '7rem 5rem',
  },
});

const Label = styled.label({
  color: '#fff',
  marginBottom: '0.5rem',
});

const Input = styled.input({
  marginBottom: '1rem',
  padding: '10px 18px',
  fontSize: '1.2rem',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  borderColor: 'rgba(255, 255, 255, 0.1)',
  color: '#f4f4f4',
});

const Textarea = styled.textarea({
  marginBottom: '1rem',
  padding: '10px 18px',
  fontSize: '1.2rem',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  borderColor: 'rgba(255, 255, 255, 0.1)',
  color: '#f4f4f4',
});

function Form() {
  return (
    <StyledForm>
      <Label>Name</Label>
      <Input type="text" />

      <Label>Email</Label>
      <Input type="email" />

      <Label>Title</Label>
      <Input type="text" />

      <Label>Contents</Label>
      <Textarea rows={6} placeholder="" />

      <StyledButton isLight>
        <p>Send</p>
      </StyledButton>
    </StyledForm>
  );
}

export default memo(Form);
