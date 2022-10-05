import { memo, useMemo } from 'react';
import styled from '@emotion/styled';
import { FaPhone, FaMailBulk, FaGithub } from 'react-icons/fa';

const FooterContainer = styled.div({
  display: 'flex',
  margin: 'auto',
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
  alignItems: 'center',
  marginBottom: '0.8rem',
});

const Email = styled.div({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '0.8rem',
  marginTop: 10,
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

const Title = styled.h4(() => ({
  fontSize: 30,
  paddingBottom: 5,
}));
interface IText {
  marginLeft?: string;
}
const Text = styled.p<IText>(({ marginLeft = 0 }) => ({
  marginLeft,
  fontSize: 18,
}));

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

          <Text>010-6427-8522</Text>
        </Phone>

        <Email>
          <FaMailBulk size={20} style={style} />

          <Text>cjd9408abcd@gmail.com</Text>
        </Email>
      </Left>

      <Right>
        <Introduce>
          <Title>Introduce</Title>

          <Text marginLeft="1rem">FrontEnd 개발자 최지웅 입니다.</Text>
        </Introduce>

        <Social>
          <FaGithub size={20} style={style} />

          <Text>
            <a href="https://github.com/jwAndroid" target="blank">
              jwandroid
            </a>
          </Text>
        </Social>
      </Right>
    </FooterContainer>
  );
}

export default memo(Footer);
