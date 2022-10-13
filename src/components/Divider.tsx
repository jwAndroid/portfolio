import styled from '@emotion/styled';
import { memo } from 'react';

interface IStyledDivider {
  marginTop?: string;
}
const StyledDivider = styled.div<IStyledDivider>(({ marginTop }) => ({
  display: 'flex',
  height: '0.1px',
  background: 'white',
  opacity: '0.3',
  marginTop,
}));

function Divider() {
  return <StyledDivider />;
}

Divider.defaultProps = {
  marginTop: '0px',
};

export default memo(Divider);
