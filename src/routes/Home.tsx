import { memo } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

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

      <Foreground />
    </>
  );
}

export default memo(Home);
