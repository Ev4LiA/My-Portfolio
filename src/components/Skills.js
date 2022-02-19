import React from 'react';
import styled from 'styled-components';
import SingleSkill from './SingleSkill';
import { techSkills, otherSkills } from '../data/data';

const Skills = () => {
  return (
    <Wrapper>
      <section className="section skills">
        {/* <!-- section title --> */}
        <div className="section-title">
          <h2>Skills</h2>
          <div className="underline"></div>
        </div>
        {/* <!-- end of section title --> */}
        <div className="section-center skills-center">
          <article>
            <h3>Techonology</h3>
            {techSkills.map((item) => {
              return <SingleSkill key={item.id} {...item} />;
            })}
          </article>
          <article>
            <h3>Other Skill</h3>
            {otherSkills.map((item) => {
              return <SingleSkill key={item.id} {...item} />;
            })}
          </article>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    .skills-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      -moz-column-gap: 2rem;
      column-gap: 2rem;
    }
  }
  .skills {
    background: var(--clr-primary-9);
  }

  .skills h3 {
    margin: 1.5rem 0;
    color: var(--clr-primary-1);
  }
  .skill {
    margin-bottom: 1.25rem;
  }
`;

export default Skills;
