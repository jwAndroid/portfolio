import { css, Global, Theme } from "@emotion/react";

const styles = (theme: Theme) => css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: ${theme.color.surface};
    color: ${theme.color.text};
  }

  a {
    color: inherit;
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

export default function GlobalStyle() {
  return <Global styles={styles} />;
}
