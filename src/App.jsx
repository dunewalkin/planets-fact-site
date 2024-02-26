import React, { useState, useEffect } from 'react';
import './assets/styles/fonts.scss';
import './assets/styles/global.scss';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
//import data from './data.json'; 
import data from './data';

const App = () => {
   const [selectedPlanet, setSelectedPlanet] = useState(null);

   useEffect(() => {
       const initialPlanetData = data.find((planet) => planet.name === 'Mercury');
       if (initialPlanetData) {
           setSelectedPlanet(initialPlanetData);
       }
   }, []); 

   const handlePlanetSelect = (planet) => {
       setSelectedPlanet(planet);
   };

   return (
       <div className="app">
           <Header onPlanetSelect={handlePlanetSelect} />
           <Info selectedPlanet={selectedPlanet} />
       </div>
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

