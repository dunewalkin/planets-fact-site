import React, { useState, useEffect } from 'react';
import './assets/styles/fonts.scss';
import './assets/styles/global.scss';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import data from './data';

const App = () => {
   const [selectedPlanet, setSelectedPlanet] = useState(null);
   const [isInfoVisible, setIsInfoVisible] = useState(true);
   const [isNavVisible, setIsNavVisible] = useState(false);

   useEffect(() => {
       const initialPlanetData = data.find((planet) => planet.name === 'Mercury');
       if (initialPlanetData) {
           setSelectedPlanet(initialPlanetData);
       }
   }, []); 

   const toggleInfoVisibility = () => {
      setIsInfoVisible((prevVisibility) => !prevVisibility);
    };

    const toggleNavVisibility = () => {
      setIsNavVisible((prevVisibility) => !prevVisibility);
    };

   const handlePlanetSelect = (planet) => {
       setSelectedPlanet(planet);
       toggleInfoVisibility();
       toggleNavVisibility();
   };

   return (
      <main className='main-container'>
           <Header onPlanetSelect={handlePlanetSelect}
            toggleInfoVisibility={toggleInfoVisibility}
            toggleNavVisibility ={toggleNavVisibility }
            isNavVisible={isNavVisible} />
           <Info selectedPlanet={selectedPlanet}
            isInfoVisible={isInfoVisible}/>
      </main>
   );
};

export default App;




// import React, { useState, useEffect } from 'react';
// import './assets/styles/fonts.scss';
// import './assets/styles/global.scss';
// import Header from './components/Header/Header';
// import Info from './components/Info/Info';
// //import data from './data.json'; 
// import data from './data';

// const App = () => {
//   const [selectedPlanet, setSelectedPlanet] = useState(null);
//   const [isPlanetSelected, setIsPlanetSelected] = useState(false);
//    const [isInfoVisible, setIsInfoVisible] = useState(true);
//    const [isNavVisible, setIsNavVisible] = useState(false);

//   const handlePlanetSelect = (planet) => {
//     setSelectedPlanet(planet);
//     setIsPlanetSelected(true);
//     setIsInfoVisible(false); 
//     setIsNavVisible(true); 
//   };

//   const toggleInfoVisibility = () => {
//    setIsInfoVisible((prevVisibility) => !prevVisibility);
//  };

//   useEffect(() => {
//     const initialPlanetData = data.find((planet) => planet.name === 'Mercury');
//     if (initialPlanetData) {
//       setSelectedPlanet(initialPlanetData);
//     }
//   }, []); 

//   return (
//     <main className='main-container'>
//       <Header onPlanetSelect={handlePlanetSelect} toggleInfoVisibility={toggleInfoVisibility} setIsNavVisible={setIsNavVisible} />
//       <Info selectedPlanet={selectedPlanet} isInfoVisible={isInfoVisible}/>
//     </main>
//   );
// };

// export default App;

