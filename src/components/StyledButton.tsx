import { memo, ReactNode } from 'react';
import styled from '@emotion/styled';

interface IEmotionButton {
  isLight?: boolean;
}
const EmotionButton = styled.button<IEmotionButton>(({ isLight }) => ({
  padding: '1rem 3rem',
  textTransform: 'uppercase',
  borderRadius: '10px',
  background: isLight ? 'transparent' : 'rgba(248,217,15)',
  color: isLight ? '#fff' : '#222',
  border: '1px solid #fff',
  cursor: 'pointer',

  '&:hover': {
    background: 'rgba(255,255,255,0.1)',
    color: '#fff',
    transition: '0.3s',
  },
}));

interface IStyledButton {
  isLight?: boolean;
  children: ReactNode;
  onClick?: () => void;
}
function StyledButton({ children, isLight, onClick }: IStyledButton) {
  return (
    <EmotionButton isLight={isLight} onClick={onClick}>
      {children}
    </EmotionButton>
  );
}

StyledButton.defaultProps = {
  isLight: false,
  onClick: null,
};

export default memo(StyledButton);
