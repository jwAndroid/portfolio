import { memo, useMemo } from 'react';
import styled from '@emotion/styled';
import { FaPhone, FaMailBulk, FaGithub } from 'react-icons/fa';

const FooterContainer = styled.div({
  width: '100%',
  margin: 'auto',
  display: 'flex',
  padding: '6rem',
  backgroundColor: 'rgba(19,19,19,0.8)',

  '@media screen and (max-width: 1040px)': {
    display: 'block',
  },
});

const Left = styled.div({
  display: 'flex',
  flex: 1,
  height: '100%',
  maxWidth: '100%',
  flexDirection: 'column',
  padding: '1rem',
});

const Phone = styled.div({
  display: 'flex',
  marginBottom: '0.8rem',
});

const Email = styled.div({
  display: 'flex',
  marginBottom: '0.8rem',
});

const Right = styled.div({
  display: 'flex',
  flex: 1,
  height: '100%',
  maxWidth: '100%',
  flexDirection: 'column',
  padding: '1rem',
});

const Social = styled.div({
  display: 'flex',
  flexDirection: 'row',
  marginTop: '1rem',
});

const Introduce = styled.div({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
});

const Text = styled.p({
  marginLeft: '1rem',
});

function Footer() {
  const style = useMemo<React.CSSProperties>(
    () => ({
      color: '#fff',
      marginRight: '1rem',
    }),
    []
  );

  return (
    <FooterContainer>
      <Left>
        <Phone>
          <FaPhone size={20} style={style} />

          <p>010-6427-8522</p>
        </Phone>

        <Email>
          <FaMailBulk size={20} style={style} />

          <p>cjd9408abcd@gmail.com</p>
        </Email>
      </Left>

      <Right>
        <Introduce>
          <h3>Introduce</h3>

          <Text>안녕하세요. FrontEnd 개발자 최지웅 입니다.</Text>
        </Introduce>

        <Social>
          <FaGithub size={20} style={style} />

          <p>jwandroid</p>
        </Social>
      </Right>
    </FooterContainer>
  );
}

export default memo(Footer);
