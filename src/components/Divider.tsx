import styled from "@emotion/styled";
import { memo } from "react";

interface IStyledDivider {
  marginTop?: string;
}
const StyledDivider = styled.div<IStyledDivider>(({ marginTop, theme }) => ({
  display: "flex",
  height: "0.1px",
  background: theme.color.white,
  opacity: "0.3",
  marginTop,
}));

function Divider() {
  return <StyledDivider />;
}

Divider.defaultProps = {
  marginTop: "0px",
};

export default memo(Divider);
