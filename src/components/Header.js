import React from 'react';

import styled from 'styled-components';
import { social } from '../data/data';

import image from '../images/hero-img-2.jpg';
const Header = () => {
  return (
    <Wrapper>
      <header className="hero">
        <div className="section-center hero-center">
          <article className="hero-info">
            <div className="underline"></div>
            <h1>I'm Duy</h1>
            <h4>Web & mobile UI/UX Designer</h4>
            <a href="contact.html" className="btn hero-btn">
              Contact Me
            </a>
            <ul className="social-icons hero-icons">
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
          </article>

          <article className="hero-img">
            <img src={image} className="hero-photo" alt="" />
          </article>
        </div>
      </header>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .hero .underline {
    margin-bottom: 0.5rem;
    margin-left: 0;
  }

  .hero-img {
    display: none;
  }
  .hero {
    background: var(--clr-primary-10);
  }
  .hero-center {
    min-height: calc(100vh - 5rem);
    display: grid;
    place-items: center;
  }
  .hero-info h4 {
    color: var(--clr-grey-5);
  }

  .hero-icons {
    justify-items: start;
  }
  .hero-btn {
    margin-top: 1.25rem;
  }
  @media screen and (min-width: 992px) {
    .hero-center {
      grid-template-columns: 1fr 1fr;
    }
    .hero-img {
      display: block;
      position: relative;
    }
    .hero-photo {
      max-width: 25rem;
      max-height: 30rem;
      -o-object-fit: cover;
      object-fit: cover;
      border-radius: var(--radius);
      position: relative;
    }
    .hero-img::before,
    .about-img::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border: 0.25rem solid var(--clr-primary-5);
      top: 2rem;
      right: -2rem;
      border-radius: 0.25rem;
    }
  }
`;

export default Header;
