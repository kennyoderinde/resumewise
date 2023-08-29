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



import React, { useState } from 'react';
import { BiSolidDownArrow } from "react-icons/bi";



const ItemSwitcher = () => {
  const items = [
    { title: 'Resumes', 
    subject: 'Pick from 8+ [Free] Resume Templates', 
    content: 'Pick one of our free resume template, fill it out, and land that dream job! Create and download your professional resume in lass than 5 minutes.', 
    },
    { 
      title: ' Cover Letters', 
      subject: '16+ Convincing Cover Letter Templates [Pick & Download] ',

      content: '         Looking to create a cover letter that stands out? Try one of our 12 cover letter templates (and land that job)!', 
    },
    { 
      title: 'CVs', 
      subject: 'Pick your CV template and get started',

      content: 'Our CV templates are designed with your success in mind. They are all free (with premium features), ATS-friendly, and easy-to-read!.'
    },
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
    <div className="relative  md:hidden w-full h-full flex flex-col justify-center p-8 -top-2">
      <div
      onClick={handleButtonClick}  
      className='z-20 w-auto h-auto flex justify-start space-x-24 bg-[#0AC5A8] text-white text-lg font-bold py-4 px-10 rounded-full focus:outline-none focus:shadow-outline'>

      <button className=" w-9/12  ">{items[currentIndex].title}   </button>
      < BiSolidDownArrow  className='text-2xl w-2/12'/>
        
      </div>
      
      {isFolded && (
        <ul className=" z-0 absolute w-auto h-auto px-4 py-7 top-16 bg-white border rounded-b-3xl shadow-md flex flex-col justify-center space-y-3 ">
          {items.map((item, index) => (
            <li
              key={index}
              onClick={() => handleItemClick(index)}
              className="cursor-pointer w-[17.5rem] px-5 text-base font-bold text-gray-700 flex mx-auto  mt-5 "
            >
              {item.title}
            </li> 
          ))}
        </ul>

      )}

          <div className="  top-6 flex flex-col mt-8 ">
            <p className=' text-base font-bold'>{items[currentIndex].subject}</p>
            <p  className='text-base mt-3'>{items[currentIndex].content}</p>
          </div>
      </div>
    
  );
};

export default ItemSwitcher;

