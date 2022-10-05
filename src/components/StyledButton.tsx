import styled from '@emotion/styled';
import React, { memo } from 'react';

interface IEmotionButton {
  isLight?: boolean;
}
const EmotionButton = styled.button<IEmotionButton>(({ isLight }) => ({
  padding: '1rem 3rem',
  textTransform: 'uppercase',
  background: isLight ? 'transparent' : 'rgba(248,217,15)',
  color: isLight ? '#fff' : '#222',
  border: '1px solid #fff',
  cursor: 'pointer',

  '&:hover': {
    background: 'rgba(255,255,255,0.2)',
    color: '#fff',
    transition: '0.3s',
  },
}));

interface IStyledButton {
  isLight?: boolean;
  children: React.ReactNode;
}
function StyledButton({ children, isLight }: IStyledButton) {
  return <EmotionButton isLight={isLight}>{children}</EmotionButton>;
}

StyledButton.defaultProps = {
  isLight: false,
};

export default memo(StyledButton);
