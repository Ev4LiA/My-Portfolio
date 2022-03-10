import React from 'react';
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaCode,
  FaAndroid,
} from 'react-icons/fa';

import { IoApps } from 'react-icons/io5';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
  },
  {
    id: 4,
    url: '/contact',
    text: 'contact',
  },
];

export const social = [
  {
    id: 1,
    url: 'https://www.facebook.com/profile.php?id=100004397827570',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.linkedin.com/in/duydoquoc/',
    icon: <FaLinkedin />,
  },
  {
    id: 3,
    url: 'https://github.com/Ev4LiA',
    icon: <FaGithub />,
  },
];

export const services = [
  {
    id: 1,
    title: 'Web Developer',
    icon: <FaCode className="service-icon" />,
    text: 'I can build some decent web app, which has full function and operates stable. I use ReactJS framework plus other modules like Stripe, Auth0, ... to build most of my project. I can also use CSS and SCSS to style my websites.',
  },
  {
    id: 2,
    title: 'Mobile App Developer',
    icon: <FaAndroid className="service-icon" />,
    text: 'I am a beginner in this field, but right now I start to learn react native and flutter framework. My aim in the near future is becoming a mobile app developer.',
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    icon: <IoApps className="service-icon" />,
    text: 'I know the basic steps and requirement in designing user flow of a website or an app. I am also able to use balsamiq and figma in designing UI for my website and mobile app projects.',
  },
];

export const projects = [
  {
    id: 1,
    title: 'My Portfolio',
    content:
      'My small portfolio that showcase my works and skills as software developer',
    url: 'https://duydoquoc-portfolio.netlify.app/',
    image: 'https://i.ibb.co/NNg6VPn/my-portfolio.png',
    gitUrl: 'https://github.com/Ev4LiA/My-Portfolio',
    tech: 'ReactJS, CSS, Javascript, Styled Component, React Hooks',
  },
  {
    id: 2,
    title: 'Furiture Shop',
    content: 'An E-commerce Project. A furniture selling shop.',
    url: 'https://furniture-shop-duy.netlify.app/',
    image: 'https://i.ibb.co/XyCSXND/furniture-shop.png',
    gitUrl: 'https://github.com/Ev4LiA/furniture-shop',
    tech: 'ReactJS, CSS, Javascript, Styled Component, React Hooks',
  },
  {
    id: 3,
    title: 'Github Search User',
    content: 'Github User Search Engine. You can search for any github user',
    url: 'https://react-github-user-search-engine.netlify.app/login',
    image: 'https://i.ibb.co/8PTgYHj/github-search.png',
    gitUrl: 'https://github.com/Ev4LiA/react-github-user-search-engine',
    tech: 'ReactJS, CSS, Javascript, Styled Component, React Hooks',
  },

  {
    id: 4,
    title: 'Web/Code Playground',
    content:
      'A Javascript - Markdown code sandbox - where you can type any Js code or Markdown',
    url: 'https://duy-js-markdown-sandbox.netlify.app/',
    image: 'https://i.ibb.co/tLZYj6L/js-sandbox.png',
    gitUrl: 'https://github.com/Ev4LiA/Js-Markdown-Sandbox',
    tech: 'ReactJS, CSS, Typescript, Redux',
  },
  {
    id: 5,
    title: 'Pig Game',
    content: 'Pig Game is a simple dice spel game.',
    url: 'https://pig-game-duy.netlify.app/',
    image: 'https://i.ibb.co/jgrgfvT/pig-game.png',
    gitUrl: 'https://github.com/Ev4LiA/Pig-Game',
    tech: 'HTML, CSS, Javascript',
  },
];

export const techSkills = [
  {
    id: 1,
    text: 'HTML/CSS',
    value: 75,
  },
  {
    id: 2,
    text: 'Javascript',
    value: 75,
  },
  {
    id: 3,
    text: 'ReactJS - ReactNative',
    value: 60,
  },
  {
    id: 4,
    text: 'Figma',
    value: 60,
  },
];

export const otherSkills = [
  {
    id: 1,
    text: 'English',
    value: 80,
  },
  {
    id: 2,
    text: 'Japanese',
    value: 50,
  },
  {
    id: 3,
    text: 'Academic Writing',
    value: 80,
  },
  {
    id: 4,
    text: 'Teamwork Collaboration',
    value: 80,
  },
];

export const timelines = [
  {
    id: 1,
    year: 2021,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aspernatur sunt ipsa, ratione aliquid possimus quis similique officia sint impedit.',
  },
  {
    id: 2,
    year: 2021,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aspernatur sunt ipsa, ratione aliquid possimus quis similique officia sint impedit.',
  },
  {
    id: 3,
    year: 2021,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aspernatur sunt ipsa, ratione aliquid possimus quis similique officia sint impedit.',
  },
  {
    id: 4,
    year: 2021,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aspernatur sunt ipsa, ratione aliquid possimus quis similique officia sint impedit.',
  },
  {
    id: 5,
    year: 2021,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aspernatur sunt ipsa, ratione aliquid possimus quis similique officia sint impedit.',
  },
];
