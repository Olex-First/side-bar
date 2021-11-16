import React from 'react';

import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';

function Navbar() {
  return (
    <>
        <nav className='nav-menu active'>
          <ul className='nav-menu-items mt-5' >

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
    </>
  );
}

export default Navbar;
