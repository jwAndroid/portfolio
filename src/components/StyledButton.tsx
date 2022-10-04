import styled from '@emotion/styled';
import React, { memo } from 'react';

interface IEmotionButton {
  isLight?: boolean;
}

const EmotionButton = styled.button<IEmotionButton>(({ isLight }) => ({
  padding: '12px 32px',
  fontSize: '1rem',
  textTransform: 'uppercase',
  background: isLight ? 'transparent' : 'rgba(248,217,15)',
  color: isLight ? '#fff' : '#222',
  border: '1px solid #fff',
  fontWeight: 600,
  cursor: 'pointer',

  '&:hover': {
    background: 'rgba(255,255,255,0.2)',
    color: '#fff',
    transition: '0.3s',
  },
}));

interface IStyledButton {
  isLight?: boolean;
}

function StyledButton({ isLight }: IStyledButton) {
  return <EmotionButton isLight={isLight} />;
}

StyledButton.defaultProps = {
  isLight: false,
};

export default memo(StyledButton);
