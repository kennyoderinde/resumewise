import React, { useState } from "react";
import Resumes from './Resumes'
import Cvs from './Cvs';
import CoverLetters from './CoverLetters';

// import  { Gi3DGlasses, Gi3DStairs } from "react-icons/gi";


const SwitchPage = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
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

      {selectedOption === option.name && (
        <span className="sm:flex min-w-full sm:w-1 h-1 bg-lime-600 "></span>
      )}
        <a
          id='option-style'
          href="#"
          onClick={() => handleOptionClick(option.name)}
          className={` font-poppins sm:flex sm:flex-col  justify-start sm:min-w-40 ${
            selectedOption === option.name
              ? " text-black font-roboto hover:text-green-500 text-base bg-gray-100 "
              : "text-gray-700 hover:text-green-500 font-roboto text-base "
          }`}
        >
          <span className="">{option.name}</span>
          <span className=" text-base p-4">{option.status}</span>
         {option.button}


        </a>

      </li>
    ));
  };

  const renderSelectedOption = () => {
    switch (selectedOption) {
      case "Resumes":     //from the settingsOption data
        return <Resumes />;
      case "Cvs":
        return <Cvs />;
        case "Cover Letters":
        return <CoverLetters />;
      default:
        return < Resumes/>;

    }
  };

  return (
    <div id="experienceSection" className=' sm:z-30 absolute sm:absolute bg-none  sm:p-4 w-full sm:w-5/12 -mt-38rem ml-20 '> 
        <div className="">
          <div className="  ">
              <div className="bg-none hover:text-green-500 shadow-md text-base">
                <ul className="sm:flex sm:flex-row flex flex-col p-4 justify-center items-center ">{renderSettingsOptions()}</ul>
            </div>
            <div className="sm:w-full w-full sm:h-24 h-28 sm:flex sm:flex-row flex flex-col justify-center items-center sm:justify-center sm:items-center ">
              <div className="  sm:h-full text-gray-700 sm:text-base font-normal  text-center sm:flex sm:flex-row flex flex-col p-2 justify-center  items-center font-quicksand ">
                {renderSelectedOption()}
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default SwitchPage;
//BsSunglasses