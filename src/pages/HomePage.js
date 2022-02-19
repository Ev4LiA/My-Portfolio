import React from 'react';
import {
  Header,
  About,
  Services,
  Projects,
  Skills,
  Timelines,
  Connect,
} from '../components';

const HomePage = () => {
  return (
    <div>
      <Header />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Timelines />
      <Connect />
    </div>
  );
};

export default HomePage;
