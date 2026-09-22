import { memo, ReactNode } from "react";
import styled from "@emotion/styled";

interface IEmotionButton {
  isLight?: boolean;
  marginTop?: string;
}

const EmotionButton = styled.button<IEmotionButton>(
  ({ isLight, marginTop }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "15px 35px",
    textTransform: "uppercase",
    borderRadius: "10px",
    border: "1px solid #fff",
    cursor: "pointer",
    marginTop,
    color: isLight ? "#fff" : "#222",
    background: isLight ? "transparent" : "rgba(248,217,15)",
    transition: "0.3s",

    "&:hover:not(:disabled)": {
      background: "rgba(255,255,255,0.1)",
      color: "#fff",
    },

    "&:disabled": {
      cursor: "not-allowed",
      opacity: 0.7,
    },

    "@media screen and (max-width: 740px)": {
      height: "50px",
      padding: "0px 30px",
    },
  }),
);

const Spinner = styled.span({
  width: "18px",
  height: "18px",
  border: "2px solid rgba(255, 255, 255, 0.3)",
  borderTopColor: "#fff",
  borderRadius: "50%",
  animation: "spin 0.7s linear infinite",

  "@keyframes spin": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
});

interface IStyledButton {
  isLight?: boolean;
  children: ReactNode;
  onClick?: () => void;
  marginTop?: string;
  isLoading?: boolean;
}

function StyledButton({
  children,
  isLight = false,
  onClick,
  marginTop = "0px",
  isLoading = false,
}: IStyledButton) {
  return (
    <EmotionButton
      type="submit"
      isLight={isLight}
      onClick={onClick}
      marginTop={marginTop}
      disabled={isLoading}
    >
      {isLoading ? <Spinner /> : children}
    </EmotionButton>
  );
}

export default memo(StyledButton);
