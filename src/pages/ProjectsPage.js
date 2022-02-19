import React from 'react';
import styled from 'styled-components';

import SingleProject from '../components/SingleProject';
import { projects } from '../data/data';

const ProjectsPage = () => {
  return (
    <Wrapper>
      <header class="projects-hero">
        <div class="section-title">
          <h1>my projects</h1>
          <div class="underline"></div>
        </div>
      </header>
      <section class="section">
        <div class="section-center projects-page-center">
          {projects.map((item) => {
            return <SingleProject key={item.id} {...item} />;
          })}
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .projects-hero {
    height: 40vh;
    background: var(--clr-primary-10);
    display: grid;
    place-items: center;
  }
  .projects-hero .section-title {
    margin-bottom: 0;
  }
  .projects-page-center {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
    gap: 3rem 1rem;
  }

  .card {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
  }
`;
export default ProjectsPage;
