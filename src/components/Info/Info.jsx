import React, { useState, useEffect } from 'react';
import '../../components/Info/info.scss';
import sourceIcon from '../../assets/images/icon-source.svg';

const Info = ({ selectedPlanet, isInfoVisible }) => {
    const [currentContentType, setCurrentContentType] = useState('planet');
    const [secondImageType, setSecondImageType] = useState('planet');

    const [activeTab, setActiveTab] = useState('overview');

    const generatePlanetColor = (planetName) => {
      return { '--clr-hover': `var(--clr-${planetName.toLowerCase()})` };
    }; 

    useEffect(() => {
      setCurrentContentType('planet'); // Сброс типа контента при изменении планеты
      setSecondImageType('planet');
      }, [selectedPlanet]);

    const changeContentType = (type) => {
        setCurrentContentType(type);
        // Логика для второго изображения
        if (type === 'geology') {
            setSecondImageType('geology');
        } else {
            setSecondImageType('planet');
        }
    };

    return (
        <main className={`info-container grid ${isInfoVisible ? '' : 'info-hidden'}`} >
            {selectedPlanet && (
                <>

            <section className='top-section'>
               <div className="pic-wrapper"> 
                  <img src={currentContentType === 'geology' ? selectedPlanet.images['planet'] : selectedPlanet.images[currentContentType]} alt={selectedPlanet.name} />
                  <div className="geology-pic">
                     {secondImageType !== 'planet' && (
                     <img src={selectedPlanet.images[secondImageType]} alt={selectedPlanet.name} />
               )}
                  </div>
               </div>

               <div className='main-info'>
                  <h1>{selectedPlanet.name}</h1>

                  {currentContentType === 'planet' && (
                     <div>
                           <p className='main-content'>{selectedPlanet.overview.content}</p>
                           <div className='link-wrapper'>
                              <p>Source :</p>
                              <a
                                 href={selectedPlanet.overview.source}
                                 target="_blank"
                                 rel="noopener noreferrer"
                              >
                                 <p>Wikipedia</p>
                                 <img src={sourceIcon} alt="Source Icon" />
                              </a>
                           </div>
                     </div>
                  )}
                  {currentContentType === 'internal' && (
                     <div>
                           <p className='main-content'>{selectedPlanet.structure.content}</p>
                           <div className='link-wrapper'>
                              <p>Source :</p>
                              <a
                                 href={selectedPlanet.structure.source}
                                 target="_blank"
                                 rel="noopener noreferrer"
                              >
                                 <p>Wikipedia</p>
                                 <img src={sourceIcon} alt="Source Icon" />
                              </a>
                           </div>
                     </div>
                  )}
                  {currentContentType === 'geology' && (
                     <div>
                           <p className='main-content'>{selectedPlanet.geology.content}</p>
                           <div className='link-wrapper'>
                              <p>Source :</p>
                              <a
                                 href={selectedPlanet.geology.source}
                                 target="_blank"
                                 rel="noopener noreferrer"
                              >
                                 <p>Wikipedia</p>
                                 <img src={sourceIcon} alt="Source Icon" />
                              </a>
                           </div>
                     </div>
                  )}
               </div>

 
               <div className='info-nav'>
                  <nav className='secondary-nav'>
                     <ul>
                        <li className={activeTab === 'overview' ? 'active' : ''}
                        style={generatePlanetColor(selectedPlanet.name)}
                        onClick={() => changeContentType('planet')}>
                           <h4 className='nav-number'>01</h4>
                           <h4 className='nav-title'>overview</h4>
                           <h4 className='nav-title-sm'>overview</h4>
                        </li>
                        <li className={activeTab === 'structure' ? 'active' : ''} 
                        style={generatePlanetColor(selectedPlanet.name)}
                        onClick={() => changeContentType('internal')}>
                           <h4 className='nav-number'>02</h4>
                           <h4 className='nav-title'>internal structure</h4>
                           <h4 className='nav-title-sm'>structure</h4>
                        </li>
                        <li className={activeTab === 'geology' ? 'active' : ''} 
                        style={generatePlanetColor(selectedPlanet.name)}
                        onClick={() => changeContentType('geology')}>
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
    );
};

export default Info;



// {currentContentType === 'planet' && (
//    <div>
//    <p>{selectedPlanet.overview.content}</p>
//    <p>Source: <a href={selectedPlanet.overview.source} target="_blank" rel="noopener noreferrer">Wikipedia</a></p>
//    </div>
// )}
// {currentContentType === 'internal' && (
//    <div>
//    <p>{selectedPlanet.structure.content}</p>
//    <p>Source: <a href={selectedPlanet.structure.source} target="_blank" rel="noopener noreferrer">Wikipedia</a></p>
//    </div>
// )}
// {currentContentType === 'geology' && (
//    <div>
//    <p>{selectedPlanet.geology.content}</p>
//    <p>Source: <a href={selectedPlanet.geology.source} target="_blank" rel="noopener noreferrer">Wikipedia</a></p>
//    </div>
// )}




// import React, { useState } from 'react';
// import data from '../../data'; // Импортируем данные о планетах

// const Info = () => {
//    const [currentPlanet, setCurrentPlanet] = useState(data[0]); // Инициализация первой планеты
//    const [currentContentType, setCurrentContentType] = useState('planet'); // Текущий тип изображения: 'planet', 'internal' или 'geology'
 
//    // Функция для изменения планеты
//    const changePlanet = (planet) => {
//      setCurrentPlanet(planet);
//    };

//    // Функция для изменения типа контента
//    const changeContentType = (type) => {
//      setCurrentContentType(type);
//    };
 
//    return (
//      <div>
//        {/* Показывать текущее изображение планеты */}
//        <img src={currentPlanet.images[currentContentType]} alt={currentPlanet.name} />
//        <h2>{currentPlanet.name}</h2>
//        {currentContentType === 'planet' && (
//          <div>
//            <p>{currentPlanet.overview.content}</p>
//            <p>Source: <a href={currentPlanet.overview.source} target="_blank" rel="noopener noreferrer">Wikipedia</a></p>
//          </div>
//        )}
//        {currentContentType === 'internal' && (
//          <div>
//            <p>{currentPlanet.structure.content}</p>
//            <p>Source: <a href={currentPlanet.structure.source} target="_blank" rel="noopener noreferrer">Wikipedia</a></p>
//          </div>
//        )}
//        {currentContentType === 'geology' && (
//          <div>
//            <p>{currentPlanet.geology.content}</p>
//            <p>Source: <a href={currentPlanet.geology.source} target="_blank" rel="noopener noreferrer">Wikipedia</a></p>
//          </div>
//        )}
 
//        {/* Кнопки для выбора других планет */}
//        {data.map((planet, index) => (
//          <button key={index} onClick={() => changePlanet(planet)}>
//            {planet.name}
//          </button>
//        ))}

//        {/* Дополнительные кнопки для переключения типа контента */}
//        <button onClick={() => changeContentType('planet')}>Overview</button>
//        <button onClick={() => changeContentType('internal')}>Structure</button>
//        <button onClick={() => changeContentType('geology')}>Geology</button>
//      </div>
//    );
//  }

// export default Info;








// import React, { useState, useEffect } from 'react';
// import '../../components/Info/info.scss';
// import sourceIcon from '../../assets/images/icon-source.svg';


// const Info = ({ selectedPlanet, isInfoVisible }) => {
//    const [activeTab, setActiveTab] = useState('overview');
//    const [planetImage, setPlanetImage] = useState(null);
//    const [geologyImage, setGeologyImage] = useState(null);
//    const [isGeologyImageReset, setIsGeologyImageReset] = useState(true);
   
//    const handleTabClick = (tab) => {
//      setActiveTab(tab);
//      getPlanetImage(tab);
//    };
 
//    const generatePlanetColor = (planetName) => {
//      return { '--clr-hover': `var(--clr-${planetName.toLowerCase()})` };
//    };   

//    const getPlanetImage = async (tab) => {
//       try {
//         if (selectedPlanet) {
//           let imagePath;
//           let geologyImagePath;
    
//           if (tab === 'overview') {
//             imagePath = selectedPlanet.images.planet;
//             geologyImagePath = null;
//           } else if (tab === 'structure') {
//             imagePath = selectedPlanet.images.internal;
//             geologyImagePath = null;
//           } else if (tab === 'geology') {
//             imagePath = selectedPlanet.images.planet;
//             geologyImagePath = selectedPlanet.images.geology;
//           }
    
//           console.log('imagePath:', imagePath);
//           console.log('geologyImagePath:', geologyImagePath);
    
//           const planetImageModule = await import(imagePath);
//           setPlanetImage(planetImageModule.default);
    
//           if (geologyImagePath) {
//             const geologyImageModule = await import(geologyImagePath);
//             setGeologyImage(geologyImageModule.default);
//           } else {
//             setGeologyImage(null);
//           }
//         }
//       } catch (error) {
//         console.error(`Error loading image for ${selectedPlanet?.name}:`, error);
//         setPlanetImage(null);
//       }
//     };
    

//   useEffect(() => {
//   if (activeTab === 'overview' || activeTab === 'structure') {
//     setIsGeologyImageReset(false); 
//     setTimeout(() => {
//       setGeologyImage(null);
//       setIsGeologyImageReset(true);
//     }, 100);
//   }
// }, [activeTab]);

 
//    useEffect(() => {
//      getPlanetImage(activeTab);
//    }, [selectedPlanet, activeTab]);
 
//    useEffect(() => {
//      handleTabClick('overview');
//    }, [selectedPlanet]);

//   return (
//    <main className={`info-container grid ${isInfoVisible ? '' : 'info-hidden'}`} >
//       {selectedPlanet && (
//          <>
//             <section className='top-section'>
//                <div className="pic-wrapper"> 
//                   {planetImage && <img src={planetImage} alt={selectedPlanet.name} />}
//                   <div className="geology-pic">
//                      {isGeologyImageReset && geologyImage && <img src={geologyImage} alt={`Geology of ${selectedPlanet.name}`}/>}  
//                   </div>
//                </div>

//                <div className='main-info'>
//                   <h1>{selectedPlanet.name}</h1>
//                   <p className='main-content'>{selectedPlanet[activeTab].content}</p>
//                   <div className='link-wrapper'>
//                      <p>Source :</p>
//                      <a
//                         href={selectedPlanet[activeTab].source}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                      >
//                         <p>Wikipedia</p>
//                         <img src={sourceIcon} alt="Source Icon" />
//                      </a>
//                    </div>
//                </div>

//                <div className='info-nav'>
//                   <nav className='secondary-nav'>
//                      <ul>
//                         <li className={activeTab === 'overview' ? 'active' : ''}
//                         style={generatePlanetColor(selectedPlanet.name)}
//                         onClick={() => handleTabClick('overview')}>
//                            <h4 className='nav-number'>01</h4>
//                            <h4 className='nav-title'>overview</h4>
//                            <h4 className='nav-title-sm'>overview</h4>
//                         </li>
//                         <li className={activeTab === 'structure' ? 'active' : ''} 
//                         style={generatePlanetColor(selectedPlanet.name)}
//                         onClick={() => handleTabClick('structure')}>
//                            <h4 className='nav-number'>02</h4>
//                            <h4 className='nav-title'>internal structure</h4>
//                            <h4 className='nav-title-sm'>structure</h4>
//                         </li>
//                         <li className={activeTab === 'geology' ? 'active' : ''} 
//                         style={generatePlanetColor(selectedPlanet.name)}
//                         onClick={() => handleTabClick('geology')}>
//                            <h4 className='nav-number'>03</h4>
//                            <h4 className='nav-title'>surface geology</h4>
//                            <h4 className='nav-title-sm'>surface</h4>
//                         </li>
//                      </ul>
//                   </nav>
//                </div>
//             </section>

//             <footer className='bottom-section'>
//                <div className="footer-item">
//                   <h5 className='footer-title'>rotation time</h5>  
//                   <h2 className="footer-info">{selectedPlanet.rotation}</h2>               
//                </div>

//                <div className="footer-item">
//                   <h5 className='footer-title'>revolution time</h5>              
//                   <h2 className="footer-info">{selectedPlanet.revolution}</h2>               
//                </div>

//                <div className="footer-item">
//                   <h5 className='footer-title'>radius</h5>
//                   <h2 className="footer-info">{selectedPlanet.radius}</h2>
//                </div>

//                <div className="footer-item">
//                   <h5 className='footer-title'>average temp.</h5>
//                   <h2 className="footer-info">{selectedPlanet.temperature}</h2>             
//                </div>
//             </footer> 
//          </>
//       )} 
//     </main>
//   )
// }

// export default Info






// import React, { useState, useEffect } from 'react';
// import '../../components/Info/info.scss';
// import sourceIcon from '../../assets/images/icon-source.svg';
// import data from '../../data.json';

// const Info = ({ selectedPlanet, isInfoVisible }) => {
//    const [activeTab, setActiveTab] = useState('overview');
//    const [planetImage, setPlanetImage] = useState(null);
//    const [geologyImage, setGeologyImage] = useState(null);
//    const [isGeologyImageReset, setIsGeologyImageReset] = useState(true);
   
//    const handleTabClick = (tab) => {
//      setActiveTab(tab);
//      getPlanetImage(tab);
//    };
 
//    const generatePlanetColor = (planetName) => {
//      return { '--clr-hover': `var(--clr-${planetName.toLowerCase()})` };
//    };   

//    const getPlanetImage = async (tab) => {
//       try {
//         if (selectedPlanet) {
//           let imagePath;
//           let geologyImagePath;
  
//           if (tab === 'overview') {
//             imagePath = `/src/assets/images/planet-${selectedPlanet.name.toLowerCase()}.svg`;
//             geologyImagePath = null;
//           } else if (tab === 'structure') {
//             imagePath = `/src/assets/images/planet-${selectedPlanet.name.toLowerCase()}-internal.svg`;
//             geologyImagePath = null;
//           } else if (tab === 'geology') {
//              imagePath = `/src/assets/images/planet-${selectedPlanet.name.toLowerCase()}.svg`;
//              geologyImagePath = `/src/assets/images/geology-${selectedPlanet.name.toLowerCase()}.png`;
//           }
//           console.log('imagePath:', imagePath);
//           console.log('geologyImagePath:', geologyImagePath);
  
//           const planetImageModule = await import(imagePath);
  
//           setPlanetImage(planetImageModule.default);
 
//           if (geologyImagePath) {
//              const geologyImageModule = await import(geologyImagePath);
//              setGeologyImage(geologyImageModule.default);
//            } else {
//              setGeologyImage(null);
//            }
 
//         }
//       } catch (error) {
//         console.error(`Error loading image for ${selectedPlanet?.name}:`, error);
        
//         setPlanetImage(null);
//       }
//     };

//   useEffect(() => {
//   if (activeTab === 'overview' || activeTab === 'structure') {
//     setIsGeologyImageReset(false); 
//     setTimeout(() => {
//       setGeologyImage(null);
//       setIsGeologyImageReset(true);
//     }, 100);
//   }
// }, [activeTab]);

 
//    useEffect(() => {
//      getPlanetImage(activeTab);
//    }, [selectedPlanet, activeTab]);
 
//    useEffect(() => {
//      handleTabClick('overview');
//    }, [selectedPlanet]);

//   return (
//    <main className={`info-container grid ${isInfoVisible ? '' : 'info-hidden'}`} >
//       {selectedPlanet && (
//          <>
//             <section className='top-section'>
//                <div className="pic-wrapper"> 
//                <img src={selectedPlanet.images.planet} alt={selectedPlanet.name}/>
//                   {/* <img src={planetMercury} alt="" /> */}
//                   {/* {planetImage && <img src={planetImage} alt={selectedPlanet.name} />} */}
//                   <div className="geology-pic">
//                      {/* {isGeologyImageReset && geologyImage && <img src={geologyImage} alt={`Geology of ${selectedPlanet.name}`}/>} */}
                    
//                   </div>
//                </div>

//                <div className='main-info'>
//                   <h1>{selectedPlanet.name}</h1>
//                   <p className='main-content'>{selectedPlanet[activeTab].content}</p>
//                   <div className='link-wrapper'>
//                      <p>Source :</p>
//                      <a
//                         href={selectedPlanet[activeTab].source}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                      >
//                         <p>Wikipedia</p>
//                         <img src={sourceIcon} alt="Source Icon" />
//                      </a>
//                    </div>
//                </div>

//                <div className='info-nav'>
//                   <nav className='secondary-nav'>
//                      <ul>
//                         <li className={activeTab === 'overview' ? 'active' : ''}
//                         style={generatePlanetColor(selectedPlanet.name)}
//                         onClick={() => handleTabClick('overview')}>
//                            <h4 className='nav-number'>01</h4>
//                            <h4 className='nav-title'>overview</h4>
//                            <h4 className='nav-title-sm'>overview</h4>
//                         </li>
//                         <li className={activeTab === 'structure' ? 'active' : ''} 
//                         style={generatePlanetColor(selectedPlanet.name)}
//                         onClick={() => handleTabClick('structure')}>
//                            <h4 className='nav-number'>02</h4>
//                            <h4 className='nav-title'>internal structure</h4>
//                            <h4 className='nav-title-sm'>structure</h4>
//                         </li>
//                         <li className={activeTab === 'geology' ? 'active' : ''} 
//                         style={generatePlanetColor(selectedPlanet.name)}
//                         onClick={() => handleTabClick('geology')}>
//                            <h4 className='nav-number'>03</h4>
//                            <h4 className='nav-title'>surface geology</h4>
//                            <h4 className='nav-title-sm'>surface</h4>
//                         </li>
//                      </ul>
//                   </nav>
//                </div>
//             </section>

//             <footer className='bottom-section'>
//                <div className="footer-item">
//                   <h5 className='footer-title'>rotation time</h5>  
//                   <h2 className="footer-info">{selectedPlanet.rotation}</h2>               
//                </div>

//                <div className="footer-item">
//                   <h5 className='footer-title'>revolution time</h5>              
//                   <h2 className="footer-info">{selectedPlanet.revolution}</h2>               
//                </div>

//                <div className="footer-item">
//                   <h5 className='footer-title'>radius</h5>
//                   <h2 className="footer-info">{selectedPlanet.radius}</h2>
//                </div>

//                <div className="footer-item">
//                   <h5 className='footer-title'>average temp.</h5>
//                   <h2 className="footer-info">{selectedPlanet.temperature}</h2>             
//                </div>
//             </footer> 
//          </>
//       )} 
//     </main>
//   )
// }

// export default Info




// const getPlanetImage = async (tab) => {
   //    try {
   //      if (selectedPlanet) {
   //        let imagePath;
   //        let geologyImagePath;
  
   //        if (tab === 'overview') {
   //          imagePath = selectedPlanet.images.planet;
   //          geologyImagePath = null;
   //       } else if (tab === 'structure') {
   //          imagePath = selectedPlanet.images.internal;
   //          geologyImagePath = null;
   //       } else if (tab === 'geology') {
   //          imagePath = selectedPlanet.images.planet;
   //          geologyImagePath = selectedPlanet.images.geology;
   //       }
   //        console.log('imagePath:', imagePath);
   //        console.log('geologyImagePath:', geologyImagePath);
  
   //        const planetImageModule = await import(imagePath);
  
   //        setPlanetImage(planetImageModule.default);
 
   //        if (geologyImagePath) {
   //           const geologyImageModule = await import(geologyImagePath);
   //           setGeologyImage(geologyImageModule.default);
   //         } else {
   //           setGeologyImage(null);
   //         }
 
   //      }
   //    } catch (error) {
   //      console.error(`Error loading image for ${selectedPlanet?.name}:`, error);
        
   //      setPlanetImage(null);
   //    }
   //  };

   //    const getPlanetImage = async (tab) => {
   //    try {
   //      if (selectedPlanet) {
   //        let imagePath;
   //        let geologyImagePath;
  
   //        if (tab === 'overview') {
   //          imagePath = `planet${selectedPlanet.name.toLowerCase()}`;
   //          geologyImagePath = null;
   //        } else if (tab === 'structure') {
   //          imagePath = `/src/assets/images/planet-${selectedPlanet.name.toLowerCase()}-internal.svg`;
   //          geologyImagePath = null;
   //        } else if (tab === 'geology') {
   //           imagePath = `/src/assets/images/planet-${selectedPlanet.name.toLowerCase()}.svg`;
   //           geologyImagePath = `/src/assets/images/geology-${selectedPlanet.name.toLowerCase()}.png`;
   //        }
   //        console.log('imagePath:', imagePath);
   //        console.log('geologyImagePath:', geologyImagePath);
  
   //        const planetImageModule = await import(imagePath);
  
   //        setPlanetImage(planetImageModule.default);
 
   //        if (geologyImagePath) {
   //           const geologyImageModule = await import(geologyImagePath);
   //           setGeologyImage(geologyImageModule.default);
   //         } else {
   //           setGeologyImage(null);
   //         }
 
   //      }
   //    } catch (error) {
   //      console.error(`Error loading image for ${selectedPlanet?.name}:`, error);
        
   //      setPlanetImage(null);
   //    }
   //  };

   // const getPlanetImage = async (tab) => {
   //    try {
   //      if (selectedPlanet) {
   //        let imagePath;
   //        let geologyImagePath;
    
   //        switch (tab) {
   //          case 'overview':
   //            imagePath = getPlanetImagePath(selectedPlanet.name);
   //            geologyImagePath = null;
   //            break;
   //          case 'structure':
   //            imagePath = getPlanetInternalImagePath(selectedPlanet.name);
   //            geologyImagePath = null;
   //            break;
   //          case 'geology':
   //            imagePath = getPlanetImagePath(selectedPlanet.name);
   //            geologyImagePath = getGeologyImagePath(selectedPlanet.name);
   //            break;
   //          default:
   //            imagePath = null;
   //            geologyImagePath = null;
   //            break;
   //        }
    
   //        setPlanetImage(imagePath);
    
   //        if (geologyImagePath) {
   //          setGeologyImage(geologyImagePath);
   //        } else {
   //          setGeologyImage(null);
   //        }
   //      }
   //    } catch (error) {
   //      console.error(`Error loading image for ${selectedPlanet?.name}:`, error);
   //      setPlanetImage(null);
   //    }
   //  };
    
   //  const getPlanetImagePath = (planetName) => {
   //    switch (planetName.toLowerCase()) {
   //      case 'mercury':
   //        return planetMercury;
   //      case 'venus':
   //        return planetVenus;
   //      case 'earth':
   //        return planetEarth;
   //      case 'mars':
   //        return planetMars;
   //      case 'jupiter':
   //        return planetJupiter;
   //      case 'saturn':
   //        return planetSaturn;
   //      case 'uranus':
   //        return planetUranus;
   //      case 'neptune':
   //        return planetNeptune;
   //      default:
   //        return null;
   //    }
   //  };
    
   //  const getPlanetInternalImagePath = (planetName) => {
   //    switch (planetName.toLowerCase()) {
   //      case 'mercury':
   //        return planetMercuryInternal;
   //      case 'venus':
   //        return planetVenusInternal;
   //      case 'earth':
   //        return planetEarthInternal;
   //      case 'mars':
   //        return planetMarsInternal;
   //      case 'jupiter':
   //        return planetJupiterInternal;
   //      case 'saturn':
   //        return planetSaturnInternal;
   //      case 'uranus':
   //        return planetUranusInternal;
   //      case 'neptune':
   //        return planetNeptuneInternal;
   //      default:
   //        return null;
   //    }
   //  };
    
   //  const getGeologyImagePath = (planetName) => {
   //    switch (planetName.toLowerCase()) {
   //      case 'mercury':
   //        return geologyMercury;
   //      case 'venus':
   //        return geologyVenus;
   //      case 'earth':
   //        return geologyEarth;
   //      case 'mars':
   //        return geologyMars;
   //      case 'jupiter':
   //        return geologyJupiter;
   //      case 'saturn':
   //        return geologySaturn;
   //      case 'uranus':
   //        return geologyUranus;
   //      case 'neptune':
   //        return geologyNeptune;
   //      default:
   //        return null;
   //    }
   //  };

   // const getPlanetImage = async (tab) => {
   //    try {
   //      if (selectedPlanet) {
   //        let imagePath;
   //        let geologyImagePath;
    
   //        switch (tab) {
   //          case 'overview':
   //            imagePath = planetImages[`planet${selectedPlanet.name.toLowerCase()}`];
   //            geologyImagePath = null;
   //            break;
   //          case 'structure':
   //            imagePath = planetImages[`planet${selectedPlanet.name.toLowerCase()}Internal`];
   //            geologyImagePath = null;
   //            break;
   //          case 'geology':
   //            imagePath = planetImages[`planet${selectedPlanet.name.toLowerCase()}`];
   //            geologyImagePath = planetImages[`geology${selectedPlanet.name.toLowerCase()}`];
   //            break;
   //          default:
   //            imagePath = null;
   //            geologyImagePath = null;
   //            break;
   //        }
    
   //        const planetImageModule = await import(imagePath);
   //        setPlanetImage(planetImageModule.default);
    
   //        if (geologyImagePath) {
   //          const geologyImageModule = await import(geologyImagePath);
   //          setGeologyImage(geologyImageModule.default);
   //        } else {
   //          setGeologyImage(null);
   //        }
   //      }
   //    } catch (error) {
   //      console.error(`Error loading image for ${selectedPlanet?.name}:`, error);
   //      setPlanetImage(null);
   //    }
   //  };
    
   //  // Объект с импортированными изображениями планет и их геологических структур
   //  const planetImages = {
   //    planetearth: planetEarth,
   //    planetjupiter: planetJupiter,
   //    planetmars: planetMars,
   //    planetmercury: planetMercury,
   //    planetneptune: planetNeptune,
   //    planetsaturn: planetSaturn,
   //    planeturanus: planetUranus,
   //    planetvenus: planetVenus,
   //    planetearthinternal: planetEarthInternal,
   //    planetjupiterinternal: planetJupiterInternal,
   //    planetmarsinternal: planetMarsInternal,
   //    planetmercuryinternal: planetMercuryInternal,
   //    planetneptuneinternal: planetNeptuneInternal,
   //    planetsaturninternal: planetSaturnInternal,
   //    planeturanusinternal: planetUranusInternal,
   //    planetvenusinternal: planetVenusInternal,
   //    geologyearth: geologyEarth,
   //    geologyjupiter: geologyJupiter,
   //    geologymars: geologyMars,
   //    geologymercury: geologyMercury,
   //    geologyneptune: geologyNeptune,
   //    geologysaturn: geologySaturn,
   //    geologyuranus: geologyUranus,
   //    geologyvenus: geologyVenus,
   //  };




// import data from '../../data.json';
// import planetEarth from '../../assets/images/planet-earth.svg';
// import planetJupiter from '../../assets/images/planet-jupiter.svg';
// import planetMars from '../../assets/images/planet-mars.svg';
// import planetMercury from '../../assets/images/planet-mercury.svg';
// import planetNeptune from '../../assets/images/planet-neptune.svg';
// import planetSaturn from '../../assets/images/planet-saturn.svg';
// import planetUranus from '../../assets/images/planet-uranus.svg';
// import planetVenus from '../../assets/images/planet-venus.svg';
// import planetEarthInternal from '../../assets/images/planet-earth-internal.svg';
// import planetJupiterInternal from '../../assets/images/planet-jupiter-internal.svg';
// import planetMarsInternal from '../../assets/images/planet-mars-internal.svg';
// import planetMercuryInternal from '../../assets/images/planet-mercury-internal.svg';
// import planetNeptuneInternal from '../../assets/images/planet-neptune-internal.svg';
// import planetSaturnInternal from '../../assets/images/planet-saturn-internal.svg';
// import planetUranusInternal from '../../assets/images/planet-uranus-internal.svg';
// import planetVenusInternal from '../../assets/images/planet-venus-internal.svg';
// import planetGeologyEarth from '../../assets/images/geology-earth.png';
// import planetGeologyJupiter from '../../assets/images/geology-jupiter.png';
// import planetGeologyMars from '../../assets/images/geology-mars.png';
// import planetGeologyMercury from '../../assets/images/geology-mercury.png';
// import planetGeologyNeptune from '../../assets/images/geology-neptune.png';
// import planetGeologySaturn from '../../assets/images/geology-saturn.png';
// import planetGeologyUranus from '../../assets/images/geology-uranus.png';
// import planetGeologyVenus from '../../assets/images/geology-venus.png';


