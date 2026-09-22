import { memo } from "react";
import styled from "@emotion/styled";

const LoadingContainer = styled.div<{ fullScreen: boolean }>(
  ({ fullScreen }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    minHeight: fullScreen ? "100vh" : "200px",
  }),
);

const Spinner = styled.div({
  width: "40px",
  height: "40px",
  border: "4px solid rgba(255, 255, 255, 0.2)",
  borderTop: "4px solid #f8d90f",
  borderRadius: "50%",
  animation: "spin 0.8s linear infinite",

  "@keyframes spin": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
});

interface ILoading {
  fullScreen?: boolean;
}

function Loading({ fullScreen = false }: ILoading) {
  return (
    <LoadingContainer fullScreen={fullScreen}>
      <Spinner />
    </LoadingContainer>
  );
}

export default memo(Loading);
