import React, { useState } from 'react';
import data from '../../data'; // Импортируем данные о планетах

const Info = () => {
   const [currentPlanet, setCurrentPlanet] = useState(data[0]); // Инициализация первой планеты
   const [currentContentType, setCurrentContentType] = useState('planet'); // Текущий тип изображения: 'planet', 'internal' или 'geology'
 
   // Функция для изменения планеты
   const changePlanet = (planet) => {
     setCurrentPlanet(planet);
   };

   // Функция для изменения типа контента
   const changeContentType = (type) => {
     setCurrentContentType(type);
   };
 
   return (
     <div>
       {/* Показывать текущее изображение планеты */}
       <img src={currentPlanet.images[currentContentType]} alt={currentPlanet.name} />
       <h2>{currentPlanet.name}</h2>
       {currentContentType === 'planet' && (
         <div>
           <p>{currentPlanet.overview.content}</p>
           <p>Source: <a href={currentPlanet.overview.source} target="_blank" rel="noopener noreferrer">Wikipedia</a></p>
         </div>
       )}
       {currentContentType === 'internal' && (
         <div>
           <p>{currentPlanet.structure.content}</p>
           <p>Source: <a href={currentPlanet.structure.source} target="_blank" rel="noopener noreferrer">Wikipedia</a></p>
         </div>
       )}
       {currentContentType === 'geology' && (
         <div>
           <p>{currentPlanet.geology.content}</p>
           <p>Source: <a href={currentPlanet.geology.source} target="_blank" rel="noopener noreferrer">Wikipedia</a></p>
         </div>
       )}
 
       {/* Кнопки для выбора других планет */}
       {data.map((planet, index) => (
         <button key={index} onClick={() => changePlanet(planet)}>
           {planet.name}
         </button>
       ))}

       {/* Дополнительные кнопки для переключения типа контента */}
       <button onClick={() => changeContentType('planet')}>Overview</button>
       <button onClick={() => changeContentType('internal')}>Structure</button>
       <button onClick={() => changeContentType('geology')}>Geology</button>
     </div>
   );
 }

export default Info;