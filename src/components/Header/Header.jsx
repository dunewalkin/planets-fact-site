import React, { useState } from 'react';
import '../../components/Header/header.scss';
import Nav from '../Nav/Nav';
// import menuIcon from '../../assets/images/icon-hamburger.svg';

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
          <h3>the planets</h3>
          <button className='menu-btn' onClick={toggleNavVisibilityLocal}>
            <svg className={`burger-icon ${isIconActive ? 'burger-icon-active' : ''}`} xmlns="http://www.w3.org/2000/svg" width="24" height="17"><g fillRule="evenodd"><path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z"/></g></svg>
            {/* <img src={menuIcon} alt="Menu icon" /> */}
          </button>
        </div>
           <Nav onPlanetSelect={onPlanetSelect} isVisible={isNavVisible} />
      </header>
    );
};

export default Header;




// import React, { useState } from 'react';
// import '../../components/Header/header.scss';
// import Nav from '../Nav/Nav';
// import menuIcon from '../../assets/images/icon-hamburger.svg';

// const Header = ({ onPlanetSelect, toggleInfoVisibility }) => {
//   const [isNavVisible, setIsNavVisible] = useState(false);

//   const toggleNavVisibilityLocal = () => {
//     setIsNavVisible((prevVisibility) => !prevVisibility);
//     toggleInfoVisibility();
//   };

//   return (
//     <header className='header-container'>
//       <div className='header-top'>
//         <h3>the planets</h3>
//         <button className='menu-btn' onClick={toggleNavVisibilityLocal}>
//           <img src={menuIcon} alt="Menu icon" />
//         </button>
//       </div>
//          <Nav onPlanetSelect={onPlanetSelect} isVisible={isNavVisible} toggleNavVisibilityLocal={toggleNavVisibilityLocal} />
//     </header>
//   );
// };

// export default Header;

