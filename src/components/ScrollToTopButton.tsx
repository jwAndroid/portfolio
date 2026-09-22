import { memo, useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { FaArrowUp } from 'react-icons/fa';

const ScrollContainer = styled.div({
  position: 'fixed',
  right: '5%',
  bottom: '5%',
  zIndex: '1',
});

const TopButton = styled.button({
  padding: '10px',
  backgroundColor: '#111827',
  border: '0.7px solid #fff',
  borderRadius: '50%',
  cursor: 'pointer',

  '&:hover': {
    background: 'rgba(255,255,255,0.1)',
    transition: '0.3s',
  },
});

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleShowButton);

    return () => {
      window.removeEventListener('scroll', handleShowButton);
    };
  }, []);

  const scrollToTop = useCallback(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return showButton ? (
    <ScrollContainer>
      <TopButton onClick={scrollToTop}>
        <FaArrowUp size={20} color="#fff" />
      </TopButton>
    </ScrollContainer>
  ) : null;
}

export default memo(ScrollToTopButton);
