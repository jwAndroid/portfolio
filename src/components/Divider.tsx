import styled from '@emotion/styled';
import { memo } from 'react';

const StyledDivider = styled.div(({ theme }) => ({
  display: 'flex',
  height: '0.5px',
  margin: '0px 30px',
  background: theme.color.gray,
}));

function Divider() {
  return <StyledDivider />;
}

export default memo(Divider);
