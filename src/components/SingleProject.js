import React from 'react';
import { FaGithub } from 'react-icons/fa';
import styled from 'styled-components';

const SingleProject = ({ title, content, url, image, gitUrl }) => {
  return (
    <Wrapper>
      <a href={url}>
        <div className="card">
          <div className="card-side">
            <img src={image} alt="project" />
            <div className="card-info">
              <h4>{title}</h4>
              <p>{content}</p>
            </div>
            <div className="card-footer">
              <a href={gitUrl} className="btn">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .card {
    height: 27rem;
    position: relative;
    perspective: 1500px;
    background: var(--clr-white);
    border-radius: var(--radius);
  }
  .card-info {
    padding: 1rem 1.5rem;
  }
  .card-side {
    transition: all 0.5s linear;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: var(--radius);
  }
  .card-front {
  }
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.5);
    transform: translateY(-10px);
  }

  img {
    height: 13rem;
    -o-object-fit: cover;
    object-fit: cover;
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
  }
  .card-footer {
    display: grid;
    grid-template-columns: auto 1fr;
    padding: 0 1rem;
    align-items: center;
  }
  .btn {
    background-color: var(--clr-white);
  }
  .btn:hover {
    background-color: var(--clr-grey-5);
    color: var(--clr-white);
  }
`;

export default SingleProject;
