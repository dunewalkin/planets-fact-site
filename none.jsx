import React, { useState } from 'react';
import data from '../../data'; // Импортируем данные о планетах

const Info = () => {
   const [currentPlanet, setCurrentPlanet] = useState(data[0]); // Инициализация первой планеты
   const [currentContentType, setCurrentContentType] = useState('planet'); // Текущий тип изображения: 'planet', 'internal' или 'geology'
 
   // Функция для изменения планеты
   const changePlanet = (planet) => {
     setCurrentPlanet(planet);
   };

   // Функция для изменения типа контента
   const changeContentType = (type) => {
     setCurrentContentType(type);
   };
 
   return (
     <div>
       {/* Показывать текущее изображение планеты */}
       <img src={currentPlanet.images[currentContentType]} alt={currentPlanet.name} />
       <h2>{currentPlanet.name}</h2>
       {currentContentType === 'planet' && (
         <div>
           <p>{currentPlanet.overview.content}</p>
           <p>Source: <a href={currentPlanet.overview.source} target="_blank" rel="noopener noreferrer">Wikipedia</a></p>
         </div>
       )}
       {currentContentType === 'internal' && (
         <div>
           <p>{currentPlanet.structure.content}</p>
           <p>Source: <a href={currentPlanet.structure.source} target="_blank" rel="noopener noreferrer">Wikipedia</a></p>
         </div>
       )}
       {currentContentType === 'geology' && (
         <div>
           <p>{currentPlanet.geology.content}</p>
           <p>Source: <a href={currentPlanet.geology.source} target="_blank" rel="noopener noreferrer">Wikipedia</a></p>
         </div>
       )}
 
       {/* Кнопки для выбора других планет */}
       {data.map((planet, index) => (
         <button key={index} onClick={() => changePlanet(planet)}>
           {planet.name}
         </button>
       ))}

       {/* Дополнительные кнопки для переключения типа контента */}
       <button onClick={() => changeContentType('planet')}>Overview</button>
       <button onClick={() => changeContentType('internal')}>Structure</button>
       <button onClick={() => changeContentType('geology')}>Geology</button>
     </div>
   );
 }

export default Info;



import React, { useState, useEffect } from 'react';
import './assets/styles/fonts.scss';
import './assets/styles/global.scss';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
//import data from './data.json'; 
import data from './data';

const App = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [isPlanetSelected, setIsPlanetSelected] = useState(false);
   const [isInfoVisible, setIsInfoVisible] = useState(true);
   const [isNavVisible, setIsNavVisible] = useState(false);

  const handlePlanetSelect = (planet) => {
    setSelectedPlanet(planet);
    setIsPlanetSelected(true);
    setIsInfoVisible(false); 
    setIsNavVisible(true); 
  };

  const toggleInfoVisibility = () => {
   setIsInfoVisible((prevVisibility) => !prevVisibility);
 };

  useEffect(() => {
    const initialPlanetData = data.find((planet) => planet.name === 'Mercury');
    if (initialPlanetData) {
      setSelectedPlanet(initialPlanetData);
    }
  }, []); 

  return (
    <main className='main-container'>
      <Header onPlanetSelect={handlePlanetSelect} toggleInfoVisibility={toggleInfoVisibility} setIsNavVisible={setIsNavVisible} />
      <Info selectedPlanet={selectedPlanet} isInfoVisible={isInfoVisible}/>
    </main>
  );
};

export default App;


import React from 'react';
import '../../components/Nav/nav.scss';
import data from '../../data';
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



import React, { useState, useEffect } from 'react';
import '../../components/Info/info.scss';
import sourceIcon from '../../assets/images/icon-source.svg';


const Info = ({ selectedPlanet, isInfoVisible }) => {
   const [activeTab, setActiveTab] = useState('overview');
   const [planetImage, setPlanetImage] = useState(null);
   const [geologyImage, setGeologyImage] = useState(null);
   const [isGeologyImageReset, setIsGeologyImageReset] = useState(true);
   
   const handleTabClick = (tab) => {
     setActiveTab(tab);
     getPlanetImage(tab);
   };
 
   const generatePlanetColor = (planetName) => {
     return { '--clr-hover': `var(--clr-${planetName.toLowerCase()})` };
   };   

   const getPlanetImage = async (tab) => {
      try {
        if (selectedPlanet) {
          let imagePath;
          let geologyImagePath;
    
          if (tab === 'overview') {
            imagePath = selectedPlanet.images.planet;
            geologyImagePath = null;
          } else if (tab === 'structure') {
            imagePath = selectedPlanet.images.internal;
            geologyImagePath = null;
          } else if (tab === 'geology') {
            imagePath = selectedPlanet.images.planet;
            geologyImagePath = selectedPlanet.images.geology;
          }
    
          console.log('imagePath:', imagePath);
          console.log('geologyImagePath:', geologyImagePath);
    
          const planetImageModule = await import(imagePath);
          setPlanetImage(planetImageModule.default);
    
          if (geologyImagePath) {
            const geologyImageModule = await import(geologyImagePath);
            setGeologyImage(geologyImageModule.default);
          } else {
            setGeologyImage(null);
          }
        }
      } catch (error) {
        console.error(`Error loading image for ${selectedPlanet?.name}:`, error);
        setPlanetImage(null);
      }
    };
    

  useEffect(() => {
  if (activeTab === 'overview' || activeTab === 'structure') {
    setIsGeologyImageReset(false); 
    setTimeout(() => {
      setGeologyImage(null);
      setIsGeologyImageReset(true);
    }, 100);
  }
}, [activeTab]);

 
   useEffect(() => {
     getPlanetImage(activeTab);
   }, [selectedPlanet, activeTab]);
 
   useEffect(() => {
     handleTabClick('overview');
   }, [selectedPlanet]);

  return (
   <main className={`info-container grid ${isInfoVisible ? '' : 'info-hidden'}`} >
      {selectedPlanet && (
         <>
            <section className='top-section'>
               <div className="pic-wrapper"> 
                  {planetImage && <img src={planetImage} alt={selectedPlanet.name} />}
                  <div className="geology-pic">
                     {isGeologyImageReset && geologyImage && <img src={geologyImage} alt={`Geology of ${selectedPlanet.name}`}/>}  
                  </div>
               </div>

               <div className='main-info'>
                  <h1>{selectedPlanet.name}</h1>
                  <p className='main-content'>{selectedPlanet[activeTab].content}</p>
                  <div className='link-wrapper'>
                     <p>Source :</p>
                     <a
                        href={selectedPlanet[activeTab].source}
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <p>Wikipedia</p>
                        <img src={sourceIcon} alt="Source Icon" />
                     </a>
                   </div>
               </div>

               <div className='info-nav'>
                  <nav className='secondary-nav'>
                     <ul>
                        <li className={activeTab === 'overview' ? 'active' : ''}
                        style={generatePlanetColor(selectedPlanet.name)}
                        onClick={() => handleTabClick('overview')}>
                           <h4 className='nav-number'>01</h4>
                           <h4 className='nav-title'>overview</h4>
                           <h4 className='nav-title-sm'>overview</h4>
                        </li>
                        <li className={activeTab === 'structure' ? 'active' : ''} 
                        style={generatePlanetColor(selectedPlanet.name)}
                        onClick={() => handleTabClick('structure')}>
                           <h4 className='nav-number'>02</h4>
                           <h4 className='nav-title'>internal structure</h4>
                           <h4 className='nav-title-sm'>structure</h4>
                        </li>
                        <li className={activeTab === 'geology' ? 'active' : ''} 
                        style={generatePlanetColor(selectedPlanet.name)}
                        onClick={() => handleTabClick('geology')}>
                           <h4 className='nav-number'>03</h4>
                           <h4 className='nav-title'>surface geology</h4>
                           <h4 className='nav-title-sm'>surface</h4>
                        </li>
                     </ul>
                  </nav>
               </div>
            </section>

            <footer className='bottom-section'>
               <div className="footer-item">
                  <h5 className='footer-title'>rotation time</h5>  
                  <h2 className="footer-info">{selectedPlanet.rotation}</h2>               
               </div>

               <div className="footer-item">
                  <h5 className='footer-title'>revolution time</h5>              
                  <h2 className="footer-info">{selectedPlanet.revolution}</h2>               
               </div>

               <div className="footer-item">
                  <h5 className='footer-title'>radius</h5>
                  <h2 className="footer-info">{selectedPlanet.radius}</h2>
               </div>

               <div className="footer-item">
                  <h5 className='footer-title'>average temp.</h5>
                  <h2 className="footer-info">{selectedPlanet.temperature}</h2>             
               </div>
            </footer> 
         </>
      )} 
    </main>
  )
}

export default Info


 {/* Первое изображение */}
 <img src={currentContentType === 'geology' ? selectedPlanet.images['planet'] : selectedPlanet.images[currentContentType]} alt={selectedPlanet.name} />
 {/* Второе изображение */}
 {secondImageType !== 'planet' && (
     <img src={selectedPlanet.images[secondImageType]} alt={selectedPlanet.name} />
 )}
 <h2>{selectedPlanet.name}</h2>
 {/* Контент */}
 {currentContentType === 'planet' && (
     <div>
         <p>{selectedPlanet.overview.content}</p>
         <p>Source: <a href={selectedPlanet.overview.source} target="_blank" rel="noopener noreferrer">Wikipedia</a></p>
     </div>
 )}
 {currentContentType === 'internal' && (
     <div>
         <p>{selectedPlanet.structure.content}</p>
         <p>Source: <a href={selectedPlanet.structure.source} target="_blank" rel="noopener noreferrer">Wikipedia</a></p>
     </div>
 )}
 {currentContentType === 'geology' && (
     <div>
         <p>{selectedPlanet.geology.content}</p>
         <p>Source: <a href={selectedPlanet.geology.source} target="_blank" rel="noopener noreferrer">Wikipedia</a></p>
     </div>
 )}
 {/* Кнопки для выбора типа контента */}
 <div>
     <button onClick={() => changeContentType('planet')}>Overview</button>
     <button onClick={() => changeContentType('internal')}>Structure</button>
     <button onClick={() => changeContentType('geology')}>Geology</button>
 </div>