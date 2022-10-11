import { memo, useCallback, useMemo } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { FaBan } from 'react-icons/fa';
import { toast, ToastContainer, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ellipsize } from '../utils/text';
import StyledButton from './StyledButton';
import { useAppDispatch } from '../hooks/useRedux';
import { changeRoute } from '../redux/route/slice';
import { ProjectEntity } from '../types';

const ProjectCard = styled.div(({ theme }) => ({
  padding: '1rem',
  background: theme.color.card,
  borderRadius: '15px',

  '@media screen and (max-width: 740px)': {
    margin: '0rem 2rem',
  },
}));

const ProjectImage = styled.img({
  width: '100%',
  height: '180px',
  borderRadius: '15px',

  '@media screen and (max-width: 740px)': {
    height: '220px',
  },
});

const ProjectTitle = styled.h2(({ theme }) => ({
  color: theme.color.white,
  padding: '1rem 0rem',
}));

const TextContainer = styled.div({
  width: '100%',
  height: '7rem',
});

const ButtonContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0.5rem 0',
});

const ChipContainer = styled.div(() => ({
  display: 'flex',
  paddingBottom: '0.2rem',
}));

const Chip = styled.div(({ theme }) => ({
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 10,
  padding: '0.2rem 0.5rem',
  marginRight: '0.5rem',
  border: `1px solid ${theme.color.chip}`,
}));

interface IText {
  fontSize?: string;
}
const Text = styled.p<IText>(({ fontSize }) => ({
  fontSize,
  textAlign: 'justify',
}));

interface IProjectsCard {
  data: ProjectEntity;
}
function ProjectsCard({ data }: IProjectsCard) {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const style = useMemo<React.CSSProperties>(
    () => ({
      color: '#fff',
      margin: '0rem 0.7rem',
    }),
    []
  );

  const toastOption = useMemo<ToastOptions>(
    () => ({
      position: 'top-right',
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }),
    []
  );

  const onClick = useCallback(() => {
    toast.error('Private Github', toastOption);
  }, [toastOption]);

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
    <ProjectCard>
      <ProjectImage src={data.src} alt="" />

      <ProjectTitle>{data.title}</ProjectTitle>

      <TextContainer>
        <Text>{ellipsize(data.text as string, 100)}</Text>
      </TextContainer>

      <ChipContainer>
        {data.stack.map((item, index) => (
          <Chip key={`${index + 1}`}>
            <Text fontSize="12px">{item}</Text>
          </Chip>
        ))}
      </ChipContainer>

      <ButtonContainer>
        <StyledButton isLight onClick={onNavigate(data)}>
          <p>Detail</p>
        </StyledButton>

        {data.github !== '' ? (
          <StyledButton isLight>
            <a href={data.github} target="blank">
              Github
            </a>
          </StyledButton>
        ) : (
          <StyledButton isLight onClick={onClick}>
            <FaBan size={20} style={style} />
          </StyledButton>
        )}
      </ButtonContainer>

      <ToastContainer />
    </ProjectCard>
  );
}

export default memo(ProjectsCard);
