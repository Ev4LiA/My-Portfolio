import React from 'react';
import styled from 'styled-components';
const SingleSkill = ({ text, value }) => {
  return (
    <Wrapper>
      <div className="skill">
        <p>{text}</p>
        <div className="skill-container">
          <div className="skill-value" style={{ width: `${value}%` }}></div>
          <p className="skill-text" style={{ left: `${value}%` }}>
            {value}%
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .skill p {
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    color: var(--clr-primary-1);
  }

  .skill-container {
    background: var(--clr-white);
    height: 1rem;
    width: 100%;
    border-radius: var(--radius);
    position: relative;
  }
  .skill-value {
    position: absolute;
    top: 0;
    left: 0;
    background: var(--clr-primary-5);
    height: 100%;
    width: 100%;
    border-radius: var(--radius);
  }

  .value-50 {
    width: 50%;
  }
  .value-70 {
    width: 70%;
  }
  .value-80 {
    width: 80%;
  }

  .skill-text {
    position: absolute;
    top: -150%;
    left: 100%;
    transform: translateX(-50%);
  }

  .skill-text-50 {
    left: 50%;
  }
  .skill-text-70 {
    left: 70%;
  }
  .skill-text-80 {
    left: 80%;
  }
`;

export default SingleSkill;
