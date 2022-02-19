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
    url: 'https://www.facebook.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://vn.linkedin.com/',
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
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora velit accusamus pariatur quis alias reprehenderit vel laudantium quibusdam? Necessitatibus, laborum!',
  },
  {
    id: 2,
    title: 'Mobile App Developer',
    icon: <FaAndroid className="service-icon" />,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora velit accusamus pariatur quis alias reprehenderit vel laudantium quibusdam? Necessitatibus, laborum!',
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    icon: <IoApps className="service-icon" />,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora velit accusamus pariatur quis alias reprehenderit vel laudantium quibusdam? Necessitatibus, laborum!',
  },
];

export const projects = [
  {
    id: 1,
    title: 'Furiture Shop',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, cum nulla doloremque maiores debitis suscipit architecto! Repellat hic magnam ducimus.',
    url: '/',
    image: '',
    gitUrl: '/',
  },
  {
    id: 2,
    title: 'Github Search User',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, cum nulla doloremque maiores debitis suscipit architecto! Repellat hic magnam ducimus.',
    url: '/',
    image: '',
    gitUrl: '/',
  },
  {
    id: 3,
    title: 'Dice Game',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, cum nulla doloremque maiores debitis suscipit architecto! Repellat hic magnam ducimus.',
    url: '/',
    image: '',
    gitUrl: '/',
  },
  {
    id: 4,
    title: 'Web/Code Playground',
    content:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, cum nulla doloremque maiores debitis suscipit architecto! Repellat hic magnam ducimus.',
    url: '/',
    image: '',
    gitUrl: '/',
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
