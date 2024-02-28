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
        <div className={`info-container grid ${isInfoVisible ? '' : 'info-hidden'}`} >
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
                  <h1 className='heading-xl'>{selectedPlanet.name}</h1>

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
                           <h2 className='nav-number heading-s'>01</h2>
                           <h2 className='nav-title heading-s'>overview</h2>
                           <h2 className='nav-title-sm heading-s'>overview</h2>
                        </li>
                        <li className={currentContentType === 'internal' ? 'active' : ''}
                        style={generatePlanetColor(selectedPlanet.name)}
                        onClick={() => changeContentType('internal')}>
                           <h2 className='nav-number heading-s'>02</h2>
                           <h2 className='nav-title heading-s'>internal structure</h2>
                           <h2 className='nav-title-sm heading-s'>structure</h2>
                        </li>
                        <li className={currentContentType === 'geology' ? 'active' : ''} 
                        style={generatePlanetColor(selectedPlanet.name)}
                        onClick={() => changeContentType('geology')}>
                           <h2 className='nav-number heading-s'>03</h2>
                           <h2 className='nav-title heading-s'>surface geology</h2>
                           <h2 className='nav-title-sm heading-s'>surface</h2>
                        </li>
                     </ul>
                  </nav>
               </div>
            </section>

            <footer className='bottom-section'>
               <div className="footer-item">
                  <h3 className='footer-title heading-xs'>rotation time</h3>  
                  <h4 className="footer-info heading-l">{selectedPlanet.rotation}</h4>               
               </div>

               <div className="footer-item">
                  <h3 className='footer-title heading-xs'>revolution time</h3>              
                  <h4 className="footer-info heading-l">{selectedPlanet.revolution}</h4>               
               </div>

               <div className="footer-item">
                  <h3 className='footer-title heading-xs'>radius</h3>
                  <h4 className="footer-info heading-l">{selectedPlanet.radius}</h4>
               </div>

               <div className="footer-item">
                  <h3 className='footer-title heading-xs'>average temp.</h3>
                  <h4 className="footer-info heading-l">{selectedPlanet.temperature}</h4>             
               </div>
            </footer> 


                   
                </>
            )}
        </div>
    );
};

export default Info;
