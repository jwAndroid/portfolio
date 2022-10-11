import { memo, ReactNode } from 'react';
import styled from '@emotion/styled';

interface IEmotionButton {
  isLight?: boolean;
  marginTop?: string;
}
const EmotionButton = styled.button<IEmotionButton>(
  ({ isLight, marginTop }) => ({
    display: 'flex',
    padding: '1rem 3rem',
    textTransform: 'uppercase',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
    background: isLight ? 'transparent' : 'rgba(248,217,15)',
    color: isLight ? '#fff' : '#222',
    border: '1px solid #fff',
    cursor: 'pointer',
    marginTop,

    '&:hover': {
      background: 'rgba(255,255,255,0.1)',
      color: '#fff',
      transition: '0.3s',
    },
  })
);

interface IStyledButton {
  isLight?: boolean;
  children: ReactNode;
  onClick?: () => void;
  marginTop?: string;
}
function StyledButton({
  children,
  isLight,
  onClick,
  marginTop,
}: IStyledButton) {
  return (
    <EmotionButton isLight={isLight} onClick={onClick} marginTop={marginTop}>
      {children}
    </EmotionButton>
  );
}

StyledButton.defaultProps = {
  isLight: false,
  onClick: null,
  marginTop: '0rem',
};

export default memo(StyledButton);
