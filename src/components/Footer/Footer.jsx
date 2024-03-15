import React, { useContext } from 'react';
import { PlanetContext } from '../../App';
import './footer.scss';

const Footer = () => {

   const selectedPlanet = useContext(PlanetContext);

  return (
      <footer className='footer-section'>
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
   )
}

export default Footer