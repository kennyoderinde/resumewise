import React, { useState } from "react";
import Resumes from './Resumes'
import Cvs from './Cvs';
import CoverLetters from './CoverLetters';

import Modal from './Modal'


const SwitchPage = () => {
  const [selectedOption, setSelectedOption] = useState("Resumes");
  
  // mobile view modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOptionDetails, setSelectedOptionDetails] = useState(null);


  // desktop view
  const handleOptionClick = (option) => {
    const selectedOptionDetails = settingsOptions.find((item) => item.name === option);
    setSelectedOption(option);
    setSelectedOptionDetails(selectedOptionDetails);
    setIsModalOpen(true)
  };

  
  const settingsOptions = [
    { 
        id: 1, 
        name: "Resumes", 
        status: "Student/Intermediate", 
        button: (
            <div className=''></div>
          ),
    },
    { 
        id: 2, 
        name: "CVs", 
        status : "Senior", 
        button: (
            <div className=''></div>
          ),
    },
    { 
        id: 3, 
        name: "Cover Letters", 
        status : "All levels of experience", 
        button: (
            <div className=''></div>
          ),
    },


  ];

  

  
  const renderSettingsOptions = () => {
    return settingsOptions.map((option) => (
      <li key={option.id}>

      {/* {selectedOption === option.name && (
        <span className="sm:flex min-w-full sm:w-1 h-1 bg-[#0AC5A8] "></span>  the line tat the top
      )} */}
        <button
          id='option-style'
          onClick={() => handleOptionClick(option.name)}
          className={` font-poppins flex flex-col  justify-start sm:w-48 sm:h-16 -mt-5 sm:space-y-1 ${
            selectedOption === option.name
            
              ? "font-quicksand sm:text-[#0AC5A8] text-white text-base   "
              : "text-gray-800 font-quicksand text-base hover:text-[#0AC5A8] "
          }`}
        >

          <span className=" w-40 h-10 bg-[#0AC5A8] sm:border-none  text-start sm:bg-transparent text-base font-poppins font-bold whitespace-nowrap">{option.name}</span>
          <span className=" hidden sm:block text-sm font-normal font-poppins">{option.status}</span>

          <a href="#_" className={` w-12 relative hidden sm:inline-flex items-center justify-center px-3 py-2 overflow-hidden font-mono font-medium tracking-tighter text-white bg-none border-2 rounded-lg group ${
            selectedOption === option.name ? "bg-green-500" : "bg-gray-400"
          }`}>
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#0AC5A8] rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-none border-2 border-gray-500"></span>
            <span className="relative border-4 border-white w-6 rounded-xl">{option.button}</span>
          </a>

        </button>

      </li>
    ));
  };
  

  const renderSelectedOption = () => {
    switch (selectedOption) {
      case "Resumes":     //from the settingsOption data
        return <Resumes />;
      case "CVs":
        return <Cvs />;
        case "Cover Letters":
        return <CoverLetters />;
      default:
        return < Resumes/>;

    }
  };

  

  return (
    <>
    {/* Mobile view modal */}
    {/* <div className="sm:hidden flex flex-col">
      <ul>{renderSettingsOptions()}</ul>
      {isModalOpen && (
        <Modal selectedOption={selectedOption} selectedOptionDetails={selectedOptionDetails} closeModal={() => setIsModalOpen(false)} />
      )}
    </div> */}

    <div className=' sm:z-20 absolute sm:absolute bg-none  sm:p-4 w-full sm:w-5/12 -mt-37rem ml-20 z-20 '> 
      <div className="">
        <div className=" sm:mt-0 -mt-4 ">
            <div className="">
              <ul className=" relative sm:flex sm:flex-row flex flex-col sm:top-0 sm:left-0 -top-64 -left-4   ">{renderSettingsOptions()}</ul>
          </div>
          <div className="sm:w-full w-full sm:h-24 h-28 sm:flex sm:flex-row flex flex-col justify-start items-center sm:justify-start sm:items-center ">
            <div className=" mt-10 sm:h-full text-gray-700 sm:text-base font-normal text-center sm:flex sm:flex-row flex flex-col justify-center  items-center font-quicksand ">
              {renderSelectedOption()}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );

};



export default SwitchPage;
