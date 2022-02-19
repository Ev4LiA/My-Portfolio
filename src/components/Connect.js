import React from 'react';
import styled from 'styled-components';

import images from '../images/project-1.jpeg';
const Connect = () => {
  return (
    <Wrapper>
      <section class="connect">
        <video
          controls
          autoplay
          muted
          loop
          class="video-container"
          poster={images}
        >
          {/* <!-- <source src="./videos/connect.mp4" type="video/mp4" /> --> */}
          Sorry, your browser does not support embedded videos
        </video>
        <div class="video-banner">
          <div class="section-title">
            <h2>Let's get in touch</h2>
            <div class="underline"></div>
          </div>
          <p class="video-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum enim
            veniam consequuntur sequi nesciunt consequatur tempore magnam
            molestias quia ratione, blanditiis laudantium laboriosam in
            reiciendis facilis perspiciatis tempora recusandae numquam commodi
            vel et excepturi minima. Debitis ipsum culpa molestiae, assumenda
            perferendis nihil natus totam incidunt. Corrupti, laborum
            dignissimos! Porro, delectus.
          </p>
          <a href="contact.html" class="btn">
            Contact me
          </a>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .connect {
    min-height: 40%;
    position: relative;
    padding: 10rem 0 5rem 0;
    margin: 5rem 0;
    display: grid;
    place-items: center;
    -webkit-clip-path: polygon(
      50% 0,
      100% 15%,
      100% 85%,
      50% 100%,
      0 85%,
      0 15%
    );
    clip-path: polygon(50% 0, 100% 15%, 100% 85%, 50% 100%, 0 85%, 0 15%);
  }

  .video-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    z-index: -2;
  }
  .connect::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-grey-10);
    opacity: 0.7;
    z-index: -1;
  }

  .video-banner .section-title {
    margin-bottom: 2rem;
  }
  .video-text {
    max-width: 30rem;
  }
  .video-banner {
    background: var(--clr-primary-10);
    padding: 3rem 5rem 12rem 5rem;
    text-align: center;
    -webkit-clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 75%,
      75% 75%,
      75% 100%,
      50% 75%,
      0% 75%
    );
    clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 75%,
      75% 75%,
      75% 100%,
      50% 75%,
      0% 75%
    );
  }
`;
export default Connect;
