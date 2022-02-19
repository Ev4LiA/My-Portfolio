import React from 'react';

import styled from 'styled-components';

import image from '../images/hero-img-2.jpg';

const About = () => {
  return (
    <Wrapper>
      <section className="section about">
        <div className="section-center about-center">
          <article className="about-img">
            <img src={image} className="hero-photo" alt="" />
          </article>
          <article className="about-info">
            <div className="section-title about-title">
              <h2>About</h2>
              <div className="underline"></div>
            </div>
            <p>Hello !!!</p>
            <p>
              My name is Quoc Duy. I'm a senior student of Computer Science
              major. I enjoy investing myself inside challenging project in
              order to give the best experience on the road to become a
              developer.
            </p>
            <a href="about.html" className="btn">
              About me
            </a>
          </article>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .about-title {
    text-align: left;
    margin-bottom: 2rem;
  }

  .about-title .underline {
    margin-left: 0;
  }
  .about-center {
    display: grid;
    gap: 3rem 2rem;
  }
  .about-img {
    justify-self: center;
  }

  @media screen and (min-width: 992px) {
    .about-center {
      grid-template-columns: 1fr 1fr;
    }

    .about-img {
      position: relative;
    }
    .about-img::before {
      left: -2rem;
    }
    .about-info {
      align-self: center;
    }
  }
  .hero-photo {
    max-width: 25rem;
    max-height: 30rem;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: var(--radius);
    position: relative;
  }
`;

export default About;
