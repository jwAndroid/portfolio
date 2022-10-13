import { memo, useCallback } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ellipsize } from '../utils/text';
import { useAppDispatch } from '../hooks/useRedux';
import { changeRoute } from '../redux/route/slice';
import { ProjectEntity } from '../types';

const ProjectCard = styled.div(({ theme }) => ({
  padding: '15px',
  margin: '20px',
  background: theme.color.card,
  borderRadius: '15px',
  boxShadow: '1px 2px 15px #011627',
  cursor: 'pointer',

  '@media screen and (max-width: 740px)': {
    margin: '0px 15px',
  },

  '&:hover': {
    background: 'rgba(255,255,255,0.1)',
    transition: '0.3s',
    opacity: '0.4',
  },
}));

const ProjectImage = styled.img({
  width: '100%',
  height: '180px',
  borderRadius: '15px',
});

const ProjectTitle = styled.h2(({ theme }) => ({
  color: theme.color.white,
  padding: '10px 0px',
  fontSize: '25px',

  '@media screen and (max-width: 740px)': {
    fontSize: '18px',
  },
}));

interface IContentsText {
  fontSize?: string;
}
const ContentsText = styled.p<IContentsText>(({ fontSize }) => ({
  fontSize,
  textAlign: 'justify',
  fontWeight: '500',

  '@media screen and (max-width: 740px)': {
    fontSize: '13px',
  },
}));

const TextContainer = styled.div({
  width: '100%',
  height: '120px',

  '@media screen and (max-width: 740px)': {
    height: '100px',
  },
});

const ChipContainer = styled.div(() => ({
  display: 'flex',
}));

const Chip = styled.div(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 10,
  padding: '3px 10px',
  marginRight: '10px',
  border: `1px solid ${theme.color.chip}`,
}));

interface IProjectsCard {
  data: ProjectEntity;
}
function ProjectsCard({ data }: IProjectsCard) {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const onNavigate = useCallback(
    (data: ProjectEntity) => () => {
      if (data) {
        dispatch(changeRoute({ routeName: data.route }));

        navigate(`/project/detail/${data.route}`, { state: data });
      }
    },
    [dispatch, navigate]
  );

  return (
    <ProjectCard onClick={onNavigate(data)}>
      <ProjectImage src={data.src} alt="" />

      <ProjectTitle>{data.title}</ProjectTitle>

      <TextContainer>
        <ContentsText fontSize="14px">
          {ellipsize(data.text as string, 50)}
        </ContentsText>
      </TextContainer>

      <ChipContainer>
        {data.stack.map((item, index) => (
          <Chip key={`${index + 1}`}>
            <ContentsText fontSize="12px">{item}</ContentsText>
          </Chip>
        ))}
      </ChipContainer>

      <ToastContainer />
    </ProjectCard>
  );
}

export default memo(ProjectsCard);
