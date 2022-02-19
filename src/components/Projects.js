import React from 'react';
import styled from 'styled-components';
import SingleProject from './SingleProject';
import { projects } from '../data/data';

const Projects = () => {
  return (
    <Wrapper>
      <section class="section blog">
        <div class="section-title">
          <h2>Some things I have built</h2>
          <div class="underline"></div>
        </div>
        <div class="section-center blog-center">
          {projects.map((item) => {
            return <SingleProject {...item} />;
          })}
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .blog {
    background: var(--clr-grey-10);
  }
  .blog-center {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
    gap: 3rem 2rem;
  }
`;

export default Projects;
