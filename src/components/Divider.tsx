import styled from '@emotion/styled';
import { memo } from 'react';

const StyledDivider = styled.div(({ theme }) => ({
  display: 'flex',
  height: '0.5px',
  margin: '0rem 3rem',
  background: theme.color.gray,
}));

function Divider() {
  return <StyledDivider />;
}

export default memo(Divider);
