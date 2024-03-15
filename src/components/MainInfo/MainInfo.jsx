import React, { useContext } from 'react';
import { PlanetContext } from '../../App';
import PlanetInfo from '../PlanetInfo/PlanetInfo';
import './main-info.scss';

const MainInfo = ({ currentContentType }) => {

   const selectedPlanet = useContext(PlanetContext);

   return (
      <div className='main-info'>
         <h1 className='heading-xl'>{selectedPlanet.name}</h1>

         {currentContentType === 'planet' && (
            <PlanetInfo
               content={selectedPlanet.overview.content}
               source={selectedPlanet.overview.source}
            />
         )}
         {currentContentType === 'internal' && (
            <PlanetInfo
               content={selectedPlanet.structure.content}
               source={selectedPlanet.structure.source}
            />
         )}
         {currentContentType === 'geology' && (
            <PlanetInfo
               content={selectedPlanet.geology.content}
               source={selectedPlanet.geology.source}
            />
         )}
      </div>
  )
}

export default MainInfo