import React, { useState, useEffect, useContext } from 'react';
import { PlanetContext } from '../../App';
import Pic from '../Pic/Pic';
import MainInfo from '../MainInfo/MainInfo';
import SecondNav from '../SecondNav/SecondNav';
import '../../components/Info/info.scss';

const Main = () => {

   const selectedPlanet = useContext(PlanetContext);

   const [currentContentType, setCurrentContentType] = useState('planet');
   const [secondImageType, setSecondImageType] = useState('planet');
   const [imageLoaded, setImageLoaded] = useState(false);

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
      <section className='main-section'>
         <Pic 
         currentContentType={currentContentType}
         secondImageType={secondImageType}
         imageLoaded={imageLoaded}
         handleImageLoad={handleImageLoad}/>

         <MainInfo currentContentType={currentContentType}/>

         <SecondNav 
         currentContentType={currentContentType}
         changeContentType={changeContentType}/>

         

   </section>
  )
}

export default Main