import { memo } from 'react';
import { Global } from '@emotion/react';

function GlobalStyled() {
  return (
    <div>
      <Global
        styles={{
          '*': {
            boxSizing: 'border-box',
            margin: 0,
            padding: 0,
          },
          body: {
            background: '#000',
          },
          h1: {
            color: '#fff',
            textDecoration: 'none',
          },
          h4: {
            color: '#fff',
            textDecoration: 'none',
          },
          p: {
            color: '#fff',
            textDecoration: 'none',
          },
          a: {
            color: '#fff',
            textDecoration: 'none',
          },
          ul: {
            listStyleType: 'none',
          },
        }}
      />
    </div>
  );
}

export default memo(GlobalStyled);
