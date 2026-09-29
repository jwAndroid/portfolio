import { memo } from "react";
import styled from "@emotion/styled";

type InitialType = {
  fontSize: number;
};

const Initial = styled.div<InitialType>(({ theme, fontSize }) => ({
  display: "inline-flex",
  alignItems: "baseline",
  fontFamily: "Inter, sans-serif",
  fontSize,
  fontWeight: 800,
  letterSpacing: "1px",
  lineHeight: 1,
  color: theme.color.text,
  cursor: "pointer",
  userSelect: "none",

  "&::after": {
    content: '""',
    width: "5px",
    height: "5px",
    marginLeft: "3px",
    marginBottom: "2px",
    borderRadius: "50%",
    backgroundColor: theme.color.primary,
    transition: "transform 0.2s ease",
  },

  "&:hover::after": {
    transform: "scale(1.4)",
  },
}));

type MarkType = {
  children: string;
  fontSize: number;
  onClick?: () => void;
};

function Mark({ children, onClick, fontSize }: MarkType) {
  return (
    <Initial fontSize={fontSize} onClick={onClick}>
      {children}
    </Initial>
  );
}

export default memo(Mark);
