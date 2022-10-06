import { memo, useCallback, useMemo } from 'react';
import styled from '@emotion/styled';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import StyledButton from './StyledButton';
import { PUBLICK_KEY, SERVICE_ID, TEMPLATE_ID } from '../api/emailjs';

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

const Send = styled.p({
  fontSize: '17px',
});

function Form() {
  const toastOption = useMemo<ToastOptions>(
    () => ({
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }),
    []
  );

  const sendEmail = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, e.currentTarget, PUBLICK_KEY)
        .then(
          () => {
            toast.success('Mail has been sent', toastOption);
          },
          () => {
            toast.error('Some error ouccuerd', toastOption);
          }
        );

      e.currentTarget.reset();
    },
    [toastOption]
  );

  return (
    <StyledForm onSubmit={sendEmail}>
      <Label>Title</Label>
      <Input type="text" name="from_name" />

      <Label>Your Email</Label>
      <Input type="email" name="to_name" />

      <Label>Message</Label>
      <Textarea rows={6} name="message" placeholder="" />

      <StyledButton isLight marginTop="0.5rem">
        <Send>Send</Send>
      </StyledButton>

      <ToastContainer />
    </StyledForm>
  );
}

export default memo(Form);
