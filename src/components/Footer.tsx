import { memo, useMemo } from 'react';
import styled from '@emotion/styled';
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';

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

const Location = styled.div({
  display: 'flex',
  marginBottom: '0.8rem',
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
  marginTop: '1rem',
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
        <Location>
          <FaHome size={20} style={style} />

          <p>Location</p>
        </Location>

        <Phone>
          <FaPhone size={20} style={style} />

          <p>010-0000-0000</p>
        </Phone>

        <Email>
          <FaMailBulk size={20} style={style} />

          <p>jwandroid@google.com</p>
        </Email>
      </Left>

      <Right>
        <h4>About</h4>
        <p>안녕하세요 최지웅 입니다.</p>

        <Social>
          <FaFacebook size={20} style={style} />

          <FaTwitter size={20} style={style} />

          <FaLinkedin size={20} style={style} />
        </Social>
      </Right>
    </FooterContainer>
  );
}

export default memo(Footer);
