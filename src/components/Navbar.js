import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useGlobalContext } from '../context/GlobalContext';
import { links } from '../data/data';

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    setShow(window.pageYOffset > 80);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const { openSidebar } = useGlobalContext();
  return (
    <NavContainer>
      <nav className={`${show ? 'nav navbar-fixed' : 'nav'}`}>
        <div className="nav-center">
          <div className="nav-header">
            <h3 className="logo">My Portfolio</h3>
            <button className="nav-btn" onClick={openSidebar}>
              <FaBars />
            </button>
          </div>
          <ul className="nav-links">
            {links.map(({ id, url, text }) => {
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
            <li>
              <a
                href="https://drive.google.com/file/d/1hw_uJwrlLJAXRv1qOn38-xvQg2xqlaa2/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  .nav {
    height: 5rem;
    padding: 1rem;
    display: grid;
    -webkit-box-align: center;
    align-items: center;
    -webkit-transition: var(--transition);
    transition: var(--transition);
  }
  .nav-links {
    display: none;
  }

  .nav-center {
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-header {
    display: grid;
    grid-template-columns: auto 1fr;
    -webkit-box-align: center;
    align-items: center;
  }
  .nav-btn {
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    font-size: 2rem;
    cursor: pointer;
    justify-self: end;
  }

  .download {
    color: red;
  }

  @media screen and (min-width: 768px) {
    .nav {
      background: var(--clr-primary-10);
    }
    .nav-btn {
      display: none;
    }
    .nav-links {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      justify-items: center;
      -webkit-column-gap: 2rem;
      -moz-column-gap: 2rem;
      column-gap: 2rem;
      justify-self: end;
    }
    .nav-links a {
      text-transform: capitalize;
      color: var(--clr-grey-1);
      font-weight: bold;
      letter-spacing: var(--spacing);
      -webkit-transition: var(--transition);
      transition: var(--transition);
    }
    .nav-links a:hover {
      color: var(--clr-primary-5);
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr;
      -webkit-box-align: center;
      align-items: center;
    }
  }

  /* fixed navbar */
  .navbar-fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: var(--clr-white);
    z-index: 2;
    box-shadow: var(--light-shadow);
  }
`;
export default Navbar;
