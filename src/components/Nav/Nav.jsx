import React from 'react';
import '../../components/Nav/nav.scss';
import data from '../../data';
import arrowIcon from '../../assets/images/icon-chevron.svg';

const Nav = ({ onPlanetSelect, isVisible }) => {
   
   return (
      <nav className={`primary-nav ${isVisible ? 'visible' : ''}`}>
        <ul>
          {data.map((planet,index) => (
            <li
              key={index}
              onClick={() => onPlanetSelect(planet)}
              style={{ '--clr-hover': `var(--clr-${planet.name.toLowerCase()})` }}
            >
              <div className='planet-nav-item'>
                <div className='bullet-item'></div>
                <h1 className='nav-item heading-xs'>{planet.name}</h1>
              </div>
              <img className='arrow-item' src={arrowIcon} alt="Arrow icon" />
            </li>
          ))}
        </ul>
      </nav>
    );
};

export default Nav;
