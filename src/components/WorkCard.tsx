import { memo, ReactNode } from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { ellipsize } from '../utils/text';
import StyledButton from './StyledButton';

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
  height: 'vh',
  borderRadius: '15px',
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
  view: string;
  stack: string[];
}
function WorkCard({ src, title, text, view, stack }: IWorkCard) {
  console.log(view);
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
        <StyledButton isLight>
          <Link to="/project/detail">Detail</Link>
        </StyledButton>

        <StyledButton isLight>
          <a href={view} target="blank">
            Github
          </a>
        </StyledButton>
      </ButtonContainer>
    </ProjectCard>
  );
}

export default memo(WorkCard);
