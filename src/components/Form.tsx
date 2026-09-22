import styled from "@emotion/styled";
import { memo, useCallback, useState } from "react";
import { toast, ToastContainer, ToastOptions } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
import emailjs from "@emailjs/browser";

import StyledButton from "./StyledButton";

const toastOption: ToastOptions = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const StyledForm = styled.form({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: "auto",
  maxWidth: "800px",
  height: "80vh",

  "@media screen and (max-width: 740px)": {
    padding: "50px 30px",
  },
});

const Label = styled.label({
  color: "#fff",
  marginBottom: "10px",
});

const Input = styled.input({
  marginBottom: "20px",
  padding: "10px 18px",
  fontSize: "15px",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  borderColor: "rgba(255, 255, 255, 0.1)",
  color: "#f4f4f4",
});

const Textarea = styled.textarea({
  marginBottom: "20px",
  padding: "10px 18px",
  fontSize: "20px",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  borderColor: "rgba(255, 255, 255, 0.1)",
  color: "#f4f4f4",
});

const Send = styled.p({
  fontSize: "17px",
});

function Form() {
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(form);
    const title = String(formData.get("from_title") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!title) {
      toast.error("Please enter a title.", toastOption);
      return;
    }

    if (!message) {
      toast.error("Please enter a message.", toastOption);
      return;
    }

    try {
      setIsLoading(true);

      await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID!,
        process.env.REACT_APP_TEMPLATE_ID!,
        form,
        process.env.REACT_APP_PUBLIC_KEY!,
      );

      toast.success("Mail has been sent", toastOption);

      form.reset();
    } catch (error) {
      toast.error("Some error occurred", toastOption);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <StyledForm onSubmit={sendEmail}>
      <Label>Title</Label>
      <Input type="text" name="from_title" />

      <Label>Message</Label>
      <Textarea rows={6} name="message" />

      <StyledButton isLight isLoading={isLoading}>
        <Send>Send</Send>
      </StyledButton>

      <ToastContainer />
    </StyledForm>
  );
}

export default memo(Form);
