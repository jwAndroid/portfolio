import React, { memo } from 'react';
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';

import './FooterStyles.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }} />

            <div>
              <p>123 location</p>
              <p>1234 location</p>
            </div>
          </div>

          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: '#fff', marginRight: '1rem' }}
              />
              010-1234-1234
            </h4>
          </div>

          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: '#fff', marginRight: '1rem' }}
              />
              sadfjk@asdf.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>about me</h4>
          <p>
            im jw jw jw im jw jw jwim jw jw jwim jw jw jwim jw jw jwim jw jw
            jwim jw jw jw
          </p>

          <div className="social">
            <FaFacebook
              size={20}
              style={{ color: '#fff', marginRight: '1rem' }}
            />

            <FaTwitter
              size={20}
              style={{ color: '#fff', marginRight: '1rem' }}
            />

            <FaLinkedin
              size={20}
              style={{ color: '#fff', marginRight: '1rem' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Footer);
