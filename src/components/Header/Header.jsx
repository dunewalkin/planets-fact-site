import React, { useState } from 'react';
import '../../components/Header/header.scss';
import Nav from '../Nav/Nav';

const Header = ({ onPlanetSelect, toggleInfoVisibility, isNavVisible, toggleNavVisibility }) => {

   const [isIconActive, setIsIconActive] = useState(false);

   const toggleNavVisibilityLocal = () => {
      toggleNavVisibility ();
      toggleInfoVisibility();
      setIsIconActive(!isIconActive);
   };

   return (
      <header className='header-container'>
        <div className='header-top'>
          <h1 className='heading-m'>the planets</h1>
          <button className='menu-btn' onClick={toggleNavVisibilityLocal}>
            <svg className={`burger-icon ${isIconActive ? 'burger-icon-active' : ''}`} xmlns="http://www.w3.org/2000/svg" width="24" height="17"><g fillRule="evenodd"><path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z"/></g></svg>
          </button>
        </div>
           <Nav onPlanetSelect={onPlanetSelect} isVisible={isNavVisible} />
      </header>
    );
};

export default Header;
