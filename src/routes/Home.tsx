import { memo } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

import { Footer, Header } from "../components";
import Foreground from "../components/Foreground";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <button
        type="button"
        onClick={() => {
          navigate("poc");
        }}
      >
        TEST PAGE
      </button>
      <Helmet title="Home" />
      <Header />
      <Foreground />
      <Footer />
    </>
  );
}

export default memo(Home);
