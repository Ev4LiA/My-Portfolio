import React from 'react';
import { social } from '../data/data';
import styled from 'styled-components';

const Footer = () => {
  return (
    <Wrapper>
      <footer class="footer">
        <ul class="social-icons">
          {social.map(({ id, url, icon }) => {
            return (
              <li key={id}>
                <a href={url} className="social-icon">
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
        <p>
          &copy; <span id="date"></span> Duy Do Quoc. All rights reserved
        </p>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .footer {
    padding-bottom: 2rem;
    background: #222;
    display: grid;
    place-items: center;
  }
  .footer .social-icons {
    margin-bottom: 2rem;
  }
  .footer .social-icon {
    color: var(--clr-primary-5);
  }
  .footer .social-icon:hover {
    color: var(--clr-primary-10);
  }
  .footer p {
    font-size: 1.25rem;
    text-transform: capitalize;
  }
`;

export default Footer;
