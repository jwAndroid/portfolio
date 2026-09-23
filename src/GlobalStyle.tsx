import { memo } from "react";
import { css, Global, Theme } from "@emotion/react";

const globalStyles = (theme: Theme) => css`
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap");

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
    background: ${theme.color.background};
    color: ${theme.color.text};
    font-family: "Open Sans", sans-serif;
    transition:
      background-color 0.2s ease,
      color 0.2s ease;
  }

  h1,
  h2,
  h3,
  h4,
  p,
  a {
    margin: 0;
    color: ${theme.color.text};
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
