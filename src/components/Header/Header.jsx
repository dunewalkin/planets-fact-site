import React, { useState } from 'react';
import '../../components/Header/header.scss';
import Nav from '../Nav/Nav';
import menuIcon from '../../assets/images/icon-hamburger.svg';

const Header = ({ onPlanetSelect, toggleInfoVisibility }) => {

   const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNavVisibility = () => {
    setIsNavVisible((prevVisibility) => !prevVisibility);
    toggleInfoVisibility();
  };

   return (
      <header className='header-container'>
        <div className='header-top'>
          <h3>the planets</h3>
          <button className='menu-btn' onClick={toggleNavVisibility}>
            <img src={menuIcon} alt="Menu icon" />
          </button>
        </div>
           <Nav onPlanetSelect={onPlanetSelect} isVisible={isNavVisible} toggleNavVisibility={toggleNavVisibility} />
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

//   const toggleNavVisibility = () => {
//     setIsNavVisible((prevVisibility) => !prevVisibility);
//     toggleInfoVisibility();
//   };

//   return (
//     <header className='header-container'>
//       <div className='header-top'>
//         <h3>the planets</h3>
//         <button className='menu-btn' onClick={toggleNavVisibility}>
//           <img src={menuIcon} alt="Menu icon" />
//         </button>
//       </div>
//          <Nav onPlanetSelect={onPlanetSelect} isVisible={isNavVisible} toggleNavVisibility={toggleNavVisibility} />
//     </header>
//   );
// };

// export default Header;

