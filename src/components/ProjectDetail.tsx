import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';

import { DetailEntity } from '../type';
import StyledButton from './StyledButton';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: '5rem 0rem',
});

interface IProjectDetail {
  data: DetailEntity | null;
}
function ProjectDetail({ data }: IProjectDetail) {
  const navigate = useNavigate();

  const onClick = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <Container>
      <p>{data?.title}</p>
      <p>{data?.content}</p>
      <p>{data?.video}</p>

      <StyledButton onClick={onClick}>goback</StyledButton>
    </Container>
  );
}

export default memo(ProjectDetail);
