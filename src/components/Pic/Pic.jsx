import React, { useContext } from 'react';
import { PlanetContext } from '../../App';
import '../../components/Info/info.scss';
import './pic.scss';

const Pic = ({ currentContentType, secondImageType, imageLoaded, handleImageLoad }) => {

   const selectedPlanet = useContext(PlanetContext);

   return (
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
   )
}

export default Pic