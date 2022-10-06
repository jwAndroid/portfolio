import { memo, ReactNode } from 'react';
import styled from '@emotion/styled';

const Container = styled.div({
  width: '100%',
  height: '100%',
});

const Mask = styled.div({
  position: 'relative',
  width: '100%',
  height: '80vh',
  opacity: 0.25,
  backgroundColor: '#000',

  '@media screen and (max-width: 740px)': {
    height: '60vh',
  },
});

const Image = styled.img({
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  objectFit: 'cover',
  backgroundPosition: 'center',
});

const Content = styled.div({
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  top: '45%',
  left: '50%',
  textAlign: 'center',

  '@media screen and (max-width: 740px)': {
    top: '30%',
  },
});

const Title = styled.h1(() => ({
  fontSize: 50,
  fontWeight: '700',

  '@media screen and (max-width: 740px)': {
    fontSize: 15,
    fontWeight: '300',
  },
}));

const SubTitle = styled.p({
  fontSize: 30,
  fontWeight: '400',
  display: 'initial',

  '@media screen and (max-width: 740px)': {
    display: 'none',
  },
});

interface IBackground {
  backgroundSource: string;
  title?: ReactNode;
  subTtitle?: ReactNode;
}
function Background({ backgroundSource, title, subTtitle }: IBackground) {
  return (
    <Container>
      <Mask>
        <Image src={backgroundSource} alt="true" />
      </Mask>

      <Content>
        <Title>{title}</Title>

        <SubTitle>{subTtitle}</SubTitle>
      </Content>
    </Container>
  );
}

Background.defaultProps = {
  title: '',
  subTtitle: '',
};

export default memo(Background);
