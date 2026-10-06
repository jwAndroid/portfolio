import { memo } from "react";
import { Helmet } from "react-helmet-async";
import { useTheme } from "@emotion/react";

import { ProfileCard } from "../components";
import Foreground from "../components/Foreground";
import LogoMarquee from "../components/LogoMarquee";
import { react, reactNative, vercel, android, ios } from "../assets/svgs";

function Home() {
  const theme = useTheme();

  return (
    <>
      <Helmet title="JW | Application Developer" />

      <Foreground />
      <ProfileCard />

      <LogoMarquee
        rows={[
          {
            id: "row-a",
            logos: [
              { src: react },
              { src: reactNative },
              { src: android },
              { src: ios },
            ],
            speed: 30,
          },
          {
            id: "row-b",
            logos: [{ src: vercel }, { src: theme.image.app_store }],
            speed: 30,
            reverse: true,
          },
        ]}
      />
    </>
  );
}

export default memo(Home);
