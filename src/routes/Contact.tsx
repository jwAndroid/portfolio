import { memo } from "react";
import { Helmet } from "react-helmet-async";

import { Form } from "../components";

function Contact() {
  return (
    <>
      <Helmet title="Contact" />

      <Form />
    </>
  );
}

export default memo(Contact);
