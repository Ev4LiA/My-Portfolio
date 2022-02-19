import React from 'react';
import styled from 'styled-components';

const SingleService = ({ title, icon, text }) => {
  return (
    <Wrapper>
      <article class="service">
        {/* <i class="fab fa-android service-icon"></i> */}
        {icon}
        <h4>{title}</h4>
        <div class="underline"></div>
        <p>{text}</p>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .service {
    background: var(--clr-white);
    padding: 3rem 1.5rem;
    margin-bottom: 2rem;
    border-radius: var(--radius);
    text-align: center;
    -webkit-transition: var(--transition);
    transition: var(--transition);
  }
  .service-icon {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  .service .underline {
    width: 3rem;
    height: 0.12rem;
    -webkit-transition: var(--transition);
    transition: var(--transition);
  }
  .service p {
    -webkit-transition: var(--transition);
    transition: var(--transition);
  }
  .service:hover {
    background: var(--clr-primary-5);
    color: var(--clr-white);
  }
  .service:hover p {
    color: var(--clr-white);
  }
  .service:hover .underline {
    background: var(--clr-white);
  }
`;
export default SingleService;
