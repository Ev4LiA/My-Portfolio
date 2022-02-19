import React from 'react';
import SingleService from './SingleService';
import styled from 'styled-components';
import { services } from '../data/data';

const Services = () => {
  return (
    <Wrapper>
      <section class="section bg-grey">
        <div class="section-title">
          <h2>What I can do</h2>
          <div class="underline"></div>
        </div>
        <div class="services-center section-center">
          {services.map((item) => {
            return <SingleService key={item.id} {...item} />;
          })}
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media screen and (min-width: 676px) {
    .services-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      -webkit-column-gap: 2rem;
      -moz-column-gap: 2rem;
      column-gap: 2rem;
    }
  }
  @media screen and (min-width: 992px) {
    .services-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default Services;
