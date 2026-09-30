import { memo } from "react";
import { Helmet } from "react-helmet-async";

import { ProfileCard } from "../components";
import Foreground from "../components/Foreground";

function Home() {
  return (
    <>
      <Helmet title="JW | Software Developer" />

      <ProfileCard />
      <Foreground />
    </>
  );
}

export default memo(Home);
