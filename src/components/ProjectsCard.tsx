import { memo, ReactNode, useCallback, useMemo } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { FaBan } from 'react-icons/fa';
import { toast, ToastContainer, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ellipsize } from '../utils/text';
import StyledButton from './StyledButton';
import { useAppDispatch } from '../hooks/useRedux';
import { changeRoute } from '../redux/route/slice';

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

interface IWorkCard {
  src: string;
  title: ReactNode;
  text: ReactNode;
  github: string;
  route: string;
  stack: string[];
}
function ProjectsCard({ src, title, text, github, route, stack }: IWorkCard) {
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
    (route: string) => () => {
      dispatch(changeRoute({ routeName: route }));

      navigate(`/project/detail/${route}`);
    },
    [dispatch, navigate]
  );

  return (
    <ProjectCard>
      <ProjectImage src={src} alt="iman3" />

      <ProjectTitle>{title}</ProjectTitle>

      <TextContainer>
        <Text>{ellipsize(text as string, 100)}</Text>
      </TextContainer>

      <ChipContainer>
        {stack.map((item, index) => (
          <Chip key={`${index + 1}`}>
            <Text fontSize="12px">{item}</Text>
          </Chip>
        ))}
      </ChipContainer>

      <ButtonContainer>
        <StyledButton isLight onClick={onNavigate(route)}>
          <p>Detail</p>
        </StyledButton>

        {github !== '' ? (
          <StyledButton isLight>
            <a href={github} target="blank">
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
