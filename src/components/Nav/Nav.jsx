import React from 'react';
import '../../components/Nav/nav.scss';
import data from '../../data.json';
import arrowIcon from '../../assets/images/icon-chevron.svg';

const Nav = ({ onPlanetSelect, isVisible, toggleNavVisibility }) => {

  const handlePlanetClick = (planet) => {
    onPlanetSelect(planet);
    toggleNavVisibility();
  };

  return (
    <nav className={`primary-nav ${isVisible ? 'visible' : ''}`}>
      <ul>
        {data.map((planet) => (
          <li
            key={planet.name}
            onClick={() => handlePlanetClick(planet)}
            style={{ '--clr-hover': `var(--clr-${planet.name.toLowerCase()})` }}
          >
            <div className='planet-nav-item'>
              <div className='bullet-item'></div>
              <h5 className='nav-item'>{planet.name}</h5>
            </div>
            <img className='arrow-item' src={arrowIcon} alt="Arrow icon" />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;


// // Nav.jsx
// import React from 'react';
// import '../../components/Nav/nav.scss';
// import data from '../../data.json';
// import arrowIcon from '../../assets/images/icon-chevron.svg';

// const Nav = ({ onPlanetSelect, isVisible, setIsNavVisible }) => {
//   const handlePlanetClick = (planet) => {
//     onPlanetSelect(planet);
//     setIsNavVisible(false); // Скрыть навигацию после выбора планеты
//     console.log(setIsNavVisible);
//     console.log(planet);
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

