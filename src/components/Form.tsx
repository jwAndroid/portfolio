import { memo, useCallback, useMemo } from 'react';
import styled from '@emotion/styled';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import StyledButton from './StyledButton';

const StyledForm = styled.form({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: 'auto',
  maxWidth: '800px',
  height: '80vh',

  '@media screen and (max-width: 740px)': {
    padding: '50px 30px',
  },
});

const Label = styled.label({
  color: '#fff',
  marginBottom: '10px',
});

const Input = styled.input({
  marginBottom: '20px',
  padding: '10px 18px',
  fontSize: '15px',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  borderColor: 'rgba(255, 255, 255, 0.1)',
  color: '#f4f4f4',
});

const Textarea = styled.textarea({
  marginBottom: '20px',
  padding: '10px 18px',
  fontSize: '20px',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  borderColor: 'rgba(255, 255, 255, 0.1)',
  color: '#f4f4f4',
});

const Send = styled.p({
  fontSize: '17px',
});

const SubContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '10px',
});

const SubText = styled.h4({
  fontSize: '12px',
  color: 'gray',
  marginTop: '5px',
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
        .sendForm(
          `${process.env.REACT_APP_SERVICE_ID}`,
          `${process.env.REACT_APP_TEMPLATE_ID}`,
          e.currentTarget,
          `${process.env.REACT_APP_PUBLICK_KEY}`
        )
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

      <StyledButton isLight>
        <Send>Send</Send>
      </StyledButton>

      <SubContainer>
        <SubText>email: cjd9408er@naver.com</SubText>

        <SubText>Tel: 010 6427 8522</SubText>
      </SubContainer>

      <ToastContainer />
    </StyledForm>
  );
}

export default memo(Form);
