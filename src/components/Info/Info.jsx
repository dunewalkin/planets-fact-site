import React, { useState, useEffect } from 'react';
import '../../components/Info/info.scss';
import sourceIcon from '../../assets/images/icon-source.svg';

const Info = ({ selectedPlanet, isInfoVisible }) => {
    const [currentContentType, setCurrentContentType] = useState('planet');
    const [secondImageType, setSecondImageType] = useState('planet');
    const [imageLoaded, setImageLoaded] = useState(false);

    const generatePlanetColor = (planetName) => {
      return { '--clr-hover': `var(--clr-${planetName.toLowerCase()})` };
    }; 

    useEffect(() => {
      setCurrentContentType('planet'); 
      setSecondImageType('planet');
      setImageLoaded(false);
      }, [selectedPlanet]);

    const changeContentType = (type) => {
        setCurrentContentType(type);
        if (type === 'geology') {
            setSecondImageType('geology');
        } else {
            setSecondImageType('planet');
        }
    };

    const handleImageLoad = () => {
      setImageLoaded(true);
    };

    return (
        <main className={`info-container grid ${isInfoVisible ? '' : 'info-hidden'}`} >
            {selectedPlanet && (
                <>

            <section className='top-section'>
               <div className="pic-wrapper"> 
               <img 
                    src={currentContentType === 'geology' ? selectedPlanet.images['planet'] : selectedPlanet.images[currentContentType]} 
                    alt={selectedPlanet.name} 
                    onLoad={handleImageLoad} 
                    className={imageLoaded ? 'loaded' : ''} 
                  />
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
                        <li className={currentContentType === 'planet' ? 'active' : ''}
                        style={generatePlanetColor(selectedPlanet.name)}
                        onClick={() => changeContentType('planet')}>
                           <h4 className='nav-number'>01</h4>
                           <h4 className='nav-title'>overview</h4>
                           <h4 className='nav-title-sm'>overview</h4>
                        </li>
                        <li className={currentContentType === 'internal' ? 'active' : ''}
                        style={generatePlanetColor(selectedPlanet.name)}
                        onClick={() => changeContentType('internal')}>
                           <h4 className='nav-number'>02</h4>
                           <h4 className='nav-title'>internal structure</h4>
                           <h4 className='nav-title-sm'>structure</h4>
                        </li>
                        <li className={currentContentType === 'geology' ? 'active' : ''} 
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
