import { memo, ReactNode } from 'react';
import styled from '@emotion/styled';

import Profile from './Profile';

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
    height: '80vh',
  },
});

const Image = styled.img({
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  objectFit: 'cover',
  backgroundPosition: 'center',
});
interface IContent {
  isProfile: boolean;
}
const Content = styled.div<IContent>(({ isProfile }) => ({
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  alignItems: 'center',
  top: isProfile ? '35%' : '45%',
  left: '50%',
  textAlign: 'center',

  '@media screen and (max-width: 740px)': {
    top: '30%',
  },
}));

const Title = styled.h1(() => ({
  fontSize: 40,
  fontWeight: '700',

  '@media screen and (max-width: 740px)': {
    fontSize: 25,
    fontWeight: '500',
  },
}));

const SubTitle = styled.p({
  fontSize: 20,
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
  showProfile?: boolean;
}
function Background({
  backgroundSource,
  title,
  subTtitle,
  showProfile,
}: IBackground) {
  return (
    <Container>
      <Mask>
        <Image src={backgroundSource} alt="true" />
      </Mask>

      <Content isProfile={showProfile ?? false}>
        <Title>{title}</Title>

        <SubTitle>{subTtitle}</SubTitle>

        {showProfile ? <Profile /> : null}
      </Content>
    </Container>
  );
}

Background.defaultProps = {
  title: '',
  subTtitle: '',
  showProfile: false,
};

export default memo(Background);
