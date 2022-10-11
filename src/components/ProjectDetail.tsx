import styled from '@emotion/styled';
import { memo } from 'react';

import { DetailEntity } from '../type';

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
  return (
    <Container>
      <p>{data?.title}</p>
      <p>{data?.content}</p>
      <p>{data?.video}</p>
    </Container>
  );
}

export default memo(ProjectDetail);
