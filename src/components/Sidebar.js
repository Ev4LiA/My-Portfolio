import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context/GlobalContext';
import { social, links } from '../data/data';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <Wrapper>
      <aside
        className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}
      >
        <div>
          <button className="close-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>
          <ul className="sidebar-links">
            {links.map(({ id, url, text }) => {
              return (
                <li key={id}>
                  <Link to={url} onClick={closeSidebar}>
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className="social-icons">
            {social.map(({ id, url, icon }) => {
              return (
                <li key={id}>
                  <a href={url} className="social-icon" onClick={closeSidebar}>
                    {icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-grey-10);
    z-index: 4;
    display: grid;
    place-items: center;
    transition: var(--transition);
    /* hide sidebar */
    transform: translateX(-100%);
  }

  .show-sidebar {
    transform: translateX(0);
  }

  .sidebar-links {
    text-align: center;
  }
  .sidebar-links a {
    font-size: 2rem;
    text-transform: capitalize;
    transition: var(--transition);
    color: var(--clr-grey-5);
    letter-spacing: var(--spacing);
    display: inline-block;
    margin-bottom: 1.5rem;
  }
  .sidebar-links a:hover {
    color: var(--clr-primary-5);
  }

  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 3rem;
    background: transparent;
    border: transparent;
    transition: var(--transition);
    color: #bb2525;
    cursor: pointer;
  }
  .close-btn:hover {
    color: #e66b6b;
  }
`;
export default Sidebar;
