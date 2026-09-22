import { memo } from "react";
import { css, Global } from "@emotion/react";

const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"rel="stylesheet");

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    background: #111827;
    font-family: "Outfit", sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  p,
  a {
    margin: 0;
    color: #fff;
  }

  a {
    text-decoration: none;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  button,
  input,
  textarea {
    font-family: inherit;
  }
`;

function GlobalStyle() {
  return <Global styles={globalStyles} />;
}

export default memo(GlobalStyle);
