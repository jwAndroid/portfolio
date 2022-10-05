import { memo } from 'react';
import { css, Global } from '@emotion/react';

function GlobalStyle() {
  return (
    <Global
      styles={css`
        @import url(https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap);
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: 'Outfit', sans-serif;
        }
        body {
          background: #1c2128;
        }
        h1,
        h2,
        h3,
        h4,
        p,
        a {
          color: #fff;
          text-decoration: none;
        }
        ul {
          list-style-type: none;
        }
      `}
    />
  );
}

export default memo(GlobalStyle);