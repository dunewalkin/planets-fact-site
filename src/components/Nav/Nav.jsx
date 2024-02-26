import React from 'react';
import '../../components/Nav/nav.scss';
import data from '../../data';
import arrowIcon from '../../assets/images/icon-chevron.svg';

const Nav = ({ onPlanetSelect }) => {
   return (
       <nav className="nav">
           {data.map((planet, index) => (
               <button key={index} onClick={() => onPlanetSelect(planet)}>
                   {planet.name}
               </button>
           ))}
       </nav>
   );
};

export default Nav;


// import React from 'react';
// import '../../components/Nav/nav.scss';
// import data from '../../data';
// import arrowIcon from '../../assets/images/icon-chevron.svg';

// const Nav = ({ onPlanetSelect, isVisible, toggleNavVisibility }) => {

//   const handlePlanetClick = (planet) => {
//     onPlanetSelect(planet);
//     toggleNavVisibility();
//   };

//   return (
//     <nav className={`primary-nav ${isVisible ? 'visible' : ''}`}>
//       <ul>
//         {data.map((planet) => (
//           <li
//             key={planet.name}
//             onClick={() => handlePlanetClick(planet)}
//             style={{ '--clr-hover': `var(--clr-${planet.name.toLowerCase()})` }}
//           >
//             <div className='planet-nav-item'>
//               <div className='bullet-item'></div>
//               <h5 className='nav-item'>{planet.name}</h5>
//             </div>
//             <img className='arrow-item' src={arrowIcon} alt="Arrow icon" />
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Nav;
