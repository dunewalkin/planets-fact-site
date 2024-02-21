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
           imagePath = `../../assets/images/planet-${selectedPlanet.name.toLowerCase()}.svg`;
           geologyImagePath = null;
         } else if (tab === 'structure') {
           imagePath = `../../assets/images/planet-${selectedPlanet.name.toLowerCase()}-internal.svg`;
           geologyImagePath = null;
         } else if (tab === 'geology') {
            imagePath = `../../assets/images/planet-${selectedPlanet.name.toLowerCase()}.svg`;
            geologyImagePath = `../../assets/images/geology-${selectedPlanet.name.toLowerCase()}.png`;
         }

 
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
