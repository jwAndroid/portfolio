import { memo } from "react";
import { Helmet } from "react-helmet-async";

import Foreground from "../components/Foreground";

function Home() {
  return (
    <>
      <Helmet title="JW | Software Developer" />
      <Foreground />
    </>
  );
}

export default memo(Home);
