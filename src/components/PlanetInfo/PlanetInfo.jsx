import React from 'react';
import '../../components/Info/info.scss';
import sourceIcon from '../../assets/images/icon-source.svg';

const PlanetInfo = ({ content, source }) => {
   return (
      <div>
         <p className='main-content'>{content}</p>
         <div className='link-wrapper'>
            <p>Source :</p>
            <a
               href={source}
               target="_blank"
               rel="noopener noreferrer"
            >
               <p>Wikipedia</p>
               <img src={sourceIcon} alt="Source Icon" />
            </a>
         </div>
      </div>
   );
};

export default PlanetInfo