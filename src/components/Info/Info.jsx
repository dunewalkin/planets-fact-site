import React, { useContext } from 'react';
import { PlanetContext } from '../../App';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import '../../components/Info/info.scss';


const Info = ({ isInfoVisible }) => {
   const selectedPlanet = useContext(PlanetContext);

   return (
      <div className={`info-container grid ${isInfoVisible ? '' : 'info-hidden'}`} >
         {selectedPlanet && (
            <>
               <Main />
               <Footer />                  
            </>
         )}
      </div>
   );
};

export default Info;
