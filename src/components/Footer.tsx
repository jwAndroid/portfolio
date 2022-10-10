import { memo, useMemo } from 'react';
import styled from '@emotion/styled';
import { FaPhone, FaMailBulk, FaGithub } from 'react-icons/fa';

const Container = styled.div({
  display: 'flex',
  height: '200px',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: '#131313',
});

const Content = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '0.5rem',
});

const Social = styled.a({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '0.5rem',
});

const Text = styled.p(() => ({
  fontSize: 17,
  paddingBottom: '5px',
}));

function Footer() {
  const style = useMemo<React.CSSProperties>(
    () => ({
      color: '#fff',
      marginRight: '0.5rem',
    }),
    []
  );

  return (
    <Container>
      <Content>
        <FaPhone size={20} style={style} />

        <Text>010-6427-8522</Text>
      </Content>

      <Content>
        <FaMailBulk size={20} style={style} />

        <Text>cjd9408abcd@gmail.com</Text>
      </Content>

      <Social href="https://github.com/jwAndroid" target="blank">
        <FaGithub size={20} style={style} />

        <Text>jwandroid</Text>
      </Social>
    </Container>
  );
}

export default memo(Footer);
