import React, { useContext } from 'react';
import { PlanetContext } from '../../App';
import './second-nav.scss'

const SecondNav = ({ currentContentType, changeContentType }) => {

   const selectedPlanet = useContext(PlanetContext);

   const generatePlanetColor = (planetName) => {
      return { '--clr-hover': `var(--clr-${planetName.toLowerCase()})` };
   }; 


   return (
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
   )
}

export default SecondNav