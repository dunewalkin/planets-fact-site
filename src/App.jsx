import React, { useState, useEffect, createContext } from 'react';
import './assets/styles/fonts.scss';
import './assets/styles/global.scss';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import data from './data';

export const PlanetContext = createContext();

const App = () => {
   const [selectedPlanet, setSelectedPlanet] = useState(null);
   const [isInfoVisible, setIsInfoVisible] = useState(true);
   const [isNavVisible, setIsNavVisible] = useState(false);

   useEffect(() => {
       const initialPlanetData = data.find((planet) => planet.name === 'Earth');
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
            <PlanetContext.Provider value = {selectedPlanet}>
               <Info isInfoVisible={isInfoVisible}/>
            </PlanetContext.Provider>
           
      </main>
   );
};

export default App;