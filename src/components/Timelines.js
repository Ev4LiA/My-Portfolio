import React from 'react';
import styled from 'styled-components';

import { timelines } from '../data/data';
const Timelines = () => {
  return (
    <Wrapper>
      <section className="section timeline">
        <div className="section-title">
          <h2>Timeline</h2>
          <div className="underline"></div>
        </div>
        <div className="section-center timeline-center">
          {timelines.map(({ id, year, text }) => {
            return (
              <article key={id} className="timeline-item">
                <h4>{year}</h4>
                <p>{text}</p>
                <span className="number">{id}</span>
              </article>
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .timeline-center {
    width: 80%;
    max-width: 40rem;
  }
  .timeline-item {
    border-top: 2px dashed var(--clr-primary-5);
    margin: 0;
    padding: 4rem 2rem;
    position: relative;
  }

  .timeline p {
    margin-bottom: 0;
  }
  .timeline-item:nth-child(even) {
    border-left: 2px dashed var(--clr-primary-5);
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
    margin-right: 2rem;
    padding-right: 0;
  }
  .timeline-item:nth-child(odd) {
    border-right: 2px dashed var(--clr-primary-5);
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
    margin-left: 2rem;
    padding-left: 0;
  }
  .timeline-item:first-child {
    border-top: 0;
    border-top-right-radius: 0;
  }
  .timeline-item:last-child {
    border-bottom-left-radius: 0;
  }
  .number {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    margin-bottom: 0;
    background: var(--clr-primary-5);
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: grid;
    place-items: center;
    color: var(--clr-primary-1);
    font-weight: bold;
  }
  .timeline-item:nth-child(even) .number {
    left: 0;
  }
  .timeline-item:nth-child(odd) .number {
    right: 0;
    transform: translate(50%, -50%);
  }
`;

export default Timelines;
