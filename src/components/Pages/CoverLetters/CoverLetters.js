// import { useState, useEffect } from "react"; 
 
// export default function App() { 

//   const [btcData, setBtcData] = useState({}); 
//   useEffect(() => { 
//     fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`) 
//       .then((response) => response.json()) 
//       .then((jsonData) => setBtcData(jsonData.bpi.USD)) 
//       .catch((error) => console.log(error)); 
//   }, []); 
 
//   return ( 
//     <> 
//     <div>
//       <h1 className="mt-40">Current BTC/USD data</h1> 
//       <p>Code: {btcData.code}</p> 
//       <p>Symbol: {btcData.symbol}</p> 
//       <p>Rate: {btcData.rate}</p> 
//       <p>Description: {btcData.description}</p> 
//       <p>Rate Float: {btcData.rate_float}</p> 
//     </div>

   
//     </> 
//   ); 
// } 


// import React, {useState} from 'react'

// const CoverLetters = () => {
//   const [list, setList] = useState("Resume", "CV", "Cover Letter")
  
//   return (
//     <div>
//       {
//         list.map((el, index ) => {
//           <div>

//           </div>
//         })
//       }

//     </div>
//   )
// }

// export default CoverLetters

import React, { useState } from 'react';

const ItemSwitcher = () => {
  const items = [
    { title: 'resume', content: 'This is the content for the resume.' },
    { title: 'letter', content: 'This is the content for the letter.' },
    { title: 'CV', content: 'This is the content for the CV.' },
  ];     
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFolded, setIsFolded] = useState(false);

  const handleButtonClick = () => {
    setIsFolded(!isFolded);
  };

  const handleItemClick = (index) => {
    setCurrentIndex(index);
    setIsFolded(false);
  };

  return (
    <div className=" mt-32">
      <button
        className=" w-32 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleButtonClick}
      >
        {items[currentIndex].title}   
      </button>
      {isFolded && (
        <ul className=" w-32 h-auto p-4 mt-2 bg-gray-300 border rounded shadow-md">
          {items.map((item, index) => (
            <li
              key={index}
              onClick={() => handleItemClick(index)}
              className="cursor-pointer p-2 hover:bg-gray-100"
            >
              {item.title}
            </li>
          ))}
        </ul>

      )}

          <div className="mt-4">
          {items[currentIndex].content}
          </div>
      </div>
    
  );
};

export default ItemSwitcher;

