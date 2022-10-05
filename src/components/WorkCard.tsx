import styled from '@emotion/styled';
import { memo, ReactNode } from 'react';
import { NavLink, To } from 'react-router-dom';
import { ellipsize } from '../utils/text';
import StyledButton from './StyledButton';

const ProjectCard = styled.div`
  background: #1a1919;
  padding: 1.2rem 1rem;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: vh;
`;

const ProjectTitle = styled.h2`
  color: #fff;
  padding: 1rem 0;
`;

const TextContainer = styled.div`
  width: 100%;
  height: 12rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.5rem 0;
`;

interface IText {
  fontSize: string;
}
const Text = styled.p<IText>`
  padding-bottom: 1rem;
  font-size: ${(props) => props.fontSize};
  text-align: justify;
`;

interface IWorkCard {
  src: string;
  title: ReactNode;
  text: ReactNode;
  view: To;
}
function WorkCard({ src, title, text, view }: IWorkCard) {
  return (
    <ProjectCard>
      <ProjectImage src={src} alt="iman3" />

      <ProjectTitle>{title}</ProjectTitle>

      <TextContainer>
        <Text fontSize="1.2rem">{ellipsize(text as string, 250)}</Text>
      </TextContainer>

      <ButtonContainer>
        <StyledButton>
          <NavLink to={view} className="btn">
            Github
          </NavLink>
        </StyledButton>
      </ButtonContainer>
    </ProjectCard>
  );
}

export default memo(WorkCard);
